import { describe, it } from "node:test";
import { deepEqual, notStrictEqual, ok } from "node:assert";
import { vec2 } from "../index.js";
import { ONE_TWO_VEC2 } from "./common.js";

const DEFAULT_VEC2 = Object.freeze([0, 0]);
const Y_UP_VEC2 = Object.freeze([0, 1]);
const Y_DOWN_VEC2 = Object.freeze([0, -1]);
const ONE_VEC2 = Object.freeze([1, 1]);
const ONE_VEC2_NORMALISED = Object.freeze(Array(2).fill(0.7071067811865475));
const TWO_VEC2 = Object.freeze([2, 2]);
const THREE_FOUR_VEC2 = Object.freeze([3, 4]);

describe("vec2", () => {
  it("create() should return a new vec2", () => {
    deepEqual(vec2.create(), DEFAULT_VEC2);
  });
  it("copy() should copy a vector without modifying it", () => {
    const a = vec2.copy(ONE_VEC2);
    deepEqual(a, ONE_VEC2);
    notStrictEqual(a, ONE_VEC2);
  });
  it("set() should set a vector to another", () => {
    const a = vec2.create();
    vec2.set(a, ONE_VEC2);
    notStrictEqual(a, ONE_VEC2);
    deepEqual(a, ONE_VEC2);
  });
  it("equals() should compare two vectors", () => {
    ok(vec2.equals(ONE_VEC2, [...ONE_VEC2]));
    ok(vec2.equals(ONE_VEC2, DEFAULT_VEC2) === false);
  });
  it("add() should add a vector to another", () => {
    deepEqual(vec2.add(vec2.copy(ONE_VEC2), ONE_VEC2), TWO_VEC2);
  });
  it("sub() should subtract a vector from another", () => {
    deepEqual(vec2.sub(vec2.copy(ONE_VEC2), ONE_VEC2), DEFAULT_VEC2);
  });
  it("scale() should scale a vector by a number", () => {
    deepEqual(vec2.scale(vec2.copy(ONE_VEC2), 2), TWO_VEC2);
  });
  it("addScaled() should add two vectors after scaling the second one", () => {
    deepEqual(
      vec2.addScaled(vec2.copy(DEFAULT_VEC2), vec2.copy(ONE_VEC2), 2),
      TWO_VEC2
    );
  });
  it("dot() calculate the dot product of two vectors", () => {
    deepEqual(vec2.dot(DEFAULT_VEC2, ONE_VEC2), 0);
    deepEqual(vec2.dot(DEFAULT_VEC2, DEFAULT_VEC2), 0);
    deepEqual(vec2.dot(ONE_VEC2, ONE_VEC2), 2);
    deepEqual(vec2.dot(ONE_VEC2, TWO_VEC2), 4);
    deepEqual(vec2.dot(TWO_VEC2, TWO_VEC2), 8);
  });
  it("length() calculate the length of a vector", () => {
    deepEqual(vec2.length(DEFAULT_VEC2), 0);
    deepEqual(vec2.length(ONE_VEC2), Math.sqrt(2));
    deepEqual(vec2.length(TWO_VEC2), Math.sqrt(8));
  });
  it("lengthSq() calculate the squared length of a vector", () => {
    deepEqual(vec2.lengthSq(DEFAULT_VEC2), 0);
    deepEqual(vec2.lengthSq(ONE_VEC2), 2);
    deepEqual(vec2.lengthSq(TWO_VEC2), 8);
  });
  it("normalize() should normalise a vector", () => {
    deepEqual(vec2.normalize(vec2.copy(DEFAULT_VEC2)), DEFAULT_VEC2);
    deepEqual(vec2.normalize([0, 2]), Y_UP_VEC2);
    deepEqual(vec2.normalize([0, -2]), Y_DOWN_VEC2);
    deepEqual(vec2.normalize(vec2.copy(ONE_VEC2)), ONE_VEC2_NORMALISED);
    deepEqual(
      vec2.normalize(vec2.copy(ONE_TWO_VEC2)),
      [0.4472135954999579, 0.8944271909999159]
    );
  });
  it("distance() calculate the distance between two vectors", () => {
    deepEqual(vec2.distance(DEFAULT_VEC2, Y_UP_VEC2), 1);
    deepEqual(vec2.distance(ONE_TWO_VEC2, THREE_FOUR_VEC2), 2.8284271247461903);
  });
  it("distanceSq() should calculate the squared distance between two vectors", () => {
    deepEqual(vec2.distance(DEFAULT_VEC2, Y_UP_VEC2), 1);
    deepEqual(vec2.distanceSq(ONE_TWO_VEC2, THREE_FOUR_VEC2), 8);
  });
  it("limit() should limit a vector to a length", () => {
    deepEqual(vec2.limit(vec2.copy(DEFAULT_VEC2), 1), DEFAULT_VEC2);
    deepEqual(vec2.limit(vec2.copy(Y_UP_VEC2), 1), Y_UP_VEC2);
    deepEqual(vec2.limit(vec2.copy(Y_DOWN_VEC2), 1), Y_DOWN_VEC2);
    deepEqual(vec2.limit(vec2.copy(ONE_VEC2), 1), ONE_VEC2_NORMALISED);
    deepEqual(vec2.limit(vec2.copy(ONE_VEC2), 2), ONE_VEC2);
    deepEqual(vec2.limit([0, 2], 1), Y_UP_VEC2);
  });
  it("lerp() should linearly interpolates between two vectors", () => {
    deepEqual(vec2.lerp(vec2.copy(DEFAULT_VEC2), ONE_VEC2, 0.5), [0.5, 0.5]);
    deepEqual(vec2.lerp([-1, -1], DEFAULT_VEC2, 0.5), [-0.5, -0.5]);
  });
  it("toString() should print a vector to a string", () => {
    deepEqual(vec2.toString(DEFAULT_VEC2), "[0, 0]");
    deepEqual(vec2.toString(ONE_VEC2), "[1, 1]");
    deepEqual(vec2.toString(ONE_VEC2_NORMALISED, 2), "[0.7, 0.7]");
  });
});
