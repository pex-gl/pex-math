# pex-math

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Array-based vector, quaternion and matrix math for [PEX](http://pex.gl/)

# Usage

``` javascript
// require any of the modules
var mat4 = require('pex-math/mat4')

// all of them are namespaces of functions
var identityMatrix = mat4.create()
// => [1, 0, 0, 0,
//     0, 1, 0, 0,
//     0, 0, 1, 0,
//     0, 0, 0, 1]

```

# API

## vec2

`var vec2 = require('pex-math/vec2')`

### `vec2.create()`
Returns a new vec2 at 0, 0, 0.

### `vec2.set(v, w)`
Sets a vector to another vector.

- `v`: vec2 - the vector being set
- `w`: vec2 - the vector used as template

Returns `v`.

### `vec2.copy(v)`
Returns a copy of a vector.

- `v`: vec2

Returns a new instance of `v`.

### `vec2.equals(v, w)`
Compares two vectors.

- `v`: vec2
- `w`: vec2

Returns a `bool`.

### `vec2.add(v, w)`
Add a vector with another.

- `v`: vec2
- `w`: vec2

Returns `v` after addition.

### `vec2.sub(v, w)`
Substracts a vector with another.

- `v`: vec2
- `w`: vec2

Returns `v` after substraction.

### `vec2.scale(v, s)`
Scales a vector by a number.

- `v`: vec2
- `s`: Number

Returns `v` scaled.

### `vec2.dot(v, w)`
Calculates the dot product of two vectors.

- `v`: vec2
- `w`: vec2

Returns `v` after calculation.

### `vec2.length(v)`
Calculates the length of a vector.

- `v`: vec2

Returns the length of `v`.

### `vec2.lengthSq(v)`
Calculates the squared length of a vector.

- `v`: vec2

Returns the squared length of `v`.

### `vec2.normalize(v)`
Normalises a vector.

- `v`: vec2

Returns `v` normalised.

### `vec2.distance(v, w)`
Calculates the distance between two vectors.

- `v`: vec2
- `w`: vec2

Returns the distance betweeen `v` and `w`.

### `vec2.distanceSq(v, w)`
Calculates the squared distance between two vectors.

- `v`: vec2
- `w`: vec2

Returns the squared distance betweeen `v` and `w`.

### `vec2.limit(v, s)`
Limits a vector to a length.

- `v`: vec2
- `s`: Number

Returns `v` scaled.

### `vec2.lerp(v, w, t)`
Linearly interpolates between two vectors.

- `v`: vec2
- `w`: vec2
- `t`: Number - lerp value

Returns `v` lerped.

### `vec2.toString(v, precision)`
Prints a vector to a string.

- `v`: vec2
- `precision`: number

Returns a `String`.

## vec3

`var vec3 = require('pex-math/vec3')`

### `vec3.create()`
Returns a new vec3 at 0, 0, 0.

### `vec3.set(v, w)`
Sets a vector to another vector.

- `v`: vec3 - the vector being set
- `w`: vec3 - the vector used as template

Returns `v`.

### `vec3.copy(v)`
Returns a copy of a vector.

- `v`: vec3

Returns a new instance of `v`.

### `vec3.equals(v, w)`
Compares two vectors.

- `v`: vec3
- `w`: vec3

Returns a `bool`.

### `vec3.add(v, w)`
Add a vector with another.

- `v`: vec3
- `w`: vec3

Returns `v` after addition.

### `vec3.addScaled(v, w, s)`
Add a vector with another scaled vector.

- `v`: vec3
- `w`: vec3
- `s`: Number

Returns `v` after addition.

### `vec3.sub(v, w)`
Substracts a vector with another.

- `v`: vec3
- `w`: vec3

Returns `v` after substraction.

### `vec3.scale(v, s)`
Scales a vector by a number.

- `v`: vec3
- `s`: Number

Returns `v` scaled.

### `vec3.multMat4(v, m)`
Multiplies a vector by a matrix.

- `v`: vec3
- `m`: mat4

Returns `v` after multiplication.

### `vec3.multQuat(v, q)`
Multiplies a vector by a quaternion.

- `v`: vec3
- `q`: quat

Returns `v` after multiplication.

### `vec3.dot(v, w)`
Calculates the dot product of two vectors.

- `v`: vec3
- `w`: vec3

Returns `v` after calculation.

### `vec3.cross(v, w)`
Calculates the cross product of two vectors.

- `v`: vec3
- `w`: vec3

Returns `v` after calculation.

### `vec3.length(v)`
Calculates the length of a vector.

- `v`: vec3

Returns the length of `v`.

### `vec3.lengthSq(v)`
Calculates the squared length of a vector.

- `v`: vec3

Returns the squared length of `v`.

### `vec3.normalize(v)`
Normalises a vector.

- `v`: vec3

Returns `v` normalised.

### `vec3.distance(v, w)`
Calculates the distance between two vectors.

- `v`: vec3
- `w`: vec3

Returns the distance betweeen `v` and `w`.

### `vec3.distanceSq(v, w)`
Calculates the squared distance between two vectors.

- `v`: vec3
- `w`: vec3

Returns the squared distance betweeen `v` and `w`.

### `vec3.limit(v, s)`
Limits a vector to a length.

- `v`: vec3
- `s`: Number

Returns `v` scaled.

### `vec3.lerp(v, w, t)`
Linearly interpolates between two vectors.

- `v`: vec3
- `w`: vec3
- `t`: Number - lerp value

Returns `v` lerped.

### `vec3.toString(v, p)`
Prints a vector to a string.

- `v`: vec3
- `p`: Number - precision

Returns a `String`.

## vec4

`var vec4 = require('pex-math/vec4')`

### `vec4.create()`
Returns a new vec4 at 0, 0, 0.

### `vec4.equals(v, w)`
Compares two vectors.

- `v`: vec4
- `w`: vec4

Returns a `bool`.

### `vec4.set(v, w)`
Sets a vector to another vector.

- `v`: vec4 - the vector being set
- `w`: vec4 - the vector used as template

Returns `v`.

### `vec4.fromVec3(v, v3)`
Create a vec4 from vec3.

- `v`: vec4
- `v3`: vec3

Returns `v4`.

### `vec4.multMat4(v, m)`
Multiplies a vector with a matrix.

- `v`: vec4
- `m`: mat4

Returns `v`.

### `vec4.copy(v)`
Returns a copy of a vector.

- `v`: vec4

Returns a new instance of `v`.

## mat3

`var mat3 = require('pex-math/mat3')`

### `mat3.create()`
Returns a 3x3 identity matrix.

Row major memory layout:

```
 0   1   2
 3   4   5
 6   7   8
```

 Equivalent to the column major OpenGL spec:

```
  0   3   6
  1   4   7
  2   5   8

 m00 m10 m20
 m01 m11 m21
 m02 m12 m22
```

Returns a new `mat3`.

### `mat3.set(m, n)`
Sets a matrix from another matrix.

- `m`:  mat3 - the matrix being set
- `n`:  mat3 - the matrix used as template

Returns `m`.

### `mat3.identity(m)`
Sets a matrix to the identity matrix.

- `m`: mat3

Returns `m` as its identity.

### `mat3.equals(m, n)`
Compares two matrices.

- `m`: mat3
- `n`: mat3

Returns a `bool`.

### `mat3.fromMat4(m, m4)`
Sets a 3x3 matrix to a 4x4 matrix.

- `m`: mat3
- `m4`: mat4

Returns `m3`.

### `mat3.fromQuat(m, q)`
Sets matrix to a quaternion.

- `m`: mat3
- `q`: quat

Returns `m`.

## mat4

`var mat4 = require('pex-math/mat4')`

### `mat4.create()`
Returns a 4x4 identity matrix.

Row major memory layout:

```
 0   1   2   3
 4   5   6   7
 8   9  10  11
12  13  14  15
```

Equivalent to the column major OpenGL spec:

```
 0   4   8  12
 1   5   9  13
 2   6  10  14
 3   7  11  15

 m00 m10 m20 m30
 m01 m11 m21 m31
 m02 m12 m22 m32
 m03 m13 m23 m33
```

Returns a new `mat4`.

### `mat4.set(m, n)`
Sets a matrix from another matrix.

- `m`:  mat4 - the matrix being set
- `n`:  mat4 - the matrix used as template

Returns the newly set `a`.

### `mat4.equals(m, n)`
Compares two matrices.

- `m`: mat4
- `n`: mat4

Returns a `bool`.

### `mat4.copy(m)`
Returns a copy of a matrix.

- `m`: mat4

Returns a new instance of `m`.

### `mat4.mult(m, n)`
Multiplies two matrices.

- `m`: mat4
- `n`: mat4

Returns `m` multipled by `n`.

### `mat4.invert(m)`
Inverts a matrix.

- `m`: mat4

Returns `m` inverted.

### `mat4.tranpose(m)`
Transposes a matrix.

- `m`: mat4

Returns `m` transposed.

### `mat4.identity(m)`
Sets a matrix to the identity matrix.

- `m`: mat4

Returns `m` as its identity.

### `mat4.scale(m, v)`
Scales a matrix by a vector.

- `m`: mat4
- `v`: vec3

Returns `m` scaled.

### `mat4.translate(m, v)`
Translates a matrix by a vector.

- `m`: mat4
- `v`: vec3

Returns `m` translated.

### `mat4.rotate(m, r, v)`
Rotates a matrix by an angle at an axis.

- `m`: mat4
- `r`: Number - the angle of rotation
- `v`: vec3 - the axis of rotation

Returns `m` rotated.

### `mat4.frustum(m, left, right, bottom, top, near, far)`
Create a frustum matrix.

- `m`: mat4
- `left`: Number - left bound
- `right`: Number - right bound
- `bottom`: Number - bottom bound
- `top`: Number - top bound
- `near`: Number - near clipping plane
- `far`: Number - far clipping plane

Returns `m`.

### `mat4.perspective(m, fovy, aspectRatio, near, far)`
Create a perspective matrix.

- `m`: mat4 - out matrix
- `fovy`: Number - field of view in radians
- `aspectRatio`: Number - aspect ratio
- `near`: Number - near clipping plane
- `far`: Number - far clipping plane

Returns `m`.

### `mat4.ortho(m, left, right, bottom, top, near, far)`
Create a orthographic matrix.

- `m`: mat4
- `left`: Number - left bound
- `right`: Number - right bound
- `bottom`: Number - bottom bound
- `top`: Number - top bound
- `near`: Number - near clipping plane
- `far`: Number - far clipping plane

Returns `m`.

### `mat4.lookAt(m, from, to, up)`
Calculates a lookAt matrix from a position, target and up vectors.

- `m`: mat4
- `from`: vec3 - position vector
- `to`: vec3 - target vector
- `up`: vec3 - up vector

Returns `m`.

### `mat4.fromQuat(m, q)`
Sets matrix to a quaternion.

- `m`: mat4
- `q`: quat

Returns `m`.

### `mat4.fromMat3(m, m3)`
Sets a 4x4 matrix to a 3x3 matrix.

- `m`: mat4
- `m3`: mat3

Returns `m`.

## quat

`var quat = require('pex-math/quat')`

### `quat.create()`
Create a new quaternion.

### `quat.equals(q, p)`
Compares two quaternions.

- `q`: quat
- `p`: quat

Returns `bool`.

### `quat.identity(q)`
Sets a quaternion to the identity quaternion.

- `q`: quat

Returns `q`.

### `quat.copy(q)`
Returns a copy of a quaternion.

- `q`: quat

Returns a new instance of `q`.

### `quat.set(q, p)`
Sets one quaternion to another.

- `q`: quat
- `p`: quat

Returns `q`.

### `quat.mult(q, p)`
Multiplies one quaternion by another.

- `q`: quat
- `p`: quat

Returns `q` after multiplication.

### `quat.invert(q)`
Inverts a quaternion.

- `q`: quat

Returns `q` inverted.

### `quat.conjugate(q)`
Conjugates a quaternion.

- `q`: quat

Returns `q` conjugates.

### `quat.length(q)`
Calculates the length of a quaternion.

- `q`: quat

Returns the length of `q`.

### `quat.normalize(q)`
Normalizes a quaternion.

- `q`: quat

Returns `q` normalized.

### `quat.dot(q, p)`
Calculates the dot product of two quaternions.

- `q`: quat
- `p`: quat

Returns the dot product of `q` and `p`.

### `quat.setAxisAngle(q, axis, angle)`
Set the angle at an axis of a quaternion.

- `q`: quat
- `axis`: vec3
- `angle`: Number

Returns `q`.

### `quat.fromMat3(q, m)`
Sets a quaternion to a 3x3 matrix.

- `q`: quat
- `m`: mat3

Returns `q`.

### `quat.fromMat4(q, m)`
Sets a quaternion to a 4x4 matrix.

- `q`: quat
- `m`: mat4

Returns `q`.

### `quat.getAngle(q)`
Get the angle of a quaternion.

- `q`: quat

Returns the angle of `q`.

### `quat.setEuler(q, yaw, pitch, roll)`
Set euler angles to a quaternion.

- `q`: quat
- `yaw`: Number
- `pitch`: Number
- `roll`: Number

Returns `q`.

### `quat.slerp(q, p, t)`
Spherical linear interpolation between two quaternions.

- `q`: quat
- `p`: quat
- `t`: Number

Returns `q`.

### `quat.fromTo(q, from, to, up)`
TODO

Returns `q`.

## utils

### `utils.lerp(a, b, t)`
Linear interpolation between two numbers.

- `a`: Number
- `b`: Number
- `t`: Number

Returns a `Number`.

### `utils.clamp(a, min, max)`
Clamps a number between two numbers.

- `a`: Number
- `min`: Number
- `max`: Number

Returns a `Number`.

### `utils.smoothstep(a, min, max)`

- `a`: Number
- `min`: Number
- `max`: Number

Returns a `Number`.

### `utils.map(a, inStart, inEnd, outStart, outEnd)`
Maps a number from one range to another.

- `a`: Number
- `inStart`: Number
- `inEnd`: Number
- `outStart`: Number
- `outEnd`: Number

Returns a `Number`.

### `toRadians(degrees)`
Transforms degrees into radians.

- `degrees` - Number

Returns a `Number`.

### `toDegrees(radians)`
Transforms radians into degrees.

- `radians` - Number

Returns a `Number`.

### `fraction(a)`
Returns the fractional part of a number.

- `a` - Number

Returns a `Number`.

### `sign(a)`
Returns the sign of a number.

- `a` - Number

Returns a `Number`.

### `sign(a)`
Returns the sign of a number.

- `a` - Number

Returns a `Number`.

### `isPowerOfTwo(a)`
Returns the sign of a number.

- `a` - Number

Returns a `Number`.

### `nextPowerOfTwo(a)`
Returns the sign of a number.

- `a` - Number

Returns a `Number`.
