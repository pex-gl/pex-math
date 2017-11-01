var test = require('tape')
var vec3 = require('../vec3')

var allMethods = Object.keys(vec3)
var handledMethods = []

test('vec3.create', function (t) {
  var expected = [0, 0, 0]

  var a = vec3.create()
  t.deepEqual(a, expected, 'should return new vec3')

  handledMethods.push('create')
  t.end()
})

test('vec3.equals', function (t) {
  var a = [1, 2, 3]
  var b = [1, 2, 3]
  var c = [1, 2.001, 3]

  t.true(vec3.equals(a, b), 'equal returns true')
  t.false(vec3.equals(a, c), 'not equal returns false')

  handledMethods.push('equals')
  t.end()
})

test('vec3.copy', function (t) {
  var a = [1, 2, 3]
  var expectedCopyOfA = [1, 2, 3]

  var c = vec3.copy(a)
  t.deepEqual(c, expectedCopyOfA, 'should copy')

  a[0] = 9
  t.deepEqual(c, expectedCopyOfA, 'should not modify the original')

  handledMethods.push('copy')
  t.end()
})

test('vec3.set', function (t) {
  var a = [0, 0, 0]
  var b = [1, 1, 1]
  var expected = [1, 1, 1]

  vec3.set(a, b)
  t.deepEqual(a, expected, 'should set a vec3')

  handledMethods.push('set')
  t.end()
})

test('vec3.add', function (t) {
  var a = [2, 2, 2]
  var b = [1, 1, 1]
  var expected = [3, 3, 3]

  vec3.add(a, b)
  t.deepEqual(a, expected, 'should add two vec2s')

  handledMethods.push('add')
  t.end()
})

test('vec3.sub', function (t) {
  var a = [2, 2, 4]
  var b = [1, 1, 6]
  var expected = [1, 1, -2]

  vec3.sub(a, b)
  t.deepEqual(a, expected, 'should substract one vec3 from another')

  handledMethods.push('sub')
  t.end()
})

test('vec3.scale', function (t) {
  var a = [2, 2, 4]
  var scale = 2
  var expected = [4, 4, 8]

  vec3.scale(a, scale)
  t.deepEqual(a, expected, 'should scale a vec3')

  handledMethods.push('scale')
  t.end()
})

test('vec3.dot', function (t) {
  var a = [1, 2, 3]
  var b = [1, 2, 3]
  var dot = vec3.dot(a, b)

  t.deepEqual(dot, 14, 'should compute the dot product')

  handledMethods.push('dot')
  t.end()
})

test('vec3.cross', function (t) {
  var a = [1, 2, 3]
  var b = [4, 5, 6]
  var cross = vec3.cross(a, b)

  t.deepEqual(cross, [-3, 6, -3], 'should compute the cross product')

  a = [0.5, 0.5, 0.5]
  b = [1, 1, 1]
  cross = vec3.cross(a, b)

  t.deepEqual(cross, [0, 0, 0], 'should compute the cross product')

  handledMethods.push('cross')
  t.end()
})

test('vec3.length', function (t) {
  var a = [1, 2, 3]
  var b = [0, 0, 0]

  t.deepEqual(vec3.length(a), Math.sqrt(14), 'should compute the length of a vec3')
  t.deepEqual(vec3.length(b), 0, 'should compute the length of a vec3')

  handledMethods.push('length')
  t.end()
})

test('vec3.lengthSq', function (t) {
  var a = [1, 2, 3]
  var b = [0, 0, 0]

  t.deepEqual(vec3.lengthSq(a), 14, 'should compute the squared length of a vec3')
  t.deepEqual(vec3.lengthSq(b), 0, 'should compute the squared length of a vec3')

  handledMethods.push('lengthSq')
  t.end()
})

test('vec3.normalize', function (t) {
  var message = 'should normalize vec3'
  t.deepEqual(vec3.normalize([2, 0, 0]), [1, 0, 0], message)
  t.deepEqual(vec3.normalize([0, -2, 0]), [0, -1, 0], message)
  t.deepEqual(vec3.normalize([0, 0, -2]), [0, 0, -1], message)
  t.deepEqual(vec3.normalize([1, 1, 1]), [0.5773502691896258, 0.5773502691896258, 0.5773502691896258], message)
  t.deepEqual(vec3.normalize([1, 2, 3]), [0.2672612419124244, 0.5345224838248488, 0.8017837257372732], message)

  handledMethods.push('normalize')
  t.end()
})

// distance
test('vec3.distance', function (t) {
  var message = 'should compute the distance between two vec3s'
  t.equal(vec3.distance([1, 0, 0], [0, 0, 0]), 1.0, message)
  t.equal(vec3.distance([1, 2, 3], [4, 5, 6]), 5.196152422706632, message)

  handledMethods.push('distance')
  t.end()
})

test('vec3.distanceSq', function (t) {
  var message = 'should compute the squared distance between two vec3s'
  t.equal(vec3.distanceSq([1, 0, 0], [0, 0, 0]), 1.0, message)
  t.equal(vec3.distanceSq([1, 2, 3], [4, 5, 6]), 27, message)

  handledMethods.push('distanceSq')
  t.end()
})

test('vec3.lerp', function (t) {
  var message = 'should lerp between two vec3s'
  t.deepEqual(vec3.lerp([0, 0, 0], [1, 1, 1], 0.5), [0.5, 0.5, 0.5], message)
  t.deepEqual(vec3.lerp([-1, -1, -1], [0, 0, 0], 0.5), [-0.5, -0.5, -0.5], message)

  handledMethods.push('lerp')
  t.end()
})

test('coverage', function (t) {
  allMethods.forEach(function (name) {
    if (handledMethods.indexOf(name) == -1) {
      console.log('missing test for vec3.' + name)
    }
  })
  t.end()
})
