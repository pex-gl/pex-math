import { describe, it } from "node:test";
import { deepEqual, notStrictEqual, ok, strictEqual } from "node:assert";
import { avec2 } from "../index.js";
import { avecAt, avecSentinelsIntact, avecWith } from "./common.js";

const ONE_VEC2 = Object.freeze([1, 1]);
const ONE_TWO_VEC2 = Object.freeze([1, 2]);
const FOUR_SIX_VEC2 = Object.freeze([4, 6]);

// Distinct non-zero indices catch swapped or ignored i/j offsets.
const I = 1;
const J = 2;

const check = (a, expected) => {
  deepEqual(avecAt(a, I, 2), expected);
  ok(avecSentinelsIntact(a, I, 2));
};

describe("avec2", () => {
  it("set2() should set a vector components", () => {
    const a = avecWith([0, 0], I);
    avec2.set2(a, I, 1, 2);
    check(a, ONE_TWO_VEC2);
  });
  it("set() should set a vector to another", () => {
    const a = avecWith([0, 0], I);
    avec2.set(a, I, avecWith(ONE_TWO_VEC2, J), J);
    check(a, ONE_TWO_VEC2);
  });
  it("equals() should compare two vectors", () => {
    const a = avecWith(ONE_TWO_VEC2, I);
    ok(avec2.equals(a, I, avecWith(ONE_TWO_VEC2, J), J));
    ok(avec2.equals(a, I, avecWith(FOUR_SIX_VEC2, J), J) === false);
  });
  it("add() should add a vector to another", () => {
    const a = avecWith(ONE_TWO_VEC2, I);
    avec2.add(a, I, avecWith(FOUR_SIX_VEC2, J), J);
    check(a, [5, 8]);
  });
  it("sub() should subtract a vector from another", () => {
    const a = avecWith(FOUR_SIX_VEC2, I);
    avec2.sub(a, I, avecWith(ONE_TWO_VEC2, J), J);
    check(a, [3, 4]);
  });
  it("scale() should scale a vector by a number", () => {
    const a = avecWith(ONE_TWO_VEC2, I);
    avec2.scale(a, I, 2);
    check(a, [2, 4]);
  });
  it("addScaled() should add two vectors after scaling the second one", () => {
    const a = avecWith(ONE_TWO_VEC2, I);
    avec2.addScaled(a, I, avecWith(FOUR_SIX_VEC2, J), J, 2);
    check(a, [9, 14]);
  });
  it("dot() should calculate the dot product of two vectors", () => {
    deepEqual(
      avec2.dot(avecWith(ONE_TWO_VEC2, I), I, avecWith(FOUR_SIX_VEC2, J), J),
      16,
    );
  });
  it("length() should calculate the length of a vector", () => {
    deepEqual(avec2.length(avecWith(ONE_TWO_VEC2, I), I), Math.sqrt(5));
  });
  it("lengthSq() should calculate the squared length of a vector", () => {
    deepEqual(avec2.lengthSq(avecWith(ONE_TWO_VEC2, I), I), 5);
  });
  it("normalize() should normalise a vector", () => {
    const a = avecWith([3, 4], I);
    avec2.normalize(a, I);
    check(a, [0.6, 0.8]);

    const zero = avecWith([0, 0], I);
    avec2.normalize(zero, I);
    check(zero, [0, 0]);
  });
  it("distance() should calculate the distance between two vectors", () => {
    deepEqual(
      avec2.distance(
        avecWith(ONE_TWO_VEC2, I),
        I,
        avecWith(FOUR_SIX_VEC2, J),
        J,
      ),
      5,
    );
  });
  it("distanceSq() should calculate the squared distance between two vectors", () => {
    deepEqual(
      avec2.distanceSq(
        avecWith(ONE_TWO_VEC2, I),
        I,
        avecWith(FOUR_SIX_VEC2, J),
        J,
      ),
      25,
    );
  });
  it("limit() should limit a vector to a length", () => {
    const a = avecWith([3, 4], I);
    avec2.limit(a, I, 2.5);
    check(a, [1.5, 2]);

    const b = avecWith(ONE_VEC2, I);
    avec2.limit(b, I, 2);
    check(b, ONE_VEC2);
  });
  it("lerp() should linearly interpolate between two vectors", () => {
    const a = avecWith(ONE_TWO_VEC2, I);
    avec2.lerp(a, I, avecWith(FOUR_SIX_VEC2, J), J, 0.5);
    check(a, [2.5, 4]);
  });
  it("forEach() should call a function for each vector and write it back", () => {
    const a = new Float64Array([1, 2, 3, 4]);
    const received = [];
    avec2.forEach(a, (v, i, array) => {
      received.push([i, ...v]);
      strictEqual(array, a);
      v[0] *= 10;
      v[1] *= 100;
    });
    deepEqual(received, [
      [0, 1, 2],
      [1, 3, 4],
    ]);
    deepEqual(Array.from(a), [10, 200, 30, 400]);
  });
  it("map() should return a new array of the callback results", () => {
    const a = new Float32Array([1, 2, 3, 4]);
    const b = avec2.map(a, (v, i) => {
      ok(v instanceof Float32Array);
      return [v[0], v[1] + i];
    });
    ok(b instanceof Float32Array);
    notStrictEqual(b, a);
    deepEqual(Array.from(b), [1, 2, 3, 5]);
    deepEqual(Array.from(a), [1, 2, 3, 4]);
  });
  it("toString() should print a vector to a string", () => {
    deepEqual(
      avec2.toString(avecWith([-0.7071, 0.57], I), I, 2),
      "[-0.7, 0.57]",
    );
    deepEqual(avec2.toString(avecWith(ONE_TWO_VEC2, I), I), "[1, 2]");
  });
});
