function create() {
  return [
    1, 0, 0,
    1, 0, 0
  ]
}

function set (a, b) {
  a[0] = b[0]
  a[1] = b[1]
  a[2] = b[2]
  a[3] = b[3]
  a[4] = b[4]
  a[5] = b[5]

  return a
}

function identity (a) {
  a[0] = a[3] = 1
  a[1] = a[2] = a[4] = a[5] = 0
  return a
}

function mult(a, b) {
  let a0 = a[0]
  let a1 = a[1]
  let a2 = a[2]
  let a3 = a[3]
  let a4 = a[4]
  let a5 = a[5]

  let b0 = b[0]
  let b1 = b[1]
  let b2 = b[2]
  let b3 = b[3]
  let b4 = b[4]
  let b5 = b[5]

  a[0] = a0 * b0 + a2 * b1
  a[1] = a1 * b0 + a3 * b1
  a[2] = a0 * b2 + a2 * b3
  a[3] = a1 * b2 + a3 * b3
  a[4] = a0 * b4 + a2 * b5 + a4
  a[5] = a1 * b4 + a3 * b5 + a5

  return a
}

function translate(a, v) {
  let a0 = a[0]
  let a1 = a[1]
  let a2 = a[2]
  let a3 = a[3]
  let a4 = a[4]
  let a5 = a[5]

  let x = v[0]
  let y = v[1]

  a[0] = a0
  a[1] = a1
  a[2] = a2
  a[3] = a3
  a[4] = a0 * x + a2 * y + a4
  a[5] = a1 * x + a3 * y + a5

  return a
}

function rotate(a, rad) {
  let a0 = a[0]
  let a1 = a[1]
  let a2 = a[2]
  let a3 = a[3]

  let s = Math.sin(rad)
  let c = Math.cos(rad)

  a[0] = a0 *  c + a2 * s
  a[1] = a1 *  c + a3 * s
  a[2] = a0 * -s + a2 * c
  a[3] = a1 * -s + a3 * c

  return a
}

function scale(a, v) {
  let a0 = a[0]
  let a1 = a[1]
  let a2 = a[2]
  let a3 = a[3]

  a[0] = a0 * v[0]
  a[1] = a1 * v[0]
  a[2] = a2 * v[1]
  a[3] = a3 * v[1]

  return a
}

module.exports = {
  create: create,
  set: set,
  identity: identity,
  mult: mult,
  translate: translate,
  rotate: rotate,
  scale: scale
}
