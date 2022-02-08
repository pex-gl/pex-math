import test from "tape";
import { vec3 } from "../index.js";

const allMethods = Object.keys(vec3);
const handledMethods = [];

test("vec3.create", (t) => {
  const expected = [0, 0, 0];

  const a = vec3.create();
  t.deepEqual(a, expected, "should return new vec3");

  handledMethods.push("create");
  t.end();
});

test("vec3.equals", (t) => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  const c = [1, 2.001, 3];

  t.true(vec3.equals(a, b), "equal returns true");
  t.false(vec3.equals(a, c), "not equal returns false");

  handledMethods.push("equals");
  t.end();
});

test("vec3.copy", (t) => {
  const a = [1, 2, 3];
  const expectedCopyOfA = [1, 2, 3];

  const c = vec3.copy(a);
  t.deepEqual(c, expectedCopyOfA, "should copy");

  a[0] = 9;
  t.deepEqual(c, expectedCopyOfA, "should not modify the original");

  handledMethods.push("copy");
  t.end();
});

test("vec3.set", (t) => {
  const a = [0, 0, 0];
  const b = [1, 1, 1];
  const expected = [1, 1, 1];

  vec3.set(a, b);
  t.deepEqual(a, expected, "should set a vec3");

  handledMethods.push("set");
  t.end();
});

test("vec3.add", (t) => {
  const a = [2, 2, 2];
  const b = [1, 1, 1];
  const expected = [3, 3, 3];

  vec3.add(a, b);
  t.deepEqual(a, expected, "should add two vec2s");

  handledMethods.push("add");
  t.end();
});

test("vec3.sub", (t) => {
  const a = [2, 2, 4];
  const b = [1, 1, 6];
  const expected = [1, 1, -2];

  vec3.sub(a, b);
  t.deepEqual(a, expected, "should substract one vec3 from another");

  handledMethods.push("sub");
  t.end();
});

test("vec3.scale", (t) => {
  const a = [2, 2, 4];
  const scale = 2;
  const expected = [4, 4, 8];

  vec3.scale(a, scale);
  t.deepEqual(a, expected, "should scale a vec3");

  handledMethods.push("scale");
  t.end();
});

test("vec3.dot", (t) => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  const dot = vec3.dot(a, b);

  t.deepEqual(dot, 14, "should compute the dot product");

  handledMethods.push("dot");
  t.end();
});

test("vec3.cross", (t) => {
  let a = [1, 2, 3];
  let b = [4, 5, 6];
  let cross = vec3.cross(a, b);

  t.deepEqual(cross, [-3, 6, -3], "should compute the cross product");

  a = [0.5, 0.5, 0.5];
  b = [1, 1, 1];
  cross = vec3.cross(a, b);

  t.deepEqual(cross, [0, 0, 0], "should compute the cross product");

  handledMethods.push("cross");
  t.end();
});

test("vec3.length", (t) => {
  const a = [1, 2, 3];
  const b = [0, 0, 0];

  t.deepEqual(
    vec3.length(a),
    Math.sqrt(14),
    "should compute the length of a vec3"
  );
  t.deepEqual(vec3.length(b), 0, "should compute the length of a vec3");

  handledMethods.push("length");
  t.end();
});

test("vec3.lengthSq", (t) => {
  const a = [1, 2, 3];
  const b = [0, 0, 0];

  t.deepEqual(
    vec3.lengthSq(a),
    14,
    "should compute the squared length of a vec3"
  );
  t.deepEqual(
    vec3.lengthSq(b),
    0,
    "should compute the squared length of a vec3"
  );

  handledMethods.push("lengthSq");
  t.end();
});

test("vec3.normalize", (t) => {
  const message = "should normalize vec3";
  t.deepEqual(vec3.normalize([2, 0, 0]), [1, 0, 0], message);
  t.deepEqual(vec3.normalize([0, -2, 0]), [0, -1, 0], message);
  t.deepEqual(vec3.normalize([0, 0, -2]), [0, 0, -1], message);
  t.deepEqual(
    vec3.normalize([1, 1, 1]),
    [0.5773502691896258, 0.5773502691896258, 0.5773502691896258],
    message
  );
  t.deepEqual(
    vec3.normalize([1, 2, 3]),
    [0.2672612419124244, 0.5345224838248488, 0.8017837257372732],
    message
  );

  handledMethods.push("normalize");
  t.end();
});

// distance
test("vec3.distance", (t) => {
  const message = "should compute the distance between two vec3s";
  t.equal(vec3.distance([1, 0, 0], [0, 0, 0]), 1, message);
  t.equal(vec3.distance([1, 2, 3], [4, 5, 6]), 5.196152422706632, message);

  handledMethods.push("distance");
  t.end();
});

test("vec3.distanceSq", (t) => {
  const message = "should compute the squared distance between two vec3s";
  t.equal(vec3.distanceSq([1, 0, 0], [0, 0, 0]), 1, message);
  t.equal(vec3.distanceSq([1, 2, 3], [4, 5, 6]), 27, message);

  handledMethods.push("distanceSq");
  t.end();
});

test("vec3.lerp", (t) => {
  const message = "should lerp between two vec3s";
  t.deepEqual(vec3.lerp([0, 0, 0], [1, 1, 1], 0.5), [0.5, 0.5, 0.5], message);
  t.deepEqual(
    vec3.lerp([-1, -1, -1], [0, 0, 0], 0.5),
    [-0.5, -0.5, -0.5],
    message
  );

  handledMethods.push("lerp");
  t.end();
});

test("coverage", (t) => {
  allMethods.forEach((name) => {
    if (!handledMethods.includes(name)) {
      console.log(`missing test for vec3.${name}`);
    }
  });
  t.end();
});
