/** @module utils */

/**
 * @constant {number}
 */
export const EPSILON = 0.000001;

/**
 * @constant {import("./types.js").vec3}
 */
export const Y_UP = Object.freeze([0, 1, 0]);

/**
 * Linear interpolation between two numbers.
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @returns {number}
 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * Clamps a number between two numbers.
 * @param {number} n
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}

/**
 * Smooth Hermite interpolation between 0 and 1
 * @param {number} n
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function smoothstep(n, min, max) {
  n = clamp((n - min) / (max - min), 0, 1);
  return n * n * (3 - 2 * n);
}

/**
 * Maps a number from one range to another.
 * @param {number} n
 * @param {number} inStart
 * @param {number} inEnd
 * @param {number} outStart
 * @param {number} outEnd
 * @returns {number}
 */
export function remap(n, inStart, inEnd, outStart, outEnd) {
  return outStart + ((outEnd - outStart) * (n - inStart)) / (inEnd - inStart);
}

/**
 * @deprecated Use "remap()"
 * @ignore
 */
export function map(...args) {
  return remap(...args);
}

/**
 * Transforms degrees into radians.
 * @param {import("./types.js").Degrees} degrees
 * @returns {import("./types.js").Radians}
 */
export function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

/**
 * Transforms radians into degrees.
 * @param {import("./types.js").Radians} radians
 * @returns {import("./types.js").Degrees}
 */
export function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

/**
 * Check if a number is a power of two
 * @param {number} a
 * @returns {boolean}
 */
export function isPowerOfTwo(a) {
  return (a & (a - 1)) === 0;
}

/**
 * Returns the next highest power of two.
 * @param {number} n
 * @returns {number}
 */
export function nextPowerOfTwo(n) {
  if (n === 0) return 1;
  n--;
  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  return n + 1;
}

/**
 * Returns the previous power of two.
 * @param {number} n
 * @returns {number}
 */
export function prevPowerOfTwo(n) {
  if (n <= 1) return 0;
  return nextPowerOfTwo(n) / 2;
}
