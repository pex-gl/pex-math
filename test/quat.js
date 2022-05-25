import { deepEqual, notStrictEqual, ok } from "node:assert";
import { quat, utils } from "../index.js";
import {
  deepAlmostEqual,
  IDENTITY_MAT3,
  IDENTITY_MAT4,
  ONE_TWO_THREE_MAT4,
  X_QUAT,
  Y_QUAT,
  Z_QUAT,
} from "./common.js";

const IDENTITY_QUAT = Object.freeze([0, 0, 0, 1]);
const Y_UP = Object.freeze([0, 1, 0, 0]);
const Y_DOWN = Object.freeze([0, -1, 0, 0]);
const ONE_QUAT = Object.freeze([1, 1, 1, 1]);
const ONE_QUAT_NORMALISED = Object.freeze(Array(4).fill(0.5));
const TWO_QUAT = Object.freeze([2, 2, 2, 2]);
const ONE_TWO_THREE_FOUR_QUAT = Object.freeze([1, 2, 3, 4]);
const FIVE_SIX_SEVEN_HEIGHT_QUAT = Object.freeze([5, 6, 7, 8]);

describe("quat", () => {
  it("create() should return a new quat", () => {
    deepEqual(quat.create(), IDENTITY_QUAT);
  });
  it("identity() should set a quaternion to the identity quaternion", () => {
    deepEqual(quat.identity(quat.copy(ONE_QUAT)), IDENTITY_QUAT);
  });
  it("copy() should copy a quaternion without modifying it", () => {
    const a = quat.copy(ONE_QUAT);
    deepEqual(a, ONE_QUAT);
    notStrictEqual(a, ONE_QUAT);
  });
  it("set() should set a quaternion to another", () => {
    const a = quat.create();
    quat.set(a, ONE_QUAT);
    notStrictEqual(a, ONE_QUAT);
    deepEqual(a, ONE_QUAT);
  });
  it("equals() should compare two quaternions", () => {
    ok(quat.equals(ONE_QUAT, [...ONE_QUAT]));
    ok(quat.equals(ONE_QUAT, IDENTITY_QUAT) === false);
  });
  it("mult() should multiply a quaternion by another", () => {
    deepEqual(quat.mult(quat.create(), IDENTITY_QUAT), IDENTITY_QUAT);
    deepEqual(quat.mult(quat.copy(ONE_QUAT), IDENTITY_QUAT), ONE_QUAT);
    deepEqual(
      quat.mult(quat.copy(ONE_QUAT), ONE_TWO_THREE_FOUR_QUAT),
      [6, 4, 8, -2]
    );
    deepEqual(
      quat.mult(quat.copy(ONE_TWO_THREE_FOUR_QUAT), FIVE_SIX_SEVEN_HEIGHT_QUAT),
      [24, 48, 48, -6]
    );
    deepEqual(
      quat.mult(quat.copy(FIVE_SIX_SEVEN_HEIGHT_QUAT), ONE_TWO_THREE_FOUR_QUAT),
      [32, 32, 56, -6]
    );
  });
  it("invert() should invert a quaternion", () => {
    deepEqual(quat.invert(quat.copy(IDENTITY_QUAT)), IDENTITY_QUAT);
    deepEqual(quat.invert(quat.copy(ONE_QUAT)), [-0.25, -0.25, -0.25, 0.25]);
    deepAlmostEqual(
      quat.invert(quat.copy(ONE_TWO_THREE_FOUR_QUAT)),
      [-0.033333, -0.066666, -0.1, 0.133333]
    );
  });
  it("conjugate() should conjugate a quaternion", () => {
    deepEqual(quat.conjugate(quat.copy(IDENTITY_QUAT)), IDENTITY_QUAT);
    deepEqual(quat.conjugate(quat.copy(ONE_QUAT)), [-1, -1, -1, 1]);
    deepEqual(
      quat.conjugate(quat.copy(ONE_TWO_THREE_FOUR_QUAT)),
      [-1, -2, -3, 4]
    );
  });
  it("length() should calculate the length of a quaternion", () => {
    deepEqual(quat.length(IDENTITY_QUAT), 1);
    deepEqual(quat.length([0, 0, 0, 0]), 0);
    deepEqual(quat.length(ONE_TWO_THREE_FOUR_QUAT), 5.477225575051661);
  });
  it("normalize() should normalise a vector", () => {
    deepEqual(quat.normalize(quat.copy(IDENTITY_QUAT)), IDENTITY_QUAT);
    deepEqual(quat.normalize([0, 0, 0, 0]), [0, 0, 0, 0]);
    deepEqual(quat.normalize([0, 2, 0, 0]), Y_UP);
    deepEqual(quat.normalize([0, -2, 0, 0]), Y_DOWN);
    deepEqual(quat.normalize(quat.copy(ONE_QUAT)), ONE_QUAT_NORMALISED);
    deepEqual(
      quat.normalize(quat.copy(ONE_TWO_THREE_FOUR_QUAT)),
      [
        0.18257418583505536, 0.3651483716701107, 0.5477225575051661,
        0.7302967433402214,
      ]
    );
  });
  it("dot() should calculate the dot product of two vectors", () => {
    deepEqual(quat.dot(IDENTITY_QUAT, ONE_QUAT), 1);
    deepEqual(quat.dot(IDENTITY_QUAT, IDENTITY_QUAT), 1);
    deepEqual(quat.dot(ONE_QUAT, ONE_QUAT), 4);
    deepEqual(quat.dot(ONE_QUAT, TWO_QUAT), 8);
    deepEqual(quat.dot(TWO_QUAT, TWO_QUAT), 16);
    deepEqual(
      quat.dot(ONE_TWO_THREE_FOUR_QUAT, FIVE_SIX_SEVEN_HEIGHT_QUAT),
      70
    );
  });
  it("fromEuler() should set euler angles to a quaternion", () => {
    deepEqual(quat.fromEuler(quat.create(), [0, 0, 0]), IDENTITY_QUAT);
    deepAlmostEqual(
      quat.fromEuler(
        quat.create(),
        [90, 0, 0].map((n) => utils.toRadians(n))
      ),
      X_QUAT
    );
    deepAlmostEqual(
      quat.fromEuler(
        quat.create(),
        [0, 90, 0].map((n) => utils.toRadians(n))
      ),
      Y_QUAT
    );
    deepAlmostEqual(
      quat.fromEuler(
        quat.create(),
        [0, 0, 90].map((n) => utils.toRadians(n))
      ),
      Z_QUAT
    );
  });
  it("fromAxisAngle() should set the angle at an axis of a quaternion", () => {
    deepAlmostEqual(
      quat.fromAxisAngle(quat.create(), Y_UP, Math.PI * 0.5),
      Y_QUAT
    );
  });
  it("fromAxes() should set a quaternion from orthonormal base xyz", () => {
    deepEqual(
      quat.fromAxes(quat.create(), [1, 0, 0], Y_UP, [0, 0, 1]),
      IDENTITY_QUAT
    );
    deepAlmostEqual(
      quat.fromAxes(quat.create(), [1, 0, 0], [0, 0, 1], [0, -1, 0]),
      X_QUAT
    );
    deepAlmostEqual(
      quat.fromAxes(quat.create(), [0, 0, -1], [0, 1, 0], [1, 0, 0]),
      Y_QUAT
    );
    deepAlmostEqual(
      quat.fromAxes(quat.create(), [0, 1, 0], [-1, 0, 0], [0, 0, 1]),
      Z_QUAT
    );
  });
  it("fromMat3() should set a quaternion to a 3x3 matrix", () => {
    deepEqual(quat.fromMat3(quat.create(), IDENTITY_MAT3), IDENTITY_QUAT);
    deepAlmostEqual(
      quat.fromMat3(
        quat.create(),
        // prettier-ignore
        [
          1, 0, 0,
          0, 0, 1,
          0, -1, 0,
        ]
      ),
      X_QUAT
    );
    deepAlmostEqual(
      quat.fromMat3(
        quat.create(),
        // prettier-ignore
        [
          0, 0, -1,
          0, 1, 0,
          1, 0, 0,
        ]
      ),
      Y_QUAT
    );
    deepAlmostEqual(
      quat.fromMat3(
        quat.create(),
        // prettier-ignore
        [
          0, 1, 0,
          -1, 0, 0,
          0, 0, 1,
        ]
      ),
      Z_QUAT
    );
  });
  it("fromMat4() should set a quaternion to a 4x4 matrix", () => {
    deepEqual(quat.fromMat4(quat.create(), IDENTITY_MAT4), IDENTITY_QUAT);
    deepAlmostEqual(
      quat.fromMat4(
        quat.create(),
        // prettier-ignore
        [
          1, 0, 0, 0,
          0, 0, 1, 0,
          0, -1, 0, 0,
          0, 0, 0, 1
        ]
      ),
      X_QUAT
    );
    deepAlmostEqual(
      quat.fromMat4(
        quat.create(),
        // prettier-ignore
        [
          0, 0, -1, 0,
          0, 1, 0, 0,
          1, 0, 0, 0,
          0, 0, 0, 1
        ]
      ),
      Y_QUAT
    );
    deepAlmostEqual(
      quat.fromMat4(
        quat.create(),
        // prettier-ignore
        [
          0, 1, 0, 0,
          -1, 0, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
        ]
      ),
      Z_QUAT
    );
  });
  it("fromTo() should set a quaternion to represent the shortest rotation from one vector to another", () => {
    deepEqual(quat.fromTo(quat.create(), [0, 1, 0], [0, 1, 0]), IDENTITY_QUAT);
    // Right angle
    deepAlmostEqual(quat.fromTo(quat.create(), [0, 1, 0], [-1, 0, 0]), Z_QUAT);
    // Opposite
    deepAlmostEqual(quat.fromTo(quat.create(), Y_UP, Y_DOWN), [0, 0, 0, 0]);
  });
  it("slerp() should spherical linear interpolate between two quaternions", () => {
    // Same
    deepEqual(
      quat.slerp(quat.copy(IDENTITY_QUAT), IDENTITY_QUAT, 0),
      IDENTITY_QUAT
    );
    deepEqual(
      quat.slerp(quat.copy(IDENTITY_QUAT), IDENTITY_QUAT, 0.5),
      IDENTITY_QUAT
    );
    deepEqual(
      quat.slerp(quat.copy(IDENTITY_QUAT), IDENTITY_QUAT, 1),
      IDENTITY_QUAT
    );
    deepEqual(quat.slerp(quat.copy(ONE_QUAT), ONE_QUAT, 0), ONE_QUAT);
    deepEqual(quat.slerp(quat.copy(ONE_QUAT), ONE_QUAT, 0.5), ONE_QUAT);
    deepEqual(quat.slerp(quat.copy(ONE_QUAT), ONE_QUAT, 1), ONE_QUAT);
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        ONE_TWO_THREE_FOUR_QUAT,
        0
      ),
      ONE_TWO_THREE_FOUR_QUAT
    );
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        ONE_TWO_THREE_FOUR_QUAT,
        0.5
      ),
      ONE_TWO_THREE_FOUR_QUAT
    );
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        ONE_TWO_THREE_FOUR_QUAT,
        1
      ),
      ONE_TWO_THREE_FOUR_QUAT
    );
    //
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        FIVE_SIX_SEVEN_HEIGHT_QUAT,
        0
      ),
      ONE_TWO_THREE_FOUR_QUAT
    );
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        FIVE_SIX_SEVEN_HEIGHT_QUAT,
        0.5
      ),
      [3, 4, 5, 6]
    );
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        FIVE_SIX_SEVEN_HEIGHT_QUAT,
        1
      ),
      FIVE_SIX_SEVEN_HEIGHT_QUAT
    );
  });
});
