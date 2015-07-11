var assert = require('assert');
var Vec3   = require('../Vec3');

//create
assert.deepEqual(Vec3.create(),[0,0,0]);

//equals
assert(Vec3.equals([1,2,3],[1,2,3]));
assert(!Vec3.equals([1,2,3.0001],[1,2,3]));

//equals3
assert(Vec3.equals3([1,2,3],1,2,3));
assert(!Vec3.equals3([1,2,3.0001],1,2,3));

//copy
assert.deepEqual(Vec3.copy([1,2,3]),[1,2,3]);
assert.deepEqual(Vec3.copy([-1,-2,-3]),[-1,-2,-3]);

//set3
assert.deepEqual(Vec3.set3(Vec3.create(),1,2,3),[1,2,3]);

//set
assert.deepEqual(Vec3.set(Vec3.create(),[1,2,3]),[1,2,3]);

//add
assert.deepEqual(Vec3.add([1,2,3],[1,2,3]),[2,4,6]);

//add3
assert.deepEqual(Vec3.add3([1,2,3],1,2,3),[2,4,6]);

//sub
assert.deepEqual(Vec3.sub([1,2,3],[4,5,6]),[-3,-3,-3]);

//sub3
assert.deepEqual(Vec3.sub3([1,2,3],4,5,6),[-3,-3,-3]);

//scale
assert.deepEqual(Vec3.scale([1,2,3],2),[2,4,6]);

//multMat4

//dot
assert.equal(Vec3.dot([1,2,3],[1,2,3]),14);

//cross
assert.deepEqual(Vec3.cross([1,2,3],[4,5,6]),[-3,6,-3]);
assert.deepEqual(Vec3.cross([0.5,0.5,0.5],[1,1,1]),[0,0,0]);

//cross3
assert.deepEqual(Vec3.cross3([1,2,3],4,5,6),[-3,6,-3]);
assert.deepEqual(Vec3.cross3([0.5,0.5,0.5],1,1,1),[0,0,0]);

//length
assert.equal(Vec3.length([1,2,3]),Math.sqrt(14));
assert.equal(Vec3.length([0,0,0]),0);

//lengthSq
assert.equal(Vec3.lengthSq([1,2,3]),14);

//normalize
assert.deepEqual(Vec3.normalize([2, 0,0]),[1, 0,0]);
assert.deepEqual(Vec3.normalize([0,-2,0]),[0,-1,0]);
assert.deepEqual(Vec3.normalize([0,0,-2]),[0,0,-1]);
assert.deepEqual(Vec3.normalize([1,1,1]),[0.5773502691896258, 0.5773502691896258, 0.5773502691896258]);
assert.deepEqual(Vec3.normalize([1,2,3]),[0.2672612419124244, 0.5345224838248488, 0.8017837257372732]);

//distance
assert.equal(Vec3.distance([1,0,0],[0,0,0]),1.0);
assert.equal(Vec3.distance([1,2,3],[4,5,6]),5.196152422706632);

//distance3
assert.equal(Vec3.distance3([1,0,0],0,0,0),1.0);
assert.equal(Vec3.distance3([1,2,3],4,5,6),5.196152422706632);

//distanceSq
assert.equal(Vec3.distanceSq([1,0,0],[0,0,0]),1.0);
assert.equal(Vec3.distanceSq([1,2,3],[4,5,6]),27);

//distanceSq3
assert.equal(Vec3.distanceSq3([1,0,0],0,0,0),1.0);
assert.equal(Vec3.distanceSq3([1,2,3],4,5,6),27);

//invert
assert.deepEqual(Vec3.invert([1,2,3]),[-1,-2,-3]);
assert.deepEqual(Vec3.invert([-1,-2,-3]),[1,2,3]);

//lerp
assert.deepEqual(Vec3.lerp([0,0,0],[1,1,1],0.5),[0.5,0.5,0.5]);
assert.deepEqual(Vec3.lerp([-1,-1,-1],[0,0,0],0.5),[-0.5,-0.5,-0.5]);

//toZero
assert.deepEqual(Vec3.toZero([1,2,3]),[0,0,0]);
assert.deepEqual(Vec3.toZero([-1,-2,-3]),[0,0,0]);

//toOne
assert.deepEqual(Vec3.toOne([1,2,3]),[1,1,1]);
assert.deepEqual(Vec3.toOne([-1,-2,-3]),[1,1,1]);

//toMax
assert.deepEqual(Vec3.toMax([1,2,3]),[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE]);
assert.deepEqual(Vec3.toMax([-1,-2,-3]),[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE]);

//toMin
assert.deepEqual(Vec3.toMin([1,2,3]),[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]);
assert.deepEqual(Vec3.toMin([-1,-2,-3]),[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]);

//toAbs
assert.deepEqual(Vec3.toAbs([1,2,3]),[1,2,3]);
assert.deepEqual(Vec3.toAbs([-1,-2,-3]),[1,2,3]);

//xAxis
assert.deepEqual(Vec3.xAxis(),[1,0,0]);

//yAxis
assert.deepEqual(Vec3.yAxis(),[0,1,0]);

//zAxis
assert.deepEqual(Vec3.zAxis(),[0,0,1]);