import { describe, it } from "node:test";
import { deepEqual } from "node:assert";
import { euler, quat, utils } from "../index.js";
import { X_QUAT, Y_QUAT, Z_QUAT } from "./common.js";

const DEFAULT_EULER = Object.freeze([0, 0, 0]);

describe("euler", () => {
  it("create() should return a new euler", () => {
    deepEqual(euler.create(), DEFAULT_EULER);
  });
  it("fromQuat() should creates euler angles from quaternion", () => {
    deepEqual(euler.fromQuat(euler.create(), quat.create()), DEFAULT_EULER);

    deepEqual(
      euler.fromQuat(euler.create(), X_QUAT),
      [90, 0, 0].map((n) => utils.toRadians(n))
    );
    deepEqual(
      euler.fromQuat(euler.create(), Y_QUAT),
      [0, 90, 0].map((n) => utils.toRadians(n))
    );
    deepEqual(
      euler.fromQuat(euler.create(), [0.7071068, 0, 0.7071068, 0]),
      [0, 90, 0].map((n) => utils.toRadians(n))
    );
    deepEqual(
      euler.fromQuat(euler.create(), Z_QUAT),
      [0, 0, 90].map((n) => utils.toRadians(n))
    );
  });
});
