import { describe, it } from "node:test";
import { deepEqual, notStrictEqual, ok, strictEqual } from "node:assert";
import { avec4 } from "../index.js";
import {
  avecAt,
  avecSentinelsIntact,
  avecWith,
  ONE_TWO_THREE_MAT4,
} from "./common.js";

const ONE_VEC4 = Object.freeze([1, 1, 1, 1]);
const ONE_TO_FOUR_VEC4 = Object.freeze([1, 2, 3, 4]);
const FIVE_TO_EIGHT_VEC4 = Object.freeze([5, 6, 7, 8]);

// Distinct non-zero indices catch swapped or ignored i/j offsets.
const I = 1;
const J = 2;

const check = (a, expected) => {
  deepEqual(avecAt(a, I, 4), expected);
  ok(avecSentinelsIntact(a, I, 4));
};

describe("avec4", () => {
  it("set4() should set a vector components", () => {
    const a = avecWith([0, 0, 0, 0], I);
    avec4.set4(a, I, 1, 2, 3, 4);
    check(a, ONE_TO_FOUR_VEC4);
  });
  it("set() should set a vector to another", () => {
    const a = avecWith([0, 0, 0, 0], I);
    avec4.set(a, I, avecWith(ONE_TO_FOUR_VEC4, J), J);
    check(a, ONE_TO_FOUR_VEC4);
  });
  it("equals() should compare two vectors", () => {
    const a = avecWith(ONE_TO_FOUR_VEC4, I);
    ok(avec4.equals(a, I, avecWith(ONE_TO_FOUR_VEC4, J), J));
    ok(avec4.equals(a, I, avecWith(FIVE_TO_EIGHT_VEC4, J), J) === false);
  });
  it("add() should add a vector to another", () => {
    const a = avecWith(ONE_TO_FOUR_VEC4, I);
    avec4.add(a, I, avecWith(FIVE_TO_EIGHT_VEC4, J), J);
    check(a, [6, 8, 10, 12]);
  });
  it("sub() should subtract a vector from another", () => {
    const a = avecWith(FIVE_TO_EIGHT_VEC4, I);
    avec4.sub(a, I, avecWith(ONE_TO_FOUR_VEC4, J), J);
    check(a, [4, 4, 4, 4]);
  });
  it("scale() should scale a vector by a number", () => {
    const a = avecWith(ONE_TO_FOUR_VEC4, I);
    avec4.scale(a, I, 2);
    check(a, [2, 4, 6, 8]);
  });
  it("addScaled() should add two vectors after scaling the second one", () => {
    const a = avecWith(ONE_TO_FOUR_VEC4, I);
    avec4.addScaled(a, I, avecWith(FIVE_TO_EIGHT_VEC4, J), J, 2);
    check(a, [11, 14, 17, 20]);
  });
  it("multMat4() should multiply a vector by a matrix", () => {
    const a = avecWith(ONE_VEC4, I);
    avec4.multMat4(a, I, avecWith(ONE_TWO_THREE_MAT4, J), J);
    check(a, [2, 3, 4, 1]);

    // A full matrix exercises every entry, w row included
    const m = Array.from({ length: 16 }, (_, k) => k + 1);
    const b = avecWith(ONE_TO_FOUR_VEC4, I);
    avec4.multMat4(b, I, avecWith(m, J), J);
    check(b, [90, 100, 110, 120]);
  });
  it("lerp() should linearly interpolate between two vectors", () => {
    const a = avecWith(ONE_TO_FOUR_VEC4, I);
    avec4.lerp(a, I, avecWith(FIVE_TO_EIGHT_VEC4, J), J, 0.5);
    check(a, [3, 4, 5, 6]);
  });
  it("forEach() should call a function for each vector and write it back", () => {
    const a = new Float64Array([1, 2, 3, 4, 5, 6, 7, 8]);
    const received = [];
    avec4.forEach(a, (v, i, array) => {
      received.push([i, ...v]);
      strictEqual(array, a);
      v[0] *= 10;
      v[1] *= 100;
      v[2] *= 1000;
      v[3] *= 10000;
    });
    deepEqual(received, [
      [0, 1, 2, 3, 4],
      [1, 5, 6, 7, 8],
    ]);
    deepEqual(Array.from(a), [10, 200, 3000, 40000, 50, 600, 7000, 80000]);
  });
  it("map() should return a new array of the callback results", () => {
    const a = new Float32Array([1, 2, 3, 4, 5, 6, 7, 8]);
    const b = avec4.map(a, (v, i) => {
      ok(v instanceof Float32Array);
      return [v[0], v[1], v[2], v[3] + i];
    });
    ok(b instanceof Float32Array);
    notStrictEqual(b, a);
    deepEqual(Array.from(b), [1, 2, 3, 4, 5, 6, 7, 9]);
    deepEqual(Array.from(a), [1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("toString() should print a vector to a string", () => {
    deepEqual(
      avec4.toString(avecWith([-0.5, 0.29, -0.00001, 1], I), I, 2),
      "[-0.5, 0.29, 0, 1]",
    );
    deepEqual(avec4.toString(avecWith(ONE_TO_FOUR_VEC4, I), I), "[1, 2, 3, 4]");
  });
});
