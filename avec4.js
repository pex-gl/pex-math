/** @module avec4 */

export function set4(a, i, x, y, z, w) {
  a[i * 4 + 0] = x;
  a[i * 4 + 1] = y;
  a[i * 4 + 2] = z;
  a[i * 4 + 3] = w;
}

/**
 * Sets a vector to another vector.
 * @param {avec4} a
 * @param {number} i
 * @param {avec4} b
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
 * @param {avec4} a
 * @param {number} i
 * @param {avec4} b
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
 * @param {avec4} a
 * @param {number} i
 * @param {avec4} b
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
 * @param {avec4} a
 * @param {number} i
 * @param {avec4} b
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
 * @param {avec4} a
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
 * @param {avec4} a
 * @param {number} i
 * @param {avec4} b
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
 * Linearly interpolates between two vectors.
 * @param {avec4} a
 * @param {number} i
 * @param {avec4} b
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
 * @param {avec4} a
 * @param {number} i
 * @param {number} [precision=4]
 * @returns {string}
 */
export function toString(a, i, precision = 4) {
  const scale = 10 ** precision;
  // prettier-ignore
  return `[${Math.floor(a[i * 4] * scale) / scale}, ${Math.floor(a[i * 4 + 1] * scale) / scale}, ${Math.floor(a[i * 4 + 2] * scale) / scale}, ${Math.floor(a[i * 4 + 3] * scale) / scale}]`;
}
