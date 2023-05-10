import bench from "nanobench";
import { mat4, quat, mat3, vec3 } from "gl-matrix";
import { run } from "./utils.js";

// mat4
bench("mat4.create", (b) => {
  b.start();
  run(() => mat4.create());
  b.end();
});
bench("mat4.identity", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.identity(m));
  b.end();
});
bench("mat4.copy", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.clone(m));
  b.end();
});
bench("mat4.mult", (b) => {
  const m1 = mat4.create();
  const m2 = mat4.create();

  b.start();
  run(() => mat4.mul(m1, m1, m2));
  b.end();
});
bench("mat4.invert", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.invert(m, m));
  b.end();
});
bench("mat4.transpose", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.transpose(m, m));
  b.end();
});
bench("mat4.transpose copy", (b) => {
  const out = mat4.create();
  const m = mat4.create();

  b.start();
  run(() => mat4.transpose(out, m));
  b.end();
});
bench("mat4.scale", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.scale(m, m, [4, 2, 9]));
  b.end();
});
bench("mat4.translate", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.translate(m, m, [4, 2, 9]));
  b.end();
});
bench("mat4.rotate", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.rotate(m, m, 0.42, [1, 0, 0]));
  b.end();
});
bench("mat4.fromQuat", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.fromQuat(m, [0, 0, 0, 1]));
  b.end();
});
bench("mat4.fromTranslationRotationScale", (b) => {
  const m = mat4.create();

  b.start();
  run(() =>
    mat4.fromRotationTranslationScale(m, [0, 0, 0, 1], [0, 0, 1], [2, 2, 2])
  );
  b.end();
});
// bench("mat4.fromMat3", (b) => {}, (b) => {});
bench("mat4.frustum", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.frustum(m, -1, 1, -1, 1, -1, 1));
  b.end();
});
bench("mat4.perspective", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.perspective(m, Math.PI * 0.5, 1, 0, 1));
  b.end();
});
bench("mat4.ortho", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.perspective(m, -1, 1, -1, 1, -1, 1));
  b.end();
});
bench("mat4.lookAt", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.lookAt(m, [0, 4, 2], [0, 0, 0], [0, 1, 0]));
  b.end();
});
bench("mat4.targetTo", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.targetTo(m, [0, 4, 2], [0, 0, 0], [0, 1, 0]));
  b.end();
});

// quat
bench("quat.create", (b) => {
  b.start();
  run(() => quat.create());
  b.end();
});
bench("quat.identity", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.identity(q));
  b.end();
});
bench("quat.copy", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.clone(q));
  b.end();
});
bench("quat.mult", (b) => {
  const q1 = quat.create();
  const q2 = quat.create();

  b.start();
  run(() => quat.multiply(q1, q1, q2));
  b.end();
});
bench("quat.invert", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.invert(q, q));
  b.end();
});
bench("quat.conjugate", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.conjugate(q, q));
  b.end();
});
bench("quat.length", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.length(q));
  b.end();
});
bench("quat.normalize", (b) => {
  const q = quat.create();

  b.start();
  run(() => quat.normalize(q, q));
  b.end();
});
bench("quat.dot", (b) => {
  const q1 = quat.create();
  const q2 = quat.create();

  b.start();
  run(() => quat.dot(q1, q2));
  b.end();
});
bench("quat.fromEuler", (b) => {
  const q = quat.create();
  const e = vec3.create();

  b.start();
  run(() => quat.fromEuler(q, e[0], e[1], e[2]));
  b.end();
});
bench("quat.fromAxisAngle", (b) => {
  const q = quat.create();
  const v = [4, 2, 9];
  const r = Math.PI;

  b.start();
  run(() => quat.setAxisAngle(q, v, r));
  b.end();
});
bench("quat.fromAxes", (b) => {
  const q = quat.create();
  const x = [-1, 0, 0];
  const y = [0, 1, 0];
  const z = [0, 0, -1];

  b.start();
  run(() => quat.setAxes(q, x, y, z));
  b.end();
});
bench("quat.fromMat3", (b) => {
  const q = quat.create();
  const m = mat3.create();

  b.start();
  run(() => quat.fromMat3(q, m));
  b.end();
});
bench("quat.fromMat4", (b) => {
  const q = quat.create();
  const m = mat4.create();
  b.start();
  run(() => mat4.getRotation(q, m));
  b.end();
});
bench("quat.fromTo", (b) => {
  const q = quat.create();
  const v = vec3.create();
  const w = vec3.create();

  b.start();
  run(() => quat.rotationTo(q, v, w));
  b.end();
});
bench("quat.slerp", (b) => {
  const q1 = quat.create();
  const q2 = quat.create();

  b.start();
  run(() => quat.slerp(q1, q1, q2, 0.5));
  b.end();
});
