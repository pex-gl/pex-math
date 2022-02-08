import bench from "nanobench";
import { mat4 } from "gl-matrix";
import { run } from "./utils.js";

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

bench("mat4/lookAt", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.lookAt(m, [0, 4, 2], [0, 0, 0], [0, 1, 0]));
  b.end();
});

bench("mat4/clone", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.clone(m));
  b.end();
});
