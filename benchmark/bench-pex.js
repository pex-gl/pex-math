var bench = require('nanobench')
var pexMat4 = require('../mat4')

bench('mat4/scale', function (b) {
  var mat4 = pexMat4.create()

  b.start()
  pexMat4.scale(mat4, [4, 2, 9])
  b.end()
})

bench('mat4/translate', function (b) {
  var mat4 = pexMat4.create()

  b.start()
  pexMat4.translate(mat4, [4, 2, 9])
  b.end()
})

bench('mat4/rotate', function (b) {
  var mat4 = pexMat4.create()

  b.start()
  pexMat4.rotate(mat4, 0.42, [1, 0, 0])
  b.end()
})

bench('mat4/lookAt', function (b) {
  var mat4 = pexMat4.create()

  b.start()
  pexMat4.lookAt(mat4, [0, 4, 2], [0, 0, 0], [0, 1, 0])
  b.end()
})

bench('mat4/clone', function (b) {
  var mat4 = pexMat4.create()

  b.start()
  pexMat4.copy(mat4)
  b.end()
})
