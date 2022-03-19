/**
 * @module euler
 */

import { clamp } from "./utils.js";

/**
 * Create a new euler angles [0, 0, 0]: vec3 array of [x, y, z] rotation [yaw, pitch, roll] in radians.
 * @returns {euler}
 */
export function create() {
  return [0, 0, 0];
}

/**
 * Creates euler angles from quaternion. Assumes XYZ order of rotations.
 * @param {euler} a
 * @param {quat} q
 * @returns {euler}
 */
export function fromQuat(a, q) {
  const sqx = q[0] * q[0];
  const sqy = q[1] * q[1];
  const sqz = q[2] * q[2];
  const sqw = q[3] * q[3];
  a[0] = Math.atan2(2 * (q[0] * q[3] - q[1] * q[2]), sqw - sqx - sqy + sqz);
  a[1] = Math.asin(clamp(2 * (q[0] * q[2] + q[1] * q[3]), -1, 1));
  a[2] = Math.atan2(2 * (q[2] * q[3] - q[0] * q[1]), sqw + sqx - sqy - sqz);
  return a;
}
