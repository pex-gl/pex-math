function lerp (a, b, n) {
  return a + (b - a) * n
}

function clamp (n, min, max) {
  return Math.max(min, Math.min(n, max))
}

function smoothstep (n, min, max) {
  n = clamp((n - min) / (max - min), 0.0, 1.0)
  return n * n * (3 - 2 * n)
}

function map (n, inStart, inEnd, outStart, outEnd) {
  return outStart + (outEnd - outStart) * (n - inStart) / (inEnd - inStart)
}

function toRadians (degrees) {
  return degrees * Math.PI / 180.0
}

function toDegrees (radians) {
  return radians * 180 / Math.PI
}

function sign (n) {
  return n / Math.abs(n)
}

function isPowerOfTwo (a) {
  return (a & (a - 1)) === 0
}

function nextPowerOfTwo (n) {
  if (n === 0) return 1
  n--
  n |= n >> 1
  n |= n >> 2
  n |= n >> 4
  n |= n >> 8
  n |= n >> 16
  return n + 1
}

var Utils = {
  lerp: lerp,
  clamp: clamp,
  smoothstep: smoothstep,
  map: map,
  toRadians: toRadians,
  toDegrees: toDegrees,
  sign: sign,
  isPowerOfTwo: isPowerOfTwo,
  nextPowerOfTwo: nextPowerOfTwo
}

module.exports = Utils
