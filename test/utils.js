import { deepEqual, notStrictEqual, ok } from "assert";
import { utils } from "../index.js";

describe("utils", () => {
  it("lerp", () => {
    // Bounds
    deepEqual(utils.lerp(0, 0, 0), 0);
    deepEqual(utils.lerp(0, 1, 0), 0);
    deepEqual(utils.lerp(1, 1, 0), 1);

    deepEqual(utils.lerp(0, 0, 1), 0);
    deepEqual(utils.lerp(0, 1, 1), 1);
    deepEqual(utils.lerp(1, 1, 1), 1);

    // Positive
    deepEqual(utils.lerp(0, 1, 0.5), 0.5); // 0 / +
    deepEqual(utils.lerp(0, -1, 0.5), -0.5); // 0 / -
    deepEqual(utils.lerp(1, 0, 0.5), 0.5); // + / 0
    deepEqual(utils.lerp(-1, 0, 0.5), -0.5); // - / 0
    deepEqual(utils.lerp(1, 2, 0.5), 1.5); // + / +
    deepEqual(utils.lerp(-1, 1, 0.5), 0); // - / +
    deepEqual(utils.lerp(1, -1, 0.5), 0); // + / -
    deepEqual(utils.lerp(-2, -1, 0.5), -1.5); // - / -

    // Negative
    deepEqual(utils.lerp(0, 1, -0.5), -0.5); // 0 / +
    deepEqual(utils.lerp(0, -1, -0.5), 0.5); // 0 / -
    deepEqual(utils.lerp(1, 0, -0.5), 1.5); // + / 0
    deepEqual(utils.lerp(-1, 0, -0.5), -1.5); // - / 0
    deepEqual(utils.lerp(1, 2, -0.5), 0.5); // + / +
    deepEqual(utils.lerp(-1, 1, -0.5), -2); // - / +
    deepEqual(utils.lerp(1, -1, -0.5), 2); // + / -
    deepEqual(utils.lerp(-2, -1, -0.5), -2.5); // - / -

    // Outside
    deepEqual(utils.lerp(-2, 4, 1), 4);
    deepEqual(utils.lerp(-2, 4, 0), -2);
  });

  it("clamp", () => {
    // Bounds
    deepEqual(utils.clamp(0, 0, 0), 0);
    deepEqual(utils.clamp(0, 0, 1), 0);
    deepEqual(utils.clamp(0, 1, 1), 1);

    deepEqual(utils.clamp(1, 0, 0), 0);
    deepEqual(utils.clamp(1, 0, 1), 1);
    deepEqual(utils.clamp(1, 1, 1), 1);

    // Positive
    deepEqual(utils.clamp(0.5, 0, 1), 0.5); // 0 / +
    deepEqual(utils.clamp(0.5, 0, -1), 0); // 0 / -
    deepEqual(utils.clamp(0.5, 1, 0), 1); // + / 0
    deepEqual(utils.clamp(0.5, -1, 0), 0); // - / 0
    deepEqual(utils.clamp(0.5, 1, 2), 1); // + / +
    deepEqual(utils.clamp(0.5, -1, 1), 0.5); // - / +
    deepEqual(utils.clamp(0.5, 1, -1), 1); // + / -
    deepEqual(utils.clamp(0.5, -2, -1), -1); // - / -

    // Negative
    deepEqual(utils.clamp(-0.5, 0, 1), 0); // 0 / +
    deepEqual(utils.clamp(-0.5, 0, -1), 0); // 0 / -
    deepEqual(utils.clamp(-0.5, 1, 0), 1); // + / 0
    deepEqual(utils.clamp(-0.5, -1, 0), -0.5); // - / 0
    deepEqual(utils.clamp(-0.5, 1, 2), 1); // + / +
    deepEqual(utils.clamp(-0.5, -1, 1), -0.5); // - / +
    deepEqual(utils.clamp(-0.5, 1, -1), 1); // + / -
    deepEqual(utils.clamp(-0.5, -2, -1), -1); // - / -
  });

  it("smoothstep", () => {
    // Bounds
    deepEqual(utils.smoothstep(0, 0, 0), NaN);
    deepEqual(utils.smoothstep(0, 0, 1), 0);
    deepEqual(utils.smoothstep(0, 1, 1), 0);

    deepEqual(utils.smoothstep(1, 0, 0), 1);
    deepEqual(utils.smoothstep(1, 0, 1), 1);
    deepEqual(utils.smoothstep(1, 1, 1), NaN);

    // Positive
    deepEqual(utils.smoothstep(0.5, 0, 1), 0.5); // 0 / +
    deepEqual(utils.smoothstep(0.5, 0, -1), 0); // 0 / -
    deepEqual(utils.smoothstep(0.5, 1, 0), 0.5); // + / 0
    deepEqual(utils.smoothstep(0.5, -1, 0), 1); // - / 0
    deepEqual(utils.smoothstep(0.5, 1, 2), 0); // + / +
    deepEqual(utils.smoothstep(0.5, -1, 1), 0.84375); // - / +
    deepEqual(utils.smoothstep(0.5, 1, -1), 0.15625); // + / -
    deepEqual(utils.smoothstep(0.5, -2, -1), 1); // - / -

    // Negative
    deepEqual(utils.smoothstep(-0.5, 0, 1), 0); // 0 / +
    deepEqual(utils.smoothstep(-0.5, 0, -1), 0.5); // 0 / -
    deepEqual(utils.smoothstep(-0.5, 1, 0), 1); // + / 0
    deepEqual(utils.smoothstep(-0.5, -1, 0), 0.5); // - / 0
    deepEqual(utils.smoothstep(-0.5, 1, 2), 0); // + / +
    deepEqual(utils.smoothstep(-0.5, -1, 1), 0.15625); // - / +
    deepEqual(utils.smoothstep(-0.5, 1, -1), 0.84375); // + / -
    deepEqual(utils.smoothstep(-0.5, -2, -1), 1); // - / -

    // Others
    deepEqual(utils.smoothstep(1.5, 1, 2), 0.5);
    deepEqual(utils.smoothstep(1.5, 2, 1), 0.5);
    deepEqual(utils.smoothstep(0.9, 1, 2), 0);
    deepEqual(utils.smoothstep(0.9, 2, 1), 1);
    deepEqual(utils.smoothstep(3, 1, 2), 1);
    deepEqual(utils.smoothstep(3, 2, 1), 0);
  });

  it("map", () => {
    // TODO
    deepEqual(utils.map(0.1, 0.1, 0.2, 1, 2), 1);
    deepEqual(utils.map(0.15, 0.1, 0.2, 1, 2), 1.5);
    deepEqual(utils.map(0.2, 0.1, 0.2, 1, 2), 2);

    deepEqual(utils.map(0.2, 0.1, 0.2, 2, 1), 1);
    deepEqual(utils.map(0.15, 0.1, 0.2, 2, 1), 1.5);
    deepEqual(utils.map(0.1, 0.1, 0.2, 2, 1), 2);
  });

  it("toRadians", () => {
    deepEqual(utils.toRadians(0), 0);
    deepEqual(utils.toRadians(45), Math.PI / 4);
    deepEqual(utils.toRadians(90), Math.PI / 2);
    deepEqual(utils.toRadians(180), Math.PI);
    deepEqual(utils.toRadians(360), 2 * Math.PI);
    deepEqual(utils.toRadians(-0), 0);
    deepEqual(utils.toRadians(-45), -Math.PI / 4);
    deepEqual(utils.toRadians(-90), -Math.PI / 2);
    deepEqual(utils.toRadians(-180), -Math.PI);
    deepEqual(utils.toRadians(-360), -2 * Math.PI);
  });

  it("toDegrees", () => {
    deepEqual(utils.toDegrees(0), 0);
    deepEqual(utils.toDegrees(Math.PI / 4), 45);
    deepEqual(utils.toDegrees(Math.PI / 2), 90);
    deepEqual(utils.toDegrees(Math.PI), 180);
    deepEqual(utils.toDegrees(2 * Math.PI), 360);
    deepEqual(utils.toDegrees(0), -0);
    deepEqual(utils.toDegrees(-Math.PI / 4), -45);
    deepEqual(utils.toDegrees(-Math.PI / 2), -90);
    deepEqual(utils.toDegrees(-Math.PI), -180);
    deepEqual(utils.toDegrees(-2 * Math.PI), -360);
  });

  it("sign", () => {
    deepEqual(utils.sign(1), 1);
    deepEqual(utils.sign(2), 1);
    deepEqual(utils.sign(-1), -1);
    deepEqual(utils.sign(-2), -1);
    deepEqual(utils.sign(0), NaN);
  });

  it("isPowerOfTwo", () => {
    ok(utils.isPowerOfTwo(2));
    ok(utils.isPowerOfTwo(512));
    ok(utils.isPowerOfTwo(2 ** 50));
    ok(utils.isPowerOfTwo(-0));
    ok(utils.isPowerOfTwo(0));
    ok(utils.isPowerOfTwo(3) === false);
    ok(utils.isPowerOfTwo(-512) === false);
  });

  it("nextPowerOfTwo", () => {
    deepEqual(utils.nextPowerOfTwo(0), 1);
    deepEqual(utils.nextPowerOfTwo(1), 1);
    deepEqual(utils.nextPowerOfTwo(2), 2);
    deepEqual(utils.nextPowerOfTwo(3), 4);

    deepEqual(utils.nextPowerOfTwo(-0), 1);
    deepEqual(utils.nextPowerOfTwo(-1), 0);
    deepEqual(utils.nextPowerOfTwo(-2), 0);
    deepEqual(utils.nextPowerOfTwo(-3), 0);

    deepEqual(utils.nextPowerOfTwo(2 ** 1 + 1), 2 ** 2);
    deepEqual(utils.nextPowerOfTwo(2 ** 2 + 1), 2 ** 3);
  });
});
