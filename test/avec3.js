import { describe, it } from "node:test";
import { deepEqual, notStrictEqual, ok, strictEqual } from "node:assert";
import { avec3, quat, vec3 } from "../index.js";
import {
  avecAt,
  avecSentinelsIntact,
  avecWith,
  deepAlmostEqual,
  ONE_TWO_THREE_MAT4,
  ONE_VEC3,
  ONE_TWO_THREE_VEC3,
  Y_QUAT,
} from "./common.js";

const ONE_VEC3_NORMALISED = Object.freeze(Array(3).fill(0.5773502691896258));
const FOUR_FIVE_SIX_VEC3 = Object.freeze([4, 5, 6]);

// Distinct non-zero indices catch swapped or ignored i/j offsets.
const I = 1;
const J = 2;

const check = (a, expected) => {
  deepEqual(avecAt(a, I, 3), expected);
  ok(avecSentinelsIntact(a, I, 3));
};

describe("avec3", () => {
  it("set3() should set a vector components", () => {
    const a = avecWith([0, 0, 0], I);
    avec3.set3(a, I, 1, 2, 3);
    check(a, ONE_TWO_THREE_VEC3);
  });
  it("set() should set a vector to another", () => {
    const a = avecWith([0, 0, 0], I);
    avec3.set(a, I, avecWith(ONE_TWO_THREE_VEC3, J), J);
    check(a, ONE_TWO_THREE_VEC3);
  });
  it("equals() should compare two vectors", () => {
    const a = avecWith(ONE_TWO_THREE_VEC3, I);
    ok(avec3.equals(a, I, avecWith(ONE_TWO_THREE_VEC3, J), J));
    ok(avec3.equals(a, I, avecWith(FOUR_FIVE_SIX_VEC3, J), J) === false);
  });
  it("add() should add a vector to another", () => {
    const a = avecWith(ONE_TWO_THREE_VEC3, I);
    avec3.add(a, I, avecWith(FOUR_FIVE_SIX_VEC3, J), J);
    check(a, [5, 7, 9]);
  });
  it("sub() should subtract a vector from another", () => {
    const a = avecWith(FOUR_FIVE_SIX_VEC3, I);
    avec3.sub(a, I, avecWith(ONE_TWO_THREE_VEC3, J), J);
    check(a, [3, 3, 3]);
  });
  it("scale() should scale a vector by a number", () => {
    const a = avecWith(ONE_TWO_THREE_VEC3, I);
    avec3.scale(a, I, 2);
    check(a, [2, 4, 6]);
  });
  it("addScaled() should add two vectors after scaling the second one", () => {
    const a = avecWith(ONE_TWO_THREE_VEC3, I);
    avec3.addScaled(a, I, avecWith(FOUR_FIVE_SIX_VEC3, J), J, 2);
    check(a, [9, 12, 15]);
  });
  it("multMat4() should multiply a vector by a matrix", () => {
    const a = avecWith(ONE_VEC3, I);
    avec3.multMat4(a, I, avecWith(ONE_TWO_THREE_MAT4, J), J);
    check(a, [2, 3, 4]);

    // A full matrix exercises every entry
    const m = Array.from({ length: 16 }, (_, k) => k + 1);
    const b = avecWith(ONE_TWO_THREE_VEC3, I);
    avec3.multMat4(b, I, avecWith(m, J), J);
    check(b, [51, 58, 65]);
  });
  it("multQuat() should multiply a vector by a quaternion", () => {
    const a = avecWith(ONE_VEC3, I);
    avec3.multQuat(a, I, avecWith(Y_QUAT, J), J);
    deepAlmostEqual(avecAt(a, I, 3), [1, 1, -1]);
    ok(avecSentinelsIntact(a, I, 3));

    const q = quat.normalize([0.2, 0.4, -0.3, 0.85]);
    const b = avecWith(ONE_TWO_THREE_VEC3, I);
    avec3.multQuat(b, I, avecWith(q, J), J);
    deepAlmostEqual(
      avecAt(b, I, 3),
      vec3.multQuat([...ONE_TWO_THREE_VEC3], q),
      1e-12,
    );
  });
  it("dot() should calculate the dot product of two vectors", () => {
    deepEqual(
      avec3.dot(
        avecWith(ONE_TWO_THREE_VEC3, I),
        I,
        avecWith(FOUR_FIVE_SIX_VEC3, J),
        J,
      ),
      32,
    );
  });
  it("cross() should calculate the cross product of two vectors", () => {
    const a = avecWith(ONE_TWO_THREE_VEC3, I);
    avec3.cross(a, I, avecWith(FOUR_FIVE_SIX_VEC3, J), J);
    check(a, [-3, 6, -3]);
  });
  it("length() should calculate the length of a vector", () => {
    deepEqual(avec3.length(avecWith([2, 3, 6], I), I), 7);
  });
  it("lengthSq() should calculate the squared length of a vector", () => {
    deepEqual(avec3.lengthSq(avecWith([2, 3, 6], I), I), 49);
  });
  it("normalize() should normalise a vector", () => {
    const a = avecWith([3, 4, 12], I);
    avec3.normalize(a, I);
    deepAlmostEqual(avecAt(a, I, 3), [3 / 13, 4 / 13, 12 / 13], 1e-15);
    ok(avecSentinelsIntact(a, I, 3));

    const zero = avecWith([0, 0, 0], I);
    avec3.normalize(zero, I);
    check(zero, [0, 0, 0]);
  });
  it("distance() should calculate the distance between two vectors", () => {
    deepEqual(
      avec3.distance(avecWith([1, 4, 5], I), I, avecWith([3, 7, 11], J), J),
      7,
    );
  });
  it("distanceSq() should calculate the squared distance between two vectors", () => {
    deepEqual(
      avec3.distanceSq(avecWith([1, 4, 5], I), I, avecWith([3, 7, 11], J), J),
      49,
    );
  });
  it("limit() should limit a vector to a length", () => {
    const a = avecWith([3, 4, 12], I);
    avec3.limit(a, I, 6.5);
    check(a, [1.5, 2, 6]);

    const b = avecWith(ONE_VEC3, I);
    avec3.limit(b, I, 2);
    check(b, ONE_VEC3);
  });
  it("lerp() should linearly interpolate between two vectors", () => {
    const a = avecWith(ONE_TWO_THREE_VEC3, I);
    avec3.lerp(a, I, avecWith([5, 8, 11], J), J, 0.5);
    check(a, [3, 5, 7]);
  });
  it("forEach() should call a function for each vector and write it back", () => {
    const a = new Float64Array([1, 2, 3, 4, 5, 6]);
    const received = [];
    avec3.forEach(a, (v, i, array) => {
      received.push([i, ...v]);
      strictEqual(array, a);
      v[0] *= 10;
      v[1] *= 100;
      v[2] *= 1000;
    });
    deepEqual(received, [
      [0, 1, 2, 3],
      [1, 4, 5, 6],
    ]);
    deepEqual(Array.from(a), [10, 200, 3000, 40, 500, 6000]);
  });
  it("map() should return a new array of the callback results", () => {
    const a = new Float32Array([1, 2, 3, 4, 5, 6]);
    const b = avec3.map(a, (v, i) => {
      ok(v instanceof Float32Array);
      return [v[0] + i, v[1], v[2]];
    });
    ok(b instanceof Float32Array);
    notStrictEqual(b, a);
    deepEqual(Array.from(b), [1, 2, 3, 5, 5, 6]);
    deepEqual(Array.from(a), [1, 2, 3, 4, 5, 6]);
  });
  it("toString() should print a vector to a string", () => {
    deepEqual(
      avec3.toString(avecWith([0.57, -0.00001, -1.23456], I), I),
      "[0.57, 0, -1.2345]",
    );
    deepEqual(
      avec3.toString(avecWith(ONE_VEC3_NORMALISED, I), I, 2),
      "[0.57, 0.57, 0.57]",
    );
  });
});
