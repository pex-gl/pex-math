export const EPSILON = 0.000001;

export function lerp(a, b, n) {
  return a + (b - a) * n;
}

export function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}

export function smoothstep(n, min, max) {
  n = clamp((n - min) / (max - min), 0, 1);
  return n * n * (3 - 2 * n);
}

export function map(n, inStart, inEnd, outStart, outEnd) {
  return outStart + ((outEnd - outStart) * (n - inStart)) / (inEnd - inStart);
}

export function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

export function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

export function sign(n) {
  return n / Math.abs(n);
}

export function isPowerOfTwo(a) {
  return (a & (a - 1)) === 0;
}

export function nextPowerOfTwo(n) {
  if (n === 0) return 1;
  n--;
  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  return n + 1;
}
