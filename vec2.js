export function create() {
  return [0, 0];
}

export function equals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

export function set(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  return a;
}

export function copy(a) {
  return a.slice();
}

export function add(a, b) {
  a[0] += b[0];
  a[1] += b[1];
  return a;
}

export function sub(a, b) {
  a[0] -= b[0];
  a[1] -= b[1];
  return a;
}

export function scale(a, n) {
  a[0] *= n;
  a[1] *= n;
  return a;
}

export function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

export function length(a) {
  const x = a[0];
  const y = a[1];
  return Math.sqrt(x * x + y * y);
}

export function lengthSq(a) {
  const x = a[0];
  const y = a[1];
  return x * x + y * y;
}

export function normalize(a) {
  const x = a[0];
  const y = a[1];
  let l = Math.sqrt(x * x + y * y);

  l = 1 / (l || 1);
  a[0] *= l;
  a[1] *= l;
  return a;
}

export function distance(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  return Math.sqrt(dx * dx + dy * dy);
}

export function distanceSq(a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  return dx * dx + dy * dy;
}

export function limit(a, n) {
  const x = a[0];
  const y = a[1];

  const dsq = x * x + y * y;
  const lsq = n * n;

  if (lsq > 0 && dsq > lsq) {
    const nd = n / Math.sqrt(dsq);
    a[0] *= nd;
    a[1] *= nd;
  }

  return a;
}

export function lerp(a, b, n) {
  const x = a[0];
  const y = a[1];

  a[0] = x + (b[0] - x) * n;
  a[1] = y + (b[1] - y) * n;

  return a;
}

export function toString(a, precision) {
  const scale = 10 ** (precision !== undefined ? precision : 4);
  let s = "[";
  s += `${Math.floor(a[0] * scale) / scale}, `;
  s += `${Math.floor(a[1] * scale) / scale}]`;
  return s;
}

export function addScaled(v, w, n) {
  v[0] += w[0] * n;
  v[1] += w[1] * n;

  return v;
}
