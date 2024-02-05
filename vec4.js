/** @module vec4 */

/**
 * Returns a new vec4 at 0, 0, 0, 1.
 * @returns {import("./types.js").vec4}
 */
export function create() {
  return [0, 0, 0, 1];
}

/**
 * Returns a copy of a vector.
 * @param {import("./types.js").vec4} a
 * @returns {import("./types.js").vec4}
 */
export function copy(a) {
  return a.slice();
}

/**
 * Sets a vector to another vector.
 * @param {import("./types.js").vec4} a
 * @param {import("./types.js").vec4} b
 * @returns {import("./types.js").vec4}
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
 * @param {import("./types.js").vec4} a
 * @param {import("./types.js").vec4} b
 * @returns {boolean}
 */
export function equals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Adds a vector to another.
 * @param {import("./types.js").vec4} a
 * @param {import("./types.js").vec4} b
 * @returns {import("./types.js").vec4}
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
 * @param {import("./types.js").vec4} a
 * @param {import("./types.js").vec4} b
 * @returns {import("./types.js").vec4}
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
 * @param {import("./types.js").vec4} a
 * @param {number} s
 * @returns {import("./types.js").vec4}
 */
export function scale(a, s) {
  a[0] *= s;
  a[1] *= s;
  a[2] *= s;
  a[3] *= s;
  return a;
}

/**
 * Adds two vectors after scaling the second one.
 * @param {import("./types.js").vec4} a
 * @param {import("./types.js").vec4} b
 * @param {number} s
 * @returns {import("./types.js").vec4}
 */
export function addScaled(a, b, s) {
  a[0] += b[0] * s;
  a[1] += b[1] * s;
  a[2] += b[2] * s;
  a[3] += b[3] * s;

  return a;
}

/**
 * Create a vec4 from vec3.
 * @param {import("./types.js").vec4} a
 * @param {import("./types.js").vec3} b
 * @returns {import("./types.js").vec4}
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
 * @param {import("./types.js").vec4} a
 * @param {import("./types.js").mat4} m
 * @returns {import("./types.js").vec4}
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
 * Linearly interpolates between two vectors.
 * @param {import("./types.js").vec4} a
 * @param {import("./types.js").vec4} b
 * @param {number} t
 * @returns {import("./types.js").vec4}
 */
export function lerp(a, b, t) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];

  a[0] = x + (b[0] - x) * t;
  a[1] = y + (b[1] - y) * t;
  a[2] = z + (b[2] - z) * t;
  a[3] = w + (b[3] - w) * t;

  return a;
}

/**
 * Prints a vector to a string.
 * @param {import("./types.js").vec4} a
 * @param {number} [precision=4]
 * @returns {string}
 */
export function toString(a, precision = 4) {
  const scale = 10 ** precision;
  // prettier-ignore
  return `[${Math.floor(a[0] * scale) / scale}, ${Math.floor(a[1] * scale) / scale}, ${Math.floor(a[2] * scale) / scale}, ${Math.floor(a[3] * scale) / scale}]`;
}
