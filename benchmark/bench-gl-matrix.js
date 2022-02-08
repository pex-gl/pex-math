import bench from "nanobench";
import { mat4 as glMat4 } from "gl-matrix";

bench("mat4/scale", (b) => {
  const mat4 = glMat4.create();

  b.start();
  glMat4.scale(mat4, mat4, [4, 2, 9]);
  b.end();
});

bench("mat4/translate", (b) => {
  const mat4 = glMat4.create();

  b.start();
  glMat4.translate(mat4, mat4, [4, 2, 9]);
  b.end();
});

bench("mat4/rotate", (b) => {
  const mat4 = glMat4.create();

  b.start();
  glMat4.rotate(mat4, mat4, 0.42, [1, 0, 0]);
  b.end();
});

bench("mat4/lookAt", (b) => {
  const mat4 = glMat4.create();

  b.start();
  glMat4.lookAt(mat4, [0, 4, 2], [0, 0, 0], [0, 1, 0]);
  b.end();
});

bench("mat4/clone", (b) => {
  const mat4 = glMat4.create();

  b.start();
  glMat4.clone(mat4);
  b.end();
});
