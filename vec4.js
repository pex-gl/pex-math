/**
 * @module vec4
 */

import { shallowCopy } from "./utils.js";

/**
 * Returns a new vec4 at 0, 0, 0, 1.
 * @returns {vec4}
 */
export function create() {
  return [0, 0, 0, 1];
}

/**
 * Returns a copy of a vector.
 * @param {vec4} a
 * @returns {vec4}
 */
export const copy = shallowCopy;

/**
 * Sets a vector to another vector.
 * @param {vec4} a
 * @param {vec4} b
 * @returns {vec4}
 */
export function set(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  a[3] = b[3];
  return a;
}

/**
 * Compares two vectors.
 * @param {vec4} a
 * @param {vec4} b
 * @returns {boolean}
 */
export function equals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Adds a vector to another.
 * @param {vec4} a
 * @param {vec4} b
 * @returns {vec4}
 */
export function add(a, b) {
  a[0] += b[0];
  a[1] += b[1];
  a[2] += b[2];
  a[3] += b[3];
  return a;
}

/**
 * Subtracts a vector from another.
 * @param {vec4} a
 * @param {vec4} b
 * @returns {vec4}
 */
export function sub(a, b) {
  a[0] -= b[0];
  a[1] -= b[1];
  a[2] -= b[2];
  a[3] -= b[3];
  return a;
}

/**
 * Scales a vector by a number.
 * @param {vec4} a
 * @param {number} n
 * @returns {vec4}
 */
export function scale(a, n) {
  a[0] *= n;
  a[1] *= n;
  a[2] *= n;
  a[3] *= n;
  return a;
}

/**
 * Adds two vectors after scaling the second one.
 * @param {vec4} a
 * @param {vec4} b
 * @param {number} n
 * @returns {vec4}
 */
export function addScaled(a, b, n) {
  a[0] += b[0] * n;
  a[1] += b[1] * n;
  a[2] += b[2] * n;
  a[3] += b[3] * n;

  return a;
}

/**
 * Create a vec4 from vec3.
 * @param {vec4} a
 * @param {vec3} b
 * @returns {vec4}
 */
export function fromVec3(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  a[3] = 1;
  return a;
}

/**
 * Multiplies a vector with a matrix.
 * @param {vec4} a
 * @param {mat4} m
 * @returns {vec4}
 */
export function multMat4(a, m) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];
  a[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  a[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  a[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  a[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return a;
}

/**
 * Calculates the dot product of two vectors.
 * @param {vec4} a
 * @param {vec4} b
 * @returns {number}
 */
export function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Calculates the length of a vector.
 * @param {vec4} a
 * @returns {number}
 */
export function length(a) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared length of a vector.
 * @param {vec4} a
 * @returns {number}
 */
export function lengthSq(a) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Normalises a vector.
 * @param {vec4} a
 * @returns {vec4}
 */
export function normalize(a) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];
  const l = 1 / (Math.sqrt(x * x + y * y + z * z + w * w) || 1);
  a[0] *= l;
  a[1] *= l;
  a[2] *= l;
  a[3] *= l;
  return a;
}

/**
 * Calculates the distance between two vectors.
 * @param {vec4} a
 * @param {vec4} b
 * @returns {number}
 */
export function distance(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const dz = b[2] - a[2];
  const dw = b[3] - a[3];
  return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
}

/**
 * Calculates the squared distance between two vectors.
 * @param {vec4} a
 * @param {vec4} b
 * @returns {number}
 */
export function distanceSq(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const dz = b[2] - a[2];
  const dw = b[3] - a[3];
  return dx * dx + dy * dy + dz * dz + dw * dw;
}

/**
 * Limits a vector to a length.
 * @param {vec4} a
 * @param {number} n
 * @returns {vec4}
 */
export function limit(a, n) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];

  const dsq = x * x + y * y + z * z + w * w;
  const lsq = n * n;

  if (lsq > 0 && dsq > lsq) {
    const nd = n / Math.sqrt(dsq);
    a[0] *= nd;
    a[1] *= nd;
    a[2] *= nd;
    a[3] *= nd;
  }

  return a;
}

/**
 * Linearly interpolates between two vectors.
 * @param {vec4} a
 * @param {vec4} b
 * @param {number} n
 * @returns {vec4}
 */
export function lerp(a, b, n) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];

  a[0] = x + (b[0] - x) * n;
  a[1] = y + (b[1] - y) * n;
  a[2] = z + (b[2] - z) * n;
  a[3] = w + (b[3] - w) * n;

  return a;
}

/**
 * Prints a vector to a string.
 * @param {vec4} a
 * @param {number} [precision=4]
 * @returns {string}
 */
export function toString(a, precision = 4) {
  const scale = 10 ** precision;
  // prettier-ignore
  return `[${Math.floor(a[0] * scale) / scale}, ${Math.floor(a[1] * scale) / scale}, ${Math.floor(a[2] * scale) / scale}, ${Math.floor(a[3] * scale) / scale}]`;
}
