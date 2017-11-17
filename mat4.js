var assert = require('assert')

function create () {
  return [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]
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
  a[9] = b[9]
  a[10] = b[10]
  a[11] = b[11]
  a[12] = b[12]
  a[13] = b[13]
  a[14] = b[14]
  a[15] = b[15]
  return a
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
    a[9] === b[9] &&
    a[10] === b[10] &&
    a[11] === b[11] &&
    a[12] === b[12] &&
    a[13] === b[13] &&
    a[14] === b[14] &&
    a[15] === b[15]
}

function copy (a) {
  return a.slice(0)
}

function _mult16 (a, b00, b01, b02, b03,
                b10, b11, b12, b13,
                b20, b21, b22, b23,
                b30, b31, b32, b33) {
  var a00 = a[0]
  var a01 = a[1]
  var a02 = a[2]
  var a03 = a[3]
  var a10 = a[4]
  var a11 = a[5]
  var a12 = a[6]
  var a13 = a[7]
  var a20 = a[8]
  var a21 = a[9]
  var a22 = a[10]
  var a23 = a[11]
  var a30 = a[12]
  var a31 = a[13]
  var a32 = a[14]
  var a33 = a[15]

  a[0] = (b00 * a00) + (b01 * a10) + (b02 * a20) + (b03 * a30)
  a[1] = (b00 * a01) + (b01 * a11) + (b02 * a21) + (b03 * a31)
  a[2] = (b00 * a02) + (b01 * a12) + (b02 * a22) + (b03 * a32)
  a[3] = (b00 * a03) + (b01 * a13) + (b02 * a23) + (b03 * a33)

  a[4] = (b10 * a00) + (b11 * a10) + (b12 * a20) + (b13 * a30)
  a[5] = (b10 * a01) + (b11 * a11) + (b12 * a21) + (b13 * a31)
  a[6] = (b10 * a02) + (b11 * a12) + (b12 * a22) + (b13 * a32)
  a[7] = (b10 * a03) + (b11 * a13) + (b12 * a23) + (b13 * a33)

  a[8] = (b20 * a00) + (b21 * a10) + (b22 * a20) + (b23 * a30)
  a[9] = (b20 * a01) + (b21 * a11) + (b22 * a21) + (b23 * a31)
  a[10] = (b20 * a02) + (b21 * a12) + (b22 * a22) + (b23 * a32)
  a[11] = (b20 * a03) + (b21 * a13) + (b22 * a23) + (b23 * a33)

  a[12] = (b30 * a00) + (b31 * a10) + (b32 * a20) + (b33 * a30)
  a[13] = (b30 * a01) + (b31 * a11) + (b32 * a21) + (b33 * a31)
  a[14] = (b30 * a02) + (b31 * a12) + (b32 * a22) + (b33 * a32)
  a[15] = (b30 * a03) + (b31 * a13) + (b32 * a23) + (b33 * a33)

  return a
}

function mult (a, b) {
  var a00 = a[0]
  var a01 = a[1]
  var a02 = a[2]
  var a03 = a[3]
  var a10 = a[4]
  var a11 = a[5]
  var a12 = a[6]
  var a13 = a[7]
  var a20 = a[8]
  var a21 = a[9]
  var a22 = a[10]
  var a23 = a[11]
  var a30 = a[12]
  var a31 = a[13]
  var a32 = a[14]
  var a33 = a[15]

  var b00 = b[0]
  var b01 = b[1]
  var b02 = b[2]
  var b03 = b[3]
  var b10 = b[4]
  var b11 = b[5]
  var b12 = b[6]
  var b13 = b[7]
  var b20 = b[8]
  var b21 = b[9]
  var b22 = b[10]
  var b23 = b[11]
  var b30 = b[12]
  var b31 = b[13]
  var b32 = b[14]
  var b33 = b[15]

  a[0] = (b00 * a00) + (b01 * a10) + (b02 * a20) + (b03 * a30)
  a[1] = (b00 * a01) + (b01 * a11) + (b02 * a21) + (b03 * a31)
  a[2] = (b00 * a02) + (b01 * a12) + (b02 * a22) + (b03 * a32)
  a[3] = (b00 * a03) + (b01 * a13) + (b02 * a23) + (b03 * a33)

  a[4] = (b10 * a00) + (b11 * a10) + (b12 * a20) + (b13 * a30)
  a[5] = (b10 * a01) + (b11 * a11) + (b12 * a21) + (b13 * a31)
  a[6] = (b10 * a02) + (b11 * a12) + (b12 * a22) + (b13 * a32)
  a[7] = (b10 * a03) + (b11 * a13) + (b12 * a23) + (b13 * a33)

  a[8] = (b20 * a00) + (b21 * a10) + (b22 * a20) + (b23 * a30)
  a[9] = (b20 * a01) + (b21 * a11) + (b22 * a21) + (b23 * a31)
  a[10] = (b20 * a02) + (b21 * a12) + (b22 * a22) + (b23 * a32)
  a[11] = (b20 * a03) + (b21 * a13) + (b22 * a23) + (b23 * a33)

  a[12] = (b30 * a00) + (b31 * a10) + (b32 * a20) + (b33 * a30)
  a[13] = (b30 * a01) + (b31 * a11) + (b32 * a21) + (b33 * a31)
  a[14] = (b30 * a02) + (b31 * a12) + (b32 * a22) + (b33 * a32)
  a[15] = (b30 * a03) + (b31 * a13) + (b32 * a23) + (b33 * a33)

  return a
}

function invert (a) {
  var a00 = a[0]
  var a10 = a[1]
  var a20 = a[2]
  var a30 = a[3]
  var a01 = a[4]
  var a11 = a[5]
  var a21 = a[6]
  var a31 = a[7]
  var a02 = a[8]
  var a12 = a[9]
  var a22 = a[10]
  var a32 = a[11]
  var a03 = a[12]
  var a13 = a[13]
  var a23 = a[14]
  var a33 = a[15]

  // TODO: add caching

  a[0] = a11 * a22 * a33 - a11 * a32 * a23 - a12 * a21 * a33 + a12 * a31 * a23 + a13 * a21 * a32 - a13 * a31 * a22
  a[4] = -a01 * a22 * a33 + a01 * a32 * a23 + a02 * a21 * a33 - a02 * a31 * a23 - a03 * a21 * a32 + a03 * a31 * a22
  a[8] = a01 * a12 * a33 - a01 * a32 * a13 - a02 * a11 * a33 + a02 * a31 * a13 + a03 * a11 * a32 - a03 * a31 * a12
  a[12] = -a01 * a12 * a23 + a01 * a22 * a13 + a02 * a11 * a23 - a02 * a21 * a13 - a03 * a11 * a22 + a03 * a21 * a12

  a[1] = -a10 * a22 * a33 + a10 * a32 * a23 + a12 * a20 * a33 - a12 * a30 * a23 - a13 * a20 * a32 + a13 * a30 * a22
  a[5] = a00 * a22 * a33 - a00 * a32 * a23 - a02 * a20 * a33 + a02 * a30 * a23 + a03 * a20 * a32 - a03 * a30 * a22
  a[9] = -a00 * a12 * a33 + a00 * a32 * a13 + a02 * a10 * a33 - a02 * a30 * a13 - a03 * a10 * a32 + a03 * a30 * a12
  a[13] = a00 * a12 * a23 - a00 * a22 * a13 - a02 * a10 * a23 + a02 * a20 * a13 + a03 * a10 * a22 - a03 * a20 * a12

  a[2] = a10 * a21 * a33 - a10 * a31 * a23 - a11 * a20 * a33 + a11 * a30 * a23 + a13 * a20 * a31 - a13 * a30 * a21
  a[6] = -a00 * a21 * a33 + a00 * a31 * a23 + a01 * a20 * a33 - a01 * a30 * a23 - a03 * a20 * a31 + a03 * a30 * a21
  a[10] = a00 * a11 * a33 - a00 * a31 * a13 - a01 * a10 * a33 + a01 * a30 * a13 + a03 * a10 * a31 - a03 * a30 * a11
  a[14] = -a00 * a11 * a23 + a00 * a21 * a13 + a01 * a10 * a23 - a01 * a20 * a13 - a03 * a10 * a21 + a03 * a20 * a11

  a[3] = -a10 * a21 * a32 + a10 * a31 * a22 + a11 * a20 * a32 - a11 * a30 * a22 - a12 * a20 * a31 + a12 * a30 * a21
  a[7] = a00 * a21 * a32 - a00 * a31 * a22 - a01 * a20 * a32 + a01 * a30 * a22 + a02 * a20 * a31 - a02 * a30 * a21
  a[11] = -a00 * a11 * a32 + a00 * a31 * a12 + a01 * a10 * a32 - a01 * a30 * a12 - a02 * a10 * a31 + a02 * a30 * a11
  a[15] = a00 * a11 * a22 - a00 * a21 * a12 - a01 * a10 * a22 + a01 * a20 * a12 + a02 * a10 * a21 - a02 * a20 * a11

  var det = a00 * a[0] + a10 * a[4] + a20 * a[8] + a30 * a[12]

  if (det === 0) {
    return null
  }

  det = 1.0 / det

  a[0] *= det
  a[1] *= det
  a[2] *= det
  a[3] *= det
  a[4] *= det
  a[5] *= det
  a[6] *= det
  a[7] *= det
  a[8] *= det
  a[9] *= det
  a[10] *= det
  a[11] *= det
  a[12] *= det
  a[13] *= det
  a[14] *= det
  a[15] *= det

  return a
}

function transpose (a) {
  var a01 = a[1]
  var a02 = a[2]
  var a03 = a[3]
  var a12 = a[6]
  var a13 = a[7]
  var a20 = a[8]
  var a21 = a[9]
  var a23 = a[11]
  var a30 = a[12]
  var a31 = a[13]
  var a32 = a[14]

  // 1st row - keeping a00
  a[1] = a[4]
  a[2] = a20
  a[3] = a30
  // 2nd row - keeping a11
  a[4] = a01
  a[6] = a21
  a[7] = a31
  // 3rd row - keeping a22
  a[8] = a02
  a[9] = a12
  a[11] = a32
  // 4th row - keeping a33
  a[12] = a03
  a[13] = a13
  a[14] = a23

  return a
}

function identity (a) {
  a[0] = a[5] = a[10] = a[15] = 1
  a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = a[12] = a[13] = a[14] = 0
  return a
}

function _scale3 (a, x, y, z) {
  return _mult16(a, x, 0, 0, 0,
                0, y, 0, 0,
                0, 0, z, 0,
                0, 0, 0, 1)
}

function scale (a, v) {
  return _scale3(a, v[0], v[1], v[2])
}

function _translate3 (a, x, y, z) {
  return _mult16(a, 1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                x, y, z, 1)
}

function translate (a, v) {
  return _translate3(a, v[0], v[1], v[2])
}

function _rotate3 (a, r, x, y, z) {
  var len = Math.sqrt(x * x + y * y + z * z)

  if (len < 0.0001) {
    return null
  }

  var s, c, t
  var a00, a01, a02, a03
  var a10, a11, a12, a13
  var a20, a21, a22, a23
  var b00, b01, b02
  var b10, b11, b12
  var b20, b21, b22

  len = 1 / len

  x *= len
  y *= len
  z *= len

  s = Math.sin(r)
  c = Math.cos(r)
  t = 1 - c

  a00 = a11 = a22 = 1
  a01 = a02 = a03 = a10 = a12 = a13 = a20 = a21 = a23 = 0

  b00 = x * x * t + c
  b01 = y * x * t + z * s
  b02 = z * x * t - y * s
  b10 = x * y * t - z * s
  b11 = y * y * t + c
  b12 = z * y * t + x * s
  b20 = x * z * t + y * s
  b21 = y * z * t - x * s
  b22 = z * z * t + c

  var _a00 = a00 * b00 + a10 * b01 + a20 * b02
  var _a01 = a01 * b00 + a11 * b01 + a21 * b02
  var _a02 = a02 * b00 + a12 * b01 + a22 * b02
  var _a03 = a03 * b00 + a13 * b01 + a23 * b02
  var _a10 = a00 * b10 + a10 * b11 + a20 * b12
  var _a11 = a01 * b10 + a11 * b11 + a21 * b12
  var _a12 = a02 * b10 + a12 * b11 + a22 * b12
  var _a13 = a03 * b10 + a13 * b11 + a23 * b12
  var _a20 = a00 * b20 + a10 * b21 + a20 * b22
  var _a21 = a01 * b20 + a11 * b21 + a21 * b22
  var _a22 = a02 * b20 + a12 * b21 + a22 * b22
  var _a23 = a03 * b20 + a13 * b21 + a23 * b22

  return _mult16(a, _a00, _a01, _a02, _a03,
                _a10, _a11, _a12, _a13,
                _a20, _a21, _a22, _a23,
                0, 0, 0, 1)
}

function rotate (a, r, v) {
  return _rotate3(a, r, v[0], v[1], v[2])
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
  a[4] = xy - wz
  a[8] = xz + wy

  a[1] = xy + wz
  a[5] = 1 - (xx + zz)
  a[9] = yz - wx

  a[2] = xz - wy
  a[6] = yz + wx
  a[10] = 1 - (xx + yy)

  a[3] = a[7] = a[11] = a[12] = a[13] = a[14] = 0
  a[15] = 1

  return a
}

function fromMat3 (a, b) {
  a[0] = b[0]
  a[1] = b[1]
  a[2] = b[2]

  a[4] = b[3]
  a[5] = b[4]
  a[6] = b[5]

  a[8] = b[6]
  a[9] = b[7]
  a[10] = b[8]

  a[3] = a[7] = a[11] =
    a[12] = a[13] = a[14] = 0
  a[15] = 1.0

  return a
}

function frustum (a, left, right, bottom, top, near, far) {
  var rl = 1.0 / (right - left)
  var tb = 1.0 / (top - bottom)
  var nf = 1.0 / (near - far)

  var near2 = near * 2

  a[0] = near2 * rl
  a[1] = a[2] = 0
  a[3] = 0
  a[4] = 0
  a[5] = near2 * tb
  a[6] = 0
  a[7] = 0
  a[8] = (right + left) * rl
  a[9] = (top + bottom) * tb
  a[10] = (far + near) * nf
  a[11] = -1
  a[12] = 0
  a[13] = 0
  a[14] = (far * near2) * nf
  a[15] = 0

  return a
}

function perspective (a, fovy, aspectRatio, near, far) {
  assert(fovy < Math.PI, 'mat4.perpsective: vertical field of view should be in radians (0 to PI)')

  var f = 1.0 / Math.tan(fovy * 0.5)
  var nf = 1.0 / (near - far)

  a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[12] = a[13] = a[15] = 0

  a[0] = f / aspectRatio
  a[5] = f
  a[10] = (far + near) * nf
  a[11] = -1
  a[14] = (2 * far * near) * nf

  return a
}

function ortho (a, left, right, bottom, top, near, far) {
  var lr = left - right
  var bt = bottom - top
  var nf = near - far

  a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = 0

  a[0] = -2 / lr
  a[5] = -2 / bt
  a[10] = 2 / nf

  a[12] = (left + right) / lr
  a[13] = (top + bottom) / bt
  a[14] = (far + near) / nf
  a[15] = 1

  return a
}

function _lookAt9 (a, eyex, eyey, eyez, targetx, targety, targetz, upx, upy, upz) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len

  if (Math.abs(eyex - targetx) < 0.000001 &&
      Math.abs(eyey - targety) < 0.000001 &&
      Math.abs(eyez - targetz) < 0.000001) {
    a[0] = 1
    a[1] = a[2] = a[3] = 0
    a[5] = 1
    a[4] = a[6] = a[7] = 0
    a[10] = 1
    a[8] = a[9] = a[11] = 0
    a[15] = 1
    a[12] = a[13] = a[14] = 0

    return a
  }

  z0 = eyex - targetx
  z1 = eyey - targety
  z2 = eyez - targetz

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2)
  z0 *= len
  z1 *= len
  z2 *= len

  x0 = upy * z2 - upz * z1
  x1 = upz * z0 - upx * z2
  x2 = upx * z1 - upy * z0

  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2)

  if (len) {
    len = 1.0 / len
    x0 *= len
    x1 *= len
    x2 *= len
  }

  y0 = z1 * x2 - z2 * x1
  y1 = z2 * x0 - z0 * x2
  y2 = z0 * x1 - z1 * x0

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2)

  if (len) {
    len = 1.0 / len
    x0 *= len
    x1 *= len
    x2 *= len
  }

  a[0] = x0
  a[1] = y0
  a[2] = z0
  a[3] = 0
  a[4] = x1
  a[5] = y1
  a[6] = z1
  a[7] = 0
  a[8] = x2
  a[9] = y2
  a[10] = z2
  a[11] = 0
  a[12] = -(x0 * eyex + x1 * eyey + x2 * eyez)
  a[13] = -(y0 * eyex + y1 * eyey + y2 * eyez)
  a[14] = -(z0 * eyex + z1 * eyey + z2 * eyez)
  a[15] = 1

  return a
}

function lookAt (a, from, to, up) {
  var eyex = from[0]
  var eyey = from[1]
  var eyez = from[2]

  var targetx = to[0]
  var targety = to[1]
  var targetz = to[2]

  var upx = up[0]
  var upy = up[1]
  var upz = up[2]

  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len

  if (Math.abs(eyex - targetx) < 0.000001 &&
      Math.abs(eyey - targety) < 0.000001 &&
      Math.abs(eyez - targetz) < 0.000001) {
    a[0] = 1
    a[1] = a[2] = a[3] = 0
    a[5] = 1
    a[4] = a[6] = a[7] = 0
    a[10] = 1
    a[8] = a[9] = a[11] = 0
    a[15] = 1
    a[12] = a[13] = a[14] = 0

    return a
  }

  z0 = eyex - targetx
  z1 = eyey - targety
  z2 = eyez - targetz

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2)
  z0 *= len
  z1 *= len
  z2 *= len

  x0 = upy * z2 - upz * z1
  x1 = upz * z0 - upx * z2
  x2 = upx * z1 - upy * z0

  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2)

  if (len) {
    len = 1.0 / len
    x0 *= len
    x1 *= len
    x2 *= len
  }

  y0 = z1 * x2 - z2 * x1
  y1 = z2 * x0 - z0 * x2
  y2 = z0 * x1 - z1 * x0

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2)

  if (len) {
    len = 1.0 / len
    x0 *= len
    x1 *= len
    x2 *= len
  }

  a[0] = x0
  a[1] = y0
  a[2] = z0
  a[3] = 0
  a[4] = x1
  a[5] = y1
  a[6] = z1
  a[7] = 0
  a[8] = x2
  a[9] = y2
  a[10] = z2
  a[11] = 0
  a[12] = -(x0 * eyex + x1 * eyey + x2 * eyez)
  a[13] = -(y0 * eyex + y1 * eyey + y2 * eyez)
  a[14] = -(z0 * eyex + z1 * eyey + z2 * eyez)
  a[15] = 1

  return a
}

var Mat4 = {
  _mult16: _mult16,
  _scale3: _scale3,
  _translate3: _translate3,
  _rotate3: _rotate3,
  _lookAt9: _lookAt9,
  // documented
  fromMat3: fromMat3,
  fromQuat: fromQuat,
  translate: translate,
  scale: scale,
  rotate: rotate,
  identity: identity,
  mult: mult,
  invert: invert,
  transpose: transpose,
  equals: equals,
  copy: copy,
  create: create,
  set: set,
  frustum: frustum,
  perspective: perspective,
  ortho: ortho,
  lookAt: lookAt
}

module.exports = Mat4
