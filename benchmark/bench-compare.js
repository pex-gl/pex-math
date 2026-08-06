import { Bench } from "tinybench";
import { euler, mat3, mat4, quat } from "../index.js";
import {
  mat3 as glMat3,
  mat4 as glMat4,
  quat as glQuat,
  vec3 as glVec3,
} from "gl-matrix";
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

const operations = [];

// Register a pex/gl-matrix pair of tasks for an operation, tracked so the two
// can be reported side by side once the bench has run.
const compare = (name, factory) => {
  const { pex, glMatrix } = factory();
  bench.add(`${name} · pex`, pex);
  bench.add(`${name} · gl-matrix`, glMatrix);
  operations.push(name);
};

// mat4
compare("mat4.create", () => ({
  pex: () => mat4.create(),
  glMatrix: () => glMat4.create(),
}));
compare("mat4.identity", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return { pex: () => mat4.identity(m), glMatrix: () => glMat4.identity(g) };
});
compare("mat4.copy", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return { pex: () => mat4.copy(m), glMatrix: () => glMat4.clone(g) };
});
compare("mat4.mult", () => {
  const m1 = mat4.create();
  const m2 = mat4.create();
  const g1 = glMat4.create();
  const g2 = glMat4.create();
  return {
    pex: () => mat4.mult(m1, m2),
    glMatrix: () => glMat4.mul(g1, g1, g2),
  };
});
compare("mat4.invert", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return { pex: () => mat4.invert(m), glMatrix: () => glMat4.invert(g, g) };
});
compare("mat4.transpose", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.transpose(m),
    glMatrix: () => glMat4.transpose(g, g),
  };
});
compare("mat4.transpose copy", () => {
  const out = mat4.create();
  const m = mat4.create();
  const g = glMat4.create();
  const gout = glMat4.create();
  return {
    pex: () => {
      mat4.transpose(m);
      mat4.copy(out, m);
    },
    glMatrix: () => glMat4.transpose(gout, g),
  };
});
compare("mat4.scale", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.scale(m, [4, 2, 9]),
    glMatrix: () => glMat4.scale(g, g, [4, 2, 9]),
  };
});
compare("mat4.translate", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.translate(m, [4, 2, 9]),
    glMatrix: () => glMat4.translate(g, g, [4, 2, 9]),
  };
});
compare("mat4.rotate", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.rotate(m, 0.42, [1, 0, 0]),
    glMatrix: () => glMat4.rotate(g, g, 0.42, [1, 0, 0]),
  };
});
compare("mat4.fromQuat", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.fromQuat(m, [0, 0, 0, 1]),
    glMatrix: () => glMat4.fromQuat(g, [0, 0, 0, 1]),
  };
});
compare("mat4.fromTranslationRotationScale", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () =>
      mat4.fromTranslationRotationScale(m, [0, 0, 1], [0, 0, 0, 1], [2, 2, 2]),
    glMatrix: () =>
      glMat4.fromRotationTranslationScale(
        g,
        [0, 0, 0, 1],
        [0, 0, 1],
        [2, 2, 2],
      ),
  };
});
compare("mat4.frustum", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.frustum(m, -1, 1, -1, 1, -1, 1),
    glMatrix: () => glMat4.frustum(g, -1, 1, -1, 1, -1, 1),
  };
});
compare("mat4.perspective", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.perspective(m, Math.PI * 0.5, 1, 0, 1),
    glMatrix: () => glMat4.perspective(g, Math.PI * 0.5, 1, 0, 1),
  };
});
compare("mat4.perspectiveZO", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.perspectiveZO(m, Math.PI * 0.5, 1, 0, 1),
    glMatrix: () => glMat4.perspectiveZO(g, Math.PI * 0.5, 1, 0, 1),
  };
});
compare("mat4.ortho", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.ortho(m, -1, 1, -1, 1, -1, 1),
    glMatrix: () => glMat4.ortho(g, -1, 1, -1, 1, -1, 1),
  };
});
compare("mat4.orthoZO", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.orthoZO(m, -1, 1, -1, 1, -1, 1),
    glMatrix: () => glMat4.orthoZO(g, -1, 1, -1, 1, -1, 1),
  };
});
compare("mat4.lookAt", () => {
  const m = mat4.create();
  const g = glMat4.create();
  return {
    pex: () => mat4.lookAt(m, [0, 4, 2], [0, 0, 0], [0, 1, 0]),
    glMatrix: () => glMat4.lookAt(g, [0, 4, 2], [0, 0, 0], [0, 1, 0]),
  };
});

// quat
compare("quat.create", () => ({
  pex: () => quat.create(),
  glMatrix: () => glQuat.create(),
}));
compare("quat.identity", () => {
  const q = quat.create();
  const g = glQuat.create();
  return { pex: () => quat.identity(q), glMatrix: () => glQuat.identity(g) };
});
compare("quat.copy", () => {
  const q = quat.create();
  const g = glQuat.create();
  return { pex: () => quat.copy(q), glMatrix: () => glQuat.clone(g) };
});
compare("quat.mult", () => {
  const q1 = quat.create();
  const q2 = quat.create();
  const g1 = glQuat.create();
  const g2 = glQuat.create();
  return {
    pex: () => quat.mult(q1, q2),
    glMatrix: () => glQuat.multiply(g1, g1, g2),
  };
});
compare("quat.invert", () => {
  const q = quat.create();
  const g = glQuat.create();
  return { pex: () => quat.invert(q), glMatrix: () => glQuat.invert(g, g) };
});
compare("quat.conjugate", () => {
  const q = quat.create();
  const g = glQuat.create();
  return {
    pex: () => quat.conjugate(q),
    glMatrix: () => glQuat.conjugate(g, g),
  };
});
compare("quat.length", () => {
  const q = quat.create();
  const g = glQuat.create();
  return { pex: () => quat.length(q), glMatrix: () => glQuat.length(g) };
});
compare("quat.normalize", () => {
  const q = quat.create();
  const g = glQuat.create();
  return {
    pex: () => quat.normalize(q),
    glMatrix: () => glQuat.normalize(g, g),
  };
});
compare("quat.dot", () => {
  const q1 = quat.create();
  const q2 = quat.create();
  const g1 = glQuat.create();
  const g2 = glQuat.create();
  return { pex: () => quat.dot(q1, q2), glMatrix: () => glQuat.dot(g1, g2) };
});
compare("quat.fromEuler", () => {
  const q = quat.create();
  const e = euler.create();
  const g = glQuat.create();
  const ge = glVec3.create();
  return {
    pex: () => quat.fromEuler(q, e),
    glMatrix: () => glQuat.fromEuler(g, ge[0], ge[1], ge[2]),
  };
});
compare("quat.fromAxisAngle", () => {
  const q = quat.create();
  const g = glQuat.create();
  const v = [4, 2, 9];
  const r = Math.PI;
  return {
    pex: () => quat.fromAxisAngle(q, v, r),
    glMatrix: () => glQuat.setAxisAngle(g, v, r),
  };
});
compare("quat.fromAxes", () => {
  const q = quat.create();
  const g = glQuat.create();
  const y = [0, 1, 0];
  const z = [0, 0, -1];
  return {
    pex: () => quat.fromAxes(q, [1, 0, 0], y, z),
    glMatrix: () => glQuat.setAxes(g, [-1, 0, 0], y, z),
  };
});
compare("quat.fromMat3", () => {
  const q = quat.create();
  const m = mat3.create();
  const g = glQuat.create();
  const gm = glMat3.create();
  return {
    pex: () => quat.fromMat3(q, m),
    glMatrix: () => glQuat.fromMat3(g, gm),
  };
});
compare("quat.fromMat4", () => {
  const q = quat.create();
  const m = mat4.create();
  const g = glQuat.create();
  const gm = glMat4.create();
  return {
    pex: () => quat.fromMat4(q, m),
    glMatrix: () => glMat4.getRotation(g, gm),
  };
});
compare("quat.slerp", () => {
  const q1 = quat.create();
  const q2 = quat.create();
  const g1 = glQuat.create();
  const g2 = glQuat.create();
  return {
    pex: () => quat.slerp(q1, q2, 0.5),
    glMatrix: () => glQuat.slerp(g1, g1, g2, 0.5),
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
