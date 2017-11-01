var test = require('tape')
var vec4 = require('../vec4')

var allMethods = Object.keys(vec4)
var handledMethods = []

test('vec4.create', function (t) {
  var expected = [0, 0, 0, 1]

  var a = vec4.create()
  t.deepEqual(a, expected, 'should return a new vec4')

  handledMethods.push('create')
  t.end()
})

test('coverage', function (t) {
  allMethods.forEach(function (name) {
    if (handledMethods.indexOf(name) === -1) {
      console.log('missing test for vec4.' + name)
    }
  })
  t.end()
})
