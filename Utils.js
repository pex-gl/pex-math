function lerp (a, b, t) {
  return a + (b - a) * t
}

function clamp (a, min, max) {
  return Math.max(min, Math.min(a, max))
}

function smoothstep (min, max, x) {
  x = clamp((x - min) / (max - min), 0.0, 1.0)
  return x * x * (3 - 2 * x)
}

function normalize (a, start, end) {
  return (a - start) / (end - start)
}

function map (a, inStart, inEnd, outStart, outEnd) {
  return outStart + (outEnd - outStart) * normalize(a, inStart, inEnd)
}

function toRadians (degrees) {
  return degrees * Math.PI / 180.0
}

function toDegrees (radians) {
  return radians * 180 / Math.PI
}

function frac (a) {
  return a - Math.floor(a)
}

function sgn (a) {
  return a / Math.abs(a)
}

function isPOT (a) {
  return (a & (a - 1)) === 0
}

var Utils = {
  lerp: lerp,
  clamp: clamp,
  smoothstep: smoothstep,
  normalize: normalize,
  map: map,
  toRadians: toRadians,
  toDegrees: toDegrees,
  frac: frac,
  sgn: sgn,
  isPOT: isPOT
}

module.exports = Utils
