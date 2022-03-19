import { deepEqual, notStrictEqual, ok } from "assert";
import { mat2x3 } from "../index.js";
import {
  ONE_TWO_VEC2,
  IDENTITY_MAT2X3,
  deepAlmostEqual,
} from "./common.js";

const ONE_MAT2X3 = Object.freeze(Array(6).fill(1));
const ONE_TO_SIX_MAT2X3 = Object.freeze([1, 2, 3, 4, 5, 6]);

// prettier-ignore
const ONE_TWO_MAT2X3 = Object.freeze([
  1, 0,
  0, 1,
  1, 2,
]);

// prettier-ignore
const THREE_FOUR_MAT2X3 = Object.freeze([
  1, 0,
  0, 1,
  3, 4,
]);

describe("mat2x3", () => {
  it("create() should return a new mat2x3", () => {
    deepEqual(mat2x3.create(), [1, 0, 0, 1, 0, 0]);
  });
  it("identity() should set a matrix to the identity matrix", () => {
    deepEqual(mat2x3.identity(mat2x3.copy(ONE_MAT2X3)), IDENTITY_MAT2X3);
  });
  it("copy() should copy a matrix without modifying it", () => {
    const a = mat2x3.copy(ONE_MAT2X3);
    deepEqual(a, ONE_MAT2X3);
    notStrictEqual(a, ONE_MAT2X3);
  });
  it("set() should set a matrix from another matrix", () => {
    const a = mat2x3.create();
    mat2x3.set(a, ONE_MAT2X3);
    notStrictEqual(a, ONE_MAT2X3);
    deepEqual(a, ONE_MAT2X3);
  });
  it("equals() should compare two matrices", () => {
    ok(mat2x3.equals(ONE_MAT2X3, [...ONE_MAT2X3]));
    ok(mat2x3.equals(ONE_MAT2X3, IDENTITY_MAT2X3) === false);
  });
  it("mult() should multiply two matrices", () => {
    deepEqual(
      mat2x3.mult(mat2x3.copy(ONE_TWO_MAT2X3), THREE_FOUR_MAT2X3),
      // prettier-ignore
      [
        1, 0,
        0, 1,
        4, 6,
      ]
    );

    deepEqual(
      mat2x3.mult(mat2x3.copy(ONE_TO_SIX_MAT2X3), ONE_TO_SIX_MAT2X3),
      // prettier-ignore
      [
        7, 10,
        15, 22,
        28, 40,
      ]
    );
  });
  it("translate() should translate a matrix by a vector", () => {
    deepEqual(
      mat2x3.translate(mat2x3.copy(ONE_TO_SIX_MAT2X3), ONE_TWO_VEC2),
      // prettier-ignore
      [
        1, 2,
        3, 4,
        12, 16,
      ]
    );
    deepEqual(
      mat2x3.translate(mat2x3.copy(IDENTITY_MAT2X3), ONE_TWO_VEC2),
      // prettier-ignore
      [
        1, 0,
        0, 1,
        1, 2,
      ]
    );
  });
  it("rotate() should rotate a matrix by an angle", () => {
    deepAlmostEqual(
      mat2x3.rotate(mat2x3.copy(IDENTITY_MAT2X3), Math.PI * 0.5),
      // prettier-ignore
      [
        0, 1,
        -1, 0,
        0, 0,
      ]
    );
    deepAlmostEqual(
      mat2x3.rotate(mat2x3.copy(IDENTITY_MAT2X3), Math.PI),
      // prettier-ignore
      [
        -1, 0,
        0, -1,
        0, 0,
      ]
    );
  });
  it("scale() should scale a mat2x3 by a vector", () => {
    deepEqual(
      mat2x3.scale(mat2x3.copy(ONE_TWO_MAT2X3), ONE_TWO_VEC2),
      // prettier-ignore
      [
        1, 0,
        0, 2,
        1, 2,
      ]
    );

    deepEqual(
      mat2x3.scale(mat2x3.copy(ONE_TO_SIX_MAT2X3), ONE_TWO_VEC2),
      // prettier-ignore
      [
        1, 2,
        6, 8,
        5, 6
      ]
    );
  });
});
