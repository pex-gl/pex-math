# pex-math

[![npm version](https://img.shields.io/npm/v/pex-math)](https://www.npmjs.com/package/pex-math)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/pex-math)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/pex-math)](https://bundlephobia.com/package/pex-math)
[![dependencies](https://img.shields.io/librariesio/release/npm/pex-math)](https://github.com/pex-gl/pex-math/blob/main/package.json)
[![types](https://img.shields.io/npm/types/pex-math)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/pex-gl/pex-math)](https://github.com/pex-gl/pex-math/blob/main/LICENSE.md)

Array-based vector, quaternion and matrix math for [PEX](http://pex.gl/)

## Installation

```bash
npm install pex-math
```

## Usage

```javascript
import { mat4 } from "pex-math";

const identityMatrix = mat4.create();
// => [1, 0, 0, 0,
//     0, 1, 0, 0,
//     0, 0, 1, 0,
//     0, 0, 0, 1]
```

## API

<!-- api-start -->

## Modules

<dl>
<dt><a href="#module_euler">euler</a></dt>
<dd></dd>
<dt><a href="#module_index">index</a></dt>
<dd><p>Re-export vec, mat, quat, euler and utils</p>
</dd>
<dt><a href="#module_mat2x3">mat2x3</a></dt>
<dd></dd>
<dt><a href="#module_mat3">mat3</a></dt>
<dd></dd>
<dt><a href="#module_mat4">mat4</a></dt>
<dd></dd>
<dt><a href="#module_quat">quat</a></dt>
<dd></dd>
<dt><a href="#module_utils">utils</a></dt>
<dd></dd>
<dt><a href="#module_vec2">vec2</a></dt>
<dd></dd>
<dt><a href="#module_vec3">vec3</a></dt>
<dd></dd>
<dt><a href="#module_vec4">vec4</a></dt>
<dd></dd>
</dl>

<a name="module_euler"></a>

## euler

- [euler](#module_euler)
  - [.create()](#module_euler.create) ⇒ <code>euler</code>
  - [.fromQuat(v, q)](#module_euler.fromQuat) ⇒ <code>euler</code>

<a name="module_euler.create"></a>

### euler.create() ⇒ <code>euler</code>

Create a new euler angles [0, 0, 0]: vec3 array of [x, y, z] rotation [yaw, pitch, roll] in radians.

**Kind**: static method of [<code>euler</code>](#module_euler)  
<a name="module_euler.fromQuat"></a>

### euler.fromQuat(v, q) ⇒ <code>euler</code>

Creates euler angles from quaterion. Assumes XYZ order of rotations.

**Kind**: static method of [<code>euler</code>](#module_euler)

| Param | Type               |
| ----- | ------------------ |
| v     | <code>euler</code> |
| q     | <code>quat</code>  |

<a name="module_index"></a>

## index

Re-export vec, mat, quat, euler and utils

<a name="module_mat2x3"></a>

## mat2x3

- [mat2x3](#module_mat2x3)
  - [.create()](#module_mat2x3.create) ⇒ <code>mat2x3</code>
  - [.identity(a)](#module_mat2x3.identity) ⇒ <code>mat2x3</code>
  - [.copy(a)](#module_mat2x3.copy) ⇒ <code>mat2x3</code>
  - [.set(a, b)](#module_mat2x3.set) ⇒ <code>mat2x3</code>
  - [.equals(a, b)](#module_mat2x3.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_mat2x3.mult) ⇒ <code>mat2x3</code>
  - [.translate(a, v)](#module_mat2x3.translate) ⇒ <code>mat2x3</code>
  - [.rotate(a, rad)](#module_mat2x3.rotate) ⇒ <code>mat2x3</code>
  - [.scale(a, v)](#module_mat2x3.scale) ⇒ <code>mat2x3</code>

<a name="module_mat2x3.create"></a>

### mat2x3.create() ⇒ <code>mat2x3</code>

Returns a 2x3 identity matrix, a short form for a 3x3 matrix with the last row ignored.

Row major memory layout:

```
0   1   2
3   4   5
```

Equivalent to the column major OpenGL spec:

```
0   3
1   4
2   5

m00 m10
m01 m11
m02 m12
```

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)  
<a name="module_mat2x3.identity"></a>

### mat2x3.identity(a) ⇒ <code>mat2x3</code>

Sets a matrix to the identity matrix.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>mat2x3</code> |

<a name="module_mat2x3.copy"></a>

### mat2x3.copy(a) ⇒ <code>mat2x3</code>

Returns a copy of a matrix.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>mat2x3</code> |

<a name="module_mat2x3.set"></a>

### mat2x3.set(a, b) ⇒ <code>mat2x3</code>

Sets a matrix from another matrix.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>mat2x3</code> |
| b     | <code>mat2x3</code> |

<a name="module_mat2x3.equals"></a>

### mat2x3.equals(a, b) ⇒ <code>boolean</code>

Compares two matrices.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>mat2x3</code> |
| b     | <code>mat2x3</code> |

<a name="module_mat2x3.mult"></a>

### mat2x3.mult(a, b) ⇒ <code>mat2x3</code>

Multiplies two matrices.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>mat2x3</code> |
| b     | <code>mat2x3</code> |

<a name="module_mat2x3.translate"></a>

### mat2x3.translate(a, v) ⇒ <code>mat2x3</code>

Translates a matrix by a vector.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>mat2x3</code> |
| v     | <code>vec2</code>   |

<a name="module_mat2x3.rotate"></a>

### mat2x3.rotate(a, rad) ⇒ <code>mat2x3</code>

Rotates a matrix by an angle.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                 |
| ----- | -------------------- |
| a     | <code>mat2x3</code>  |
| rad   | <code>Radians</code> |

<a name="module_mat2x3.scale"></a>

### mat2x3.scale(a, v) ⇒ <code>mat2x3</code>

Scales a matrix by a vector.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>mat2x3</code> |
| v     | <code>vec2</code>   |

<a name="module_mat3"></a>

## mat3

- [mat3](#module_mat3)
  - [.create()](#module_mat3.create) ⇒ <code>mat3</code>
  - [.identity(a)](#module_mat3.identity) ⇒ <code>mat3</code>
  - [.copy(a)](#module_mat3.copy) ⇒ <code>mat3</code>
  - [.set(a, b)](#module_mat3.set) ⇒ <code>mat3</code>
  - [.equals(a, b)](#module_mat3.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_mat3.mult) ⇒ <code>mat3</code>
  - [.fromMat2x3(a, b)](#module_mat3.fromMat2x3) ⇒ <code>mat3</code>
  - [.fromMat4(a, b)](#module_mat3.fromMat4) ⇒ <code>mat3</code>
  - [.fromQuat(a, b)](#module_mat3.fromQuat) ⇒ <code>mat3</code>
  - [.transpose(a)](#module_mat3.transpose) ⇒ <code>mat3</code>

<a name="module_mat3.create"></a>

### mat3.create() ⇒ <code>mat3</code>

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

**Kind**: static method of [<code>mat3</code>](#module_mat3)  
<a name="module_mat3.identity"></a>

### mat3.identity(a) ⇒ <code>mat3</code>

Sets a matrix to the identity matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat3</code> |

<a name="module_mat3.copy"></a>

### mat3.copy(a) ⇒ <code>mat3</code>

Returns a copy of a matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat3</code> |

<a name="module_mat3.set"></a>

### mat3.set(a, b) ⇒ <code>mat3</code>

Sets a matrix from another matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat3</code> |
| b     | <code>mat3</code> |

<a name="module_mat3.equals"></a>

### mat3.equals(a, b) ⇒ <code>boolean</code>

Compares two matrices.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat3</code> |
| b     | <code>mat3</code> |

<a name="module_mat3.mult"></a>

### mat3.mult(a, b) ⇒ <code>mat3</code>

Multiplies two matrices.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat3</code> |
| b     | <code>mat3</code> |

<a name="module_mat3.fromMat2x3"></a>

### mat3.fromMat2x3(a, b) ⇒ <code>mat3</code>

Sets a 3x3 matrix from a 2x3 matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>mat3</code>   |
| b     | <code>mat2x3</code> |

<a name="module_mat3.fromMat4"></a>

### mat3.fromMat4(a, b) ⇒ <code>mat3</code>

Sets a 3x3 matrix to a 4x4 matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat3</code> |
| b     | <code>mat4</code> |

<a name="module_mat3.fromQuat"></a>

### mat3.fromQuat(a, b) ⇒ <code>mat3</code>

Sets matrix to a quaternion.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat3</code> |
| b     | <code>quat</code> |

<a name="module_mat3.transpose"></a>

### mat3.transpose(a) ⇒ <code>mat3</code>

Transposes a matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat3</code> |

<a name="module_mat4"></a>

## mat4

- [mat4](#module_mat4)
  - [.create()](#module_mat4.create) ⇒ <code>mat4</code>
  - [.identity(a)](#module_mat4.identity) ⇒ <code>mat4</code>
  - [.copy(a)](#module_mat4.copy) ⇒ <code>mat4</code>
  - [.set(a, b)](#module_mat4.set) ⇒ <code>mat4</code>
  - [.equals(a, b)](#module_mat4.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_mat4.mult) ⇒ <code>mat4</code>
  - [.invert(a)](#module_mat4.invert) ⇒ <code>mat4</code>
  - [.transpose(a)](#module_mat4.transpose) ⇒ <code>mat4</code>
  - [.scale(a, v)](#module_mat4.scale) ⇒ <code>mat4</code>
  - [.translate(a, v)](#module_mat4.translate) ⇒ <code>mat4</code>
  - [.rotate(a, r, v)](#module_mat4.rotate) ⇒ <code>mat4</code>
  - [.fromQuat(a, q)](#module_mat4.fromQuat) ⇒ <code>mat4</code>
  - [.fromTranslationRotationScale(a, translation, rotation, scaling)](#module_mat4.fromTranslationRotationScale) ⇒ <code>mat4</code>
  - [.fromMat3(a, b)](#module_mat4.fromMat3) ⇒ <code>mat4</code>
  - [.frustum(a, left, right, bottom, top, near, far)](#module_mat4.frustum) ⇒ <code>mat4</code>
  - [.perspective(a, fovy, aspectRatio, near, far)](#module_mat4.perspective) ⇒ <code>mat4</code>
  - [.ortho(a, left, right, bottom, top, near, far)](#module_mat4.ortho) ⇒ <code>mat4</code>
  - [.lookAt(a, from, to, up)](#module_mat4.lookAt) ⇒ <code>mat4</code>

<a name="module_mat4.create"></a>

### mat4.create() ⇒ <code>mat4</code>

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

**Kind**: static method of [<code>mat4</code>](#module_mat4)  
<a name="module_mat4.identity"></a>

### mat4.identity(a) ⇒ <code>mat4</code>

Sets a matrix to the identity matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |

<a name="module_mat4.copy"></a>

### mat4.copy(a) ⇒ <code>mat4</code>

Returns a copy of a matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |

<a name="module_mat4.set"></a>

### mat4.set(a, b) ⇒ <code>mat4</code>

Sets a matrix from another matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |
| b     | <code>mat4</code> |

<a name="module_mat4.equals"></a>

### mat4.equals(a, b) ⇒ <code>boolean</code>

Compares two matrices.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |
| b     | <code>mat4</code> |

<a name="module_mat4.mult"></a>

### mat4.mult(a, b) ⇒ <code>mat4</code>

Multiplies two matrices.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |
| b     | <code>mat4</code> |

<a name="module_mat4.invert"></a>

### mat4.invert(a) ⇒ <code>mat4</code>

Inverts a matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |

<a name="module_mat4.transpose"></a>

### mat4.transpose(a) ⇒ <code>mat4</code>

Transposes a matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |

<a name="module_mat4.scale"></a>

### mat4.scale(a, v) ⇒ <code>mat4</code>

Scales a matrix by a vector.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |
| v     | <code>vec3</code> |

<a name="module_mat4.translate"></a>

### mat4.translate(a, v) ⇒ <code>mat4</code>

Translates a matrix by a vector.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |
| v     | <code>vec3</code> |

<a name="module_mat4.rotate"></a>

### mat4.rotate(a, r, v) ⇒ <code>mat4</code>

Rotates a matrix by an angle at an axis.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                 |
| ----- | -------------------- |
| a     | <code>mat4</code>    |
| r     | <code>Radians</code> |
| v     | <code>vec3</code>    |

<a name="module_mat4.fromQuat"></a>

### mat4.fromQuat(a, q) ⇒ <code>mat4</code>

Sets matrix to a quaternion.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |
| q     | <code>quat</code> |

<a name="module_mat4.fromTranslationRotationScale"></a>

### mat4.fromTranslationRotationScale(a, translation, rotation, scaling) ⇒ <code>mat4</code>

Sets matrix to the TRS matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param       | Type              |
| ----------- | ----------------- |
| a           | <code>mat4</code> |
| translation | <code>vec3</code> |
| rotation    | <code>quat</code> |
| scaling     | <code>vec3</code> |

<a name="module_mat4.fromMat3"></a>

### mat4.fromMat3(a, b) ⇒ <code>mat4</code>

Sets a 4x4 matrix to a 3x3 matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |
| b     | <code>mat3</code> |

<a name="module_mat4.frustum"></a>

### mat4.frustum(a, left, right, bottom, top, near, far) ⇒ <code>mat4</code>

Create a frustum matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param  | Type                |
| ------ | ------------------- |
| a      | <code>mat4</code>   |
| left   | <code>number</code> |
| right  | <code>number</code> |
| bottom | <code>number</code> |
| top    | <code>number</code> |
| near   | <code>number</code> |
| far    | <code>number</code> |

<a name="module_mat4.perspective"></a>

### mat4.perspective(a, fovy, aspectRatio, near, far) ⇒ <code>mat4</code>

Create a perspective matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param       | Type                 |
| ----------- | -------------------- |
| a           | <code>mat4</code>    |
| fovy        | <code>Radians</code> |
| aspectRatio | <code>number</code>  |
| near        | <code>number</code>  |
| far         | <code>number</code>  |

<a name="module_mat4.ortho"></a>

### mat4.ortho(a, left, right, bottom, top, near, far) ⇒ <code>mat4</code>

Create a orthographic matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param  | Type                |
| ------ | ------------------- |
| a      | <code>mat4</code>   |
| left   | <code>number</code> |
| right  | <code>number</code> |
| bottom | <code>number</code> |
| top    | <code>number</code> |
| near   | <code>number</code> |
| far    | <code>number</code> |

<a name="module_mat4.lookAt"></a>

### mat4.lookAt(a, from, to, up) ⇒ <code>mat4</code>

Calculates a lookAt matrix from a position, target and up vectors.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>mat4</code> |
| from  | <code>vec3</code> |
| to    | <code>vec3</code> |
| up    | <code>vec3</code> |

<a name="module_quat"></a>

## quat

- [quat](#module_quat)
  - [.fromTo](#module_quat.fromTo) ⇒ <code>quat</code>
  - [.create()](#module_quat.create) ⇒ <code>quat</code>
  - [.identity(a)](#module_quat.identity) ⇒ <code>quat</code>
  - [.copy(a)](#module_quat.copy) ⇒ <code>quat</code>
  - [.set(a, b)](#module_quat.set) ⇒ <code>quat</code>
  - [.equals(a, b)](#module_quat.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_quat.mult) ⇒ <code>quat</code>
  - [.invert(a)](#module_quat.invert) ⇒ <code>quat</code>
  - [.conjugate(a)](#module_quat.conjugate) ⇒ <code>quat</code>
  - [.length(a)](#module_quat.length) ⇒ <code>quat</code>
  - [.normalize(a)](#module_quat.normalize) ⇒ <code>quat</code>
  - [.dot(a, b)](#module_quat.dot) ⇒ <code>quat</code>
  - [.fromEuler(q, euler)](#module_quat.fromEuler) ⇒ <code>quat</code>
  - [.fromAxisAngle(a, axis, angle)](#module_quat.fromAxisAngle) ⇒ <code>quat</code>
  - [.fromAxes(a, x, y, z)](#module_quat.fromAxes) ⇒ <code>quat</code>
  - [.fromMat3(a, m)](#module_quat.fromMat3) ⇒ <code>quat</code>
  - [.fromMat4(a, m)](#module_quat.fromMat4) ⇒ <code>quat</code>
  - [.slerp(a, b, t)](#module_quat.slerp) ⇒ <code>quat</code>

<a name="module_quat.fromTo"></a>

### quat.fromTo ⇒ <code>quat</code>

Sets a quaternion to represent the shortest rotation from one vector to another.

**Kind**: static constant of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |
| v     | <code>vec3</code> |
| w     | <code>vec3</code> |

<a name="module_quat.create"></a>

### quat.create() ⇒ <code>quat</code>

Returns a new quat at 0, 0, 0, 1.

**Kind**: static method of [<code>quat</code>](#module_quat)  
<a name="module_quat.identity"></a>

### quat.identity(a) ⇒ <code>quat</code>

Sets a quaternion to the identity quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |

<a name="module_quat.copy"></a>

### quat.copy(a) ⇒ <code>quat</code>

Returns a copy of a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |

<a name="module_quat.set"></a>

### quat.set(a, b) ⇒ <code>quat</code>

Sets a quaternion to another quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |
| b     | <code>quat</code> |

<a name="module_quat.equals"></a>

### quat.equals(a, b) ⇒ <code>boolean</code>

Compares two quaternions.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |
| b     | <code>quat</code> |

<a name="module_quat.mult"></a>

### quat.mult(a, b) ⇒ <code>quat</code>

Multiplies one quaternion by another.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |
| b     | <code>quat</code> |

<a name="module_quat.invert"></a>

### quat.invert(a) ⇒ <code>quat</code>

Inverts a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |

<a name="module_quat.conjugate"></a>

### quat.conjugate(a) ⇒ <code>quat</code>

Conjugates a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |

<a name="module_quat.length"></a>

### quat.length(a) ⇒ <code>quat</code>

Calculates the length of a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |

<a name="module_quat.normalize"></a>

### quat.normalize(a) ⇒ <code>quat</code>

Normalizes a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |

<a name="module_quat.dot"></a>

### quat.dot(a, b) ⇒ <code>quat</code>

Calculates the dot product of two quaternions.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |
| b     | <code>quat</code> |

<a name="module_quat.fromEuler"></a>

### quat.fromEuler(q, euler) ⇒ <code>quat</code>

Set euler angles to a quaternion. Assumes XYZ rotation order.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type               |
| ----- | ------------------ |
| q     | <code>quat</code>  |
| euler | <code>euler</code> |

<a name="module_quat.fromAxisAngle"></a>

### quat.fromAxisAngle(a, axis, angle) ⇒ <code>quat</code>

Set the angle at an axis of a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                 |
| ----- | -------------------- |
| a     | <code>quat</code>    |
| axis  | <code>vec3</code>    |
| angle | <code>Radians</code> |

<a name="module_quat.fromAxes"></a>

### quat.fromAxes(a, x, y, z) ⇒ <code>quat</code>

Sets quaternion from orthonormal base xyz.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>quat</code>   |
| x     | <code>number</code> |
| y     | <code>number</code> |
| z     | <code>number</code> |

<a name="module_quat.fromMat3"></a>

### quat.fromMat3(a, m) ⇒ <code>quat</code>

Sets a quaternion to a 3x3 matrix.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |
| m     | <code>mat3</code> |

<a name="module_quat.fromMat4"></a>

### quat.fromMat4(a, m) ⇒ <code>quat</code>

Sets a quaternion to a 4x4 matrix.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>quat</code> |
| m     | <code>mat4</code> |

<a name="module_quat.slerp"></a>

### quat.slerp(a, b, t) ⇒ <code>quat</code>

Spherical linear interpolation between two quaternions.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>quat</code>   |
| b     | <code>quat</code>   |
| t     | <code>number</code> |

<a name="module_utils"></a>

## utils

- [utils](#module_utils)
  - _static_
    - [.EPSILON](#module_utils.EPSILON) : <code>number</code>
    - [.lerp(a, b, n)](#module_utils.lerp) ⇒ <code>number</code>
    - [.clamp(n, min, max)](#module_utils.clamp) ⇒ <code>number</code>
    - [.smoothstep(n, min, max)](#module_utils.smoothstep) ⇒ <code>number</code>
    - [.map(n, inStart, inEnd, outStart, outEnd)](#module_utils.map) ⇒ <code>number</code>
    - [.toRadians(degrees)](#module_utils.toRadians) ⇒ [<code>Radians</code>](#module_utils..Radians)
    - [.toDegrees(radians)](#module_utils.toDegrees) ⇒ [<code>Degrees</code>](#module_utils..Degrees)
    - [.sign(n)](#module_utils.sign) ⇒ <code>number</code>
    - [.isPowerOfTwo(a)](#module_utils.isPowerOfTwo) ⇒ <code>boolean</code>
    - [.nextPowerOfTwo(n)](#module_utils.nextPowerOfTwo) ⇒ <code>number</code>
  - _inner_
    - [~Degrees](#module_utils..Degrees) : <code>number</code>
    - [~Radians](#module_utils..Radians) : <code>number</code>

<a name="module_utils.EPSILON"></a>

### utils.EPSILON : <code>number</code>

**Kind**: static constant of [<code>utils</code>](#module_utils)  
<a name="module_utils.lerp"></a>

### utils.lerp(a, b, n) ⇒ <code>number</code>

Linear interpolation between two numbers.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>number</code> |
| b     | <code>number</code> |
| n     | <code>number</code> |

<a name="module_utils.clamp"></a>

### utils.clamp(n, min, max) ⇒ <code>number</code>

Clamps a number between two numbers.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param | Type                |
| ----- | ------------------- |
| n     | <code>number</code> |
| min   | <code>number</code> |
| max   | <code>number</code> |

<a name="module_utils.smoothstep"></a>

### utils.smoothstep(n, min, max) ⇒ <code>number</code>

Smooth Hermite interpolation between 0 and 1

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param | Type                |
| ----- | ------------------- |
| n     | <code>number</code> |
| min   | <code>number</code> |
| max   | <code>number</code> |

<a name="module_utils.map"></a>

### utils.map(n, inStart, inEnd, outStart, outEnd) ⇒ <code>number</code>

Maps a number from one range to another.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param    | Type                |
| -------- | ------------------- |
| n        | <code>number</code> |
| inStart  | <code>number</code> |
| inEnd    | <code>number</code> |
| outStart | <code>number</code> |
| outEnd   | <code>number</code> |

<a name="module_utils.toRadians"></a>

### utils.toRadians(degrees) ⇒ [<code>Radians</code>](#module_utils..Radians)

Transforms degrees into radians.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param   | Type                                           |
| ------- | ---------------------------------------------- |
| degrees | [<code>Degrees</code>](#module_utils..Degrees) |

<a name="module_utils.toDegrees"></a>

### utils.toDegrees(radians) ⇒ [<code>Degrees</code>](#module_utils..Degrees)

Transforms radians into degrees.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param   | Type                                           |
| ------- | ---------------------------------------------- |
| radians | [<code>Radians</code>](#module_utils..Radians) |

<a name="module_utils.sign"></a>

### utils.sign(n) ⇒ <code>number</code>

Returns the sign of a number.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param | Type                |
| ----- | ------------------- |
| n     | <code>number</code> |

<a name="module_utils.isPowerOfTwo"></a>

### utils.isPowerOfTwo(a) ⇒ <code>boolean</code>

Check if a number is a power of two

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>number</code> |

<a name="module_utils.nextPowerOfTwo"></a>

### utils.nextPowerOfTwo(n) ⇒ <code>number</code>

Returns the next highest power of two.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param | Type                |
| ----- | ------------------- |
| n     | <code>number</code> |

<a name="module_utils..Degrees"></a>

### utils~Degrees : <code>number</code>

**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
<a name="module_utils..Radians"></a>

### utils~Radians : <code>number</code>

**Kind**: inner typedef of [<code>utils</code>](#module_utils)  
<a name="module_vec2"></a>

## vec2

- [vec2](#module_vec2)
  - [.create()](#module_vec2.create) ⇒ <code>vec2</code>
  - [.copy(a)](#module_vec2.copy) ⇒ <code>vec2</code>
  - [.set(a, b)](#module_vec2.set) ⇒ <code>vec2</code>
  - [.equals(a, b)](#module_vec2.equals) ⇒ <code>boolean</code>
  - [.add(a, b)](#module_vec2.add) ⇒ <code>vec2</code>
  - [.sub(a, b)](#module_vec2.sub) ⇒ <code>vec2</code>
  - [.scale(a, n)](#module_vec2.scale) ⇒ <code>vec2</code>
  - [.addScaled(a, b, n)](#module_vec2.addScaled) ⇒ <code>vec2</code>
  - [.dot(a, b)](#module_vec2.dot) ⇒ <code>number</code>
  - [.length(a)](#module_vec2.length) ⇒ <code>number</code>
  - [.lengthSq(a)](#module_vec2.lengthSq) ⇒ <code>number</code>
  - [.normalize(a)](#module_vec2.normalize) ⇒ <code>vec2</code>
  - [.distance(a, b)](#module_vec2.distance) ⇒ <code>number</code>
  - [.distanceSq(a, b)](#module_vec2.distanceSq) ⇒ <code>number</code>
  - [.limit(a, n)](#module_vec2.limit) ⇒ <code>vec2</code>
  - [.lerp(a, b, n)](#module_vec2.lerp) ⇒ <code>vec2</code>
  - [.toString(a, precision)](#module_vec2.toString) ⇒ <code>vec2</code>

<a name="module_vec2.create"></a>

### vec2.create() ⇒ <code>vec2</code>

Returns a new vec2 at 0, 0, 0.

**Kind**: static method of [<code>vec2</code>](#module_vec2)  
<a name="module_vec2.copy"></a>

### vec2.copy(a) ⇒ <code>vec2</code>

Returns a copy of a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |

<a name="module_vec2.set"></a>

### vec2.set(a, b) ⇒ <code>vec2</code>

Sets a vector to another vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |
| b     | <code>vec2</code> |

<a name="module_vec2.equals"></a>

### vec2.equals(a, b) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |
| b     | <code>vec2</code> |

<a name="module_vec2.add"></a>

### vec2.add(a, b) ⇒ <code>vec2</code>

Add a vector with another.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |
| b     | <code>vec2</code> |

<a name="module_vec2.sub"></a>

### vec2.sub(a, b) ⇒ <code>vec2</code>

Subtracts a vector with another.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |
| b     | <code>vec2</code> |

<a name="module_vec2.scale"></a>

### vec2.scale(a, n) ⇒ <code>vec2</code>

Scales a vector by a number.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>vec2</code>   |
| n     | <code>number</code> |

<a name="module_vec2.addScaled"></a>

### vec2.addScaled(a, b, n) ⇒ <code>vec2</code>

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>vec2</code>   |
| b     | <code>vec2</code>   |
| n     | <code>number</code> |

<a name="module_vec2.dot"></a>

### vec2.dot(a, b) ⇒ <code>number</code>

Calculates the dot product of two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |
| b     | <code>vec2</code> |

<a name="module_vec2.length"></a>

### vec2.length(a) ⇒ <code>number</code>

Calculates the length of a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |

<a name="module_vec2.lengthSq"></a>

### vec2.lengthSq(a) ⇒ <code>number</code>

Calculates the squared length of a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |

<a name="module_vec2.normalize"></a>

### vec2.normalize(a) ⇒ <code>vec2</code>

Normalises a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |

<a name="module_vec2.distance"></a>

### vec2.distance(a, b) ⇒ <code>number</code>

Calculates the distance between two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |
| b     | <code>vec2</code> |

<a name="module_vec2.distanceSq"></a>

### vec2.distanceSq(a, b) ⇒ <code>number</code>

Calculates the squared distance between two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |
| b     | <code>vec2</code> |

<a name="module_vec2.limit"></a>

### vec2.limit(a, n) ⇒ <code>vec2</code>

Limits a vector to a length.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec2</code> |
| n     | <code>vec2</code> |

<a name="module_vec2.lerp"></a>

### vec2.lerp(a, b, n) ⇒ <code>vec2</code>

Linearly interpolates between two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>vec2</code>   |
| b     | <code>vec2</code>   |
| n     | <code>number</code> |

<a name="module_vec2.toString"></a>

### vec2.toString(a, precision) ⇒ <code>vec2</code>

Prints a vector to a string.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param     | Type                |
| --------- | ------------------- |
| a         | <code>vec2</code>   |
| precision | <code>number</code> |

<a name="module_vec3"></a>

## vec3

- [vec3](#module_vec3)
  - [.create()](#module_vec3.create) ⇒ <code>vec3</code>
  - [.copy(a)](#module_vec3.copy) ⇒ <code>vec3</code>
  - [.set(a, b)](#module_vec3.set) ⇒ <code>vec3</code>
  - [.equals(a, b)](#module_vec3.equals) ⇒ <code>boolean</code>
  - [.add(a, b)](#module_vec3.add) ⇒ <code>vec3</code>
  - [.sub(a, b)](#module_vec3.sub) ⇒ <code>vec3</code>
  - [.scale(a, n)](#module_vec3.scale) ⇒ <code>vec3</code>
  - [.addScaled(a, b, n)](#module_vec3.addScaled) ⇒ <code>vec3</code>
  - [.multMat4(a, m)](#module_vec3.multMat4) ⇒ <code>vec3</code>
  - [.multQuat(a, q)](#module_vec3.multQuat) ⇒ <code>vec3</code>
  - [.dot(a, b)](#module_vec3.dot) ⇒ <code>number</code>
  - [.cross(a, b)](#module_vec3.cross) ⇒ <code>number</code>
  - [.length(a)](#module_vec3.length) ⇒ <code>number</code>
  - [.lengthSq(a)](#module_vec3.lengthSq) ⇒ <code>number</code>
  - [.normalize(a)](#module_vec3.normalize) ⇒ <code>vec3</code>
  - [.distance(a, b)](#module_vec3.distance) ⇒ <code>number</code>
  - [.distanceSq(a, b)](#module_vec3.distanceSq) ⇒ <code>number</code>
  - [.limit(a, n)](#module_vec3.limit) ⇒ <code>vec3</code>
  - [.lerp(a, b, n)](#module_vec3.lerp) ⇒ <code>vec3</code>
  - [.toString(a, precision)](#module_vec3.toString) ⇒ <code>vec3</code>

<a name="module_vec3.create"></a>

### vec3.create() ⇒ <code>vec3</code>

Returns a new vec3 at 0, 0, 0.

**Kind**: static method of [<code>vec3</code>](#module_vec3)  
<a name="module_vec3.copy"></a>

### vec3.copy(a) ⇒ <code>vec3</code>

Returns a copy of a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |

<a name="module_vec3.set"></a>

### vec3.set(a, b) ⇒ <code>vec3</code>

Sets a vector to another vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| b     | <code>vec3</code> |

<a name="module_vec3.equals"></a>

### vec3.equals(a, b) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| b     | <code>vec3</code> |

<a name="module_vec3.add"></a>

### vec3.add(a, b) ⇒ <code>vec3</code>

Add a vector with another.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| b     | <code>vec3</code> |

<a name="module_vec3.sub"></a>

### vec3.sub(a, b) ⇒ <code>vec3</code>

Subtracts a vector with another.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| b     | <code>vec3</code> |

<a name="module_vec3.scale"></a>

### vec3.scale(a, n) ⇒ <code>vec3</code>

Scales a vector by a number.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>vec3</code>   |
| n     | <code>number</code> |

<a name="module_vec3.addScaled"></a>

### vec3.addScaled(a, b, n) ⇒ <code>vec3</code>

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>vec3</code>   |
| b     | <code>vec3</code>   |
| n     | <code>number</code> |

<a name="module_vec3.multMat4"></a>

### vec3.multMat4(a, m) ⇒ <code>vec3</code>

Multiplies a vector by a matrix.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| m     | <code>mat4</code> |

<a name="module_vec3.multQuat"></a>

### vec3.multQuat(a, q) ⇒ <code>vec3</code>

Multiplies a vector by a quaternion.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| q     | <code>quat</code> |

<a name="module_vec3.dot"></a>

### vec3.dot(a, b) ⇒ <code>number</code>

Calculates the dot product of two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| b     | <code>vec3</code> |

<a name="module_vec3.cross"></a>

### vec3.cross(a, b) ⇒ <code>number</code>

Calculates the cross product of two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| b     | <code>vec3</code> |

<a name="module_vec3.length"></a>

### vec3.length(a) ⇒ <code>number</code>

Calculates the length of a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |

<a name="module_vec3.lengthSq"></a>

### vec3.lengthSq(a) ⇒ <code>number</code>

Calculates the squared length of a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |

<a name="module_vec3.normalize"></a>

### vec3.normalize(a) ⇒ <code>vec3</code>

Normalises a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |

<a name="module_vec3.distance"></a>

### vec3.distance(a, b) ⇒ <code>number</code>

Calculates the distance between two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| b     | <code>vec3</code> |

<a name="module_vec3.distanceSq"></a>

### vec3.distanceSq(a, b) ⇒ <code>number</code>

Calculates the squared distance between two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| b     | <code>vec3</code> |

<a name="module_vec3.limit"></a>

### vec3.limit(a, n) ⇒ <code>vec3</code>

Limits a vector to a length.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec3</code> |
| n     | <code>vec3</code> |

<a name="module_vec3.lerp"></a>

### vec3.lerp(a, b, n) ⇒ <code>vec3</code>

Linearly interpolates between two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>vec3</code>   |
| b     | <code>vec3</code>   |
| n     | <code>number</code> |

<a name="module_vec3.toString"></a>

### vec3.toString(a, precision) ⇒ <code>vec3</code>

Prints a vector to a string.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param     | Type                |
| --------- | ------------------- |
| a         | <code>vec3</code>   |
| precision | <code>number</code> |

<a name="module_vec4"></a>

## vec4

- [vec4](#module_vec4)
  - [.create()](#module_vec4.create) ⇒ <code>vec4</code>
  - [.copy(a)](#module_vec4.copy) ⇒ <code>vec4</code>
  - [.set(a, b)](#module_vec4.set) ⇒ <code>vec4</code>
  - [.equals(a, b)](#module_vec4.equals) ⇒ <code>boolean</code>
  - [.fromVec3(a, b)](#module_vec4.fromVec3) ⇒ <code>vec4</code>
  - [.multMat4(a, m)](#module_vec4.multMat4) ⇒ <code>vec4</code>
  - [.scale(a, n)](#module_vec4.scale) ⇒ <code>vec4</code>

<a name="module_vec4.create"></a>

### vec4.create() ⇒ <code>vec4</code>

Returns a new vec4 at 0, 0, 0, 1.

**Kind**: static method of [<code>vec4</code>](#module_vec4)  
<a name="module_vec4.copy"></a>

### vec4.copy(a) ⇒ <code>vec4</code>

Returns a copy of a vector.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec4</code> |

<a name="module_vec4.set"></a>

### vec4.set(a, b) ⇒ <code>vec4</code>

Sets a vector to another vector.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec4</code> |
| b     | <code>vec4</code> |

<a name="module_vec4.equals"></a>

### vec4.equals(a, b) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec4</code> |
| b     | <code>vec4</code> |

<a name="module_vec4.fromVec3"></a>

### vec4.fromVec3(a, b) ⇒ <code>vec4</code>

Create a vec4 from vec3.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec4</code> |
| b     | <code>vec3</code> |

<a name="module_vec4.multMat4"></a>

### vec4.multMat4(a, m) ⇒ <code>vec4</code>

Multiplies a vector with a matrix.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type              |
| ----- | ----------------- |
| a     | <code>vec4</code> |
| m     | <code>mat4</code> |

<a name="module_vec4.scale"></a>

### vec4.scale(a, n) ⇒ <code>vec4</code>

Scales a vector by a number.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>vec4</code>   |
| n     | <code>number</code> |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/pex-gl/pex-math/blob/main/LICENSE.md).
