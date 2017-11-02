var test = require('tape')
var vec2 = require('../vec2')

var allMethods = Object.keys(vec2)
var handledMethods = []

test('vec2.create', function (t) {
  var expected = [0, 0]

  var a = vec2.create()
  t.deepEqual(a, expected, 'should return a new vec2')

  handledMethods.push('create')
  t.end()
})

test('vec2.set', function (t) {
  var a = [0, 0]
  var b = [1, 1]
  var expected = [1, 1]

  vec2.set(a, b)
  t.deepEqual(a, expected, 'should set a vec2')

  handledMethods.push('set')
  t.end()
})

test('vec2.copy', function (t) {
  var a = [1, 2]
  var expectedCopyOfA = [1, 2]

  var c = vec2.copy(a)
  t.deepEqual(c, expectedCopyOfA, 'should copy')

  a[0] = 9
  t.deepEqual(c, expectedCopyOfA, 'should not modify the original')

  handledMethods.push('copy')
  t.end()
})

test('vec2.equals', function (t) {
  var a = [1, 2]
  var b = [1, 2]
  var c = [1, 2.001]

  t.true(vec2.equals(a, b), 'should return true')
  t.false(vec2.equals(a, c), 'should return false')

  handledMethods.push('equals')
  t.end()
})

test('coverage', function (t) {
  allMethods.forEach(function (name) {
    if (handledMethods.indexOf(name) === -1) {
      console.log('missing test for vec2.' + name)
    }
  })
  t.end()
})
