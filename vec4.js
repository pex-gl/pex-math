/**
 * @module vec4
 */

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
export function copy(a) {
  return a.slice();
}

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
