function create () {
  return [0, 0, 0, 1]
}

function equals (a, b) {
  return a[0] === b[0] &&
    a[1] === b[1] &&
    a[2] === b[2] &&
    a[3] === b[3]
}

function equals4 (a, x, y, z, w) {
  return a[0] === x &&
    a[1] === y &&
    a[2] === z &&
    a[3] === w
}

function set (a, b) {
  a[0] = b[0]
  a[1] = b[1]
  a[2] = b[2]
  a[3] = b[3]
  return a
}

function set4 (a, x, y, z, w) {
  a[0] = x
  a[1] = y
  a[2] = z
  a[3] = w
  return a
}

function fromVec3 (a, b) {
  a[0] = b[0]
  a[1] = b[1]
  a[2] = b[2]
  return a
}

function copy (a, out) {
  if (out !== undefined) {
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    out[3] = a[3]
    return out
  }
  return a.slice(0)
}

function multMat4 (a, m) {
  var x = a[0]
  var y = a[1]
  var z = a[2]
  var w = a[3]
  a[0] = m[ 0] * x + m[ 4] * y + m[ 8] * z + m[12] * w
  a[1] = m[ 1] * x + m[ 5] * y + m[ 9] * z + m[13] * w
  a[2] = m[ 2] * x + m[ 6] * y + m[10] * z + m[14] * w
  a[3] = m[ 3] * x + m[ 7] * y + m[11] * z + m[15] * w
  return a
}

function lerp (a, b, n) {
  var x = a[0]
  var y = a[1]
  var z = a[2]
  var w = a[3]

  a[0] = x + (b[0] - x) * n
  a[1] = y + (b[1] - y) * n
  a[2] = z + (b[2] - z) * n
  a[3] = w + (b[3] - w) * n

  return a
}

var Vec4 = {
  create: create,
  set: set,
  set4: set4,
  fromVec3: fromVec3,
  multMat4: multMat4,
  copy: copy,
  equals: equals,
  equals4: equals4,
  lerp: lerp
}

module.exports = Vec4
