/**
 * @module mat4
 */
import { EPSILON } from "./utils.js";

/**
 * Returns a 4x4 identity matrix.
 *
 * Row major memory layout:
 *
 * ```
 *  0   1   2   3
 *  4   5   6   7
 *  8   9  10  11
 * 12  13  14  15
 * ```
 *
 * Equivalent to the column major OpenGL spec:
 *
 * ```
 *  0   4   8  12
 *  1   5   9  13
 *  2   6  10  14
 *  3   7  11  15
 *
 *  m00 m10 m20 m30
 *  m01 m11 m21 m31
 *  m02 m12 m22 m32
 *  m03 m13 m23 m33
 * ```
 * @returns {mat4}
 */
export function create() {
  // prettier-ignore
  return [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]
}

/**
 * Sets a matrix to the identity matrix.
 * @param {mat4} a
 * @returns {mat4}
 */
export function identity(a) {
  a[0] = a[5] = a[10] = a[15] = 1;
  a[1] =
    a[2] =
    a[3] =
    a[4] =
    a[6] =
    a[7] =
    a[8] =
    a[9] =
    a[11] =
    a[12] =
    a[13] =
    a[14] =
      0;
  return a;
}

/**
 * Returns a copy of a matrix.
 * @param {mat4} a
 * @returns {mat4}
 */
export function copy(a) {
  return a.slice();
}

/**
 * Sets a matrix from another matrix.
 * @param {mat4} a
 * @param {mat4} b
 * @returns {mat4}
 */
export function set(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  a[3] = b[3];
  a[4] = b[4];
  a[5] = b[5];
  a[6] = b[6];
  a[7] = b[7];
  a[8] = b[8];
  a[9] = b[9];
  a[10] = b[10];
  a[11] = b[11];
  a[12] = b[12];
  a[13] = b[13];
  a[14] = b[14];
  a[15] = b[15];
  return a;
}

/**
 * Compares two matrices.
 * @param {mat4} a
 * @param {mat4} b
 * @returns {boolean}
 */
export function equals(a, b) {
  return (
    a[0] === b[0] &&
    a[1] === b[1] &&
    a[2] === b[2] &&
    a[3] === b[3] &&
    a[4] === b[4] &&
    a[5] === b[5] &&
    a[6] === b[6] &&
    a[7] === b[7] &&
    a[8] === b[8] &&
    a[9] === b[9] &&
    a[10] === b[10] &&
    a[11] === b[11] &&
    a[12] === b[12] &&
    a[13] === b[13] &&
    a[14] === b[14] &&
    a[15] === b[15]
  );
}

/**
 * @private
 */
export function _mult16(
  a,
  b00,
  b01,
  b02,
  b03,
  b10,
  b11,
  b12,
  b13,
  b20,
  b21,
  b22,
  b23,
  b30,
  b31,
  b32,
  b33
) {
  const a00 = a[0];
  const a01 = a[1];
  const a02 = a[2];
  const a03 = a[3];
  const a10 = a[4];
  const a11 = a[5];
  const a12 = a[6];
  const a13 = a[7];
  const a20 = a[8];
  const a21 = a[9];
  const a22 = a[10];
  const a23 = a[11];
  const a30 = a[12];
  const a31 = a[13];
  const a32 = a[14];
  const a33 = a[15];

  a[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
  a[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
  a[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
  a[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;

  a[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
  a[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
  a[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
  a[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;

  a[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
  a[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
  a[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
  a[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;

  a[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
  a[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
  a[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
  a[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;

  return a;
}

/**
 * Multiplies two matrices.
 * @param {mat4} a
 * @param {mat4} b
 * @returns {mat4}
 */
export function mult(a, b) {
  const a00 = a[0];
  const a01 = a[1];
  const a02 = a[2];
  const a03 = a[3];
  const a10 = a[4];
  const a11 = a[5];
  const a12 = a[6];
  const a13 = a[7];
  const a20 = a[8];
  const a21 = a[9];
  const a22 = a[10];
  const a23 = a[11];
  const a30 = a[12];
  const a31 = a[13];
  const a32 = a[14];
  const a33 = a[15];

  let b0 = b[0];
  let b1 = b[1];
  let b2 = b[2];
  let b3 = b[3];
  a[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  a[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  a[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  a[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  a[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  a[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  a[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  a[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  a[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  a[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  a[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  a[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  a[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  a[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  a[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  a[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  return a;
}

/**
 * Inverts a matrix.
 * @param {mat4} a
 * @returns {mat4}
 */
export function invert(a) {
  const a00 = a[0];
  const a10 = a[1];
  const a20 = a[2];
  const a30 = a[3];
  const a01 = a[4];
  const a11 = a[5];
  const a21 = a[6];
  const a31 = a[7];
  const a02 = a[8];
  const a12 = a[9];
  const a22 = a[10];
  const a32 = a[11];
  const a03 = a[12];
  const a13 = a[13];
  const a23 = a[14];
  const a33 = a[15];

  // TODO: add caching

  a[0] =
    a11 * a22 * a33 -
    a11 * a32 * a23 -
    a12 * a21 * a33 +
    a12 * a31 * a23 +
    a13 * a21 * a32 -
    a13 * a31 * a22;
  a[4] =
    -a01 * a22 * a33 +
    a01 * a32 * a23 +
    a02 * a21 * a33 -
    a02 * a31 * a23 -
    a03 * a21 * a32 +
    a03 * a31 * a22;
  a[8] =
    a01 * a12 * a33 -
    a01 * a32 * a13 -
    a02 * a11 * a33 +
    a02 * a31 * a13 +
    a03 * a11 * a32 -
    a03 * a31 * a12;
  a[12] =
    -a01 * a12 * a23 +
    a01 * a22 * a13 +
    a02 * a11 * a23 -
    a02 * a21 * a13 -
    a03 * a11 * a22 +
    a03 * a21 * a12;

  a[1] =
    -a10 * a22 * a33 +
    a10 * a32 * a23 +
    a12 * a20 * a33 -
    a12 * a30 * a23 -
    a13 * a20 * a32 +
    a13 * a30 * a22;
  a[5] =
    a00 * a22 * a33 -
    a00 * a32 * a23 -
    a02 * a20 * a33 +
    a02 * a30 * a23 +
    a03 * a20 * a32 -
    a03 * a30 * a22;
  a[9] =
    -a00 * a12 * a33 +
    a00 * a32 * a13 +
    a02 * a10 * a33 -
    a02 * a30 * a13 -
    a03 * a10 * a32 +
    a03 * a30 * a12;
  a[13] =
    a00 * a12 * a23 -
    a00 * a22 * a13 -
    a02 * a10 * a23 +
    a02 * a20 * a13 +
    a03 * a10 * a22 -
    a03 * a20 * a12;

  a[2] =
    a10 * a21 * a33 -
    a10 * a31 * a23 -
    a11 * a20 * a33 +
    a11 * a30 * a23 +
    a13 * a20 * a31 -
    a13 * a30 * a21;
  a[6] =
    -a00 * a21 * a33 +
    a00 * a31 * a23 +
    a01 * a20 * a33 -
    a01 * a30 * a23 -
    a03 * a20 * a31 +
    a03 * a30 * a21;
  a[10] =
    a00 * a11 * a33 -
    a00 * a31 * a13 -
    a01 * a10 * a33 +
    a01 * a30 * a13 +
    a03 * a10 * a31 -
    a03 * a30 * a11;
  a[14] =
    -a00 * a11 * a23 +
    a00 * a21 * a13 +
    a01 * a10 * a23 -
    a01 * a20 * a13 -
    a03 * a10 * a21 +
    a03 * a20 * a11;

  a[3] =
    -a10 * a21 * a32 +
    a10 * a31 * a22 +
    a11 * a20 * a32 -
    a11 * a30 * a22 -
    a12 * a20 * a31 +
    a12 * a30 * a21;
  a[7] =
    a00 * a21 * a32 -
    a00 * a31 * a22 -
    a01 * a20 * a32 +
    a01 * a30 * a22 +
    a02 * a20 * a31 -
    a02 * a30 * a21;
  a[11] =
    -a00 * a11 * a32 +
    a00 * a31 * a12 +
    a01 * a10 * a32 -
    a01 * a30 * a12 -
    a02 * a10 * a31 +
    a02 * a30 * a11;
  a[15] =
    a00 * a11 * a22 -
    a00 * a21 * a12 -
    a01 * a10 * a22 +
    a01 * a20 * a12 +
    a02 * a10 * a21 -
    a02 * a20 * a11;

  let det = a00 * a[0] + a10 * a[4] + a20 * a[8] + a30 * a[12];

  if (det === 0) {
    return null;
  }

  det = 1 / det;

  a[0] *= det;
  a[1] *= det;
  a[2] *= det;
  a[3] *= det;
  a[4] *= det;
  a[5] *= det;
  a[6] *= det;
  a[7] *= det;
  a[8] *= det;
  a[9] *= det;
  a[10] *= det;
  a[11] *= det;
  a[12] *= det;
  a[13] *= det;
  a[14] *= det;
  a[15] *= det;

  return a;
}

/**
 * Transposes a matrix.
 * @param {mat4} a
 * @returns {mat4}
 */
export function transpose(a) {
  const a01 = a[1];
  const a02 = a[2];
  const a03 = a[3];
  const a12 = a[6];
  const a13 = a[7];
  const a20 = a[8];
  const a21 = a[9];
  const a23 = a[11];
  const a30 = a[12];
  const a31 = a[13];
  const a32 = a[14];

  // 1st row - keeping a00
  a[1] = a[4];
  a[2] = a20;
  a[3] = a30;
  // 2nd row - keeping a11
  a[4] = a01;
  a[6] = a21;
  a[7] = a31;
  // 3rd row - keeping a22
  a[8] = a02;
  a[9] = a12;
  a[11] = a32;
  // 4th row - keeping a33
  a[12] = a03;
  a[13] = a13;
  a[14] = a23;

  return a;
}

/**
 * @private
 */
export function _scale3(a, x, y, z) {
  a[0] *= x;
  a[1] *= x;
  a[2] *= x;
  a[3] *= x;
  a[4] *= y;
  a[5] *= y;
  a[6] *= y;
  a[7] *= y;
  a[8] *= z;
  a[9] *= z;
  a[10] *= z;
  a[11] *= z;
  return a;
}

/**
 * Scales a matrix by a vector.
 * @param {mat4} a
 * @param {vec3} v
 * @returns {mat4}
 */
export function scale(a, v) {
  return _scale3(a, v[0], v[1], v[2]);
}

/**
 * @private
 */
export function _translate3(a, x, y, z) {
  a[12] += a[0] * x + a[4] * y + a[8] * z;
  a[13] += a[1] * x + a[5] * y + a[9] * z;
  a[14] += a[2] * x + a[6] * y + a[10] * z;
  a[15] += a[3] * x + a[7] * y + a[11] * z;
  return a;
}

/**
 * Translates a matrix by a vector.
 * @param {mat4} a
 * @param {vec3} v
 * @returns {mat4}
 */
export function translate(a, v) {
  return _translate3(a, v[0], v[1], v[2]);
}

/**
 * @private
 */
export function _rotate3(a, r, x, y, z) {
  let len = Math.sqrt(x * x + y * y + z * z);

  if (len < EPSILON) {
    return null;
  }

  len = 1 / len;

  x *= len;
  y *= len;
  z *= len;

  const s = Math.sin(r);
  const c = Math.cos(r);
  const t = 1 - c;

  const a00 = a[0];
  const a01 = a[1];
  const a02 = a[2];
  const a03 = a[3];
  const a10 = a[4];
  const a11 = a[5];
  const a12 = a[6];
  const a13 = a[7];
  const a20 = a[8];
  const a21 = a[9];
  const a22 = a[10];
  const a23 = a[11];

  const b00 = x * x * t + c;
  const b01 = y * x * t + z * s;
  const b02 = z * x * t - y * s;
  const b10 = x * y * t - z * s;
  const b11 = y * y * t + c;
  const b12 = z * y * t + x * s;
  const b20 = x * z * t + y * s;
  const b21 = y * z * t - x * s;
  const b22 = z * z * t + c;

  a[0] = a00 * b00 + a10 * b01 + a20 * b02;
  a[1] = a01 * b00 + a11 * b01 + a21 * b02;
  a[2] = a02 * b00 + a12 * b01 + a22 * b02;
  a[3] = a03 * b00 + a13 * b01 + a23 * b02;
  a[4] = a00 * b10 + a10 * b11 + a20 * b12;
  a[5] = a01 * b10 + a11 * b11 + a21 * b12;
  a[6] = a02 * b10 + a12 * b11 + a22 * b12;
  a[7] = a03 * b10 + a13 * b11 + a23 * b12;
  a[8] = a00 * b20 + a10 * b21 + a20 * b22;
  a[9] = a01 * b20 + a11 * b21 + a21 * b22;
  a[10] = a02 * b20 + a12 * b21 + a22 * b22;
  a[11] = a03 * b20 + a13 * b21 + a23 * b22;
  return a;
}

/**
 * Rotates a matrix by an angle at an axis.
 * @param {mat4} a
 * @param {Radians} r
 * @param {vec3} v
 * @returns {mat4}
 */
export function rotate(a, r, v) {
  return _rotate3(a, r, v[0], v[1], v[2]);
}

/**
 * Sets matrix to a quaternion.
 * @param {mat4} a
 * @param {quat} q
 * @returns {mat4}
 */
export function fromQuat(a, q) {
  const x = q[0];
  const y = q[1];
  const z = q[2];
  const w = q[3];

  const x2 = x + x;
  const y2 = y + y;
  const z2 = z + z;

  const xx = x * x2;
  const xy = x * y2;
  const xz = x * z2;

  const yy = y * y2;
  const yz = y * z2;
  const zz = z * z2;

  const wx = w * x2;
  const wy = w * y2;
  const wz = w * z2;

  a[0] = 1 - (yy + zz);
  a[4] = xy - wz;
  a[8] = xz + wy;

  a[1] = xy + wz;
  a[5] = 1 - (xx + zz);
  a[9] = yz - wx;

  a[2] = xz - wy;
  a[6] = yz + wx;
  a[10] = 1 - (xx + yy);

  a[3] = a[7] = a[11] = a[12] = a[13] = a[14] = 0;
  a[15] = 1;

  return a;
}

const TEMP_0 = create();
/**
 * Sets matrix to the TRS matrix.
 * @param {mat4} a
 * @param {vec3} translation
 * @param {quat} rotation
 * @param {vec3} scaling
 * @returns {mat4}
 */
export function fromTranslationRotationScale(
  a,
  translation,
  rotation,
  scaling
) {
  identity(a);
  translate(a, translation);
  mult(a, fromQuat(TEMP_0, rotation));
  scale(a, scaling);

  return a;
}

/**
 * Sets a 4x4 matrix to a 3x3 matrix.
 * @param {mat4} a
 * @param {mat3} b
 * @returns {mat4}
 */
export function fromMat3(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];

  a[4] = b[3];
  a[5] = b[4];
  a[6] = b[5];

  a[8] = b[6];
  a[9] = b[7];
  a[10] = b[8];

  a[3] = a[7] = a[11] = a[12] = a[13] = a[14] = 0;
  a[15] = 1;

  return a;
}

/**
 * Create a frustum matrix.
 * @param {mat4} a
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 * @returns {mat4}
 */
export function frustum(a, left, right, bottom, top, near, far) {
  const rl = 1 / (right - left);
  const tb = 1 / (top - bottom);
  const nf = 1 / (near - far);

  const near2 = near * 2;

  a[0] = near2 * rl;
  a[1] = a[2] = 0;
  a[3] = 0;
  a[4] = 0;
  a[5] = near2 * tb;
  a[6] = 0;
  a[7] = 0;
  a[8] = (right + left) * rl;
  a[9] = (top + bottom) * tb;
  a[10] = (far + near) * nf;
  a[11] = -1;
  a[12] = 0;
  a[13] = 0;
  a[14] = far * near2 * nf;
  a[15] = 0;

  return a;
}

/**
 * Create a perspective matrix.
 * @param {mat4} a
 * @param {Radians} fovy
 * @param {number} aspectRatio
 * @param {number} near
 * @param {number} far
 * @returns {mat4}
 */
export function perspective(a, fovy, aspectRatio, near, far) {
  const f = 1 / Math.tan(fovy / 2);
  const nf = 1 / (near - far);

  a[1] =
    a[2] =
    a[3] =
    a[4] =
    a[6] =
    a[7] =
    a[8] =
    a[9] =
    a[12] =
    a[13] =
    a[15] =
      0;

  a[0] = f / aspectRatio;
  a[5] = f;
  a[10] = (far + near) * nf;
  a[11] = -1;
  a[14] = 2 * far * near * nf;

  return a;
}

/**
 * Create a orthographic matrix.
 * @param {mat4} a
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 * @returns {mat4}
 */
export function ortho(a, left, right, bottom, top, near, far) {
  const lr = left - right;
  const bt = bottom - top;
  const nf = near - far;

  a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = 0;

  a[0] = -2 / lr;
  a[5] = -2 / bt;
  a[10] = 2 / nf;

  a[12] = (left + right) / lr;
  a[13] = (top + bottom) / bt;
  a[14] = (far + near) / nf;
  a[15] = 1;

  return a;
}

/**
 * @private
 */
export function _lookAt9(
  a,
  eyex,
  eyey,
  eyez,
  targetx,
  targety,
  targetz,
  upx,
  upy,
  upz
) {
  if (
    Math.abs(eyex - targetx) < EPSILON &&
    Math.abs(eyey - targety) < EPSILON &&
    Math.abs(eyez - targetz) < EPSILON
  ) {
    return identity(a);
  }

  let z0 = eyex - targetx;
  let z1 = eyey - targety;
  let z2 = eyez - targetz;

  let len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  let x0 = upy * z2 - upz * z1;
  let x1 = upz * z0 - upx * z2;
  let x2 = upx * z1 - upy * z0;

  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

  if (len) {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  let y0 = z1 * x2 - z2 * x1;
  let y1 = z2 * x0 - z0 * x2;
  let y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

  if (len) {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  a[0] = x0;
  a[1] = y0;
  a[2] = z0;
  a[3] = 0;
  a[4] = x1;
  a[5] = y1;
  a[6] = z1;
  a[7] = 0;
  a[8] = x2;
  a[9] = y2;
  a[10] = z2;
  a[11] = 0;
  a[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  a[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  a[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  a[15] = 1;

  return a;
}

/**
 * Calculates a lookAt matrix from a position, target and up vectors.
 * @param {mat4} a
 * @param {vec3} from
 * @param {vec3} to
 * @param {vec3} up
 * @returns {mat4}
 */
export function lookAt(a, from, to, up) {
  return _lookAt9(
    a,
    from[0],
    from[1],
    from[2],
    to[0],
    to[1],
    to[2],
    up[0],
    up[1],
    up[2]
  );
}
