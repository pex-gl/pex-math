/**
 * @module mat3
 */

/**
 * Returns a 3x3 identity matrix.
 *
 * Row major memory layout:
 *
 * ```
 *  0   1   2
 *  3   4   5
 *  6   7   8
 * ```
 *
 *  Equivalent to the column major OpenGL spec:
 *
 * ```
 *   0   3   6
 *   1   4   7
 *   2   5   8
 *
 *  m00 m10 m20
 *  m01 m11 m21
 *  m02 m12 m22
 * ```
 * @returns {mat3}
 */
export function create() {
  // prettier-ignore
  return [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ]
}

/**
 * Sets a matrix to the identity matrix.
 * @param {mat3} a
 * @returns {mat3}
 */
export function identity(a) {
  a[0] = a[4] = a[8] = 1;
  a[1] = a[2] = a[3] = a[5] = a[6] = a[7] = 0;
  return a;
}

/**
 * Returns a copy of a matrix.
 * @param {mat3} a
 * @returns {mat3}
 */
export function copy(a) {
  return a.slice();
}

/**
 * Sets a matrix from another matrix.
 * @param {mat3} a
 * @param {mat3} b
 * @returns {mat3}
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
  return a;
}

/**
 * Compares two matrices.
 * @param {mat3} a
 * @param {mat3} b
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
    a[9] === b[9]
  );
}

/**
 * Multiplies two matrices.
 * @param {mat3} a
 * @param {mat3} b
 * @returns {mat3}
 */
export function mult(a, b) {
  const a00 = a[0];
  const a01 = a[1];
  const a02 = a[2];
  const a10 = a[3];
  const a11 = a[4];
  const a12 = a[5];
  const a20 = a[6];
  const a21 = a[7];
  const a22 = a[8];

  const b00 = b[0];
  const b01 = b[1];
  const b02 = b[2];
  const b10 = b[3];
  const b11 = b[4];
  const b12 = b[5];
  const b20 = b[6];
  const b21 = b[7];
  const b22 = b[8];

  a[0] = b00 * a00 + b01 * a10 + b02 * a20;
  a[1] = b00 * a01 + b01 * a11 + b02 * a21;
  a[2] = b00 * a02 + b01 * a12 + b02 * a22;
  a[3] = b10 * a00 + b11 * a10 + b12 * a20;
  a[4] = b10 * a01 + b11 * a11 + b12 * a21;
  a[5] = b10 * a02 + b11 * a12 + b12 * a22;
  a[6] = b20 * a00 + b21 * a10 + b22 * a20;
  a[7] = b20 * a01 + b21 * a11 + b22 * a21;
  a[8] = b20 * a02 + b21 * a12 + b22 * a22;

  return a;
}

/**
 * Sets a 3x3 matrix from a 2x3 matrix.
 * @param {mat3} a
 * @param {mat2x3} b
 * @returns {mat3}
 */
export function fromMat2x3(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = 0;
  a[3] = b[2];
  a[4] = b[3];
  a[5] = 0;
  a[6] = b[4];
  a[7] = b[5];
  a[8] = 1;
  return a;
}

/**
 * Sets a 3x3 matrix to a 4x4 matrix.
 * @param {mat3} a
 * @param {mat4} b
 * @returns {mat3}
 */
export function fromMat4(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  a[3] = b[4];
  a[4] = b[5];
  a[5] = b[6];
  a[6] = b[8];
  a[7] = b[9];
  a[8] = b[10];
  return a;
}

/**
 * Sets matrix to a quaternion.
 * @param {mat3} a
 * @param {quat} q
 * @returns {mat3}
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
  a[3] = xy - wz;
  a[6] = xz + wy;

  a[1] = xy + wz;
  a[4] = 1 - (xx + zz);
  a[7] = yz - wx;

  a[2] = xz - wy;
  a[5] = yz + wx;
  a[8] = 1 - (xx + yy);

  return a;
}

/**
 * Transposes a matrix.
 * @param {mat3} a
 * @returns {mat3}
 */
export function transpose(a) {
  const a01 = a[1];
  const a02 = a[2];
  const a12 = a[5];

  a[1] = a[3];
  a[2] = a[6];

  a[3] = a01;
  a[5] = a[7];

  a[6] = a02;
  a[7] = a12;

  return a;
}
