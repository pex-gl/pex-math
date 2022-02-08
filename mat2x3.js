export function create() {
  // prettier-ignore
  return [
    1, 0, 0,
    1, 0, 0
  ]
}

export function identity(a) {
  a[0] = a[3] = 1;
  a[1] = a[2] = a[4] = a[5] = 0;
  return a;
}

export function copy(a) {
  return a.slice();
}

export function set(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  a[3] = b[3];
  a[4] = b[4];
  a[5] = b[5];
  return a;
}

export function equals(a, b) {
  return (
    a[0] === b[0] &&
    a[1] === b[1] &&
    a[2] === b[2] &&
    a[3] === b[3] &&
    a[4] === b[4] &&
    a[5] === b[5]
  );
}

export function mult(a, b) {
  const a0 = a[0];
  const a1 = a[1];
  const a2 = a[2];
  const a3 = a[3];
  const a4 = a[4];
  const a5 = a[5];

  const b0 = b[0];
  const b1 = b[1];
  const b2 = b[2];
  const b3 = b[3];
  const b4 = b[4];
  const b5 = b[5];

  a[0] = a0 * b0 + a2 * b1;
  a[1] = a1 * b0 + a3 * b1;
  a[2] = a0 * b2 + a2 * b3;
  a[3] = a1 * b2 + a3 * b3;
  a[4] = a0 * b4 + a2 * b5 + a4;
  a[5] = a1 * b4 + a3 * b5 + a5;

  return a;
}

export function translate(a, v) {
  const a0 = a[0];
  const a1 = a[1];
  const a2 = a[2];
  const a3 = a[3];
  const a4 = a[4];
  const a5 = a[5];

  const x = v[0];
  const y = v[1];

  a[0] = a0;
  a[1] = a1;
  a[2] = a2;
  a[3] = a3;
  a[4] = a0 * x + a2 * y + a4;
  a[5] = a1 * x + a3 * y + a5;

  return a;
}

export function rotate(a, rad) {
  const a0 = a[0];
  const a1 = a[1];
  const a2 = a[2];
  const a3 = a[3];

  const s = Math.sin(rad);
  const c = Math.cos(rad);

  a[0] = a0 * c + a2 * s;
  a[1] = a1 * c + a3 * s;
  a[2] = a0 * -s + a2 * c;
  a[3] = a1 * -s + a3 * c;

  return a;
}

export function scale(a, v) {
  const a0 = a[0];
  const a1 = a[1];
  const a2 = a[2];
  const a3 = a[3];

  a[0] = a0 * v[0];
  a[1] = a1 * v[0];
  a[2] = a2 * v[1];
  a[3] = a3 * v[1];

  return a;
}
