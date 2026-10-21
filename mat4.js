/** @module mat4 */
import { EPSILON, Y_UP } from "./utils.js";

const TEMP_VEC3 = [0, 0, 0];

// Keeps x = +X for a Y-up view looking straight up or down, continuous with
// tilting it there from the default orientation.
function parallelUpXAxis(z0, z1, z2, upx, upy, upz) {
  const s = upx * z0 + upy * z1 + upz * z2 < 0 ? -1 : 1;
  if (z0 || z1) {
    TEMP_VEC3[0] = s * z1;
    TEMP_VEC3[1] = -s * z0;
  } else {
    TEMP_VEC3[0] = 0;
    TEMP_VEC3[1] = s * z2;
  }
  TEMP_VEC3[2] = 0;
  return TEMP_VEC3;
}

/**
 * Returns a 4x4 identity matrix.
 *
 * Row major memory layout:
 *
 * ```txt
 *  0   1   2   3
 *  4   5   6   7
 *  8   9  10  11
 * 12  13  14  15
 * ```
 *
 * Equivalent to the column major OpenGL spec:
 *
 * ```txt
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
 *
 * @returns {import("./types.js").Mat4}
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
 *
 * @param {import("./types.js").Mat4} a
 * @returns {import("./types.js").Mat4}
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
 *
 * @param {import("./types.js").Mat4} a
 * @returns {import("./types.js").Mat4}
 */
export function copy(a) {
  return a.slice();
}

/**
 * Sets a matrix from another matrix.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Mat4} b
 * @returns {import("./types.js").Mat4}
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
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Mat4} b
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
 * Multiplies two matrices.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Mat4} b
 * @returns {import("./types.js").Mat4}
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
 * Inverts a matrix. Returns null and leaves the matrix unchanged if it is not
 * invertible.
 *
 * @param {import("./types.js").Mat4} a
 * @returns {import("./types.js").Mat4 | null}
 */
export function invert(a) {
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

  const b00 = a00 * a11 - a01 * a10;
  const b01 = a00 * a12 - a02 * a10;
  const b02 = a00 * a13 - a03 * a10;
  const b03 = a01 * a12 - a02 * a11;
  const b04 = a01 * a13 - a03 * a11;
  const b05 = a02 * a13 - a03 * a12;
  const b06 = a20 * a31 - a21 * a30;
  const b07 = a20 * a32 - a22 * a30;
  const b08 = a20 * a33 - a23 * a30;
  const b09 = a21 * a32 - a22 * a31;
  const b10 = a21 * a33 - a23 * a31;
  const b11 = a22 * a33 - a23 * a32;

  let det =
    b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) return null;

  det = 1 / det;

  a[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  a[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  a[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  a[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  a[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  a[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  a[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  a[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  a[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  a[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  a[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  a[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  a[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  a[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  a[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  a[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return a;
}

/**
 * Returns the determinant of a matrix.
 *
 * @param {import("./types.js").Mat4} a
 * @returns {number}
 */
export function determinant(a) {
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

  return (
    (a00 * a11 - a01 * a10) * (a22 * a33 - a23 * a32) -
    (a00 * a12 - a02 * a10) * (a21 * a33 - a23 * a31) +
    (a00 * a13 - a03 * a10) * (a21 * a32 - a22 * a31) +
    (a01 * a12 - a02 * a11) * (a20 * a33 - a23 * a30) -
    (a01 * a13 - a03 * a11) * (a20 * a32 - a22 * a30) +
    (a02 * a13 - a03 * a12) * (a20 * a31 - a21 * a30)
  );
}

/**
 * Transposes a matrix.
 *
 * @param {import("./types.js").Mat4} a
 * @returns {import("./types.js").Mat4}
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
 * Translates a matrix by a vector.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Vec3} v
 * @returns {import("./types.js").Mat4}
 */
export function translate(a, v) {
  const x = v[0];
  const y = v[1];
  const z = v[2];

  a[12] += a[0] * x + a[4] * y + a[8] * z;
  a[13] += a[1] * x + a[5] * y + a[9] * z;
  a[14] += a[2] * x + a[6] * y + a[10] * z;
  a[15] += a[3] * x + a[7] * y + a[11] * z;

  return a;
}

/**
 * Rotates a matrix by an angle at an axis. Returns null and leaves the matrix
 * unchanged if the axis length is near zero.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Radians} r
 * @param {import("./types.js").Vec3} v
 * @returns {import("./types.js").Mat4 | null}
 */
export function rotate(a, r, v) {
  let x = v[0];
  let y = v[1];
  let z = v[2];

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
 * Scales a matrix by a vector.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Vec3} v
 * @returns {import("./types.js").Mat4}
 */
export function scale(a, v) {
  const x = v[0];
  const y = v[1];
  const z = v[2];

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
 * Sets a matrix to a quaternion.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Quat} q
 * @returns {import("./types.js").Mat4}
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

/**
 * Sets a matrix to the TRS matrix.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Vec3} v
 * @param {import("./types.js").Quat} q
 * @param {import("./types.js").Vec3} s
 * @returns {import("./types.js").Mat4}
 */
export function fromTranslationRotationScale(a, v, q, s) {
  // const TEMP_0 = create();
  // identity(a);
  // translate(a, translation);
  // mult(a, fromQuat(TEMP_0, rotation));
  // scale(a, scaling);

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

  a[3] = a[7] = a[11] = 0;
  a[15] = 1;

  a[0] = (1 - (yy + zz)) * s[0];
  a[1] = (xy + wz) * s[0];
  a[2] = (xz - wy) * s[0];

  a[4] = (xy - wz) * s[1];
  a[5] = (1 - (xx + zz)) * s[1];
  a[6] = (yz + wx) * s[1];

  a[8] = (xz + wy) * s[2];
  a[9] = (yz - wx) * s[2];
  a[10] = (1 - (xx + yy)) * s[2];

  a[12] = v[0];
  a[13] = v[1];
  a[14] = v[2];

  return a;
}

/**
 * Sets a 4x4 matrix to a 3x3 matrix.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Mat3} b
 * @returns {import("./types.js").Mat4}
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
 * Creates a frustum matrix with depth mapped to [-1, 1] (WebGL/OpenGL).
 *
 * @param {import("./types.js").Mat4} a
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 * @returns {import("./types.js").Mat4}
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
 * Creates a frustum matrix with depth mapped to [0, 1]
 * (WebGPU/DirectX/Metal/Vulkan).
 *
 * @param {import("./types.js").Mat4} a
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 * @returns {import("./types.js").Mat4}
 */
export function frustumZO(a, left, right, bottom, top, near, far) {
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
  a[10] = far * nf;
  a[11] = -1;
  a[12] = 0;
  a[13] = 0;
  a[14] = far * near * nf;
  a[15] = 0;

  return a;
}

/**
 * Creates a perspective matrix with depth mapped to [-1, 1] (WebGL/OpenGL).
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Radians} fovy
 * @param {number} aspectRatio
 * @param {number} near
 * @param {number} far
 * @returns {import("./types.js").Mat4}
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
 * Creates a perspective matrix with depth mapped to [0, 1]
 * (WebGPU/DirectX/Metal/Vulkan).
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Radians} fovy
 * @param {number} aspectRatio
 * @param {number} near
 * @param {number} far
 * @returns {import("./types.js").Mat4}
 */
export function perspectiveZO(a, fovy, aspectRatio, near, far) {
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
  a[10] = far * nf;
  a[11] = -1;
  a[14] = far * near * nf;

  return a;
}

/**
 * Creates an orthographic matrix with depth mapped to [-1, 1] (WebGL/OpenGL).
 *
 * @param {import("./types.js").Mat4} a
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 * @returns {import("./types.js").Mat4}
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
 * Creates an orthographic matrix with depth mapped to [0, 1]
 * (WebGPU/DirectX/Metal/Vulkan).
 *
 * @param {import("./types.js").Mat4} a
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 * @returns {import("./types.js").Mat4}
 */
export function orthoZO(a, left, right, bottom, top, near, far) {
  const lr = left - right;
  const bt = bottom - top;
  const nf = near - far;

  a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = 0;

  a[0] = -2 / lr;
  a[5] = -2 / bt;
  a[10] = 1 / nf;

  a[12] = (left + right) / lr;
  a[13] = (top + bottom) / bt;
  a[14] = near / nf;
  a[15] = 1;

  return a;
}

/**
 * Calculates a view matrix (world to camera) from position, target and up
 * vectors. To orient an object toward a target, use fromPointToPoint.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Vec3} from
 * @param {import("./types.js").Vec3} to
 * @param {import("./types.js").Vec3} [up=Y_UP]
 * @returns {import("./types.js").Mat4}
 */
export function lookAt(a, from, to, up = Y_UP) {
  const eyex = from[0];
  const eyey = from[1];
  const eyez = from[2];
  const targetx = to[0];
  const targety = to[1];
  const targetz = to[2];
  const upx = up[0];
  const upy = up[1];
  const upz = up[2];

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

  if (!len) {
    const x = parallelUpXAxis(z0, z1, z2, upx, upy, upz);
    x0 = x[0];
    x1 = x[1];
    x2 = x[2];
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  }

  if (len) {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  const y0 = z1 * x2 - z2 * x1;
  const y1 = z2 * x0 - z0 * x2;
  const y2 = z0 * x1 - z1 * x0;

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
 * Sets a matrix from a direction. Note: we assume +Z facing models.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Vec3} direction
 * @param {import("./types.js").Vec3} [up=Y_UP]
 * @returns {import("./types.js").Mat4}
 */
export function fromDirection(a, direction, up = Y_UP) {
  let dir0 = direction[0];
  let dir1 = direction[1];
  let dir2 = direction[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];

  let len = dir0 * dir0 + dir1 * dir1 + dir2 * dir2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    dir0 *= len;
    dir1 *= len;
    dir2 *= len;
  }

  let x0 = upy * dir2 - upz * dir1;
  let x1 = upz * dir0 - upx * dir2;
  let x2 = upx * dir1 - upy * dir0;

  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (!len) {
    const x = parallelUpXAxis(dir0, dir1, dir2, upx, upy, upz);
    x0 = x[0];
    x1 = x[1];
    x2 = x[2];
    len = x0 * x0 + x1 * x1 + x2 * x2;
  }

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  upx = dir1 * x2 - dir2 * x1;
  upy = dir2 * x0 - dir0 * x2;
  upz = dir0 * x1 - dir1 * x0;

  a[0] = x0;
  a[1] = x1;
  a[2] = x2;
  a[3] = 0;
  a[4] = upx;
  a[5] = upy;
  a[6] = upz;
  a[7] = 0;
  a[8] = dir0;
  a[9] = dir1;
  a[10] = dir2;
  a[11] = 0;
  a[12] = 0;
  a[13] = 0;
  a[14] = 0;
  a[15] = 1;
  return a;
}

/**
 * Sets a matrix from a point to another.
 *
 * @param {import("./types.js").Mat4} a
 * @param {import("./types.js").Vec3} from
 * @param {import("./types.js").Vec3} to
 * @param {import("./types.js").Vec3} [up=Y_UP]
 * @returns {import("./types.js").Mat4}
 */
export function fromPointToPoint(a, from, to, up) {
  TEMP_VEC3[0] = to[0] - from[0];
  TEMP_VEC3[1] = to[1] - from[1];
  TEMP_VEC3[2] = to[2] - from[2];
  return fromDirection(a, TEMP_VEC3, up);
}
