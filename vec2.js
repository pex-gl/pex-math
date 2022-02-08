/**
 * @module vec2
 */

/**
 * Returns a new vec2 at 0, 0, 0.
 * @returns {vec2}
 */
export function create() {
  return [0, 0];
}

/**
 * Returns a copy of a vector.
 * @param {vec2} a
 * @returns {vec2}
 */
export function copy(a) {
  return a.slice();
}

/**
 * Sets a vector to another vector.
 * @param {vec2} a
 * @param {vec2} b
 * @returns {vec2}
 */
export function set(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  return a;
}

/**
 * Compares two vectors.
 * @param {vec2} a
 * @param {vec2} b
 * @returns {boolean}
 */
export function equals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Add a vector with another.
 * @param {vec2} a
 * @param {vec2} b
 * @returns {vec2}
 */
export function add(a, b) {
  a[0] += b[0];
  a[1] += b[1];
  return a;
}

/**
 * Subtracts a vector with another.
 * @param {vec2} a
 * @param {vec2} b
 * @returns {vec2}
 */
export function sub(a, b) {
  a[0] -= b[0];
  a[1] -= b[1];
  return a;
}

/**
 * Scales a vector by a number.
 * @param {vec2} a
 * @param {number} n
 * @returns {vec2}
 */
export function scale(a, n) {
  a[0] *= n;
  a[1] *= n;
  return a;
}

/**
 * Adds two vectors after scaling the second one.
 * @param {vec2} a
 * @param {vec2} b
 * @param {number} n
 * @returns {vec2}
 */
export function addScaled(a, b, n) {
  a[0] += b[0] * n;
  a[1] += b[1] * n;

  return a;
}

/**
 * Calculates the dot product of two vectors.
 * @param {vec2} a
 * @param {vec2} b
 * @returns {number}
 */
export function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

/**
 * Calculates the length of a vector.
 * @param {vec2} a
 * @returns {number}
 */
export function length(a) {
  const x = a[0];
  const y = a[1];
  return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a vector.
 * @param {vec2} a
 * @returns {number}
 */
export function lengthSq(a) {
  const x = a[0];
  const y = a[1];
  return x * x + y * y;
}

/**
 * Normalises a vector.
 * @param {vec2} a
 * @returns {vec2}
 */
export function normalize(a) {
  const x = a[0];
  const y = a[1];
  let l = Math.sqrt(x * x + y * y);

  l = 1 / (l || 1);
  a[0] *= l;
  a[1] *= l;
  return a;
}

/**
 * Calculates the distance between two vectors.
 * @param {vec2} a
 * @param {vec2} b
 * @returns {number}
 */
export function distance(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calculates the squared distance between two vectors.
 * @param {vec2} a
 * @param {vec2} b
 * @returns {number}
 */
export function distanceSq(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  return dx * dx + dy * dy;
}

/**
 * Limits a vector to a length.
 * @param {vec2} a
 * @param {vec2} n
 * @returns {vec2}
 */
export function limit(a, n) {
  const x = a[0];
  const y = a[1];

  const dsq = x * x + y * y;
  const lsq = n * n;

  if (lsq > 0 && dsq > lsq) {
    const nd = n / Math.sqrt(dsq);
    a[0] *= nd;
    a[1] *= nd;
  }

  return a;
}

/**
 * Linearly interpolates between two vectors.
 * @param {vec2} a
 * @param {vec2} b
 * @param {number} n
 * @returns {vec2}
 */
export function lerp(a, b, n) {
  const x = a[0];
  const y = a[1];

  a[0] = x + (b[0] - x) * n;
  a[1] = y + (b[1] - y) * n;

  return a;
}

/**
 * Prints a vector to a string.
 * @param {vec2} a
 * @param {number} precision
 * @returns {vec2}
 */
export function toString(a, precision) {
  const scale = 10 ** (precision !== undefined ? precision : 4);
  let s = "[";
  s += `${Math.floor(a[0] * scale) / scale}, `;
  s += `${Math.floor(a[1] * scale) / scale}]`;
  return s;
}
