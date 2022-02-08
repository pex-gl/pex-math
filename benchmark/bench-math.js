import bench from "nanobench";

import { run } from "./utils.js";

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
