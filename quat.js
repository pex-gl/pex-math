/**
 * @module quat
 */

import * as vec3 from "./vec3.js";
import * as vec4 from "./vec4.js";
import { EPSILON, shallowCopy } from "./utils.js";

/**
 * Returns a new quat at 0, 0, 0, 1.
 * @returns {quat}
 */
export function create() {
  return [0, 0, 0, 1];
}

/**
 * Sets a quaternion to the identity quaternion.
 * @param {quat} a
 * @returns {quat}
 */
export function identity(a) {
  a[0] = a[1] = a[2] = 0;
  a[3] = 1;
  return a;
}

/**
 * Returns a copy of a quaternion.
 * @param {quat} a
 * @returns {quat}
 */
export const copy = shallowCopy;

/**
 * Sets a quaternion to another quaternion.
 * @param {quat} a
 * @param {quat} b
 * @returns {quat}
 */
export const set = vec4.set;

/**
 * Compares two quaternions.
 * @param {quat} a
 * @param {quat} b
 * @returns {boolean}
 */
export const equals = vec4.equals;

/**
 * Multiplies one quaternion by another.
 * @param {quat} a
 * @param {quat} b
 * @returns {quat}
 */
export function mult(a, b) {
  const ax = a[0];
  const ay = a[1];
  const az = a[2];
  const aw = a[3];
  const bx = b[0];
  const by = b[1];
  const bz = b[2];
  const bw = b[3];

  a[0] = aw * bx + ax * bw + ay * bz - az * by;
  a[1] = aw * by + ay * bw + az * bx - ax * bz;
  a[2] = aw * bz + az * bw + ax * by - ay * bx;
  a[3] = aw * bw - ax * bx - ay * by - az * bz;

  return a;
}

/**
 * Inverts a quaternion.
 * @param {quat} a
 * @returns {quat}
 */
export function invert(a) {
  let l = dot(a, a);
  l = l ? 1 / l : 0;

  a[0] *= -l;
  a[1] *= -l;
  a[2] *= -l;
  a[3] *= l;
  return a;
}

/**
 * Conjugates a quaternion.
 * @param {quat} a
 * @returns {quat}
 */
export function conjugate(a) {
  a[0] *= -1;
  a[1] *= -1;
  a[2] *= -1;
  return a;
}

/**
 * Calculates the length of a quaternion.
 * @param {quat} a
 * @returns {quat}
 */
export function length(a) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Normalizes a quaternion.
 * @param {quat} a
 * @returns {quat}
 */
export function normalize(a) {
  let l = length(a);
  if (l > 2 ** -24) {
    l = 1 / l;
    a[0] *= l;
    a[1] *= l;
    a[2] *= l;
    a[3] *= l;
  }
  return a;
}

/**
 * Calculates the dot product of two quaternions.
 * @param {quat} a
 * @param {quat} b
 * @returns {quat}
 */
export function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Set euler angles to a quaternion. Assumes XYZ rotation order.
 * @param {quat} a
 * @param {euler} e
 * @returns {quat}
 */
export function fromEuler(a, e) {
  const x = e[0];
  const y = e[1];
  const z = e[2];
  const cx = Math.cos(x / 2);
  const cy = Math.cos(y / 2);
  const cz = Math.cos(z / 2);
  const sx = Math.sin(x / 2);
  const sy = Math.sin(y / 2);
  const sz = Math.sin(z / 2);

  a[0] = sx * cy * cz + cx * sy * sz;
  a[1] = cx * sy * cz - sx * cy * sz;
  a[2] = cx * cy * sz + sx * sy * cz;
  a[3] = cx * cy * cz - sx * sy * sz;

  return a;
}

/**
 * Set the angle at an axis of a quaternion.
 * @param {quat} a
 * @param {vec3} v
 * @param {Radians} r
 * @returns {quat}
 */
export function fromAxisAngle(a, v, r) {
  const angle2 = r / 2;
  const sin2 = Math.sin(angle2);
  a[0] = v[0] * sin2;
  a[1] = v[1] * sin2;
  a[2] = v[2] * sin2;
  a[3] = Math.cos(angle2);
  return normalize(a);
}

/**
 * @private
 */
export function _fromMat39(a, m0, m1, m2, m3, m4, m5, m6, m7, m8) {
  const trace = m0 + m4 + m8;
  let s;

  if (trace >= 0) {
    s = Math.sqrt(trace + 1);
    a[3] = s / 2;
    s = 0.5 / s;
    a[0] = (m5 - m7) * s;
    a[1] = (m6 - m2) * s;
    a[2] = (m1 - m3) * s;
  } else if (m0 > m4 && m0 > m8) {
    s = Math.sqrt(1 + m0 - m4 - m8);
    a[0] = s / 2;
    s = 0.5 / s;
    a[1] = (m1 + m3) * s;
    a[2] = (m6 + m2) * s;
    a[3] = (m5 - m7) * s;
  } else if (m4 > m8) {
    s = Math.sqrt(1 + m4 - m0 - m8);
    a[1] = s / 2;
    s = 0.5 / s;
    a[0] = (m1 + m3) * s;
    a[2] = (m5 + m7) * s;
    a[3] = (m6 - m2) * s;
  } else {
    s = Math.sqrt(1 + m8 - m0 - m4);
    a[2] = s / 2;
    s = 0.5 / s;
    a[0] = (m6 + m2) * s;
    a[1] = (m5 + m7) * s;
    a[3] = (m1 - m3) * s;
  }
  return a;
}

/**
 * Sets quaternion from orthonormal base xyz.
 * @param {quat} a
 * @param {vec3} x
 * @param {vec3} y
 * @param {vec3} z
 * @returns {quat}
 */
export function fromAxes(a, x, y, z) {
  return _fromMat39(a, x[0], x[1], x[2], y[0], y[1], y[2], z[0], z[1], z[2]);
}

/**
 * Sets a quaternion to a 3x3 matrix.
 * @param {quat} a
 * @param {mat3} m
 * @returns {quat}
 */
export function fromMat3(a, m) {
  return _fromMat39(a, m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8]);
}

/**
 * Sets a quaternion to a 4x4 matrix.
 * @param {quat} a
 * @param {mat4} m
 * @returns {quat}
 */
export function fromMat4(a, m) {
  return _fromMat39(a, m[0], m[1], m[2], m[4], m[5], m[6], m[8], m[9], m[10]);
}

/**
 * Sets a quaternion to represent the shortest rotation from one vector to another.
 * @param {quat} a
 * @param {vec3} v
 * @param {vec3} w
 * @returns {quat}
 */
export const fromTo = (() => {
  let u = [];
  return (a, v, w) => {
    u = vec3.cross(vec3.set(u, v), w);
    a[0] = u[0];
    a[1] = u[1];
    a[2] = u[2];
    a[3] = 1 + vec3.dot(v, w);
    normalize(a);
    return a;
  };
})();

/**
 * Spherical linear interpolation between two quaternions.
 * @param {quat} a
 * @param {quat} b
 * @param {number} t
 * @returns {quat}
 */
export function slerp(a, b, t) {
  // http://jsperf.com/quaternion-slerp-implementations
  const ax = a[0];
  const ay = a[1];
  const az = a[2];
  const aw = a[3];
  const bx = b[0];
  const by = b[1];
  const bz = b[2];
  const bw = b[3];

  let omega;
  let cosom;
  let sinom;
  let scale0;
  let scale1;

  cosom = dot(a, b);

  if (cosom < 0) {
    cosom = -cosom;
    a[0] = -bx;
    a[1] = -by;
    a[2] = -bz;
    a[3] = -bw;
  } else {
    a[0] = bx;
    a[1] = by;
    a[2] = bz;
    a[3] = bw;
  }

  if (1 - cosom > EPSILON) {
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    scale0 = 1 - t;
    scale1 = t;
  }

  a[0] = scale0 * ax + scale1 * a[0];
  a[1] = scale0 * ay + scale1 * a[1];
  a[2] = scale0 * az + scale1 * a[2];
  a[3] = scale0 * aw + scale1 * a[3];
  return a;
}
