import { describe, it } from "node:test";
import { deepEqual, notStrictEqual, ok } from "node:assert";
import { mat3, mat4, quat, utils, vec3 } from "../index.js";
import {
  deepAlmostEqual,
  IDENTITY_MAT3,
  IDENTITY_MAT4,
  X_QUAT,
  Y_QUAT,
  Z_QUAT,
  X_UP,
  X_DOWN,
  Y_UP,
  Y_DOWN,
  Z_UP,
  Z_DOWN,
  ORIGIN,
} from "./common.js";

const IDENTITY_QUAT = Object.freeze([0, 0, 0, 1]);
const Y_UP_QUAT = Object.freeze([0, 1, 0, 0]);
const Y_DOWN_QUAT = Object.freeze([0, -1, 0, 0]);
const ONE_QUAT = Object.freeze([1, 1, 1, 1]);
const ONE_QUAT_NORMALISED = Object.freeze(Array(4).fill(0.5));
const TWO_QUAT = Object.freeze([2, 2, 2, 2]);
const ONE_TWO_THREE_FOUR_QUAT = Object.freeze([1, 2, 3, 4]);
const FIVE_SIX_SEVEN_HEIGHT_QUAT = Object.freeze([5, 6, 7, 8]);

// q and -q are the same rotation
const deepAlmostEqualRotation = (a, b, epsilon) =>
  deepAlmostEqual(quat.dot(a, b) < 0 ? a.map((n) => -n) : a, b, epsilon);

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
      [6, 4, 8, -2],
    );
    deepEqual(
      quat.mult(quat.copy(ONE_TWO_THREE_FOUR_QUAT), FIVE_SIX_SEVEN_HEIGHT_QUAT),
      [24, 48, 48, -6],
    );
    deepEqual(
      quat.mult(quat.copy(FIVE_SIX_SEVEN_HEIGHT_QUAT), ONE_TWO_THREE_FOUR_QUAT),
      [32, 32, 56, -6],
    );
  });
  it("invert() should invert a quaternion", () => {
    deepEqual(quat.invert(quat.copy(IDENTITY_QUAT)), IDENTITY_QUAT);
    deepEqual(quat.invert(quat.copy(ONE_QUAT)), [-0.25, -0.25, -0.25, 0.25]);
    deepAlmostEqual(
      quat.invert(quat.copy(ONE_TWO_THREE_FOUR_QUAT)),
      [-0.033333, -0.066666, -0.1, 0.133333],
    );
    // A zero quaternion has no inverse and stays zero instead of NaN
    deepEqual(quat.invert([0, 0, 0, 0]), [0, 0, 0, 0]);
  });
  it("conjugate() should conjugate a quaternion", () => {
    deepEqual(quat.conjugate(quat.copy(IDENTITY_QUAT)), IDENTITY_QUAT);
    deepEqual(quat.conjugate(quat.copy(ONE_QUAT)), [-1, -1, -1, 1]);
    deepEqual(
      quat.conjugate(quat.copy(ONE_TWO_THREE_FOUR_QUAT)),
      [-1, -2, -3, 4],
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
    deepEqual(quat.normalize([0, 2, 0, 0]), Y_UP_QUAT);
    deepEqual(quat.normalize([0, -2, 0, 0]), Y_DOWN_QUAT);
    deepEqual(quat.normalize(quat.copy(ONE_QUAT)), ONE_QUAT_NORMALISED);
    deepEqual(
      quat.normalize(quat.copy(ONE_TWO_THREE_FOUR_QUAT)),
      [
        0.18257418583505536, 0.3651483716701107, 0.5477225575051661,
        0.7302967433402214,
      ],
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
      70,
    );
  });
  it("fromEuler() should set euler angles to a quaternion", () => {
    deepEqual(quat.fromEuler(quat.create(), ORIGIN), IDENTITY_QUAT);
    deepAlmostEqual(
      quat.fromEuler(
        quat.create(),
        [90, 0, 0].map((n) => utils.toRadians(n)),
      ),
      X_QUAT,
    );
    deepAlmostEqual(
      quat.fromEuler(
        quat.create(),
        [0, 90, 0].map((n) => utils.toRadians(n)),
      ),
      Y_QUAT,
    );
    deepAlmostEqual(
      quat.fromEuler(
        quat.create(),
        [0, 0, 90].map((n) => utils.toRadians(n)),
      ),
      Z_QUAT,
    );
  });
  it("fromAxisAngle() should set the angle at an axis of a quaternion", () => {
    deepAlmostEqual(
      quat.fromAxisAngle(quat.create(), Y_UP_QUAT, Math.PI * 0.5),
      Y_QUAT,
    );
    deepAlmostEqual(
      quat.fromAxisAngle(
        quat.create(),
        vec3.normalize([1, 1, 1]),
        (Math.PI * 2) / 3,
      ),
      [0.5, 0.5, 0.5, 0.5],
    );
  });
  it("fromAxes() should set a quaternion from orthonormal base xyz", () => {
    deepEqual(quat.fromAxes(quat.create(), X_UP, Y_UP, Z_UP), IDENTITY_QUAT);
    deepAlmostEqual(quat.fromAxes(quat.create(), X_UP, Z_UP, Y_DOWN), X_QUAT);
    deepAlmostEqual(quat.fromAxes(quat.create(), Z_DOWN, Y_UP, X_UP), Y_QUAT);
    deepAlmostEqual(quat.fromAxes(quat.create(), Y_UP, X_DOWN, Z_UP), Z_QUAT);
  });
  it("fromMat3(), fromMat4() and fromAxes() should handle any rotation", () => {
    // A small rotation (positive trace), then large rotations around axes
    // mostly along X, Y and Z (negative trace, largest diagonal entry on that
    // axis). Off-axis components make every matrix entry contribute.
    for (const [axis, angle] of [
      [[1, 2, 3], 0.5],
      [[1, 0.3, 0.2], 2.8],
      [[0.2, 1, 0.3], 2.8],
      [[0.3, 0.2, 1], 2.8],
    ]) {
      const q = quat.fromAxisAngle(quat.create(), vec3.normalize(axis), angle);
      const m3 = mat3.fromQuat(mat3.create(), q);
      deepAlmostEqualRotation(
        quat.fromMat4(quat.create(), mat4.fromQuat(mat4.create(), q)),
        q,
        1e-12,
      );
      deepAlmostEqualRotation(quat.fromMat3(quat.create(), m3), q, 1e-12);
      deepAlmostEqualRotation(
        quat.fromAxes(
          quat.create(),
          m3.slice(0, 3),
          m3.slice(3, 6),
          m3.slice(6, 9),
        ),
        q,
        1e-12,
      );
    }
  });
  it("fromMat3() should pick a stable branch for 180° rotations", () => {
    // Other branches divide by zero for these
    for (const q of [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
    ]) {
      deepAlmostEqualRotation(
        quat.fromMat3(quat.create(), mat3.fromQuat(mat3.create(), q)),
        q,
        1e-12,
      );
    }
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
        ],
      ),
      X_QUAT,
    );
    deepAlmostEqual(
      quat.fromMat3(
        quat.create(),
        // prettier-ignore
        [
          0, 0, -1,
          0, 1, 0,
          1, 0, 0,
        ],
      ),
      Y_QUAT,
    );
    deepAlmostEqual(
      quat.fromMat3(
        quat.create(),
        // prettier-ignore
        [
          0, 1, 0,
          -1, 0, 0,
          0, 0, 1,
        ],
      ),
      Z_QUAT,
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
        ],
      ),
      X_QUAT,
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
        ],
      ),
      Y_QUAT,
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
        ],
      ),
      Z_QUAT,
    );
  });
  it("fromDirection() should set a quaternion from a direction", () => {
    deepEqual(
      quat.normalize(quat.fromDirection(quat.create(), Z_UP, Y_UP)),
      IDENTITY_QUAT,
    );
    // Right angle
    deepAlmostEqual(
      quat.fromDirection(
        quat.create(),
        Z_UP,
        vec3.add(vec3.copy(Z_UP), X_DOWN),
      ),
      Z_QUAT,
    );
    // Opposite
    deepAlmostEqual(quat.fromDirection(quat.create(), Z_UP, X_DOWN), Z_QUAT);
    // Up parallel to the direction
    const q = quat.fromDirection(quat.create(), Y_UP, Y_UP);
    deepAlmostEqual([quat.length(q)], [1]);
    deepAlmostEqual(vec3.multQuat([...Z_UP], q), Y_UP);
  });
  describe("fromPointToPoint()", () => {
    it("should set a quat to identity when from is origin and to is +Z", () => {
      deepEqual(
        quat.fromPointToPoint(quat.create(), ORIGIN, Z_UP, Y_UP),
        IDENTITY_QUAT,
      );
    });
  });
  it("slerp() should spherical linear interpolate between two quaternions", () => {
    // Same
    deepEqual(
      quat.slerp(quat.copy(IDENTITY_QUAT), IDENTITY_QUAT, 0),
      IDENTITY_QUAT,
    );
    deepEqual(
      quat.slerp(quat.copy(IDENTITY_QUAT), IDENTITY_QUAT, 0.5),
      IDENTITY_QUAT,
    );
    deepEqual(
      quat.slerp(quat.copy(IDENTITY_QUAT), IDENTITY_QUAT, 1),
      IDENTITY_QUAT,
    );
    deepEqual(quat.slerp(quat.copy(ONE_QUAT), ONE_QUAT, 0), ONE_QUAT);
    deepEqual(quat.slerp(quat.copy(ONE_QUAT), ONE_QUAT, 0.5), ONE_QUAT);
    deepEqual(quat.slerp(quat.copy(ONE_QUAT), ONE_QUAT, 1), ONE_QUAT);
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        ONE_TWO_THREE_FOUR_QUAT,
        0,
      ),
      ONE_TWO_THREE_FOUR_QUAT,
    );
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        ONE_TWO_THREE_FOUR_QUAT,
        0.5,
      ),
      ONE_TWO_THREE_FOUR_QUAT,
    );
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        ONE_TWO_THREE_FOUR_QUAT,
        1,
      ),
      ONE_TWO_THREE_FOUR_QUAT,
    );
    //
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        FIVE_SIX_SEVEN_HEIGHT_QUAT,
        0,
      ),
      ONE_TWO_THREE_FOUR_QUAT,
    );
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        FIVE_SIX_SEVEN_HEIGHT_QUAT,
        0.5,
      ),
      [3, 4, 5, 6],
    );
    deepEqual(
      quat.slerp(
        quat.copy(ONE_TWO_THREE_FOUR_QUAT),
        FIVE_SIX_SEVEN_HEIGHT_QUAT,
        1,
      ),
      FIVE_SIX_SEVEN_HEIGHT_QUAT,
    );
  });
  it("slerp() should interpolate along the shortest arc", () => {
    // Halfway to 90° around Y is 45° around Y
    deepAlmostEqual(quat.slerp(quat.copy(IDENTITY_QUAT), Y_QUAT, 0.5), [
      0,
      Math.sin(Math.PI / 8),
      0,
      Math.cos(Math.PI / 8),
    ]);

    // a · (a⁻¹b)^t, built from the relative rotation axis and angle
    const a = quat.normalize([0.1, 0.4, -0.3, 0.85]);
    const b = quat.normalize([-0.6, 0.2, 0.5, 0.4]);
    const relative = quat.mult(quat.conjugate(quat.copy(a)), b);
    const angle = 2 * Math.acos(relative[3]);
    const axis = vec3.normalize(relative.slice(0, 3));
    for (const t of [0, 0.3, 0.5, 1]) {
      const expected = quat.mult(
        quat.copy(a),
        quat.fromAxisAngle(quat.create(), axis, t * angle),
      );
      deepAlmostEqual(quat.slerp(quat.copy(a), b, t), expected, 1e-12);
      // -b is the same rotation as b, in the opposite hemisphere
      deepAlmostEqual(
        quat.slerp(
          quat.copy(a),
          b.map((n) => -n),
          t,
        ),
        expected,
        1e-12,
      );
    }
  });
});
