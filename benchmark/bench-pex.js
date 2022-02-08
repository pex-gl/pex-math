import bench from "nanobench";
import { run } from "./utils.js";
import { mat4 } from "../index.js";

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

bench("mat4/lookAt", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.lookAt(m, [0, 4, 2], [0, 0, 0], [0, 1, 0]));
  b.end();
});

bench("mat4/clone", (b) => {
  const m = mat4.create();

  b.start();
  run(() => mat4.copy(m));
  b.end();
});
