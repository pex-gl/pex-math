import { deepEqual, notStrictEqual, ok } from "assert";
import { mat3 } from "../index.js";
import {
  deepAlmostEqual,
  IDENTITY_MAT2X3,
  IDENTITY_MAT3,
  IDENTITY_MAT4,
  Y_QUAT,
} from "./common.js";

const ONE_MAT3 = Object.freeze(Array(9).fill(1));
const ONE_TO_NINE_MAT3 = Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// prettier-ignore
const ONE_TWO_MAT3 = Object.freeze([
  1, 0, 0,
  0, 1, 0,
  1, 2, 1,
]);
// prettier-ignore
const THREE_FOUR_MAT3 = Object.freeze([
  1, 0, 0,
  0, 1, 0,
  3, 4, 1,
]);

describe("mat3", () => {
  it("create() should return a new mat3", () => {
    deepEqual(mat3.create(), [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  });
  it("identity() should set a matrix to the identity matrix", () => {
    deepEqual(mat3.identity(mat3.copy(ONE_MAT3)), IDENTITY_MAT3);
  });
  it("copy() should copy a matrix without modifying it", () => {
    const a = mat3.copy(ONE_MAT3);
    deepEqual(a, ONE_MAT3);
    notStrictEqual(a, ONE_MAT3);
  });
  it("set() should set a matrix from another matrix", () => {
    const a = mat3.create();
    mat3.set(a, ONE_MAT3);
    notStrictEqual(a, ONE_MAT3);
    deepEqual(a, ONE_MAT3);
  });
  it("equals() should compare two matrices", () => {
    ok(mat3.equals(ONE_MAT3, [...ONE_MAT3]));
    ok(mat3.equals(ONE_MAT3, IDENTITY_MAT3) === false);
  });
  it("mult() should multiply two matrices", () => {
    deepEqual(
      mat3.mult(mat3.copy(ONE_TWO_MAT3), THREE_FOUR_MAT3),
      // prettier-ignore
      [
        1, 0, 0,
        0, 1, 0,
        4, 6, 1,
      ]
    );

    deepEqual(
      mat3.mult(mat3.copy(ONE_TO_NINE_MAT3), ONE_TO_NINE_MAT3),
      // prettier-ignore
      [
        30, 36, 42,
        66, 81, 96,
        102, 126, 150
      ]
    );
  });
  it("transpose() should transpose a mat3", () => {
    deepEqual(
      mat3.transpose(mat3.copy(ONE_TWO_MAT3)),
      // prettier-ignore
      [
        1, 0, 1,
        0, 1, 2,
        0, 0, 1,
      ]
    );
  });
  it("fromQuat() should set matrix to a quaternion", () => {
    deepAlmostEqual(
      mat3.fromQuat(mat3.copy(IDENTITY_MAT3), Y_QUAT),
      // prettier-ignore
      [
        0, 0, -1,
        0, 1, 0,
        1, 0, 0,
      ]
    );
  });
  it("fromMat2x3() should set a 4x4 matrix to a 3x3 matrix", () => {
    deepEqual(mat3.fromMat2x3(mat3.create(), IDENTITY_MAT2X3), IDENTITY_MAT3);
  });
  it("fromMat4() should set a 4x4 matrix to a 3x3 matrix", () => {
    deepEqual(mat3.fromMat4(mat3.create(), IDENTITY_MAT4), IDENTITY_MAT3);
  });
});
