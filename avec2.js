/** @module avec2 */
import * as vec2 from "./vec2.js";

const TEMP_VEC2 = vec2.create();

/**
 * Sets a vector components.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {number} x
 * @param {number} y
 */
export function set2(a, i, x, y) {
  a[i * 2] = x;
  a[i * 2 + 1] = y;
}

/**
 * Sets a vector to another vector.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {import("./types.js").avec2} b
 * @param {number} j
 */
export function set(a, i, b, j) {
  a[i * 2] = b[j * 2];
  a[i * 2 + 1] = b[j * 2 + 1];
}

/**
 * Compares two vectors.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {import("./types.js").avec2} b
 * @param {number} j
 * @returns {boolean}
 */
export function equals(a, i, b, j) {
  return a[i * 2] === b[j * 2] && a[i * 2 + 1] === b[j * 2 + 1];
}

/**
 * Adds a vector to another.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {import("./types.js").avec2} b
 * @param {number} j
 */
export function add(a, i, b, j) {
  a[i * 2] += b[j * 2];
  a[i * 2 + 1] += b[j * 2 + 1];
}

/**
 * Subtracts a vector from another.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {import("./types.js").avec2} b
 * @param {number} j
 */
export function sub(a, i, b, j) {
  a[i * 2] -= b[j * 2];
  a[i * 2 + 1] -= b[j * 2 + 1];
}

/**
 * Scales a vector by a number.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {number} s
 */
export function scale(a, i, s) {
  a[i * 2] *= s;
  a[i * 2 + 1] *= s;
}

/**
 * Adds two vectors after scaling the second one.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {import("./types.js").avec2} b
 * @param {number} j
 * @param {number} s
 */
export function addScaled(a, i, b, j, s) {
  a[i * 2] += b[j * 2] * s;
  a[i * 2 + 1] += b[j * 2 + 1] * s;
}

/**
 * Calculates the dot product of two vectors.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {import("./types.js").avec2} b
 * @param {number} j
 * @returns {number}
 */
export function dot(a, i, b, j) {
  return a[i * 2] * b[j * 2] + a[i * 2 + 1] * b[j * 2 + 1];
}

/**
 * Calculates the length of a vector.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @returns {number}
 */
export function length(a, i) {
  const x = a[i * 2];
  const y = a[i * 2 + 1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a vector.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @returns {number}
 */
export function lengthSq(a, i) {
  const x = a[i * 2];
  const y = a[i * 2 + 1];
  return x * x + y * y;
}

/**
 * Normalises a vector.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 */
export function normalize(a, i) {
  const lenSq = a[i * 2] * a[i * 2] + a[i * 2 + 1] * a[i * 2 + 1];
  if (lenSq > 0) {
    const len = Math.sqrt(lenSq);
    a[i * 2] /= len;
    a[i * 2 + 1] /= len;
  }
}

/**
 * Calculates the distance between two vectors.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {import("./types.js").avec2} b
 * @param {number} j
 * @returns {number}
 */
export function distance(a, i, b, j) {
  const dx = b[j * 2] - a[i * 2];
  const dy = b[j * 2 + 1] - a[i * 2 + 1];
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calculates the squared distance between two vectors.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {import("./types.js").avec2} b
 * @param {number} j
 * @returns {number}
 */
export function distanceSq(a, i, b, j) {
  const dx = b[j * 2] - a[i * 2];
  const dy = b[j * 2 + 1] - a[i * 2 + 1];
  return dx * dx + dy * dy;
}

/**
 * Limits a vector to a length.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {number} len
 */
export function limit(a, i, len) {
  const x = a[i * 2];
  const y = a[i * 2 + 1];

  const dsq = x * x + y * y;
  const lsq = len * len;

  if (lsq > 0 && dsq > lsq) {
    const nd = len / Math.sqrt(dsq);
    a[i * 2] *= nd;
    a[i * 2 + 1] *= nd;
  }
}

/**
 * Linearly interpolates between two vectors.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {import("./types.js").avec2} b
 * @param {number} j
 * @param {number} t
 */
export function lerp(a, i, b, j, t) {
  const x = a[i * 2];
  const y = a[i * 2 + 1];

  a[i * 2] = x + (b[j * 2] - x) * t;
  a[i * 2 + 1] = y + (b[j * 2 + 1] - y) * t;
}

/**
 * Executes a function once for each array element.
 * @param {import("./types.js").avec2} a
 * @param {import("./types.js").iterativeCallback} callbackFn
 */
export function forEach(a, callbackFn) {
  for (let i = 0; i < a.length / 2; i++) {
    TEMP_VEC2[0] = a[i * 2];
    TEMP_VEC2[1] = a[i * 2 + 1];
    callbackFn(TEMP_VEC2, i, a);
    a[i * 2] = TEMP_VEC2[0];
    a[i * 2 + 1] = TEMP_VEC2[1];
  }
}

/**
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 * @param {import("./types.js").avec2} a
 * @param {import("./types.js").iterativeCallback} callbackFn
 * @returns {import("./types.js").avec2}
 */
export function map(a, callbackFn) {
  const b = new a.constructor(a.length);
  const element = new a.constructor(2);

  for (let i = 0; i < a.length / 2; i++) {
    element[0] = a[i * 2];
    element[1] = a[i * 2 + 1];
    const returnValue = callbackFn(element, i, a);
    b[i * 2] = returnValue[0];
    b[i * 2 + 1] = returnValue[1];
  }

  return b;
}

/**
 * Prints a vector to a string.
 * @param {import("./types.js").avec2} a
 * @param {number} i
 * @param {number} [precision=4]
 * @returns {string}
 */
export function toString(a, i, precision = 4) {
  const scale = 10 ** precision;
  // prettier-ignore
  return `[${Math.floor(a[i * 2] * scale) / scale}, ${Math.floor(a[i * 2 + 1] * scale) / scale}]`;
}
