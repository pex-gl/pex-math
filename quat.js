var assert = require('assert')
var vec3 = require('./vec3')

var EPSILON = Math.pow(2, -24)

function create () {
  return [0, 0, 0, 1]
}

function equals (a, b) {
  return a[0] === b[0] &&
    a[1] === b[1] &&
    a[2] === b[2] &&
    a[3] === b[3]
}

function identity (a) {
  a[0] = a[1] = a[2] = 0.0
  a[3] = 1.0
  return a
}

function copy (a) {
  return a.slice(0)
}

function set (a, b) {
  a[0] = b[0]
  a[1] = b[1]
  a[2] = b[2]
  a[3] = b[3]
  return a
}

function mult (a, b) {
  var ax = a[0]
  var ay = a[1]
  var az = a[2]
  var aw = a[3]
  var bx = b[0]
  var by = b[1]
  var bz = b[2]
  var bw = b[3]

  a[0] = aw * bx + ax * bw + ay * bz - az * by
  a[1] = aw * by + ay * bw + az * bx - ax * bz
  a[2] = aw * bz + az * bw + ax * by - ay * bx
  a[3] = aw * bw - ax * bx - ay * by - az * bz

  return a
}

function invert (a) {
  var l = dot(a, a)
  l = l ? 1.0 / l : 0.0

  a[0] *= -l
  a[1] *= -l
  a[2] *= -l
  a[3] *= l
  return a
}

function conjugate (a) {
  a[0] *= -1
  a[1] *= -1
  a[2] *= -1
  return a
}

function length (a) {
  var x = a[0]
  var y = a[1]
  var z = a[2]
  var w = a[3]
  return Math.sqrt(x * x + y * y + z * z + w * w)
}

function normalize (a) {
  var l = length(a)
  if (l > EPSILON) {
    l = 1.0 / l
    a[0] *= l
    a[1] *= l
    a[2] *= l
    a[3] *= l
  }
  return a
}

function dot (a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
}

//x = yaw, y = pitch, z = roll
//assumes XYZ order
function fromEuler (q, euler) {
  var x = euler[0]
  var y = euler[1]
  var z = euler[2]
  var cx = Math.cos(x / 2)
  var cy = Math.cos(y / 2)
  var cz = Math.cos(z / 2)
  var sx = Math.sin(x / 2)
  var sy = Math.sin(y / 2)
  var sz = Math.sin(z / 2)

  q[0] = sx * cy * cz + cx * sy * sz
  q[1] = cx * sy * cz - sx * cy * sz
  q[2] = cx * cy * sz + sx * sy * cz
  q[3] = cx * cy * cz - sx * sy * sz

  return q
}

function fromAxisAngle (a, axis, angle) {
  assert(axis.length !== undefined, 'quat.fromAxisAngle: axis should be vec3')
  var angle2 = angle * 0.5
  var sin2 = Math.sin(angle2)
  a[0] = axis[0] * sin2
  a[1] = axis[1] * sin2
  a[2] = axis[2] * sin2
  a[3] = Math.cos(angle2)
  return normalize(a)
}

function _fromMat39 (a, m0, m1, m2, m3, m4, m5, m6, m7, m8) {
  var trace = m0 + m4 + m8
  var s

  if (trace >= 0) {
    s = Math.sqrt(trace + 1)
    a[3] = 0.5 * s
    s = 0.5 / s
    a[0] = (m5 - m7) * s
    a[1] = (m6 - m2) * s
    a[2] = (m1 - m3) * s
  } else if ((m0 > m4) && (m0 > m8)) {
    s = Math.sqrt(1.0 + m0 - m4 - m8)
    a[0] = s * 0.5
    s = 0.5 / s
    a[1] = (m1 + m3) * s
    a[2] = (m6 + m2) * s
    a[3] = (m5 - m7) * s
  } else if (m4 > m8) {
    s = Math.sqrt(1.0 + m4 - m0 - m8)
    a[1] = s * 0.5
    s = 0.5 / s
    a[0] = (m1 + m3) * s
    a[2] = (m5 + m7) * s
    a[3] = (m6 - m2) * s
  } else {
    s = Math.sqrt(1.0 + m8 - m0 - m4)
    a[2] = s * 0.5
    s = 0.5 / s
    a[0] = (m6 + m2) * s
    a[1] = (m5 + m7) * s
    a[3] = (m1 - m3) * s
  }
  return a
}

function fromAxes (a, x, y, z) {
  return _fromMat39(a, x[0], x[1], x[2], y[0], y[1], y[2], z[0], z[1], z[2])
}

function fromMat3 (a, m) {
  return _fromMat39(a, m[0], m[1], m[2],
                   m[3], m[4], m[5],
                   m[6], m[7], m[8])
}

function fromMat4 (a, m) {
  return _fromMat39(a, m[0], m[1], m[2],
                   m[4], m[5], m[6],
                   m[8], m[9], m[10])
}



var fromTo = (function () {
  var u = []
  return function (q, v, w) {
    u = vec3.cross(vec3.set(u, v), w)
    q[0] = u[0]
    q[1] = u[1]
    q[2] = u[2]
    q[3] = 1 + vec3.dot(v, w)
    normalize(q)
    return q
  }
})()

function slerp (a, b, t) {
  // http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0]
  var ay = a[1]
  var az = a[2]
  var aw = a[3]
  var bx = b[0]
  var by = b[1]
  var bz = b[2]
  var bw = b[3]

  var omega, cosom, sinom, scale0, scale1

  cosom = dot(a, b)

  if (cosom < 0.0) {
    cosom = -cosom
    a[0] = -bx
    a[1] = -by
    a[2] = -bz
    a[3] = -bw
  } else {
    a[0] = bx
    a[1] = by
    a[2] = bz
    a[3] = bw
  }

  if ((1.0 - cosom) > 0.000001) {
    omega = Math.acos(cosom)
    sinom = Math.sin(omega)
    scale0 = Math.sin((1.0 - t) * omega) / sinom
    scale1 = Math.sin(t * omega) / sinom
  } else {
    scale0 = 1.0 - t
    scale1 = t
  }

  a[0] = scale0 * ax + scale1 * a[0]
  a[1] = scale0 * ay + scale1 * a[1]
  a[2] = scale0 * az + scale1 * a[2]
  a[3] = scale0 * aw + scale1 * a[3]
  return a
}

var Quat = {
  create: create,
  equals: equals,
  identity: identity,
  copy: copy,
  set: set,
  mult: mult,
  invert: invert,
  conjugate: conjugate,
  dot: dot,
  length: length,
  normalize: normalize,
  fromEuler: fromEuler,
  fromAxisAngle: fromAxisAngle,
  fromAxes: fromAxes,
  fromMat3: fromMat3,
  fromMat4: fromMat4,
  slerp: slerp,
  fromTo: fromTo
}

module.exports = Quat
