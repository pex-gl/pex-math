import bench from "nanobench";
import { avec3, vec3, quat } from "../index.js";
import { run } from "./utils.js";
import { fromDirection } from "../mat4.js";
import { Y_UP } from "../utils.js";

const x = 1;
const y = 2;
const a = [1, 2];

// Length
const testLengthHypot = (x, y) => Math.hypot(x, y);
const testLengthSqrt = (x, y) => Math.sqrt(x * x + y * y);
const testLengthExp = (x, y) => (x * x + y * y) ** 0.5;

[testLengthHypot, testLengthSqrt, testLengthExp].forEach((test) => {
  bench(test.name, (b) => {
    b.start();

    run(() => {
      test(x, y);
    });

    b.end();
  });
});

// Divisions
const testHalfDivideByTwo = (x) => x / 2;
const testHalfMultiplyByZeroPointFive = (x) => x * 0.5;

[testHalfDivideByTwo, testHalfMultiplyByZeroPointFive].forEach((test) => {
  bench(test.name, (b) => {
    b.start();

    run(() => {
      test(x);
    });

    b.end();
  });
});

// Clone
const testCloneArraySlice = (a) => a.slice();
const testCloneArraySliceZero = (a) => a.slice(0);
const testCloneArrayMap = (a) => a.map((i) => i);
const testCloneArrayFrom = (a) => Array.from(a);
const testCloneArraySpread = (a) => [...a];
const testCloneArrayConcat = (a) => [].concat(a);
const testCloneArrayObjectValues = (a) => Object.values(a);
const testCloneArrayObjectAssign = (a) => Object.assign([], a);

[
  testCloneArraySlice,
  testCloneArraySliceZero,
  testCloneArrayMap,
  testCloneArrayFrom,
  testCloneArraySpread,
  testCloneArrayConcat,
  testCloneArrayObjectValues,
  // testCloneArrayObjectAssign,
].forEach((test) => {
  bench(test.name, (b) => {
    b.start();

    run(() => {
      test(a);
    });

    b.end();
  });
});

// Internals
const elementLength = 512;
const rotation = quat.fromAxisAngle(
  quat.create(),
  vec3.normalize([0, 1, 0]),
  Math.PI,
);

bench("avec3.set3 slice", (b) => {
  const a = new Float32Array(elementLength).fill(1);

  b.start();
  run(() => {
    for (let i = 0; i < elementLength / 3; i++) {
      avec3.set3(a, i, ...vec3.multQuat(a.slice(i * 3, i * 3 + 3), rotation));
    }
  }, 1e3);
  b.end();
});
bench("avec3.set slice", (b) => {
  const a = new Float32Array(elementLength).fill(1);

  b.start();
  run(() => {
    for (let i = 0; i < elementLength / 3; i++) {
      avec3.set(a, i, vec3.multQuat(a.slice(i * 3, i * 3 + 3), rotation), 0);
    }
  }, 1e3);
  b.end();
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

[fromDirection, fromDirectionNoDestructuring].forEach((test) => {
  bench(test.name, (b) => {
    b.start();

    run(() => {
      test(a, [1, 1, 1]);
    });

    b.end();
  });
});
