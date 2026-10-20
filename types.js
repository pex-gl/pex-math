/**
 * @typedef {Int8Array
 *   | Uint8Array
 *   | Uint8ClampedArray
 *   | Int16Array
 *   | Uint16Array
 *   | Int32Array
 *   | Uint32Array
 *   | Float16Array
 *   | Float32Array
 *   | Float64Array
 *   | BigInt64Array
 *   | BigUint64Array} TypedArray
 */

/** @typedef {TypedArray} AVec2 */

/** @typedef {TypedArray} AVec3 */

/** @typedef {TypedArray} AVec4 */

/** @typedef {TypedArray} AMat4 */

/** @typedef {TypedArray} AQuat */

/** @typedef {number[]} Euler */

/** @typedef {number[]} Mat2x3 */

/** @typedef {number[]} Mat3 */

/** @typedef {number[]} Mat4 */

/** @typedef {number[]} Quat */

/** @typedef {number[]} Vec2 */

/** @typedef {number[]} Vec3 */

/** @typedef {number[]} Vec4 */

/** @typedef {number} Degrees */

/** @typedef {number} Radians */

/**
 * Callback for iterating typed arrays.
 *
 * @callback iterativeCallback
 * @param {Vec2 | Vec3 | Vec4} element
 * @param {number} index
 * @param {AVec2 | AVec3 | AVec4} array
 */

/**
 * Ease functions signature.
 *
 * @callback easeFn
 * @param {number} t Interpolant value
 * @returns {number}
 */

/**
 * Ease step functions signature.
 *
 * @callback easeStepFn
 * @param {number} t Interpolant value
 * @param {number} [step=1] Number of steps
 * @returns {number}
 */

/**
 * Ease step function signature without jumps at either end.
 *
 * @callback easeStepNoneFn
 * @param {number} t Interpolant value
 * @param {number} [step=2] Number of steps, at least 2
 * @returns {number}
 */

export {};
