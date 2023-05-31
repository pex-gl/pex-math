/** @module avec4 */

/**
 * Sets a vector components.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 */
export function set4(a, i, x, y, z, w) {
  a[i * 4 + 0] = x;
  a[i * 4 + 1] = y;
  a[i * 4 + 2] = z;
  a[i * 4 + 3] = w;
}

/**
 * Sets a vector to another vector.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {import("./types.js").avec4} b
 * @param {number} j
 */
export function set(a, i, b, j) {
  a[i * 4] = b[j * 4];
  a[i * 4 + 1] = b[j * 4 + 1];
  a[i * 4 + 2] = b[j * 4 + 2];
  a[i * 4 + 3] = b[j * 4 + 3];
}

/**
 * Compares two vectors.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {import("./types.js").avec4} b
 * @param {number} j
 * @returns {boolean}
 */
export function equals(a, i, b, j) {
  return (
    a[i * 4] === b[j * 4] &&
    a[i * 4 + 1] === b[j * 4 + 1] &&
    a[i * 4 + 2] === b[j * 4 + 2] &&
    a[i * 4 + 3] === b[j * 4 + 3]
  );
}

/**
 * Adds a vector to another.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {import("./types.js").avec4} b
 * @param {number} j
 */
export function add(a, i, b, j) {
  a[i * 4] += b[j * 4];
  a[i * 4 + 1] += b[j * 4 + 1];
  a[i * 4 + 2] += b[j * 4 + 2];
  a[i * 4 + 3] += b[j * 4 + 3];
}

/**
 * Subtracts a vector from another.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {import("./types.js").avec4} b
 * @param {number} j
 */
export function sub(a, i, b, j) {
  a[i * 4] -= b[j * 4];
  a[i * 4 + 1] -= b[j * 4 + 1];
  a[i * 4 + 2] -= b[j * 4 + 2];
  a[i * 4 + 3] -= b[j * 4 + 3];
}

/**
 * Scales a vector by a number.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {number} s
 */
export function scale(a, i, s) {
  a[i * 4] *= s;
  a[i * 4 + 1] *= s;
  a[i * 4 + 2] *= s;
  a[i * 4 + 3] *= s;
}

/**
 * Adds two vectors after scaling the second one.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {import("./types.js").avec4} b
 * @param {number} j
 * @param {number} s
 */
export function addScaled(a, i, b, j, s) {
  a[i * 4] += b[j * 4] * s;
  a[i * 4 + 1] += b[j * 4 + 1] * s;
  a[i * 4 + 2] += b[j * 4 + 2] * s;
  a[i * 4 + 3] += b[j * 4 + 3] * s;
}

/**
 * Multiplies a vector with a matrix.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {import("./types.js").amat4} m
 * @param {number} j
 */
export function multMat4(a, i, m, j) {
  const x = a[i * 4];
  const y = a[i * 4 + 1];
  const z = a[i * 4 + 2];
  const w = a[i * 4 + 3];
  a[i * 4] =
    m[j * 16 + 0] * x +
    m[j * 16 + 4] * y +
    m[j * 16 + 8] * z +
    m[j * 16 + 12] * w;
  a[i * 4 + 1] =
    m[j * 16 + 1] * x +
    m[j * 16 + 5] * y +
    m[j * 16 + 9] * z +
    m[j * 16 + 13] * w;
  a[i * 4 + 2] =
    m[j * 16 + 2] * x +
    m[j * 16 + 6] * y +
    m[j * 16 + 10] * z +
    m[j * 16 + 14] * w;
  a[i * 4 + 3] =
    m[j * 16 + 3] * x +
    m[j * 16 + 7] * y +
    m[j * 16 + 11] * z +
    m[j * 16 + 15] * w;
}

/**
 * Linearly interpolates between two vectors.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {import("./types.js").avec4} b
 * @param {number} j
 * @param {number} t
 */
export function lerp(a, i, b, j, t) {
  const x = a[i * 4];
  const y = a[i * 4 + 1];
  const z = a[i * 4 + 2];
  const w = a[i * 4 + 3];

  a[i * 4] = x + (b[j * 4] - x) * t;
  a[i * 4 + 1] = y + (b[j * 4 + 1] - y) * t;
  a[i * 4 + 2] = z + (b[j * 4 + 2] - z) * t;
  a[i * 4 + 3] = w + (b[j * 4 + 3] - w) * t;
}

/**
 * Prints a vector to a string.
 * @param {import("./types.js").avec4} a
 * @param {number} i
 * @param {number} [precision=4]
 * @returns {string}
 */
export function toString(a, i, precision = 4) {
  const scale = 10 ** precision;
  // prettier-ignore
  return `[${Math.floor(a[i * 4] * scale) / scale}, ${Math.floor(a[i * 4 + 1] * scale) / scale}, ${Math.floor(a[i * 4 + 2] * scale) / scale}, ${Math.floor(a[i * 4 + 3] * scale) / scale}]`;
}
