import bench from "nanobench";
import { mat4 } from "gl-matrix";
import { run } from "./utils.js";

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

bench("mat4/clone", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.clone(m));
  b.end();
});

bench("mat4/mult", (b) => {
  const m1 = mat4.create();
  const m2 = mat4.create();

  b.start();
  run(() => mat4.mul(m1, m1, m2));
  b.end();
});

bench("mat4/invert", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.invert(m, m));
  b.end();
});

bench("mat4/transpose", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.transpose(m, m));
  b.end();
});

bench("mat4/transpose copy", (b) => {
  const out = mat4.create();
  const m = mat4.create();

  b.start();
  run(() => mat4.transpose(out, m));
  b.end();
});

bench("mat4/scale", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.scale(m, m, [4, 2, 9]));
  b.end();
});

bench("mat4/translate", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.translate(m, m, [4, 2, 9]));
  b.end();
});

bench("mat4/rotate", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.rotate(m, m, 0.42, [1, 0, 0]));
  b.end();
});

bench("mat4/fromQuat", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.fromQuat(m, [0, 0, 0, 1]));
  b.end();
});

bench("mat4/fromRotationTranslationScale", (b) => {
  const m = mat4.create();

  b.start();
  run(() =>
    mat4.fromRotationTranslationScale(m, [0, 0, 0, 1], [0, 0, 1], [2, 2, 2])
  );
  b.end();
});

// bench("mat4/fromMat3", (b) => {});

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
