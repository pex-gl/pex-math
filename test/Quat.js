var assert = require('assert');
var Quat   = require('../Quat');

//create
assert.deepEqual(Quat.create(),[0,0,0,1]);

//equals
assert(Quat.equals(Quat.create(),[0,0,0,1]));

//identity
assert.deepEqual(Quat.identity([1,2,3,4]),[0,0,0,1]);

//copy
assert.deepEqual(Quat.copy([1,2,3,4]),[1,2,3,4]);

//set
assert.deepEqual(Quat.set([1,2,3,4],[5,6,7,8]),[5,6,7,8]);

//set4
assert.deepEqual(Quat.set4([1,2,3,4],5,6,7,8),[5,6,7,8]);

//mult
assert.deepEqual(Quat.mult([1,2,3,4],[5,6,7,8]),[24,48,48,-6]);
assert.deepEqual(Quat.mult([5,6,7,8],[1,2,3,4]),[32,32,56,-6]);

//length
assert.equal(Quat.length([1,2,3,4]),5.477225575051661);

//normalize
assert.deepEqual(Quat.normalize([0,0,0,5]),[0,0,0,1]);

//lerp

//dot

//setAxisAngle
assert.deepEqual(Quat.setAxisAngle(Quat.create(),Math.PI * 0.5,[1,0,0]),[0.7071067811865475, 0, 0, 0.7071067811865476]);
assert.deepEqual(Quat.setAxisAngle3(Quat.create(),Math.PI * 0.5,1,0,0),[0.7071067811865475, 0, 0, 0.7071067811865476]);

//fromMat3
//TODO: check, x is inverted, matrix is transposed
//assert.deepEqual(Quat.fromMat3(Quat.create(),[1,0,0, 0,0,-1, 0,1,0]),[-0.7071067811865475, 0, 0, 0.7071067811865476]);

//fromMat4
//TODO: check, x is inverted, matrix is transposed
//assert.deepEqual(Quat.fromMat4(Quat.create(),[1,0,0,0, 0,0,-1,0, 0,1,0,0, 0,0,0,1]),[-0.7071067811865475, 0, 0, 0.7071067811865476]);

//setAxes9
//TODO: check, matrix is transposed

//setAxes
//TODO: check, matrix is transposed

//getAxisAngle
assert.equal(Quat.getAngle(Quat.setAxisAngle(Quat.create(),Math.PI * 0.5,[1,0,0])),Math.PI * 0.5);

//getAxis
assert.deepEqual(Quat.getAxis(Quat.setAxisAngle(Quat.create(),Math.PI * 0.5,[1,0,0]),[0,0,0]),[1,0,0]);

//fromDirection
//TODO: check, matrix is transposed

//lookAt9
//TODO: check, matrix is transposed

//lookAt
//TODO: check, matrix is transposed