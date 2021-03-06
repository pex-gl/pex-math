var test = require('tape')
var mat4 = require('../mat4')

var allMethods = Object.keys(mat4)
var handledMethods = []

test('mat4.create', function (t) {
  t.deepEqual(mat4.create(), [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ], 'should return a new mat4')

  handledMethods.push('create')
  t.end()
})

test('mat4.identity', function (t) {
  t.deepEqual(mat4.identity([
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16
  ]), [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ], 'should return the identity matrix')

  handledMethods.push('identity')
  t.end()
})

test('mat4.set', function (t) {
  t.deepEqual(mat4.set(mat4.create(), [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16
  ]), [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16
  ], 'should set a mat4')

  handledMethods.push('set')
  t.end()
})

test('mat4.equals', function (t) {
  t.true(mat4.equals([
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16
  ], [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16
  ]), 'should compare two mat4s')

  handledMethods.push('equals')
  t.end()
})

test('coverage', function (t) {
  allMethods.forEach(function (name) {
    if (handledMethods.indexOf(name) === -1) {
      console.log('missing test for mat4.' + name)
    }
  })
  t.end()
})

// // equals

// assert(!Mat4.equals([
//   1.0001, 2.0001, 3.0001, 4.0001,
//   5.0001, 6.0001, 7.0001, 8.0001,
//   9.0001, 10.0001, 11.0001, 12.0001,
//   13.0001, 14.0001, 15.0001, 16.0001
// ], [
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ]))

// // copy
// assert.deepEqual(Mat4.copy([
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ]), [
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ])

// // transpose
// assert.deepEqual(Mat4.transpose([
//   1, 0, 0, 1,
//   0, 1, 0, 2,
//   0, 0, 1, 3,
//   0, 0, 0, 1
// ]), [
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   1, 2, 3, 1
// ])

// // invert
// assert.deepEqual(Mat4.invert([
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   -1, -2, -3, 1
// ]), [
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   1, 2, 3, 1
// ])

// // mult16
// assert.deepEqual(Mat4._mult16([
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   1, 2, 3, 1
// ],
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   4, 5, 6, 1
// ), [
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   5, 7, 9, 1
// ])

// assert.deepEqual(Mat4._mult16([
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ],
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ), [
//   90, 100, 110, 120,
//   202, 228, 254, 280,
//   314, 356, 398, 440,
//   426, 484, 542, 600
// ])

// assert.deepEqual(Mat4.mult([
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ], [
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ]), [
//   90, 100, 110, 120,
//   202, 228, 254, 280,
//   314, 356, 398, 440,
//   426, 484, 542, 600
// ])

// // mult
// assert.deepEqual(Mat4.mult([
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   1, 2, 3, 1
// ], [
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   4, 5, 6, 1
// ]), [
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   5, 7, 9, 1
// ])

// // scale
// assert.deepEqual(Mat4.scale([
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   1, 2, 3, 1
// ], [1, 2, 3]), [
//   1, 0, 0, 0,
//   0, 2, 0, 0,
//   0, 0, 3, 0,
//   1, 2, 3, 1
// ])

// assert.deepEqual(Mat4.scale([
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ], [1, 2, 3]), [
//   1, 2, 3, 4,
//   10, 12, 14, 16,
//   27, 30, 33, 36,
//   13, 14, 15, 16
// ])

// // scale3
// assert.deepEqual(Mat4._scale3([
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   1, 2, 3, 1
// ], 1, 2, 3), [
//   1, 0, 0, 0,
//   0, 2, 0, 0,
//   0, 0, 3, 0,
//   1, 2, 3, 1
// ])

// assert.deepEqual(Mat4._scale3([
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ], 1, 2, 3), [
//   1, 2, 3, 4,
//   10, 12, 14, 16,
//   27, 30, 33, 36,
//   13, 14, 15, 16
// ])

// // translate
// assert.deepEqual(Mat4.translate([
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ], [1, 2, 3]), [
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   51, 58, 65, 72
// ])

// assert.deepEqual(Mat4.translate([
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   0, 0, 0, 1
// ], [1, 2, 3]), [
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   1, 2, 3, 1
// ])

// // translate3
// assert.deepEqual(Mat4._translate3([
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   13, 14, 15, 16
// ], 1, 2, 3), [
//   1, 2, 3, 4,
//   5, 6, 7, 8,
//   9, 10, 11, 12,
//   51, 58, 65, 72
// ])

// assert.deepEqual(Mat4._translate3([
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   0, 0, 0, 1
// ], 1, 2, 3), [
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   1, 2, 3, 1
// ])

// // rotate
// assert.deepEqual(Mat4.rotate([
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   0, 0, 0, 1
// ], Math.PI * 0.5, [1, 0, 0]), [
//   1, 0, 0, 0,
//   0, 6.123233995736766e-17, 1, 0,
//   0, -1, 6.123233995736766e-17, 0,
//   0, 0, 0, 1
// ])

// // TODO uses setRotation (removed)
// // assert.deepEqual(Mat4.rotate([
// //   1, 0, 0, 0,
// //   0, 1, 0, 0,
// //   0, 0, 1, 0,
// //   0, 0, 0, 1
// // ], Math.PI * 0.5, [1, 0, 0]), Mat4.setRotation([
// //   1, 0, 0, 0,
// //   0, 1, 0, 0,
// //   0, 0, 1, 0,
// //   0, 0, 0, 1
// // ], Math.PI * 0.5, [1, 0, 0])
// // )

// // rotate3
// assert.deepEqual(Mat4._rotate3([
//   1, 0, 0, 0,
//   0, 1, 0, 0,
//   0, 0, 1, 0,
//   0, 0, 0, 1
// ], Math.PI * 0.5, 1, 0, 0), [
//   1, 0, 0, 0,
//   0, 6.123233995736766e-17, 1, 0,
//   0, -1, 6.123233995736766e-17, 0,
//   0, 0, 0, 1
// ])

// // TODO uses setRotation (removed)
// // assert.deepEqual(Mat4._rotate([
// //   1, 0, 0, 0,
// //   0, 1, 0, 0,
// //   0, 0, 1, 0,
// //   0, 0, 0, 1
// // ], Math.PI * 0.5, [1, 0, 0]), Mat4.setRotation([
// //   1, 0, 0, 0,
// //   0, 1, 0, 0,
// //   0, 0, 1, 0,
// //   0, 0, 0, 1
// // ], Math.PI * 0.5, [1, 0, 0])
// // )
