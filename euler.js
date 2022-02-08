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
 * Creates euler angles from quaterion. Assumes XYZ order of rotations.
 * @param {euler} v
 * @param {quat} q
 * @returns {euler}
 */
export function fromQuat(v, q) {
  const sqx = q[0] * q[0];
  const sqy = q[1] * q[1];
  const sqz = q[2] * q[2];
  const sqw = q[3] * q[3];
  v[0] = Math.atan2(2 * (q[0] * q[3] - q[1] * q[2]), sqw - sqx - sqy + sqz);
  v[1] = Math.asin(clamp(2 * (q[0] * q[2] + q[1] * q[3]), -1, 1));
  v[2] = Math.atan2(2 * (q[2] * q[3] - q[0] * q[1]), sqw + sqx - sqy - sqz);
  return v;
}
