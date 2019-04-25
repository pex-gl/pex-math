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

function mult(a, b) {
  let a00 = a[0]
  let a01 = a[1]
  let a02 = a[2]
  let a10 = a[3]
  let a11 = a[4]
  let a12 = a[5]
  let a20 = a[6]
  let a21 = a[7]
  let a22 = a[8]

  let b00 = b[0]
  let b01 = b[1]
  let b02 = b[2]
  let b10 = b[3]
  let b11 = b[4]
  let b12 = b[5]
  let b20 = b[6]
  let b21 = b[7]
  let b22 = b[8]

  a[0] = b00 * a00 + b01 * a10 + b02 * a20
  a[1] = b00 * a01 + b01 * a11 + b02 * a21
  a[2] = b00 * a02 + b01 * a12 + b02 * a22
  a[3] = b10 * a00 + b11 * a10 + b12 * a20
  a[4] = b10 * a01 + b11 * a11 + b12 * a21
  a[5] = b10 * a02 + b11 * a12 + b12 * a22
  a[6] = b20 * a00 + b21 * a10 + b22 * a20
  a[7] = b20 * a01 + b21 * a11 + b22 * a21
  a[8] = b20 * a02 + b21 * a12 + b22 * a22

  return a
}

function fromMat2x3(a, b) {
  a[0] = b[0]
  a[1] = b[1]
  a[2] = 0
  a[3] = b[2]
  a[4] = b[3]
  a[5] = 0
  a[6] = b[4]
  a[7] = b[5]
  a[8] = 1
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
  mult: mult,
  fromMat2x3: fromMat2x3,
  fromMat4: fromMat4,
  fromQuat: fromQuat
}

module.exports = Mat3
