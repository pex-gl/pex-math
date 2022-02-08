export function create() {
  // prettier-ignore
  return [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ]
}

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

export function _set9(a, b00, b01, b02, b10, b11, b12, b20, b21, b22) {
  a[0] = b00;
  a[1] = b01;
  a[2] = b02;
  a[3] = b10;
  a[4] = b11;
  a[5] = b12;
  a[6] = b20;
  a[7] = b21;
  a[8] = b22;
  return a;
}

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

export function identity(a) {
  a[0] = a[4] = a[8] = 1;
  a[1] = a[2] = a[3] = a[5] = a[6] = a[7] = 0;
  return a;
}

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

export function fromQuat(a, b) {
  const x = b[0];
  const y = b[1];
  const z = b[2];
  const w = b[3];

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
