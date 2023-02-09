/** @module avec3 */

/**
 * Sets a vector components.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
export function set3(a, i, x, y, z) {
  a[i * 3 + 0] = x;
  a[i * 3 + 1] = y;
  a[i * 3 + 2] = z;
}

/**
 * Sets a vector to another vector.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */
export function set(a, i, b, j) {
  a[i * 3] = b[j * 3];
  a[i * 3 + 1] = b[j * 3 + 1];
  a[i * 3 + 2] = b[j * 3 + 2];
}

/**
 * Compares two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @returns {boolean}
 */
export function equals(a, i, b, j) {
  return (
    a[i * 3] === b[j * 3] &&
    a[i * 3 + 1] === b[j * 3 + 1] &&
    a[i * 3 + 2] === b[j * 3 + 2]
  );
}

/**
 * Adds a vector to another.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */
export function add(a, i, b, j) {
  a[i * 3] += b[j * 3];
  a[i * 3 + 1] += b[j * 3 + 1];
  a[i * 3 + 2] += b[j * 3 + 2];
}

/**
 * Subtracts a vector from another.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */
export function sub(a, i, b, j) {
  a[i * 3] -= b[j * 3];
  a[i * 3 + 1] -= b[j * 3 + 1];
  a[i * 3 + 2] -= b[j * 3 + 2];
}

/**
 * Scales a vector by a number.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {number} s
 */
export function scale(a, i, s) {
  a[i * 3] *= s;
  a[i * 3 + 1] *= s;
  a[i * 3 + 2] *= s;
}

/**
 * Adds two vectors after scaling the second one.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @param {number} s
 */
export function addScaled(a, i, b, j, s) {
  a[i * 3] += b[j * 3] * s;
  a[i * 3 + 1] += b[j * 3 + 1] * s;
  a[i * 3 + 2] += b[j * 3 + 2] * s;
}

/**
 * Multiplies a vector by a matrix.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").amat4} m
 * @param {number} j
 * @returns {import("./types.js").avec3}
 */
export function multMat4(a, i, m, j) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];

  a[i * 3] =
    m[j * 16 + 0] * x + m[j * 16 + 4] * y + m[j * 16 + 8] * z + m[j * 16 + 12];
  a[i * 3 + 1] =
    m[j * 16 + 1] * x + m[j * 16 + 5] * y + m[j * 16 + 9] * z + m[j * 16 + 13];
  a[i * 3 + 2] =
    m[j * 16 + 2] * x + m[j * 16 + 6] * y + m[j * 16 + 10] * z + m[j * 16 + 14];
}

/**
 * Multiplies a vector by a quaternion.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").aquat} q
 * @param {number} j
 * @returns {import("./types.js").avec3}
 */
export function multQuat(a, i, q, j) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];

  const qx = q[j * 4];
  const qy = q[j * 4 + 1];
  const qz = q[j * 4 + 2];
  const qw = q[j * 4 + 3];

  const ix = qw * x + qy * z - qz * y;
  const iy = qw * y + qz * x - qx * z;
  const iz = qw * z + qx * y - qy * x;
  const iw = -qx * x - qy * y - qz * z;

  a[i * 3] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  a[i * 3 + 1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  a[i * 3 + 2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;

  return a;
}

/**
 * Calculates the dot product of two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */
export function dot(a, i, b, j) {
  return (
    a[i * 3] * b[j * 3] +
    a[i * 3 + 1] * b[j * 3 + 1] +
    a[i * 3 + 2] * b[j * 3 + 2]
  );
}

/**
 * Calculates the cross product of two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 */
export function cross(a, i, b, j) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];
  const vx = b[j * 3];
  const vy = b[j * 3 + 1];
  const vz = b[j * 3 + 2];

  a[i * 3] = y * vz - vy * z;
  a[i * 3 + 1] = z * vx - vz * x;
  a[i * 3 + 2] = x * vy - vx * y;
}

/**
 * Calculates the length of a vector.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @returns {number}
 */
export function length(a, i) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared length of a vector.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @returns {number}
 */
export function lengthSq(a, i) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];
  return x * x + y * y + z * z;
}

/**
 * Normalises a vector.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 */
export function normalize(a, i) {
  const lenSq =
    a[i * 3] * a[i * 3] +
    a[i * 3 + 1] * a[i * 3 + 1] +
    a[i * 3 + 2] * a[i * 3 + 2];
  if (lenSq > 0) {
    const len = Math.sqrt(lenSq);
    a[i * 3] /= len;
    a[i * 3 + 1] /= len;
    a[i * 3 + 2] /= len;
  }
}

/**
 * Calculates the distance between two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @returns {number}
 */
export function distance(a, i, b, j) {
  const dx = b[j * 3] - a[i * 3];
  const dy = b[j * 3 + 1] - a[i * 3 + 1];
  const dz = b[j * 3 + 2] - a[i * 3 + 2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Calculates the squared distance between two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @returns {number}
 */
export function distanceSq(a, i, b, j) {
  const dx = b[j * 3] - a[i * 3];
  const dy = b[j * 3 + 1] - a[i * 3 + 1];
  const dz = b[j * 3 + 2] - a[i * 3 + 2];
  return dx * dx + dy * dy + dz * dz;
}

/**
 * Limits a vector to a length.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {number} len
 */
export function limit(a, i, len) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];

  const dsq = x * x + y * y + z * z;
  const lsq = len * len;

  if (lsq > 0 && dsq > lsq) {
    const nd = len / Math.sqrt(dsq);
    a[i * 3] *= nd;
    a[i * 3 + 1] *= nd;
    a[i * 3 + 2] *= nd;
  }
}

/**
 * Linearly interpolates between two vectors.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {import("./types.js").avec3} b
 * @param {number} j
 * @param {number} t
 */
export function lerp(a, i, b, j, t) {
  const x = a[i * 3];
  const y = a[i * 3 + 1];
  const z = a[i * 3 + 2];

  a[i * 3] = x + (b[j * 3] - x) * t;
  a[i * 3 + 1] = y + (b[j * 3 + 1] - y) * t;
  a[i * 3 + 2] = z + (b[j * 3 + 2] - z) * t;
}

/**
 * Prints a vector to a string.
 * @param {import("./types.js").avec3} a
 * @param {number} i
 * @param {number} [precision=4]
 * @returns {string}
 */
export function toString(a, i, precision = 4) {
  const scale = 10 ** precision;
  // prettier-ignore
  return `[${Math.floor(a[i * 3] * scale) / scale}, ${Math.floor(a[i * 3 + 1] * scale) / scale}, ${Math.floor(a[i * 3 + 2] * scale) / scale}]`;
}
