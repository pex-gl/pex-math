import test from "tape";
import { vec2 } from "../index.js";

const allMethods = Object.keys(vec2);
const handledMethods = [];

test("vec2.create", (t) => {
  const expected = [0, 0];

  const a = vec2.create();
  t.deepEqual(a, expected, "should return a new vec2");

  handledMethods.push("create");
  t.end();
});

test("vec2.set", (t) => {
  const a = [0, 0];
  const b = [1, 1];
  const expected = [1, 1];

  vec2.set(a, b);
  t.deepEqual(a, expected, "should set a vec2");

  handledMethods.push("set");
  t.end();
});

test("vec2.copy", (t) => {
  const a = [1, 2];
  const expectedCopyOfA = [1, 2];

  const c = vec2.copy(a);
  t.deepEqual(c, expectedCopyOfA, "should copy");

  a[0] = 9;
  t.deepEqual(c, expectedCopyOfA, "should not modify the original");

  handledMethods.push("copy");
  t.end();
});

test("vec2.equals", (t) => {
  const a = [1, 2];
  const b = [1, 2];
  const c = [1, 2.001];

  t.true(vec2.equals(a, b), "should return true");
  t.false(vec2.equals(a, c), "should return false");

  handledMethods.push("equals");
  t.end();
});

test("coverage", (t) => {
  allMethods.forEach((name) => {
    if (!handledMethods.includes(name)) {
      console.log(`missing test for vec2.${name}`);
    }
  });
  t.end();
});
