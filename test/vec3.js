import { describe, it } from "node:test";
import { deepEqual, notStrictEqual, ok } from "node:assert";
import { vec3 } from "../index.js";
import {
  deepAlmostEqual,
  IDENTITY_MAT4,
  ONE_TWO_THREE_MAT4,
  Y_QUAT,
  Y_UP,
} from "./common.js";

const DEFAULT_VEC3 = Object.freeze([0, 0, 0]);
const Y_DOWN = Object.freeze([0, -1, 0]);
const ONE_VEC3 = Object.freeze([1, 1, 1]);
const ONE_VEC3_NORMALISED = Object.freeze(Array(3).fill(0.5773502691896258));
const TWO_VEC3 = Object.freeze([2, 2, 2]);
const ONE_TWO_THREE_VEC3 = Object.freeze([1, 2, 3]);
const FOUR_FIVE_SIX_VEC3 = Object.freeze([4, 5, 6]);

describe("vec3", () => {
  it("create() should return a new vec3", () => {
    deepEqual(vec3.create(), DEFAULT_VEC3);
  });
  it("copy() should copy a vector without modifying it", () => {
    const a = vec3.copy(ONE_VEC3);
    deepEqual(a, ONE_VEC3);
    notStrictEqual(a, ONE_VEC3);
  });
  it("set() should set a vector to another", () => {
    const a = vec3.create();
    vec3.set(a, ONE_VEC3);
    notStrictEqual(a, ONE_VEC3);
    deepEqual(a, ONE_VEC3);
  });
  it("equals() should compare two vectors", () => {
    ok(vec3.equals(ONE_VEC3, [...ONE_VEC3]));
    ok(vec3.equals(ONE_VEC3, DEFAULT_VEC3) === false);
  });
  it("add() should add a vector to another", () => {
    deepEqual(vec3.add(vec3.copy(ONE_VEC3), ONE_VEC3), TWO_VEC3);
  });
  it("sub() should subtract a vector from another", () => {
    deepEqual(vec3.sub(vec3.copy(ONE_VEC3), ONE_VEC3), DEFAULT_VEC3);
  });
  it("scale() should scale a vector by a number", () => {
    deepEqual(vec3.scale(vec3.copy(ONE_VEC3), 2), TWO_VEC3);
  });
  it("addScaled() should add two vectors after scaling the second one", () => {
    deepEqual(
      vec3.addScaled(vec3.copy(DEFAULT_VEC3), vec3.copy(ONE_VEC3), 2),
      TWO_VEC3
    );
  });
  it("multMat4() should multiply a vector by a matrix", () => {
    deepEqual(vec3.multMat4(vec3.create(), IDENTITY_MAT4), DEFAULT_VEC3);
    deepEqual(vec3.multMat4(vec3.copy(ONE_VEC3), IDENTITY_MAT4), ONE_VEC3);
    deepEqual(
      vec3.multMat4(vec3.copy(ONE_VEC3), ONE_TWO_THREE_MAT4),
      [2, 3, 4]
    );
  });
  it("multQuat() should multiply a vector by a quaternion", () => {
    deepEqual(vec3.multQuat(vec3.create(), Y_QUAT), DEFAULT_VEC3);
    deepAlmostEqual(vec3.multQuat(vec3.copy(ONE_VEC3), Y_QUAT), [1, 1, -1]);
  });
  it("dot() calculate the dot product of two vectors", () => {
    deepEqual(vec3.dot(DEFAULT_VEC3, ONE_VEC3), 0);
    deepEqual(vec3.dot(DEFAULT_VEC3, DEFAULT_VEC3), 0);
    deepEqual(vec3.dot(ONE_VEC3, ONE_VEC3), 3);
    deepEqual(vec3.dot(ONE_VEC3, TWO_VEC3), 6);
    deepEqual(vec3.dot(TWO_VEC3, TWO_VEC3), 12);
  });
  it("cross() calculate the cross product of two vectors", () => {
    // Same vector or same direction
    deepEqual(vec3.cross(vec3.copy(DEFAULT_VEC3), ONE_VEC3), DEFAULT_VEC3);
    deepEqual(vec3.cross(vec3.copy(DEFAULT_VEC3), DEFAULT_VEC3), DEFAULT_VEC3);
    deepEqual(vec3.cross(vec3.copy(ONE_VEC3), ONE_VEC3), DEFAULT_VEC3);
    deepEqual(vec3.cross(vec3.copy(ONE_VEC3), TWO_VEC3), DEFAULT_VEC3);
    deepEqual(vec3.cross(vec3.copy(TWO_VEC3), TWO_VEC3), DEFAULT_VEC3);
    deepEqual(
      vec3.cross(vec3.copy(ONE_TWO_THREE_VEC3), FOUR_FIVE_SIX_VEC3),
      [-3, 6, -3]
    );
  });
  it("length() calculate the length of a vector", () => {
    deepEqual(vec3.length(DEFAULT_VEC3), 0);
    deepEqual(vec3.length(ONE_VEC3), Math.sqrt(3));
    deepEqual(vec3.length(TWO_VEC3), Math.sqrt(12));
  });
  it("lengthSq() calculate the squared length of a vector", () => {
    deepEqual(vec3.lengthSq(DEFAULT_VEC3), 0);
    deepEqual(vec3.lengthSq(ONE_VEC3), 3);
    deepEqual(vec3.lengthSq(TWO_VEC3), 12);
  });
  it("normalize() should normalise a vector", () => {
    deepEqual(vec3.normalize(vec3.copy(DEFAULT_VEC3)), DEFAULT_VEC3);
    deepEqual(vec3.normalize([0, 2, 0]), Y_UP);
    deepEqual(vec3.normalize([0, -2, 0]), Y_DOWN);
    deepEqual(vec3.normalize(vec3.copy(ONE_VEC3)), ONE_VEC3_NORMALISED);
    deepEqual(
      vec3.normalize(vec3.copy(ONE_TWO_THREE_VEC3)),
      [0.2672612419124244, 0.5345224838248488, 0.8017837257372732]
    );
  });
  it("distance() calculate the distance between two vectors", () => {
    deepEqual(vec3.distance(DEFAULT_VEC3, Y_UP), 1);
    deepEqual(
      vec3.distance(ONE_TWO_THREE_VEC3, FOUR_FIVE_SIX_VEC3),
      5.196152422706632
    );
  });
  it("distanceSq() should calculate the squared distance between two vectors", () => {
    deepEqual(vec3.distanceSq(DEFAULT_VEC3, Y_UP), 1);
    deepEqual(vec3.distanceSq(ONE_TWO_THREE_VEC3, FOUR_FIVE_SIX_VEC3), 27);
  });
  it("limit() should limit a vector to a length", () => {
    deepEqual(vec3.limit(vec3.copy(DEFAULT_VEC3), 1), DEFAULT_VEC3);
    deepEqual(vec3.limit(vec3.copy(Y_UP), 1), Y_UP);
    deepEqual(vec3.limit(vec3.copy(Y_DOWN), 1), Y_DOWN);
    deepEqual(vec3.limit(vec3.copy(ONE_VEC3), 1), ONE_VEC3_NORMALISED);
    deepEqual(vec3.limit(vec3.copy(ONE_VEC3), 2), ONE_VEC3);
    deepEqual(vec3.limit([0, 2, 0], 1), Y_UP);
  });
  it("lerp() should linearly interpolates between two vectors", () => {
    deepEqual(
      vec3.lerp(vec3.copy(DEFAULT_VEC3), ONE_VEC3, 0.5),
      [0.5, 0.5, 0.5]
    );
    deepEqual(vec3.lerp([-1, -1, -1], DEFAULT_VEC3, 0.5), [-0.5, -0.5, -0.5]);
  });
  it("toString() should print a vector to a string", () => {
    deepEqual(vec3.toString(DEFAULT_VEC3), "[0, 0, 0]");
    deepEqual(vec3.toString(ONE_VEC3), "[1, 1, 1]");
    deepEqual(vec3.toString(ONE_VEC3_NORMALISED, 2), "[0.57, 0.57, 0.57]");
  });
});
