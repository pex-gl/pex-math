var test = require('tape')
var utils = require('../utils')

var allMethods = Object.keys(utils)
var handledMethods = []

test('utils.sign', function (t) {
  t.deepEqual(utils.sign(1), 1, 'should return sign of a number')
  t.deepEqual(utils.sign(42), 1, 'should return sign of a number')
  t.deepEqual(utils.sign(-666), -1, 'should return sign of a number')

  handledMethods.push('sign')
  t.end()
})

test('utils.isPowerOfTwo', function (t) {
  t.true(utils.isPowerOfTwo(2), 'should return bool')
  t.true(utils.isPowerOfTwo(256), 'should return bool')
  t.false(utils.isPowerOfTwo(-512), 'should return bool')
  t.false(utils.isPowerOfTwo(3), 'should return bool')
  t.false(utils.isPowerOfTwo(666), 'should return bool')

  handledMethods.push('isPowerOfTwo')
  t.end()
})

test('coverage', function (t) {
  allMethods.forEach(function (name) {
    if (handledMethods.indexOf(name) === -1) {
      console.log('missing test for utils.' + name)
    }
  })
  t.end()
})
