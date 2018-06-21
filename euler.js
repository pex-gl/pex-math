const clamp = require('./utils').clamp
function create () {
  return [0, 0, 0]
}

// assumes XYZ order
function fromQuat (v, q) {
  var sqx = q[0] * q[0]
  var sqy = q[1] * q[1]
  var sqz = q[2] * q[2]
  var sqw = q[3] * q[3]
  v[0] = Math.atan2(2 * (q[0] * q[3] - q[1] * q[2]), (sqw - sqx - sqy + sqz))
  v[1] = Math.asin(clamp(2 * (q[0] * q[2] + q[1] * q[3]), -1, 1))
  v[2] = Math.atan2(2 * (q[2] * q[3] - q[0] * q[1]), (sqw + sqx - sqy - sqz))
  return v
}

var Euler = {
  create: create,
  fromQuat: fromQuat
}

module.exports = Euler
