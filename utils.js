/**
 * @module utils
 */

/**
 * @typedef {number} Degrees
 */

/**
 * @typedef {number} Radians
 */

/**
 * @constant {number}
 */
export const EPSILON = 0.000001;

/**
 * Linear interpolation between two numbers.
 * @param {number} a
 * @param {number} b
 * @param {number} n
 * @returns {number}
 */
export function lerp(a, b, n) {
  return a + (b - a) * n;
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
export function map(n, inStart, inEnd, outStart, outEnd) {
  return outStart + ((outEnd - outStart) * (n - inStart)) / (inEnd - inStart);
}

/**
 * Transforms degrees into radians.
 * @param {Degrees} degrees
 * @returns {Radians}
 */
export function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

/**
 * Transforms radians into degrees.
 * @param {Radians} radians
 * @returns {Degrees}
 */
export function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

/**
 * Returns the sign of a number.
 * @param {number} n
 * @returns {number}
 */
export function sign(n) {
  return n / Math.abs(n);
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
