import test from "tape";
import { quat } from "../index.js";

const allMethods = Object.keys(quat);
const handledMethods = [];

test("quat.create", (t) => {
  t.deepEqual(quat.create(), [0, 0, 0, 1], "should create new quat");
  handledMethods.push("create");
  t.end();
});

test("quat.equals", (t) => {
  t.true(quat.equals(quat.create(), [0, 0, 0, 1]), "should return true");
  handledMethods.push("equals");
  t.end();
});

test("coverage", (t) => {
  allMethods.forEach((name) => {
    if (!handledMethods.includes(name)) {
      console.log(`missing test for quat.${name}`);
    }
  });
  t.end();
});

// // identity
// assert.deepEqual(quat.identity([1, 2, 3, 4]), [0, 0, 0, 1])

// // copy
// assert.deepEqual(quat.copy([1, 2, 3, 4]), [1, 2, 3, 4])

// // set
// assert.deepEqual(quat.set([1, 2, 3, 4], [5, 6, 7, 8]), [5, 6, 7, 8])

// // mult
// assert.deepEqual(quat.mult([1, 2, 3, 4], [5, 6, 7, 8]), [24, 48, 48, -6])
// assert.deepEqual(quat.mult([5, 6, 7, 8], [1, 2, 3, 4]), [32, 32, 56, -6])

// // length
// assert.equal(quat.length([1, 2, 3, 4]), 5.477225575051661)

// // normalize
// assert.deepEqual(quat.normalize([0, 0, 0, 5]), [0, 0, 0, 1])

// // lerp

// // dot

// // setAxisAngle
// assert.deepEqual(quat.setAxisAngle(quat.create(), Math.PI * 0.5, [1, 0, 0]), [0.7071067811865475, 0, 0, 0.7071067811865476])
// assert.deepEqual(quat._setAxisAngle3(quat.create(), Math.PI * 0.5, 1, 0, 0), [0.7071067811865475, 0, 0, 0.7071067811865476])

// // fromMat3
// // TODO: check, x is inverted, matrix is transposed
// // assert.deepEqual(quat.fromMat3(quat.create(),[1,0,0, 0,0,-1, 0,1,0]),[-0.7071067811865475, 0, 0, 0.7071067811865476]);

// // fromMat4
// // TODO: check, x is inverted, matrix is transposed
// // assert.deepEqual(quat.fromMat4(quat.create(),[1,0,0,0, 0,0,-1,0, 0,1,0,0, 0,0,0,1]),[-0.7071067811865475, 0, 0, 0.7071067811865476]);

// // setAxes9
// // TODO: check, matrix is transposed

// // setAxes
// // TODO: check, matrix is transposed

// // getAxisAngle
// assert.equal(quat.getAngle(quat.setAxisAngle(quat.create(), Math.PI * 0.5, [1, 0, 0])), Math.PI * 0.5)

// // fromDirection
// // TODO: check, matrix is transposed

// // lookAt9
// // TODO: check, matrix is transposed

// // lookAt
// // TODO: check, matrix is transposed
