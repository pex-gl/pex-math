import { describe, it } from "node:test";
import { deepEqual, notStrictEqual, ok } from "node:assert";
import { mat4 } from "../index.js";
import {
  deepAlmostEqual,
  Y_UP,
  ONE_TWO_THREE_VEC3,
  IDENTITY_MAT3,
  IDENTITY_MAT4,
  ONE_TWO_THREE_MAT4,
  Y_QUAT,
  Y_DOWN,
  X_UP,
  X_DOWN,
  ORIGIN,
  Z_UP,
  Z_DOWN,
  ONE_VEC3,
} from "./common.js";

const ONE_MAT4 = Object.freeze(Array(16).fill(1));
const ONE_TO_SIXTEEN_MAT4 = Object.freeze([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
]);

// prettier-ignore
const FOUR_FIVE_SIX_MAT4 = Object.freeze([
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  4, 5, 6, 1
]);

describe("mat4", () => {
  it("create() should return a new mat4", () => {
    deepEqual(mat4.create(), [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  });
  it("identity() should set a matrix to the identity matrix", () => {
    deepEqual(mat4.identity(mat4.copy(ONE_MAT4)), IDENTITY_MAT4);
  });
  it("copy() should copy a matrix without modifying it", () => {
    const a = mat4.copy(ONE_MAT4);
    deepEqual(a, ONE_MAT4);
    notStrictEqual(a, ONE_MAT4);
  });
  it("set() should set a matrix from another matrix", () => {
    const a = mat4.create();
    mat4.set(a, ONE_MAT4);
    notStrictEqual(a, ONE_MAT4);
    deepEqual(a, ONE_MAT4);
  });
  it("equals() should compare two matrices", () => {
    ok(mat4.equals(ONE_MAT4, [...ONE_MAT4]));
    ok(mat4.equals(ONE_MAT4, IDENTITY_MAT4) === false);
  });
  it("mult() should multiply two matrices", () => {
    deepEqual(
      mat4.mult(mat4.copy(ONE_TWO_THREE_MAT4), FOUR_FIVE_SIX_MAT4),
      // prettier-ignore
      [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        5, 7, 9, 1
      ],
    );

    deepEqual(
      mat4.mult(mat4.copy(ONE_TO_SIXTEEN_MAT4), ONE_TO_SIXTEEN_MAT4),
      // prettier-ignore
      [
        90, 100, 110, 120,
        202, 228, 254, 280,
        314, 356, 398, 440,
        426, 484, 542, 600
      ],
    );
  });
  it("invert() should invert a mat4", () => {
    deepEqual(
      mat4.invert(mat4.copy(ONE_TWO_THREE_MAT4)),
      // prettier-ignore
      [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        -1, -2, -3, 1
      ],
    );
  });
  it("transpose() should transpose a mat4", () => {
    deepEqual(
      mat4.transpose(mat4.copy(ONE_TWO_THREE_MAT4)),
      // prettier-ignore
      [
        1, 0, 0, 1,
        0, 1, 0, 2,
        0, 0, 1, 3,
        0, 0, 0, 1
      ],
    );
  });
  it("translate() should translate a matrix by a vector", () => {
    deepEqual(
      mat4.translate(mat4.copy(ONE_TO_SIXTEEN_MAT4), ONE_TWO_THREE_VEC3),
      // prettier-ignore
      [
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        51, 58, 65, 72
      ],
    );
    deepEqual(
      mat4.translate(mat4.copy(IDENTITY_MAT4), ONE_TWO_THREE_VEC3),
      // prettier-ignore
      [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        1, 2, 3, 1
      ],
    );
  });
  it("rotate() should rotate a matrix by an angle at an axis", () => {
    deepEqual(
      mat4.rotate(mat4.copy(IDENTITY_MAT4), Math.PI * 0.5, Y_UP),
      // prettier-ignore
      [
        Math.cos(Math.PI * 0.5), 0, -1, 0,
        0, 1, 0, 0,
        1, 0, Math.cos(Math.PI * 0.5), 0,
        0, 0, 0, 1,
      ],
    );
  });
  it("scale() should scale a mat4 by a vector", () => {
    deepEqual(
      mat4.scale(mat4.copy(ONE_TWO_THREE_MAT4), ONE_TWO_THREE_VEC3),
      // prettier-ignore
      [
        1, 0, 0, 0,
        0, 2, 0, 0,
        0, 0, 3, 0,
        1, 2, 3, 1
      ],
    );

    deepEqual(
      mat4.scale(mat4.copy(ONE_TO_SIXTEEN_MAT4), ONE_TWO_THREE_VEC3),
      // prettier-ignore
      [
        1, 2, 3, 4,
        10, 12, 14, 16,
        27, 30, 33, 36,
        13, 14, 15, 16
      ],
    );
  });
  it("fromQuat() should set matrix to a quaternion", () => {
    deepAlmostEqual(
      mat4.fromQuat(mat4.copy(IDENTITY_MAT4), Y_QUAT),
      // prettier-ignore
      [
        0, 0, -1, 0,
        0, 1, 0, 0,
        1, 0, 0, 0,
        0, 0, 0, 1
      ],
    );
  });
  it("fromTranslationRotationScale() should set a matrix to the TRS matrix", () => {
    deepEqual(
      mat4.fromTranslationRotationScale(
        mat4.create(),
        ORIGIN,
        [0, 0, 0, 1],
        ONE_VEC3,
      ),
      IDENTITY_MAT4,
    );
    deepEqual(
      mat4.fromTranslationRotationScale(
        mat4.create(),
        Y_UP,
        [0, 0, 0, 1],
        Array(3).fill(2),
      ),
      // prettier-ignore
      [
        2, 0, 0, 0,
        0, 2, 0, 0,
        0, 0, 2, 0,
        0, 1, 0, 1
      ],
    );
  });
  it("fromMat3() should set a 4x4 matrix to a 3x3 matrix", () => {
    deepEqual(mat4.fromMat3(mat4.create(), IDENTITY_MAT3), IDENTITY_MAT4);
  });
  it("frustum() should create a frustum matrix", () => {
    deepEqual(
      mat4.frustum(mat4.create(), -1, 1, -1, 1, -1, 1),
      // prettier-ignore
      [
        -1, 0, 0, 0,
        0, -1, 0, 0,
        0, 0, 0, -1,
        0, 0, 1, 0
      ],
    );
  });
  it("perspective() should create a perspective matrix", () => {
    deepAlmostEqual(
      mat4.perspective(mat4.create(), Math.PI * 0.5, 1, 0, 1),
      // prettier-ignore
      [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, -1, -1,
        0, 0, 0, 0
      ],
    );
  });
  it("ortho() should create a ortho matrix", () => {
    deepEqual(
      mat4.ortho(mat4.create(), -1, 1, -1, 1, -1, 1),
      // prettier-ignore
      [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, -1, 0,
        0, 0, 0, 1
      ],
    );
  });
  it("lookAt() should calculate a lookAt matrix from position, target and up vectors", () => {
    deepEqual(
      mat4.lookAt(mat4.create(), Y_UP, ORIGIN, Y_UP),
      // prettier-ignore
      [
        0, 0, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 0,
        0, 0, -1, 1
      ],
    );
  });
  describe("fromDirection()", () => {
    it("should set a matrix to identity when direction is +Z", () => {
      deepEqual(mat4.fromDirection(mat4.create(), Z_UP, Y_UP), IDENTITY_MAT4);
    });
    it("should set a matrix to y up from a direction", () => {
      deepEqual(
        mat4.fromDirection(mat4.create(), Y_UP, Y_UP),
        // prettier-ignore
        [
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 0, 1
        ],
      );
    });
    it("should set a matrix to y down from a direction", () => {
      deepEqual(
        mat4.fromDirection(mat4.create(), Y_DOWN, Y_UP),
        // prettier-ignore
        [
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, -1, 0, 0,
          0, 0, 0, 1
        ],
      );
    });
    it("should set a matrix from a direction", () => {
      deepAlmostEqual(
        mat4.fromDirection(mat4.create(), ONE_VEC3, Y_UP),
        // prettier-ignore
        [
           0.7071068,         0, -0.7071068, 0,
          -0.4082483, 0.8164966, -0.4082483, 0,
           0.5773503, 0.5773503,  0.5773503, 0,
           0, 0, 0, 1,
        ],
      );
    });
    it("direction independent from distance", () => {
      deepEqual(
        mat4.fromDirection(mat4.create(), [0, 0, 100], Y_UP),
        IDENTITY_MAT4,
      );
    });
    it("up", () => {
      deepEqual(
        mat4.fromDirection(mat4.create(), Y_UP, Y_DOWN),
        // prettier-ignore
        [
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 0, 1
        ],
      );
      deepEqual(
        mat4.fromDirection(mat4.create(), Y_UP, X_UP),
        // prettier-ignore
        [
          0, 0, 1, 0,
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 0, 1
        ],
      );
      deepEqual(
        mat4.fromDirection(mat4.create(), Y_UP, X_DOWN),
        // prettier-ignore
        [
          0, 0, -1, 0,
          -1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 0, 1
        ],
      );
      deepEqual(
        mat4.fromDirection(mat4.create(), Y_UP, Z_UP),
        // prettier-ignore
        [
          -1, 0, 0, 0,
          0, 0, 1, 0,
          0, 1, 0, 0,
          0, 0, 0, 1
        ],
      );
      deepEqual(
        mat4.fromDirection(mat4.create(), Y_UP, Z_DOWN),
        // prettier-ignore
        [
          1, 0, 0, 0,
          0, 0, -1, 0,
          0, 1, 0, 0,
          0, 0, 0, 1
        ],
      );
    });
  });
  describe("fromPointToPoint()", () => {
    it("should set a matrix to identity when from is origin and to is +Z", () => {
      deepEqual(
        mat4.fromPointToPoint(mat4.create(), ORIGIN, Z_UP, Y_UP),
        IDENTITY_MAT4,
      );
    });
  });
});
