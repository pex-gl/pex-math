import { describe, it } from "node:test";
import { deepEqual, notStrictEqual, ok } from "node:assert";
import { vec4 } from "../index.js";
import { IDENTITY_MAT4, ONE_TWO_THREE_MAT4 } from "./common.js";

const DEFAULT_VEC4 = Object.freeze([0, 0, 0, 1]);
const ONE_VEC4 = Object.freeze([1, 1, 1, 1]);
const ONE_VEC4_NORMALISED = Object.freeze(Array(4).fill(0.5));
const TWO_VEC4 = Object.freeze([2, 2, 2, 2]);

describe("vec4", () => {
  it("create() should return a new vec4", () => {
    deepEqual(vec4.create(), DEFAULT_VEC4);
  });
  it("copy() should copy a vector without modifying it", () => {
    const a = vec4.copy(ONE_VEC4);
    deepEqual(a, ONE_VEC4);
    notStrictEqual(a, ONE_VEC4);
  });
  it("set() should set a vector to another", () => {
    const a = vec4.create();
    vec4.set(a, ONE_VEC4);
    notStrictEqual(a, ONE_VEC4);
    deepEqual(a, ONE_VEC4);
  });
  it("equals() should compare two vectors", () => {
    ok(vec4.equals(ONE_VEC4, [...ONE_VEC4]));
    ok(vec4.equals(ONE_VEC4, DEFAULT_VEC4) === false);
  });
  it("add() should add a vector to another", () => {
    deepEqual(vec4.add(vec4.copy(ONE_VEC4), ONE_VEC4), TWO_VEC4);
  });
  it("sub() should subtract a vector from another", () => {
    deepEqual(vec4.sub(vec4.copy(ONE_VEC4), ONE_VEC4), [0, 0, 0, 0]);
  });
  it("scale() should scale a vector by a number", () => {
    deepEqual(vec4.scale(vec4.copy(ONE_VEC4), 2), TWO_VEC4);
  });
  it("addScaled() should add two vectors after scaling the second one", () => {
    deepEqual(vec4.addScaled([0, 0, 0, 0], vec4.copy(ONE_VEC4), 2), TWO_VEC4);
  });
  it("fromVec3() should create a vec4 from vec3", () => {
    deepEqual(vec4.fromVec3(vec4.create(), [1, 1, 1]), ONE_VEC4);
  });
  it("multMat4() should multiply a vector by a matrix", () => {
    deepEqual(vec4.multMat4(vec4.create(), IDENTITY_MAT4), DEFAULT_VEC4);
    deepEqual(vec4.multMat4(vec4.copy(ONE_VEC4), IDENTITY_MAT4), ONE_VEC4);
    deepEqual(
      vec4.multMat4(vec4.copy(ONE_VEC4), ONE_TWO_THREE_MAT4),
      [2, 3, 4, 1],
    );
  });
  it("lerp() should linearly interpolates between two vectors", () => {
    deepEqual(
      vec4.lerp(vec4.copy(DEFAULT_VEC4), ONE_VEC4, 0.5),
      [0.5, 0.5, 0.5, 1],
    );
    deepEqual(
      vec4.lerp([-1, -1, -1, -1], DEFAULT_VEC4, 0.5),
      [-0.5, -0.5, -0.5, 0],
    );
  });
  it("toString() should print a vector to a string", () => {
    deepEqual(vec4.toString(DEFAULT_VEC4), "[0, 0, 0, 1]");
    deepEqual(vec4.toString(ONE_VEC4), "[1, 1, 1, 1]");
    deepEqual(vec4.toString(ONE_VEC4_NORMALISED, 2), "[0.5, 0.5, 0.5, 0.5]");
  });
});
