var test = require('tape')
var mat3 = require('../mat3')

var allMethods = Object.keys(mat3)
var handledMethods = []

test('mat3.create', function (t) {
  t.deepEqual(mat3.create(), [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ], 'should return a new mat3')

  handledMethods.push('create')
  t.end()
})

test('coverage', function (t) {
  allMethods.forEach(function (name) {
    if (handledMethods.indexOf(name) === -1) {
      console.log('missing test for mat3.' + name)
    }
  })
  t.end()
})
