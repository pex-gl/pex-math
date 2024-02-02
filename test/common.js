export function deepAlmostEqual(a, b, epsilon = 0.001) {
  if (a.length != b.length) throw new Error(`${a} deepAlmostEqual ${b}`);
  for (let i = 0; i < a.length; i++) {
    if (!Number.isFinite(a[i]) || !Number.isFinite(b[[i]])) {
      throw new Error(`${a} deepAlmostEqual ${b} not finite`);
    }
    if (Math.abs(a[i] - b[i]) > epsilon) {
      throw new Error(
        `${a} deepAlmostEqual ${b} (diff=${Math.abs(a[i] - b[i])})`,
      );
    }
  }
}

export const ORIGIN = Object.freeze([0, 0, 0]);
export const X_UP = Object.freeze([1, 0, 0]);
export const X_DOWN = Object.freeze([-1, 0, 0]);
export const Y_UP = Object.freeze([0, 1, 0]);
export const Y_DOWN = Object.freeze([0, -1, 0]);
export const Z_UP = Object.freeze([0, 0, 1]);
export const Z_DOWN = Object.freeze([0, 0, -1]);

export const IDENTITY_MAT2X3 = Object.freeze([1, 0, 0, 1, 0, 0]);
export const IDENTITY_MAT3 = Object.freeze([1, 0, 0, 0, 1, 0, 0, 0, 1]);
export const IDENTITY_MAT4 = Object.freeze([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
]);

export const X_QUAT = Object.freeze([0.7071068, 0, 0, 0.7071068]);
export const Y_QUAT = Object.freeze([0, 0.7071068, 0, 0.7071068]);
export const Z_QUAT = Object.freeze([0, 0, 0.7071068, 0.7071068]);

export const ONE_TWO_VEC2 = Object.freeze([1, 2]);
export const ONE_TWO_THREE_VEC3 = Object.freeze([1, 2, 3]);
// prettier-ignore
export const ONE_TWO_THREE_MAT4 = Object.freeze([
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  1, 2, 3, 1
]);
