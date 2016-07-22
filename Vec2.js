function create () {
  return [0, 0]
}

function set (a, b) {
  a[0] = b[0]
  a[1] = b[1]
  return a
}

function set2 (a, x, y) {
  a[0] = x
  a[1] = y
  return a
}

function equals (a, b) {
  return a[0] === b[0] &&
    a[1] === b[1]
}

function equals2 (a, x, y) {
  return a[0] === x &&
    a[1] === y
}

function copy (a, out) {
  if (out !== undefined) {
    out[0] = a[0]
    out[1] = a[1]
    return out
  }
  return a.slice(0)
}

function add (a, b) {
  a[0] += b[0]
  a[1] += b[1]
  return a
}

function add2 (a, x, y) {
  a[0] += x
  a[1] += y
  return a
}

function sub (a, b) {
  a[0] -= b[0]
  a[1] -= b[1]
  return a
}

function sub2 (a, x, y) {
  a[0] -= x
  a[1] -= y
  return a
}

function scale (a, n) {
  a[0] *= n
  a[1] *= n
  return a
}

function dot (a, b) {
  return a[0] * b[0] + a[1] * b[1]
}

function length (a) {
  var x = a[0]
  var y = a[1]
  return Math.sqrt(x * x + y * y)
}

function lengthSq (a) {
  var x = a[0]
  var y = a[1]
  return x * x + y * y
}

function normalize (a) {
  var x = a[0]
  var y = a[1]
  var l = Math.sqrt(x * x + y * y)

  l = 1.0 / (l || 1)
  a[0] *= l
  a[1] *= l
  return a
}

function distance (a, b) {
  return distance2(a, b[0], b[1])
}

function distance2 (a, x, y) {
  var dx = x - a[0]
  var dy = y - a[1]
  return Math.sqrt(dx * dx + dy * dy)
}

function distanceSq (a, b) {
  return distanceSq2(a, b[0], b[1], b[2])
}

function distanceSq2 (a, x, y) {
  var dx = x - a[0]
  var dy = y - a[1]
  return dx * dx + dy * dy
}

function limit (a, n) {
  var x = a[0]
  var y = a[1]

  var dsq = x * x + y * y
  var lsq = n * n

  if (lsq > 0 && dsq > lsq) {
    var nd = n / Math.sqrt(dsq)
    a[0] *= nd
    a[1] *= nd
  }

  return a
}

function invert (a) {
  a[0] *= -1
  a[1] *= -1
  return a
}

function lerp (a, b, n) {
  var x = a[0]
  var y = a[1]

  a[0] = x + (b[0] - x) * n
  a[1] = y + (b[1] - y) * n

  return a
}

function toMin (a) {
  a[0] = a[1] = -Number.MAX_VALUE
  return a
}

function toMax (a) {
  a[0] = a[1] = Number.MAX_VALUE
  return a
}

function toZero (a) {
  a[0] = a[1] = 0
  return a
}

var Vec2 = {
  create: create,
  set: set,
  set2: set2,
  copy: copy,
  equals: equals,
  equals2: equals2,
  add: add,
  add2: add2,
  sub: sub,
  sub2: sub2,
  scale: scale,
  dot: dot,
  length: length,
  lengthSq: lengthSq,
  normalize: normalize,
  distance: distance,
  distance2: distance2,
  distanceSq: distanceSq,
  distanceSq2: distanceSq2,
  limit: limit,
  invert: invert,
  lerp: lerp,
  toMin: toMin,
  toMax: toMax,
  toZero: toZero
}

module.exports = Vec2
