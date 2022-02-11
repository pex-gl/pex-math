import bench from "nanobench";
import { euler, mat3, mat4, quat, vec3 } from "../index.js";
import { run } from "./utils.js";

// mat4
bench("mat4/create", (b) => {
  b.start();
  run(() => mat4.create());
  b.end();
});
bench("mat4/identity", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.identity(m));
  b.end();
});
bench("mat4/copy", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.copy(m));
  b.end();
});
bench("mat4/mult", (b) => {
  const m1 = mat4.create();
  const m2 = mat4.create();
  // const m1 = Float32Array.of(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  // const m2 = Float32Array.of(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

  b.start();
  run(() => mat4.mult(m1, m2));
  b.end();
});
bench("mat4/invert", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.invert(m));
  b.end();
});
bench("mat4/transpose", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.transpose(m));
  b.end();
});
bench("mat4/transpose copy", (b) => {
  const out = mat4.create();
  const m = mat4.create();

  b.start();
  run(() => {
    mat4.transpose(m);
    mat4.copy(out, m);
  });
  b.end();
});
bench("mat4/scale", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.scale(m, [4, 2, 9]));
  b.end();
});
bench("mat4/translate", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.translate(m, [4, 2, 9]));
  b.end();
});
bench("mat4/rotate", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.rotate(m, 0.42, [1, 0, 0]));
  b.end();
});
bench("mat4/fromQuat", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.fromQuat(m, [0, 0, 0, 1]));
  b.end();
});
bench("mat4/fromTranslationRotationScale", (b) => {
  const m = mat4.create();

  b.start();
  run(() =>
    mat4.fromTranslationRotationScale(m, [0, 0, 1], [0, 0, 0, 1], [2, 2, 2])
  );
  b.end();
});

// bench("mat4/fromMat3", (b) => {
//   const m = mat4.create();
//   const m3 = mat3.create();

//   b.start();
//   run(() => mat4.fromMat3(m, m3));
//   b.end();
// });
bench("mat4/frustum", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.frustum(m, -1, 1, -1, 1, -1, 1));
  b.end();
});
bench("mat4/perspective", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.perspective(m, Math.PI * 0.5, 1, 0, 1));
  b.end();
});
bench("mat4/ortho", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.perspective(m, -1, 1, -1, 1, -1, 1));
  b.end();
});
bench("mat4/lookAt", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.lookAt(m, [0, 4, 2], [0, 0, 0], [0, 1, 0]));
  b.end();
});

// quat
bench("quat/create", (b) => {
  b.start();
  run(() => quat.create());
  b.end();
});
bench("quat/identity", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.identity(q));
  b.end();
});
bench("quat/copy", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.copy(q));
  b.end();
});
bench("quat/mult", (b) => {
  const q1 = quat.create();
  const q2 = quat.create();

  b.start();
  run(() => quat.mult(q1, q2));
  b.end();
});
bench("quat/invert", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.invert(q));
  b.end();
});
bench("quat/conjugate", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.conjugate(q));
  b.end();
});
bench("quat/length", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.length(q));
  b.end();
});
bench("quat/normalize", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.normalize(q));
  b.end();
});
bench("quat/dot", (b) => {
  const q1 = quat.create();
  const q2 = quat.create();

  b.start();
  run(() => quat.dot(q1, q2));
  b.end();
});
bench("quat/fromEuler", (b) => {
  const q = quat.create();
  const e = euler.create();

  b.start();
  run(() => quat.fromEuler(q, e));
  b.end();
});
bench("quat/fromAxisAngle", (b) => {
  const q = quat.create();
  const v = [4, 2, 9];
  const r = Math.PI;

  b.start();
  run(() => quat.fromAxisAngle(q, v, r));
  b.end();
});
bench("quat/fromAxes", (b) => {
  const q = quat.create();
  const x = [1, 0, 0];
  const y = [0, 1, 0];
  const z = [0, 0, -1];

  b.start();
  run(() => quat.fromAxes(q, x, y, z));
  b.end();
});
bench("quat/fromMat3", (b) => {
  const q = quat.create();
  const m = mat3.create();

  b.start();
  run(() => quat.fromMat3(q, m));
  b.end();
});
// bench("quat/fromMat4", (b) => {
//   const q = quat.create();
//   const m = mat4.create();

//   b.start();
//   run(() => quat.fromMat4(q, m));
//   b.end();
// });
bench("quat/fromTo", (b) => {
  const q = quat.create();
  const v = vec3.create();
  const w = vec3.create();

  b.start();
  run(() => quat.fromTo(q, v, w));
  b.end();
});
bench("quat/slerp", (b) => {
  const q1 = quat.create();
  const q2 = quat.create();

  b.start();
  run(() => quat.slerp(q1, q2, 0.5));
  b.end();
});
