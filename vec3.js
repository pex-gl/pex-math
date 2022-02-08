export function create() {
  return [0, 0, 0];
}

export function equals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

export function set(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  return a;
}

export function copy(a) {
  return a.slice(0);
}

export function add(a, b) {
  a[0] += b[0];
  a[1] += b[1];
  a[2] += b[2];
  return a;
}

export function sub(a, b) {
  a[0] -= b[0];
  a[1] -= b[1];
  a[2] -= b[2];
  return a;
}

export function scale(a, n) {
  a[0] *= n;
  a[1] *= n;
  a[2] *= n;
  return a;
}

export function multMat4(a, m) {
  const x = a[0];
  const y = a[1];
  const z = a[2];

  a[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
  a[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
  a[2] = m[2] * x + m[6] * y + m[10] * z + m[14];

  return a;
}

export function multQuat(a, q) {
  const x = a[0];
  const y = a[1];
  const z = a[2];

  const qx = q[0];
  const qy = q[1];
  const qz = q[2];
  const qw = q[3];

  const ix = qw * x + qy * z - qz * y;
  const iy = qw * y + qz * x - qx * z;
  const iz = qw * z + qx * y - qy * x;
  const iw = -qx * x - qy * y - qz * z;

  a[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  a[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  a[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;

  return a;
}

export function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

export function cross(a, b) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const vx = b[0];
  const vy = b[1];
  const vz = b[2];

  a[0] = y * vz - vy * z;
  a[1] = z * vx - vz * x;
  a[2] = x * vy - vx * y;
  return a;
}

export function length(a) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

export function lengthSq(a) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  return x * x + y * y + z * z;
}

export function normalize(a) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  let l = Math.sqrt(x * x + y * y + z * z);

  l = 1 / (l || 1);
  a[0] *= l;
  a[1] *= l;
  a[2] *= l;
  return a;
}

export function distance(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const dz = b[2] - a[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function distanceSq(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const dz = b[2] - a[2];
  return dx * dx + dy * dy + dz * dz;
}

export function limit(a, n) {
  const x = a[0];
  const y = a[1];
  const z = a[2];

  const dsq = x * x + y * y + z * z;
  const lsq = n * n;

  if (lsq > 0 && dsq > lsq) {
    const nd = n / Math.sqrt(dsq);
    a[0] *= nd;
    a[1] *= nd;
    a[2] *= nd;
  }

  return a;
}

export function lerp(a, b, n) {
  const x = a[0];
  const y = a[1];
  const z = a[2];

  a[0] = x + (b[0] - x) * n;
  a[1] = y + (b[1] - y) * n;
  a[2] = z + (b[2] - z) * n;

  return a;
}

export function toString(a, precision) {
  const scale = 10 ** (precision !== undefined ? precision : 4);
  let s = "[";
  s += `${Math.floor(a[0] * scale) / scale}, `;
  s += `${Math.floor(a[1] * scale) / scale}, `;
  s += `${Math.floor(a[2] * scale) / scale}]`;
  return s;
}

export function addScaled(v, w, n) {
  v[0] += w[0] * n;
  v[1] += w[1] * n;
  v[2] += w[2] * n;

  return v;
}
