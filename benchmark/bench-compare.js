import { Bench } from "tinybench";
import { mat3, mat4, quat, utils, vec3 } from "../index.js";
import { mat4 as glMat4, quat as glQuat } from "gl-matrix";
import { pairTable } from "./report.js";

// Iteration-bounded (time: 0) rather than time-bounded: at the default 1s
// budget these sub-100ns operations collect tens of millions of samples per
// task, and the per-task percentile sort then dominates the whole run.
const bench = new Bench({
  name: "pex-math vs gl-matrix",
  time: 0,
  iterations: 50_000,
  warmupTime: 0,
  warmupIterations: 5000,
});

// Both libraries get the same array type: V8 optimises Array and typed arrays
// differently, so mixing them measures the container, not the math.
const ArrayType = process.argv.includes("--float32") ? Float32Array : Array;
const from = (values) => ArrayType.from(values);

// Realistic, non-integer fixtures: integer-only Arrays and identity matrices
// take V8 and branch shortcuts that real transforms never hit.
const VEC3 = [0.75, -1.25, 2.5];
const AXIS = vec3.normalize([1, 2, 3]);
const ANGLE = 0.42;
const EULER = [0.3, -0.7, 1.1];
const QUAT = quat.normalize([0.1, 0.4, -0.3, 0.85]);
const QUAT_2 = quat.normalize([-0.6, 0.2, 0.5, 0.4]);
const SCALE = [1.2, 0.8, 1.5];
const MAT3 = mat3.fromQuat(mat3.create(), QUAT);
const ROTATION_MAT4 = mat4.fromQuat(mat4.create(), QUAT);
const MAT4 = mat4.fromTranslationRotationScale(
  mat4.create(),
  VEC3,
  QUAT,
  SCALE,
);
const MAT4_2 = mat4.fromTranslationRotationScale(
  mat4.create(),
  [-3.5, 0.25, 1.75],
  QUAT_2,
  [0.9, 1.1, 0.7],
);
const EYE = [1.5, 4.25, 6.5];
const TARGET = [0.25, 0.5, -0.75];
const FOVY = Math.PI / 4;
const ASPECT = 16 / 9;
const NEAR = 0.1;
const FAR = 100;

const operations = [];

// Register a pex/gl-matrix pair of tasks for an operation, tracked so the two
// can be reported side by side once the bench has run. In-place operations
// pass a reset so every iteration starts from the same input, outside the
// timed section: otherwise values drift (scale/translate overflow, slerp
// converges to its target and takes the linear branch).
const compare = (name, factory) => {
  const { pex, glMatrix, reset } = factory();
  const options = reset && { beforeEach: reset };
  bench.add(`${name} · pex`, pex, options);
  bench.add(`${name} · gl-matrix`, glMatrix, options);
  operations.push(name);
};

// mat4
compare("mat4.create", () => ({
  pex: () => mat4.create(),
  glMatrix: () => glMat4.create(),
}));
compare("mat4.identity", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return { pex: () => mat4.identity(m), glMatrix: () => glMat4.identity(g) };
});
compare("mat4.copy", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return { pex: () => mat4.copy(m), glMatrix: () => glMat4.clone(g) };
});
compare("mat4.mult", () => {
  const m1 = from(MAT4);
  const m2 = from(MAT4_2);
  const g1 = from(MAT4);
  const g2 = from(MAT4_2);
  return {
    pex: () => mat4.mult(m1, m2),
    glMatrix: () => glMat4.mul(g1, g1, g2),
    reset: () => {
      mat4.set(m1, MAT4);
      mat4.set(g1, MAT4);
    },
  };
});
compare("mat4.invert", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.invert(m),
    glMatrix: () => glMat4.invert(g, g),
    reset: () => {
      mat4.set(m, MAT4);
      mat4.set(g, MAT4);
    },
  };
});
compare("mat4.transpose", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.transpose(m),
    glMatrix: () => glMat4.transpose(g, g),
  };
});
compare("mat4.transpose copy", () => {
  const out = from(MAT4);
  const m = from(MAT4);
  const g = from(MAT4);
  const gout = from(MAT4);
  return {
    pex: () => mat4.transpose(mat4.set(out, m)),
    glMatrix: () => glMat4.transpose(gout, g),
  };
});
compare("mat4.scale", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.scale(m, SCALE),
    glMatrix: () => glMat4.scale(g, g, SCALE),
    reset: () => {
      mat4.set(m, MAT4);
      mat4.set(g, MAT4);
    },
  };
});
compare("mat4.translate", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.translate(m, VEC3),
    glMatrix: () => glMat4.translate(g, g, VEC3),
    reset: () => {
      mat4.set(m, MAT4);
      mat4.set(g, MAT4);
    },
  };
});
compare("mat4.rotate", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.rotate(m, ANGLE, AXIS),
    glMatrix: () => glMat4.rotate(g, g, ANGLE, AXIS),
    reset: () => {
      mat4.set(m, MAT4);
      mat4.set(g, MAT4);
    },
  };
});
compare("mat4.fromQuat", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.fromQuat(m, QUAT),
    glMatrix: () => glMat4.fromQuat(g, QUAT),
  };
});
compare("mat4.fromTranslationRotationScale", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.fromTranslationRotationScale(m, VEC3, QUAT, SCALE),
    glMatrix: () => glMat4.fromRotationTranslationScale(g, QUAT, VEC3, SCALE),
  };
});
compare("mat4.frustum", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.frustum(m, -0.16, 0.16, -0.09, 0.09, NEAR, FAR),
    glMatrix: () => glMat4.frustum(g, -0.16, 0.16, -0.09, 0.09, NEAR, FAR),
  };
});
compare("mat4.perspective", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.perspective(m, FOVY, ASPECT, NEAR, FAR),
    glMatrix: () => glMat4.perspective(g, FOVY, ASPECT, NEAR, FAR),
  };
});
compare("mat4.perspectiveZO", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.perspectiveZO(m, FOVY, ASPECT, NEAR, FAR),
    glMatrix: () => glMat4.perspectiveZO(g, FOVY, ASPECT, NEAR, FAR),
  };
});
compare("mat4.ortho", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.ortho(m, -1.6, 1.6, -0.9, 0.9, NEAR, FAR),
    glMatrix: () => glMat4.ortho(g, -1.6, 1.6, -0.9, 0.9, NEAR, FAR),
  };
});
compare("mat4.orthoZO", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.orthoZO(m, -1.6, 1.6, -0.9, 0.9, NEAR, FAR),
    glMatrix: () => glMat4.orthoZO(g, -1.6, 1.6, -0.9, 0.9, NEAR, FAR),
  };
});
compare("mat4.lookAt", () => {
  const m = from(MAT4);
  const g = from(MAT4);
  return {
    pex: () => mat4.lookAt(m, EYE, TARGET, utils.Y_UP),
    glMatrix: () => glMat4.lookAt(g, EYE, TARGET, utils.Y_UP),
  };
});

// quat
compare("quat.create", () => ({
  pex: () => quat.create(),
  glMatrix: () => glQuat.create(),
}));
compare("quat.identity", () => {
  const q = from(QUAT);
  const g = from(QUAT);
  return { pex: () => quat.identity(q), glMatrix: () => glQuat.identity(g) };
});
compare("quat.copy", () => {
  const q = from(QUAT);
  const g = from(QUAT);
  return { pex: () => quat.copy(q), glMatrix: () => glQuat.clone(g) };
});
compare("quat.mult", () => {
  const q1 = from(QUAT);
  const q2 = from(QUAT_2);
  const g1 = from(QUAT);
  const g2 = from(QUAT_2);
  return {
    pex: () => quat.mult(q1, q2),
    glMatrix: () => glQuat.multiply(g1, g1, g2),
    reset: () => {
      quat.set(q1, QUAT);
      quat.set(g1, QUAT);
    },
  };
});
compare("quat.invert", () => {
  const q = from(QUAT);
  const g = from(QUAT);
  return {
    pex: () => quat.invert(q),
    glMatrix: () => glQuat.invert(g, g),
    reset: () => {
      quat.set(q, QUAT);
      quat.set(g, QUAT);
    },
  };
});
compare("quat.conjugate", () => {
  const q = from(QUAT);
  const g = from(QUAT);
  return {
    pex: () => quat.conjugate(q),
    glMatrix: () => glQuat.conjugate(g, g),
  };
});
compare("quat.length", () => {
  const q = from(QUAT);
  const g = from(QUAT);
  return { pex: () => quat.length(q), glMatrix: () => glQuat.length(g) };
});
compare("quat.normalize", () => {
  const unnormalized = QUAT.map((n) => n * 2.5);
  const q = from(unnormalized);
  const g = from(unnormalized);
  return {
    pex: () => quat.normalize(q),
    glMatrix: () => glQuat.normalize(g, g),
    reset: () => {
      quat.set(q, unnormalized);
      quat.set(g, unnormalized);
    },
  };
});
compare("quat.dot", () => {
  const q1 = from(QUAT);
  const q2 = from(QUAT_2);
  const g1 = from(QUAT);
  const g2 = from(QUAT_2);
  return { pex: () => quat.dot(q1, q2), glMatrix: () => glQuat.dot(g1, g2) };
});
compare("quat.fromEuler", () => {
  const q = from(QUAT);
  const g = from(QUAT);
  const [x, y, z] = EULER.map(utils.toDegrees);
  return {
    pex: () => quat.fromEuler(q, EULER),
    glMatrix: () => glQuat.fromEuler(g, x, y, z, "xyz"),
  };
});
compare("quat.fromAxisAngle", () => {
  const q = from(QUAT);
  const g = from(QUAT);
  return {
    pex: () => quat.fromAxisAngle(q, AXIS, ANGLE),
    glMatrix: () => glQuat.setAxisAngle(g, AXIS, ANGLE),
  };
});
compare("quat.fromAxes", () => {
  const q = from(QUAT);
  const g = from(QUAT);
  const x = MAT3.slice(0, 3);
  const y = MAT3.slice(3, 6);
  const z = MAT3.slice(6, 9);
  // gl-matrix takes a view direction (-z) and builds the transposed basis.
  const view = z.map((n) => -n);
  return {
    pex: () => quat.fromAxes(q, x, y, z),
    glMatrix: () => glQuat.setAxes(g, view, x, y),
  };
});
compare("quat.fromMat3", () => {
  const q = from(QUAT);
  const m = from(MAT3);
  const g = from(QUAT);
  const gm = from(MAT3);
  return {
    pex: () => quat.fromMat3(q, m),
    glMatrix: () => glQuat.fromMat3(g, gm),
  };
});
compare("quat.fromMat4", () => {
  const q = from(QUAT);
  const m = from(ROTATION_MAT4);
  const g = from(QUAT);
  const gm = from(ROTATION_MAT4);
  // gl-matrix has no direct equivalent: getRotation also removes scaling.
  return {
    pex: () => quat.fromMat4(q, m),
    glMatrix: () => glMat4.getRotation(g, gm),
  };
});
compare("quat.slerp", () => {
  const q1 = from(QUAT);
  const q2 = from(QUAT_2);
  const g1 = from(QUAT);
  const g2 = from(QUAT_2);
  return {
    pex: () => quat.slerp(q1, q2, 0.5),
    glMatrix: () => glQuat.slerp(g1, g1, g2, 0.5),
    reset: () => {
      quat.set(q1, QUAT);
      quat.set(g1, QUAT);
    },
  };
});

await bench.run();

pairTable(
  bench.name,
  ["pex", "gl-matrix"],
  operations.map((name) => ({
    name,
    a: bench.getTask(`${name} · pex`),
    b: bench.getTask(`${name} · gl-matrix`),
  })),
);
