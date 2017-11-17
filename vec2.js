function create () {
  return [0, 0]
}

function set (a, b) {
  a[0] = b[0]
  a[1] = b[1]
  return a
}

function equals (a, b) {
  return a[0] === b[0] &&
    a[1] === b[1]
}

function copy (a) {
  return a.slice(0)
}

function add (a, b) {
  a[0] += b[0]
  a[1] += b[1]
  return a
}

function sub (a, b) {
  a[0] -= b[0]
  a[1] -= b[1]
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
  var dx = b[0] - a[0]
  var dy = b[1] - a[1]
  return Math.sqrt(dx * dx + dy * dy)
}

function distanceSq (a, b) {
  var dx = b[0] - a[0]
  var dy = b[1] - a[1]
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

function lerp (a, b, n) {
  var x = a[0]
  var y = a[1]

  a[0] = x + (b[0] - x) * n
  a[1] = y + (b[1] - y) * n

  return a
}

function toString (a, precision) {
  var scale = Math.pow(10, precision !== undefined ? precision : 4)
  var s = '['
  s += Math.floor(a[0] * scale) / scale + ', '
  s += Math.floor(a[1] * scale) / scale + ']'
  return s
}

function addScaled (v, w, n) {
  v[0] += w[0] * n
  v[1] += w[1] * n

  return v
}

var Vec2 = {
  create: create,
  set: set,
  copy: copy,
  equals: equals,
  add: add,
  addScaled: addScaled,
  sub: sub,
  scale: scale,
  dot: dot,
  length: length,
  lengthSq: lengthSq,
  normalize: normalize,
  distance: distance,
  distanceSq: distanceSq,
  limit: limit,
  lerp: lerp,
  toString: toString
}

module.exports = Vec2
