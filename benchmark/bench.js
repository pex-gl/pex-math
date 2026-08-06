import { Bench } from "tinybench";
import { avec3, vec3, quat, eases } from "../index.js";
import { fromDirection } from "../mat4.js";
import { Y_UP } from "../utils.js";
import { pairTable, rankGroups } from "./report.js";

// Iteration-bounded (time: 0) rather than time-bounded: at the default 1s
// budget these sub-100ns operations collect tens of millions of samples per
// task, and the per-task percentile sort then dominates the whole run.
const bench = new Bench({
  name: "pex-math internals",
  time: 0,
  iterations: 50_000,
  warmupTime: 0,
  warmupIterations: 5000,
});

const x = 1;
const y = 2;
const a = [1, 2];

// Length
const testLengthHypot = (x, y) => Math.hypot(x, y);
const testLengthSqrt = (x, y) => Math.sqrt(x * x + y * y);
const testLengthExp = (x, y) => (x * x + y * y) ** 0.5;

const lengthTests = [testLengthHypot, testLengthSqrt, testLengthExp];
for (const test of lengthTests) bench.add(test.name, () => test(x, y));

// Divisions
const testHalfDivideByTwo = (x) => x / 2;
const testHalfMultiplyByZeroPointFive = (x) => x * 0.5;

const divisionTests = [testHalfDivideByTwo, testHalfMultiplyByZeroPointFive];
for (const test of divisionTests) bench.add(test.name, () => test(x));

// Clone
const testCloneArraySlice = (a) => a.slice();
const testCloneArraySliceZero = (a) => a.slice(0);
const testCloneArrayMap = (a) => a.map((i) => i);
const testCloneArrayFrom = (a) => Array.from(a);
const testCloneArraySpread = (a) => [...a];
const testCloneArrayConcat = (a) => [].concat(a);
const testCloneArrayObjectValues = (a) => Object.values(a);

const cloneTests = [
  testCloneArraySlice,
  testCloneArraySliceZero,
  testCloneArrayMap,
  testCloneArrayFrom,
  testCloneArraySpread,
  testCloneArrayConcat,
  testCloneArrayObjectValues,
];
for (const test of cloneTests) bench.add(test.name, () => test(a));

// Internals: one pass over a Float32Array of vec3
const elementLength = 512;
const rotation = quat.fromAxisAngle(
  quat.create(),
  vec3.normalize([0, 1, 0]),
  Math.PI,
);

bench.add("avec3.set3 slice", () => {
  const a = new Float32Array(elementLength).fill(1);
  for (let i = 0; i < elementLength / 3; i++) {
    avec3.set3(a, i, ...vec3.multQuat(a.slice(i * 3, i * 3 + 3), rotation));
  }
});
bench.add("avec3.set slice", () => {
  const a = new Float32Array(elementLength).fill(1);
  for (let i = 0; i < elementLength / 3; i++) {
    avec3.set(a, i, vec3.multQuat(a.slice(i * 3, i * 3 + 3), rotation), 0);
  }
});

// Destructuring
function fromDirectionNoDestructuring(a, dir, up = Y_UP) {
  let [z0, z1, z2] = dir;
  let [upx, upy, upz] = up;
  let len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1;
  let x1 = upz * z0 - upx * z2;
  let x2 = upx * z1 - upy * z0;

  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  upx = z1 * x2 - z2 * x1;
  upy = z2 * x0 - z0 * x2;
  upz = z0 * x1 - z1 * x0;

  len = upx * upx + upy * upy + upz * upz;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    upx *= len;
    upy *= len;
    upz *= len;
  }

  a[0] = x0;
  a[1] = x1;
  a[2] = x2;
  a[3] = 0;
  a[4] = upx;
  a[5] = upy;
  a[6] = upz;
  a[7] = 0;
  a[8] = z0;
  a[9] = z1;
  a[10] = z2;
  a[11] = 0;
  a[12] = 0;
  a[13] = 0;
  a[14] = 0;
  a[15] = 1;
  return a;
}

const directionTests = [fromDirection, fromDirectionNoDestructuring];
for (const test of directionTests)
  bench.add(test.name, () => test(a, [1, 1, 1]));

// Eases
// const bounds = (t) => {
//   if (t === 0) return 0;
//   if (t === 1) return 1;
// };

// const easeNames = Object.keys(eases);
// for (const ease of easeNames) {
//   const easeFn = eases[ease];
//   bench.add(ease, () => {
//     easeFn(0);
//     easeFn(0.25);
//     easeFn(0.75);
//     easeFn(1);
//   });

//   const easeFnWithBounds = (t) => bounds(t) ?? easeFn(t);
//   bench.add(`${ease}WithBounds`, () => {
//     easeFnWithBounds(0);
//     easeFnWithBounds(0.25);
//     easeFnWithBounds(0.75);
//     easeFnWithBounds(1);
//   });
// }

await bench.run();

console.log(bench.name);
rankGroups({
  Length: lengthTests.map((test) => bench.getTask(test.name)),
  Divisions: divisionTests.map((test) => bench.getTask(test.name)),
  Clone: cloneTests.map((test) => bench.getTask(test.name)),
  "avec3 set3 vs set": [
    bench.getTask("avec3.set3 slice"),
    bench.getTask("avec3.set slice"),
  ],
  fromDirection: directionTests.map((test) => bench.getTask(test.name)),
});

// pairTable(
//   "Eases: plain vs bounds-guarded",
//   ["plain", "bounds"],
//   easeNames.map((ease) => ({
//     name: ease,
//     a: bench.getTask(ease),
//     b: bench.getTask(`${ease}WithBounds`),
//   })),
// );
