function create () {
  return [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ]
}

function equals (a, b) {
  return a[0] === b[0] &&
    a[1] === b[1] &&
    a[2] === b[2] &&
    a[3] === b[3] &&
    a[4] === b[4] &&
    a[5] === b[5] &&
    a[6] === b[6] &&
    a[7] === b[7] &&
    a[8] === b[8] &&
    a[9] === b[9]
}

function _set9 (a, b00, b01, b02, b10, b11, b12, b20, b21, b22) {
  a[0] = b00
  a[1] = b01
  a[2] = b02
  a[3] = b10
  a[4] = b11
  a[5] = b12
  a[6] = b20
  a[7] = b21
  a[8] = b22
  return a
}

function set (a, b) {
  a[0] = b[0]
  a[1] = b[1]
  a[2] = b[2]
  a[3] = b[3]
  a[4] = b[4]
  a[5] = b[5]
  a[6] = b[6]
  a[7] = b[7]
  a[8] = b[8]
  return a
}

function identity (a) {
  a[0] = a[4] = a[8] = 1
  a[1] = a[2] = a[3] = a[5] = a[6] = a[7] = 0
  return a
}

function fromMat4 (a, b) {
  a[0] = b[0]
  a[1] = b[1]
  a[2] = b[2]
  a[3] = b[4]
  a[4] = b[5]
  a[5] = b[6]
  a[6] = b[8]
  a[7] = b[9]
  a[8] = b[10]
  return a
}

function fromQuat (a, b) {
  var x = b[0]
  var y = b[1]
  var z = b[2]
  var w = b[3]

  var x2 = x + x
  var y2 = y + y
  var z2 = z + z

  var xx = x * x2
  var xy = x * y2
  var xz = x * z2

  var yy = y * y2
  var yz = y * z2
  var zz = z * z2

  var wx = w * x2
  var wy = w * y2
  var wz = w * z2

  a[0] = 1 - (yy + zz)
  a[3] = xy - wz
  a[6] = xz + wy

  a[1] = xy + wz
  a[4] = 1 - (xx + zz)
  a[7] = yz - wx

  a[2] = xz - wy
  a[5] = yz + wx
  a[8] = 1 - (xx + yy)

  return a
}

var Mat3 = {
  _set9: _set9,
  // documented
  create: create,
  set: set,
  identity: identity,
  equals: equals,
  fromMat4: fromMat4,
  fromQuat: fromQuat
}

module.exports = Mat3
