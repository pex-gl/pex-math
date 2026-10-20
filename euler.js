/** @module euler */

/**
 * Returns new euler angles at 0, 0, 0: rotations in radians around the x, y and
 * z axes (pitch, yaw and roll with Y up).
 *
 * @returns {import("./types.js").Euler}
 */
export function create() {
  return [0, 0, 0];
}

/**
 * Creates euler angles from quaternion. Assumes XYZ order of rotations.
 *
 * @param {import("./types.js").Euler} a
 * @param {import("./types.js").Quat} q
 * @returns {import("./types.js").Euler}
 */
export function fromQuat(a, q) {
  const x = q[0];
  const y = q[1];
  const z = q[2];
  const w = q[3];

  const xx = x * x;
  const yy = y * y;
  const zz = z * z;
  const ww = w * w;

  // Matrix entries scaled by |q|², cancelled by atan2: q needn't be unit.
  const m02 = 2 * (x * z + y * w);
  const m10 = 2 * (x * y + z * w);
  const m11 = ww - xx + yy - zz;
  const m20 = 2 * (x * z - y * w);
  const m21 = 2 * (y * z + x * w);
  const m22 = ww - xx - yy + zz;
  const sxcy = 2 * (x * w - y * z);
  const cy = Math.sqrt(sxcy * sxcy + m22 * m22);

  // Mike Day, "Extracting Euler Angles from a Rotation Matrix" (2014): atan2
  // keeps y precise near ±π/2, and solving z from x keeps both consistent in
  // gimbal lock.
  a[1] = Math.atan2(m02, cy);

  if (cy) {
    a[0] = Math.atan2(sxcy, m22);
    a[2] = Math.atan2(m22 * m10 + sxcy * m20, m22 * m11 + sxcy * m21);
  } else {
    // x is arbitrary in exact gimbal lock
    a[0] = 0;
    a[2] = Math.atan2(m10, m11);
  }

  return a;
}
