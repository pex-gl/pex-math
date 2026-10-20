import { describe, it } from "node:test";
import { deepEqual } from "node:assert";
import { euler, mat4, quat, utils } from "../index.js";
import { deepAlmostEqual, X_QUAT, Y_QUAT, Z_QUAT } from "./common.js";

const DEFAULT_EULER = Object.freeze([0, 0, 0]);

describe("euler", () => {
  it("create() should return a new euler", () => {
    deepEqual(euler.create(), DEFAULT_EULER);
  });
  it("fromQuat() should creates euler angles from quaternion", () => {
    deepEqual(euler.fromQuat(euler.create(), quat.create()), DEFAULT_EULER);

    deepEqual(
      euler.fromQuat(euler.create(), X_QUAT),
      [90, 0, 0].map((n) => utils.toRadians(n)),
    );
    deepEqual(
      euler.fromQuat(euler.create(), Y_QUAT),
      [0, 90, 0].map((n) => utils.toRadians(n)),
    );
    // 180° around the (x + z) axis
    deepEqual(
      euler.fromQuat(euler.create(), [0.7071068, 0, 0.7071068, 0]),
      [0, 90, 180].map((n) => utils.toRadians(n)),
    );
    deepEqual(
      euler.fromQuat(euler.create(), Z_QUAT),
      [0, 0, 90].map((n) => utils.toRadians(n)),
    );
  });
  it("fromQuat() should round-trip rotations in and near gimbal lock", () => {
    for (const y of [Math.PI / 2, -Math.PI / 2, Math.PI / 2 - 1e-10]) {
      const q = quat.fromEuler(quat.create(), [0.3, y, 0.2]);
      const e = euler.fromQuat(euler.create(), q);
      deepAlmostEqual(
        mat4.fromQuat(mat4.create(), quat.fromEuler(quat.create(), e)),
        mat4.fromQuat(mat4.create(), q),
        1e-12,
      );
    }
  });
  it("fromQuat() should handle non-unit quaternions", () => {
    const e = [0.3, -0.7, 1.1];
    const q = quat.fromEuler(quat.create(), e).map((n) => n * 2.5);
    deepAlmostEqual(euler.fromQuat(euler.create(), q), e, 1e-12);
  });
});
