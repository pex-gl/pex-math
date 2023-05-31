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

Array-based vector, quaternion and matrix math with utils for [PEX](https://pex.gl/).

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
<dt><a href="#module_avec3">avec3</a></dt>
<dd></dd>
<dt><a href="#module_avec4">avec4</a></dt>
<dd></dd>
<dt><a href="#module_euler">euler</a></dt>
<dd></dd>
<dt><a href="#module_index">index</a></dt>
<dd><p>Re-export vec, avec, mat, quat, euler and utils</p>
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

## Typedefs

<dl>
<dt><a href="#TypedArray">TypedArray</a> : <code>Int8Array</code> | <code>Uint8Array</code> | <code>Uint8ClampedArray</code> | <code>Int16Array</code> | <code>Uint16Array</code> | <code>Int32Array</code> | <code>Uint32Array</code> | <code>Float32Array</code> | <code>Float64Array</code> | <code>BigInt64Array</code> | <code>BigUint64Array</code></dt>
<dd></dd>
<dt><a href="#avec4">avec4</a> : <code><a href="#TypedArray">TypedArray</a></code></dt>
<dd></dd>
<dt><a href="#avec3">avec3</a> : <code><a href="#TypedArray">TypedArray</a></code></dt>
<dd></dd>
<dt><a href="#amat4">amat4</a> : <code><a href="#TypedArray">TypedArray</a></code></dt>
<dd></dd>
<dt><a href="#aquat">aquat</a> : <code><a href="#TypedArray">TypedArray</a></code></dt>
<dd></dd>
<dt><a href="#euler">euler</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#mat2x3">mat2x3</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#mat3">mat3</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#mat4">mat4</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#quat">quat</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#vec2">vec2</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#vec3">vec3</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#vec4">vec4</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#Degrees">Degrees</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#Radians">Radians</a> : <code>number</code></dt>
<dd></dd>
</dl>

<a name="module_avec3"></a>

## avec3

- [avec3](#module_avec3)
  - [.set3(a, i, x, y, z)](#module_avec3.set3)
  - [.set(a, i, b, j)](#module_avec3.set)
  - [.equals(a, i, b, j)](#module_avec3.equals) ⇒ <code>boolean</code>
  - [.add(a, i, b, j)](#module_avec3.add)
  - [.sub(a, i, b, j)](#module_avec3.sub)
  - [.scale(a, i, s)](#module_avec3.scale)
  - [.addScaled(a, i, b, j, s)](#module_avec3.addScaled)
  - [.multMat4(a, i, m, j)](#module_avec3.multMat4)
  - [.multQuat(a, i, q, j)](#module_avec3.multQuat)
  - [.dot(a, i, b, j)](#module_avec3.dot) ⇒ <code>number</code>
  - [.cross(a, i, b, j)](#module_avec3.cross)
  - [.length(a, i)](#module_avec3.length) ⇒ <code>number</code>
  - [.lengthSq(a, i)](#module_avec3.lengthSq) ⇒ <code>number</code>
  - [.normalize(a, i)](#module_avec3.normalize)
  - [.distance(a, i, b, j)](#module_avec3.distance) ⇒ <code>number</code>
  - [.distanceSq(a, i, b, j)](#module_avec3.distanceSq) ⇒ <code>number</code>
  - [.limit(a, i, len)](#module_avec3.limit)
  - [.lerp(a, i, b, j, t)](#module_avec3.lerp)
  - [.toString(a, i, [precision])](#module_avec3.toString) ⇒ <code>string</code>

<a name="module_avec3.set3"></a>

### avec3.set3(a, i, x, y, z)

Sets a vector components.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| x     | <code>number</code>          |
| y     | <code>number</code>          |
| z     | <code>number</code>          |

<a name="module_avec3.set"></a>

### avec3.set(a, i, b, j)

Sets a vector to another vector.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |

<a name="module_avec3.equals"></a>

### avec3.equals(a, i, b, j) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |

<a name="module_avec3.add"></a>

### avec3.add(a, i, b, j)

Adds a vector to another.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |

<a name="module_avec3.sub"></a>

### avec3.sub(a, i, b, j)

Subtracts a vector from another.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |

<a name="module_avec3.scale"></a>

### avec3.scale(a, i, s)

Scales a vector by a number.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec3.addScaled"></a>

### avec3.addScaled(a, i, b, j, s)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec3.multMat4"></a>

### avec3.multMat4(a, i, m, j)

Multiplies a vector by a matrix.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| m     | [<code>amat4</code>](#amat4) |
| j     | <code>number</code>          |

<a name="module_avec3.multQuat"></a>

### avec3.multQuat(a, i, q, j)

Multiplies a vector by a quaternion.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| q     | [<code>aquat</code>](#aquat) |
| j     | <code>number</code>          |

<a name="module_avec3.dot"></a>

### avec3.dot(a, i, b, j) ⇒ <code>number</code>

Calculates the dot product of two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |

<a name="module_avec3.cross"></a>

### avec3.cross(a, i, b, j)

Calculates the cross product of two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |

<a name="module_avec3.length"></a>

### avec3.length(a, i) ⇒ <code>number</code>

Calculates the length of a vector.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |

<a name="module_avec3.lengthSq"></a>

### avec3.lengthSq(a, i) ⇒ <code>number</code>

Calculates the squared length of a vector.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |

<a name="module_avec3.normalize"></a>

### avec3.normalize(a, i)

Normalises a vector.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |

<a name="module_avec3.distance"></a>

### avec3.distance(a, i, b, j) ⇒ <code>number</code>

Calculates the distance between two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |

<a name="module_avec3.distanceSq"></a>

### avec3.distanceSq(a, i, b, j) ⇒ <code>number</code>

Calculates the squared distance between two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |

<a name="module_avec3.limit"></a>

### avec3.limit(a, i, len)

Limits a vector to a length.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| len   | <code>number</code>          |

<a name="module_avec3.lerp"></a>

### avec3.lerp(a, i, b, j, t)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec3</code>](#avec3) |
| i     | <code>number</code>          |
| b     | [<code>avec3</code>](#avec3) |
| j     | <code>number</code>          |
| t     | <code>number</code>          |

<a name="module_avec3.toString"></a>

### avec3.toString(a, i, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param       | Type                         | Default        |
| ----------- | ---------------------------- | -------------- |
| a           | [<code>avec3</code>](#avec3) |                |
| i           | <code>number</code>          |                |
| [precision] | <code>number</code>          | <code>4</code> |

<a name="module_avec4"></a>

## avec4

- [avec4](#module_avec4)
  - [.set4(a, i, x, y, z, w)](#module_avec4.set4)
  - [.set(a, i, b, j)](#module_avec4.set)
  - [.equals(a, i, b, j)](#module_avec4.equals) ⇒ <code>boolean</code>
  - [.add(a, i, b, j)](#module_avec4.add)
  - [.sub(a, i, b, j)](#module_avec4.sub)
  - [.scale(a, i, s)](#module_avec4.scale)
  - [.addScaled(a, i, b, j, s)](#module_avec4.addScaled)
  - [.multMat4(a, i, m, j)](#module_avec4.multMat4)
  - [.lerp(a, i, b, j, t)](#module_avec4.lerp)
  - [.toString(a, i, [precision])](#module_avec4.toString) ⇒ <code>string</code>

<a name="module_avec4.set4"></a>

### avec4.set4(a, i, x, y, z, w)

Sets a vector components.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec4</code>](#avec4) |
| i     | <code>number</code>          |
| x     | <code>number</code>          |
| y     | <code>number</code>          |
| z     | <code>number</code>          |
| w     | <code>number</code>          |

<a name="module_avec4.set"></a>

### avec4.set(a, i, b, j)

Sets a vector to another vector.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec4</code>](#avec4) |
| i     | <code>number</code>          |
| b     | [<code>avec4</code>](#avec4) |
| j     | <code>number</code>          |

<a name="module_avec4.equals"></a>

### avec4.equals(a, i, b, j) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec4</code>](#avec4) |
| i     | <code>number</code>          |
| b     | [<code>avec4</code>](#avec4) |
| j     | <code>number</code>          |

<a name="module_avec4.add"></a>

### avec4.add(a, i, b, j)

Adds a vector to another.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec4</code>](#avec4) |
| i     | <code>number</code>          |
| b     | [<code>avec4</code>](#avec4) |
| j     | <code>number</code>          |

<a name="module_avec4.sub"></a>

### avec4.sub(a, i, b, j)

Subtracts a vector from another.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec4</code>](#avec4) |
| i     | <code>number</code>          |
| b     | [<code>avec4</code>](#avec4) |
| j     | <code>number</code>          |

<a name="module_avec4.scale"></a>

### avec4.scale(a, i, s)

Scales a vector by a number.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec4</code>](#avec4) |
| i     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec4.addScaled"></a>

### avec4.addScaled(a, i, b, j, s)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec4</code>](#avec4) |
| i     | <code>number</code>          |
| b     | [<code>avec4</code>](#avec4) |
| j     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec4.multMat4"></a>

### avec4.multMat4(a, i, m, j)

Multiplies a vector with a matrix.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec4</code>](#avec4) |
| i     | <code>number</code>          |
| m     | [<code>amat4</code>](#amat4) |
| j     | <code>number</code>          |

<a name="module_avec4.lerp"></a>

### avec4.lerp(a, i, b, j, t)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>avec4</code>](#avec4) |
| i     | <code>number</code>          |
| b     | [<code>avec4</code>](#avec4) |
| j     | <code>number</code>          |
| t     | <code>number</code>          |

<a name="module_avec4.toString"></a>

### avec4.toString(a, i, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param       | Type                         | Default        |
| ----------- | ---------------------------- | -------------- |
| a           | [<code>avec4</code>](#avec4) |                |
| i           | <code>number</code>          |                |
| [precision] | <code>number</code>          | <code>4</code> |

<a name="module_euler"></a>

## euler

- [euler](#module_euler)
  - [.create()](#module_euler.create) ⇒ [<code>euler</code>](#euler)
  - [.fromQuat(a, q)](#module_euler.fromQuat) ⇒ [<code>euler</code>](#euler)

<a name="module_euler.create"></a>

### euler.create() ⇒ [<code>euler</code>](#euler)

Create a new euler angles [0, 0, 0]: vec3 array of [x, y, z] rotation [yaw, pitch, roll] in radians.

**Kind**: static method of [<code>euler</code>](#module_euler)
<a name="module_euler.fromQuat"></a>

### euler.fromQuat(a, q) ⇒ [<code>euler</code>](#euler)

Creates euler angles from quaternion. Assumes XYZ order of rotations.

**Kind**: static method of [<code>euler</code>](#module_euler)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>euler</code>](#euler) |
| q     | [<code>quat</code>](#quat)   |

<a name="module_index"></a>

## index

Re-export vec, avec, mat, quat, euler and utils

<a name="module_mat2x3"></a>

## mat2x3

- [mat2x3](#module_mat2x3)
  - [.create()](#module_mat2x3.create) ⇒ [<code>mat2x3</code>](#mat2x3)
  - [.identity(a)](#module_mat2x3.identity) ⇒ [<code>mat2x3</code>](#mat2x3)
  - [.copy(a)](#module_mat2x3.copy) ⇒ [<code>mat2x3</code>](#mat2x3)
  - [.set(a, b)](#module_mat2x3.set) ⇒ [<code>mat2x3</code>](#mat2x3)
  - [.equals(a, b)](#module_mat2x3.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_mat2x3.mult) ⇒ [<code>mat2x3</code>](#mat2x3)
  - [.translate(a, v)](#module_mat2x3.translate) ⇒ [<code>mat2x3</code>](#mat2x3)
  - [.rotate(a, rad)](#module_mat2x3.rotate) ⇒ [<code>mat2x3</code>](#mat2x3)
  - [.scale(a, v)](#module_mat2x3.scale) ⇒ [<code>mat2x3</code>](#mat2x3)

<a name="module_mat2x3.create"></a>

### mat2x3.create() ⇒ [<code>mat2x3</code>](#mat2x3)

Returns a 2x3 identity matrix, a short form for a 3x3 matrix with the last row ignored.

Row major memory layout:

```
0   1
2   3
4   5
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

### mat2x3.identity(a) ⇒ [<code>mat2x3</code>](#mat2x3)

Sets a matrix to the identity matrix.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>mat2x3</code>](#mat2x3) |

<a name="module_mat2x3.copy"></a>

### mat2x3.copy(a) ⇒ [<code>mat2x3</code>](#mat2x3)

Returns a copy of a matrix.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>mat2x3</code>](#mat2x3) |

<a name="module_mat2x3.set"></a>

### mat2x3.set(a, b) ⇒ [<code>mat2x3</code>](#mat2x3)

Sets a matrix from another matrix.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>mat2x3</code>](#mat2x3) |
| b     | [<code>mat2x3</code>](#mat2x3) |

<a name="module_mat2x3.equals"></a>

### mat2x3.equals(a, b) ⇒ <code>boolean</code>

Compares two matrices.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>mat2x3</code>](#mat2x3) |
| b     | [<code>mat2x3</code>](#mat2x3) |

<a name="module_mat2x3.mult"></a>

### mat2x3.mult(a, b) ⇒ [<code>mat2x3</code>](#mat2x3)

Multiplies two matrices.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>mat2x3</code>](#mat2x3) |
| b     | [<code>mat2x3</code>](#mat2x3) |

<a name="module_mat2x3.translate"></a>

### mat2x3.translate(a, v) ⇒ [<code>mat2x3</code>](#mat2x3)

Translates a matrix by a vector.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>mat2x3</code>](#mat2x3) |
| v     | [<code>vec2</code>](#vec2)     |

<a name="module_mat2x3.rotate"></a>

### mat2x3.rotate(a, rad) ⇒ [<code>mat2x3</code>](#mat2x3)

Rotates a matrix by an angle.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                             |
| ----- | -------------------------------- |
| a     | [<code>mat2x3</code>](#mat2x3)   |
| rad   | [<code>Radians</code>](#Radians) |

<a name="module_mat2x3.scale"></a>

### mat2x3.scale(a, v) ⇒ [<code>mat2x3</code>](#mat2x3)

Scales a matrix by a vector.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>mat2x3</code>](#mat2x3) |
| v     | [<code>vec2</code>](#vec2)     |

<a name="module_mat3"></a>

## mat3

- [mat3](#module_mat3)
  - [.create()](#module_mat3.create) ⇒ [<code>mat3</code>](#mat3)
  - [.identity(a)](#module_mat3.identity) ⇒ [<code>mat3</code>](#mat3)
  - [.copy(a)](#module_mat3.copy) ⇒ [<code>mat3</code>](#mat3)
  - [.set(a, b)](#module_mat3.set) ⇒ [<code>mat3</code>](#mat3)
  - [.equals(a, b)](#module_mat3.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_mat3.mult) ⇒ [<code>mat3</code>](#mat3)
  - [.transpose(a)](#module_mat3.transpose) ⇒ [<code>mat3</code>](#mat3)
  - [.fromQuat(a, q)](#module_mat3.fromQuat) ⇒ [<code>mat3</code>](#mat3)
  - [.fromMat2x3(a, b)](#module_mat3.fromMat2x3) ⇒ [<code>mat3</code>](#mat3)
  - [.fromMat4(a, b)](#module_mat3.fromMat4) ⇒ [<code>mat3</code>](#mat3)

<a name="module_mat3.create"></a>

### mat3.create() ⇒ [<code>mat3</code>](#mat3)

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

### mat3.identity(a) ⇒ [<code>mat3</code>](#mat3)

Sets a matrix to the identity matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat3</code>](#mat3) |

<a name="module_mat3.copy"></a>

### mat3.copy(a) ⇒ [<code>mat3</code>](#mat3)

Returns a copy of a matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat3</code>](#mat3) |

<a name="module_mat3.set"></a>

### mat3.set(a, b) ⇒ [<code>mat3</code>](#mat3)

Sets a matrix from another matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat3</code>](#mat3) |
| b     | [<code>mat3</code>](#mat3) |

<a name="module_mat3.equals"></a>

### mat3.equals(a, b) ⇒ <code>boolean</code>

Compares two matrices.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat3</code>](#mat3) |
| b     | [<code>mat3</code>](#mat3) |

<a name="module_mat3.mult"></a>

### mat3.mult(a, b) ⇒ [<code>mat3</code>](#mat3)

Multiplies two matrices.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat3</code>](#mat3) |
| b     | [<code>mat3</code>](#mat3) |

<a name="module_mat3.transpose"></a>

### mat3.transpose(a) ⇒ [<code>mat3</code>](#mat3)

Transposes a matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat3</code>](#mat3) |

<a name="module_mat3.fromQuat"></a>

### mat3.fromQuat(a, q) ⇒ [<code>mat3</code>](#mat3)

Sets matrix to a quaternion.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat3</code>](#mat3) |
| q     | [<code>quat</code>](#quat) |

<a name="module_mat3.fromMat2x3"></a>

### mat3.fromMat2x3(a, b) ⇒ [<code>mat3</code>](#mat3)

Sets a 3x3 matrix from a 2x3 matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>mat3</code>](#mat3)     |
| b     | [<code>mat2x3</code>](#mat2x3) |

<a name="module_mat3.fromMat4"></a>

### mat3.fromMat4(a, b) ⇒ [<code>mat3</code>](#mat3)

Sets a 3x3 matrix to a 4x4 matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat3</code>](#mat3) |
| b     | [<code>mat4</code>](#mat4) |

<a name="module_mat4"></a>

## mat4

- [mat4](#module_mat4)
  - [.create()](#module_mat4.create) ⇒ [<code>mat4</code>](#mat4)
  - [.identity(a)](#module_mat4.identity) ⇒ [<code>mat4</code>](#mat4)
  - [.copy(a)](#module_mat4.copy) ⇒ [<code>mat4</code>](#mat4)
  - [.set(a, b)](#module_mat4.set) ⇒ [<code>mat4</code>](#mat4)
  - [.equals(a, b)](#module_mat4.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_mat4.mult) ⇒ [<code>mat4</code>](#mat4)
  - [.invert(a)](#module_mat4.invert) ⇒ [<code>mat4</code>](#mat4)
  - [.transpose(a)](#module_mat4.transpose) ⇒ [<code>mat4</code>](#mat4)
  - [.translate(a, v)](#module_mat4.translate) ⇒ [<code>mat4</code>](#mat4)
  - [.rotate(a, r, v)](#module_mat4.rotate) ⇒ [<code>mat4</code>](#mat4)
  - [.scale(a, v)](#module_mat4.scale) ⇒ [<code>mat4</code>](#mat4)
  - [.fromQuat(a, q)](#module_mat4.fromQuat) ⇒ [<code>mat4</code>](#mat4)
  - [.fromTranslationRotationScale(a, v, q, s)](#module_mat4.fromTranslationRotationScale) ⇒ [<code>mat4</code>](#mat4)
  - [.fromMat3(a, b)](#module_mat4.fromMat3) ⇒ [<code>mat4</code>](#mat4)
  - [.frustum(a, left, right, bottom, top, near, far)](#module_mat4.frustum) ⇒ [<code>mat4</code>](#mat4)
  - [.perspective(a, fovy, aspectRatio, near, far)](#module_mat4.perspective) ⇒ [<code>mat4</code>](#mat4)
  - [.ortho(a, left, right, bottom, top, near, far)](#module_mat4.ortho) ⇒ [<code>mat4</code>](#mat4)
  - [.lookAt(a, from, to, [up])](#module_mat4.lookAt) ⇒ [<code>mat4</code>](#mat4)
  - [.targetTo(a, from, to, [up])](#module_mat4.targetTo) ⇒ [<code>mat4</code>](#mat4)

<a name="module_mat4.create"></a>

### mat4.create() ⇒ [<code>mat4</code>](#mat4)

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

### mat4.identity(a) ⇒ [<code>mat4</code>](#mat4)

Sets a matrix to the identity matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |

<a name="module_mat4.copy"></a>

### mat4.copy(a) ⇒ [<code>mat4</code>](#mat4)

Returns a copy of a matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |

<a name="module_mat4.set"></a>

### mat4.set(a, b) ⇒ [<code>mat4</code>](#mat4)

Sets a matrix from another matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |
| b     | [<code>mat4</code>](#mat4) |

<a name="module_mat4.equals"></a>

### mat4.equals(a, b) ⇒ <code>boolean</code>

Compares two matrices.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |
| b     | [<code>mat4</code>](#mat4) |

<a name="module_mat4.mult"></a>

### mat4.mult(a, b) ⇒ [<code>mat4</code>](#mat4)

Multiplies two matrices.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |
| b     | [<code>mat4</code>](#mat4) |

<a name="module_mat4.invert"></a>

### mat4.invert(a) ⇒ [<code>mat4</code>](#mat4)

Inverts a matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |

<a name="module_mat4.transpose"></a>

### mat4.transpose(a) ⇒ [<code>mat4</code>](#mat4)

Transposes a matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |

<a name="module_mat4.translate"></a>

### mat4.translate(a, v) ⇒ [<code>mat4</code>](#mat4)

Translates a matrix by a vector.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |
| v     | [<code>vec3</code>](#vec3) |

<a name="module_mat4.rotate"></a>

### mat4.rotate(a, r, v) ⇒ [<code>mat4</code>](#mat4)

Rotates a matrix by an angle at an axis.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                             |
| ----- | -------------------------------- |
| a     | [<code>mat4</code>](#mat4)       |
| r     | [<code>Radians</code>](#Radians) |
| v     | [<code>vec3</code>](#vec3)       |

<a name="module_mat4.scale"></a>

### mat4.scale(a, v) ⇒ [<code>mat4</code>](#mat4)

Scales a matrix by a vector.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |
| v     | [<code>vec3</code>](#vec3) |

<a name="module_mat4.fromQuat"></a>

### mat4.fromQuat(a, q) ⇒ [<code>mat4</code>](#mat4)

Sets a matrix to a quaternion.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |
| q     | [<code>quat</code>](#quat) |

<a name="module_mat4.fromTranslationRotationScale"></a>

### mat4.fromTranslationRotationScale(a, v, q, s) ⇒ [<code>mat4</code>](#mat4)

Sets a matrix to the TRS matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |
| v     | [<code>vec3</code>](#vec3) |
| q     | [<code>quat</code>](#quat) |
| s     | [<code>vec3</code>](#vec3) |

<a name="module_mat4.fromMat3"></a>

### mat4.fromMat3(a, b) ⇒ [<code>mat4</code>](#mat4)

Sets a 4x4 matrix to a 3x3 matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>mat4</code>](#mat4) |
| b     | [<code>mat3</code>](#mat3) |

<a name="module_mat4.frustum"></a>

### mat4.frustum(a, left, right, bottom, top, near, far) ⇒ [<code>mat4</code>](#mat4)

Creates a frustum matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param  | Type                       |
| ------ | -------------------------- |
| a      | [<code>mat4</code>](#mat4) |
| left   | <code>number</code>        |
| right  | <code>number</code>        |
| bottom | <code>number</code>        |
| top    | <code>number</code>        |
| near   | <code>number</code>        |
| far    | <code>number</code>        |

<a name="module_mat4.perspective"></a>

### mat4.perspective(a, fovy, aspectRatio, near, far) ⇒ [<code>mat4</code>](#mat4)

Creates a perspective matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param       | Type                             |
| ----------- | -------------------------------- |
| a           | [<code>mat4</code>](#mat4)       |
| fovy        | [<code>Radians</code>](#Radians) |
| aspectRatio | <code>number</code>              |
| near        | <code>number</code>              |
| far         | <code>number</code>              |

<a name="module_mat4.ortho"></a>

### mat4.ortho(a, left, right, bottom, top, near, far) ⇒ [<code>mat4</code>](#mat4)

Creates an orthographic matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param  | Type                       |
| ------ | -------------------------- |
| a      | [<code>mat4</code>](#mat4) |
| left   | <code>number</code>        |
| right  | <code>number</code>        |
| bottom | <code>number</code>        |
| top    | <code>number</code>        |
| near   | <code>number</code>        |
| far    | <code>number</code>        |

<a name="module_mat4.lookAt"></a>

### mat4.lookAt(a, from, to, [up]) ⇒ [<code>mat4</code>](#mat4)

Calculates a lookAt matrix from position, target and up vectors.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       | Default           |
| ----- | -------------------------- | ----------------- |
| a     | [<code>mat4</code>](#mat4) |                   |
| from  | [<code>vec3</code>](#vec3) |                   |
| to    | [<code>vec3</code>](#vec3) |                   |
| [up]  | [<code>vec3</code>](#vec3) | <code>Y_UP</code> |

<a name="module_mat4.targetTo"></a>

### mat4.targetTo(a, from, to, [up]) ⇒ [<code>mat4</code>](#mat4)

Sets a matrix from a vector to another.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       | Default           |
| ----- | -------------------------- | ----------------- |
| a     | [<code>mat4</code>](#mat4) |                   |
| from  | [<code>vec3</code>](#vec3) |                   |
| to    | [<code>vec3</code>](#vec3) |                   |
| [up]  | [<code>vec3</code>](#vec3) | <code>Y_UP</code> |

<a name="module_quat"></a>

## quat

- [quat](#module_quat)
  - [.set](#module_quat.set) ⇒ [<code>quat</code>](#quat)
  - [.equals](#module_quat.equals) ⇒ <code>boolean</code>
  - [.fromTo](#module_quat.fromTo) ⇒ [<code>quat</code>](#quat)
  - [.toString](#module_quat.toString) ⇒ [<code>quat</code>](#quat)
  - [.create()](#module_quat.create) ⇒ [<code>quat</code>](#quat)
  - [.identity(a)](#module_quat.identity) ⇒ [<code>quat</code>](#quat)
  - [.copy(a)](#module_quat.copy) ⇒ [<code>quat</code>](#quat)
  - [.mult(a, b)](#module_quat.mult) ⇒ [<code>quat</code>](#quat)
  - [.invert(a)](#module_quat.invert) ⇒ [<code>quat</code>](#quat)
  - [.conjugate(a)](#module_quat.conjugate) ⇒ [<code>quat</code>](#quat)
  - [.length(a)](#module_quat.length) ⇒ [<code>quat</code>](#quat)
  - [.normalize(a)](#module_quat.normalize) ⇒ [<code>quat</code>](#quat)
  - [.dot(a, b)](#module_quat.dot) ⇒ [<code>quat</code>](#quat)
  - [.fromEuler(a, e)](#module_quat.fromEuler) ⇒ [<code>quat</code>](#quat)
  - [.fromAxisAngle(a, v, r)](#module_quat.fromAxisAngle) ⇒ [<code>quat</code>](#quat)
  - [.fromAxes(a, x, y, z)](#module_quat.fromAxes) ⇒ [<code>quat</code>](#quat)
  - [.fromMat3(a, m)](#module_quat.fromMat3) ⇒ [<code>quat</code>](#quat)
  - [.fromMat4(a, m)](#module_quat.fromMat4) ⇒ [<code>quat</code>](#quat)
  - [.targetTo(a, eye, target, [up])](#module_quat.targetTo) ⇒ [<code>quat</code>](#quat)
  - [.slerp(a, b, t)](#module_quat.slerp) ⇒ [<code>quat</code>](#quat)

<a name="module_quat.set"></a>

### quat.set ⇒ [<code>quat</code>](#quat)

Sets a quaternion to another quaternion.

**Kind**: static constant of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |
| b     | [<code>quat</code>](#quat) |

<a name="module_quat.equals"></a>

### quat.equals ⇒ <code>boolean</code>

Compares two quaternions.

**Kind**: static constant of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |
| b     | [<code>quat</code>](#quat) |

<a name="module_quat.fromTo"></a>

### quat.fromTo ⇒ [<code>quat</code>](#quat)

Sets a quaternion to represent the shortest rotation from one vector to another.

**Kind**: static constant of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |
| v     | [<code>vec3</code>](#vec3) |
| w     | [<code>vec3</code>](#vec3) |

<a name="module_quat.toString"></a>

### quat.toString ⇒ [<code>quat</code>](#quat)

Prints a quaternion to a string.

**Kind**: static constant of [<code>quat</code>](#module_quat)

| Param     | Type                       |
| --------- | -------------------------- |
| a         | [<code>quat</code>](#quat) |
| precision | <code>number</code>        |

<a name="module_quat.create"></a>

### quat.create() ⇒ [<code>quat</code>](#quat)

Returns a new quat at 0, 0, 0, 1.

**Kind**: static method of [<code>quat</code>](#module_quat)
<a name="module_quat.identity"></a>

### quat.identity(a) ⇒ [<code>quat</code>](#quat)

Sets a quaternion to the identity quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |

<a name="module_quat.copy"></a>

### quat.copy(a) ⇒ [<code>quat</code>](#quat)

Returns a copy of a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |

<a name="module_quat.mult"></a>

### quat.mult(a, b) ⇒ [<code>quat</code>](#quat)

Multiplies one quaternion by another.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |
| b     | [<code>quat</code>](#quat) |

<a name="module_quat.invert"></a>

### quat.invert(a) ⇒ [<code>quat</code>](#quat)

Inverts a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |

<a name="module_quat.conjugate"></a>

### quat.conjugate(a) ⇒ [<code>quat</code>](#quat)

Conjugates a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |

<a name="module_quat.length"></a>

### quat.length(a) ⇒ [<code>quat</code>](#quat)

Calculates the length of a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |

<a name="module_quat.normalize"></a>

### quat.normalize(a) ⇒ [<code>quat</code>](#quat)

Normalizes a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |

<a name="module_quat.dot"></a>

### quat.dot(a, b) ⇒ [<code>quat</code>](#quat)

Calculates the dot product of two quaternions.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |
| b     | [<code>quat</code>](#quat) |

<a name="module_quat.fromEuler"></a>

### quat.fromEuler(a, e) ⇒ [<code>quat</code>](#quat)

Set euler angles to a quaternion. Assumes XYZ rotation order.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>quat</code>](#quat)   |
| e     | [<code>euler</code>](#euler) |

<a name="module_quat.fromAxisAngle"></a>

### quat.fromAxisAngle(a, v, r) ⇒ [<code>quat</code>](#quat)

Set the angle at an axis of a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                             |
| ----- | -------------------------------- |
| a     | [<code>quat</code>](#quat)       |
| v     | [<code>vec3</code>](#vec3)       |
| r     | [<code>Radians</code>](#Radians) |

<a name="module_quat.fromAxes"></a>

### quat.fromAxes(a, x, y, z) ⇒ [<code>quat</code>](#quat)

Sets a quaternion from orthonormal base xyz.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |
| x     | [<code>vec3</code>](#vec3) |
| y     | [<code>vec3</code>](#vec3) |
| z     | [<code>vec3</code>](#vec3) |

<a name="module_quat.fromMat3"></a>

### quat.fromMat3(a, m) ⇒ [<code>quat</code>](#quat)

Sets a quaternion to a 3x3 matrix.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |
| m     | [<code>mat3</code>](#mat3) |

<a name="module_quat.fromMat4"></a>

### quat.fromMat4(a, m) ⇒ [<code>quat</code>](#quat)

Sets a quaternion to a 4x4 matrix.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |
| m     | [<code>mat4</code>](#mat4) |

<a name="module_quat.targetTo"></a>

### quat.targetTo(a, eye, target, [up]) ⇒ [<code>quat</code>](#quat)

Sets a quaternion from a vector to another.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param  | Type                       | Default           |
| ------ | -------------------------- | ----------------- |
| a      | [<code>quat</code>](#quat) |                   |
| eye    | [<code>vec3</code>](#vec3) |                   |
| target | [<code>vec3</code>](#vec3) |                   |
| [up]   | [<code>vec3</code>](#vec3) | <code>Y_UP</code> |

<a name="module_quat.slerp"></a>

### quat.slerp(a, b, t) ⇒ [<code>quat</code>](#quat)

Spherical linear interpolates between two quaternions.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>quat</code>](#quat) |
| b     | [<code>quat</code>](#quat) |
| t     | <code>number</code>        |

<a name="module_utils"></a>

## utils

- [utils](#module_utils)
  - [.EPSILON](#module_utils.EPSILON) : <code>number</code>
  - [.Y_UP](#module_utils.Y_UP) : [<code>vec3</code>](#vec3)
  - [.lerp(a, b, t)](#module_utils.lerp) ⇒ <code>number</code>
  - [.clamp(n, min, max)](#module_utils.clamp) ⇒ <code>number</code>
  - [.smoothstep(n, min, max)](#module_utils.smoothstep) ⇒ <code>number</code>
  - [.map(n, inStart, inEnd, outStart, outEnd)](#module_utils.map) ⇒ <code>number</code>
  - [.toRadians(degrees)](#module_utils.toRadians) ⇒ [<code>Radians</code>](#Radians)
  - [.toDegrees(radians)](#module_utils.toDegrees) ⇒ [<code>Degrees</code>](#Degrees)
  - [.isPowerOfTwo(a)](#module_utils.isPowerOfTwo) ⇒ <code>boolean</code>
  - [.nextPowerOfTwo(n)](#module_utils.nextPowerOfTwo) ⇒ <code>number</code>
  - [.prevPowerOfTwo(n)](#module_utils.prevPowerOfTwo) ⇒ <code>number</code>

<a name="module_utils.EPSILON"></a>

### utils.EPSILON : <code>number</code>

**Kind**: static constant of [<code>utils</code>](#module_utils)
<a name="module_utils.Y_UP"></a>

### utils.Y_UP : [<code>vec3</code>](#vec3)

**Kind**: static constant of [<code>utils</code>](#module_utils)
<a name="module_utils.lerp"></a>

### utils.lerp(a, b, t) ⇒ <code>number</code>

Linear interpolation between two numbers.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param | Type                |
| ----- | ------------------- |
| a     | <code>number</code> |
| b     | <code>number</code> |
| t     | <code>number</code> |

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

### utils.toRadians(degrees) ⇒ [<code>Radians</code>](#Radians)

Transforms degrees into radians.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param   | Type                             |
| ------- | -------------------------------- |
| degrees | [<code>Degrees</code>](#Degrees) |

<a name="module_utils.toDegrees"></a>

### utils.toDegrees(radians) ⇒ [<code>Degrees</code>](#Degrees)

Transforms radians into degrees.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param   | Type                             |
| ------- | -------------------------------- |
| radians | [<code>Radians</code>](#Radians) |

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

<a name="module_utils.prevPowerOfTwo"></a>

### utils.prevPowerOfTwo(n) ⇒ <code>number</code>

Returns the previous power of two.

**Kind**: static method of [<code>utils</code>](#module_utils)

| Param | Type                |
| ----- | ------------------- |
| n     | <code>number</code> |

<a name="module_vec2"></a>

## vec2

- [vec2](#module_vec2)
  - [.create()](#module_vec2.create) ⇒ [<code>vec2</code>](#vec2)
  - [.copy(a)](#module_vec2.copy) ⇒ [<code>vec2</code>](#vec2)
  - [.set(a, b)](#module_vec2.set) ⇒ [<code>vec2</code>](#vec2)
  - [.equals(a, b)](#module_vec2.equals) ⇒ <code>boolean</code>
  - [.add(a, b)](#module_vec2.add) ⇒ [<code>vec2</code>](#vec2)
  - [.sub(a, b)](#module_vec2.sub) ⇒ [<code>vec2</code>](#vec2)
  - [.scale(a, s)](#module_vec2.scale) ⇒ [<code>vec2</code>](#vec2)
  - [.addScaled(a, b, s)](#module_vec2.addScaled) ⇒ [<code>vec2</code>](#vec2)
  - [.dot(a, b)](#module_vec2.dot) ⇒ <code>number</code>
  - [.length(a)](#module_vec2.length) ⇒ <code>number</code>
  - [.lengthSq(a)](#module_vec2.lengthSq) ⇒ <code>number</code>
  - [.normalize(a)](#module_vec2.normalize) ⇒ [<code>vec2</code>](#vec2)
  - [.distance(a, b)](#module_vec2.distance) ⇒ <code>number</code>
  - [.distanceSq(a, b)](#module_vec2.distanceSq) ⇒ <code>number</code>
  - [.limit(a, len)](#module_vec2.limit) ⇒ [<code>vec2</code>](#vec2)
  - [.lerp(a, b, t)](#module_vec2.lerp) ⇒ [<code>vec2</code>](#vec2)
  - [.toString(a, [precision])](#module_vec2.toString) ⇒ <code>string</code>

<a name="module_vec2.create"></a>

### vec2.create() ⇒ [<code>vec2</code>](#vec2)

Returns a new vec2 at 0, 0, 0.

**Kind**: static method of [<code>vec2</code>](#module_vec2)
<a name="module_vec2.copy"></a>

### vec2.copy(a) ⇒ [<code>vec2</code>](#vec2)

Returns a copy of a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.set"></a>

### vec2.set(a, b) ⇒ [<code>vec2</code>](#vec2)

Sets a vector to another vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| b     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.equals"></a>

### vec2.equals(a, b) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| b     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.add"></a>

### vec2.add(a, b) ⇒ [<code>vec2</code>](#vec2)

Add a vector to another.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| b     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.sub"></a>

### vec2.sub(a, b) ⇒ [<code>vec2</code>](#vec2)

Subtracts a vector from another.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| b     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.scale"></a>

### vec2.scale(a, s) ⇒ [<code>vec2</code>](#vec2)

Scales a vector by a number.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| s     | <code>number</code>        |

<a name="module_vec2.addScaled"></a>

### vec2.addScaled(a, b, s) ⇒ [<code>vec2</code>](#vec2)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| b     | [<code>vec2</code>](#vec2) |
| s     | <code>number</code>        |

<a name="module_vec2.dot"></a>

### vec2.dot(a, b) ⇒ <code>number</code>

Calculates the dot product of two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| b     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.length"></a>

### vec2.length(a) ⇒ <code>number</code>

Calculates the length of a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.lengthSq"></a>

### vec2.lengthSq(a) ⇒ <code>number</code>

Calculates the squared length of a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.normalize"></a>

### vec2.normalize(a) ⇒ [<code>vec2</code>](#vec2)

Normalises a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.distance"></a>

### vec2.distance(a, b) ⇒ <code>number</code>

Calculates the distance between two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| b     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.distanceSq"></a>

### vec2.distanceSq(a, b) ⇒ <code>number</code>

Calculates the squared distance between two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| b     | [<code>vec2</code>](#vec2) |

<a name="module_vec2.limit"></a>

### vec2.limit(a, len) ⇒ [<code>vec2</code>](#vec2)

Limits a vector to a length.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| len   | <code>number</code>        |

<a name="module_vec2.lerp"></a>

### vec2.lerp(a, b, t) ⇒ [<code>vec2</code>](#vec2)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec2</code>](#vec2) |
| b     | [<code>vec2</code>](#vec2) |
| t     | <code>number</code>        |

<a name="module_vec2.toString"></a>

### vec2.toString(a, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param       | Type                       | Default        |
| ----------- | -------------------------- | -------------- |
| a           | [<code>vec2</code>](#vec2) |                |
| [precision] | <code>number</code>        | <code>4</code> |

<a name="module_vec3"></a>

## vec3

- [vec3](#module_vec3)
  - [.create()](#module_vec3.create) ⇒ [<code>vec3</code>](#vec3)
  - [.copy(a)](#module_vec3.copy) ⇒ [<code>vec3</code>](#vec3)
  - [.set(a, b)](#module_vec3.set) ⇒ [<code>vec3</code>](#vec3)
  - [.equals(a, b)](#module_vec3.equals) ⇒ <code>boolean</code>
  - [.add(a, b)](#module_vec3.add) ⇒ [<code>vec3</code>](#vec3)
  - [.sub(a, b)](#module_vec3.sub) ⇒ [<code>vec3</code>](#vec3)
  - [.scale(a, s)](#module_vec3.scale) ⇒ [<code>vec3</code>](#vec3)
  - [.addScaled(a, b, s)](#module_vec3.addScaled) ⇒ [<code>vec3</code>](#vec3)
  - [.multMat4(a, m)](#module_vec3.multMat4) ⇒ [<code>vec3</code>](#vec3)
  - [.multQuat(a, q)](#module_vec3.multQuat) ⇒ [<code>vec3</code>](#vec3)
  - [.dot(a, b)](#module_vec3.dot) ⇒ <code>number</code>
  - [.cross(a, b)](#module_vec3.cross) ⇒ [<code>vec3</code>](#vec3)
  - [.length(a)](#module_vec3.length) ⇒ <code>number</code>
  - [.lengthSq(a)](#module_vec3.lengthSq) ⇒ <code>number</code>
  - [.normalize(a)](#module_vec3.normalize) ⇒ [<code>vec3</code>](#vec3)
  - [.distance(a, b)](#module_vec3.distance) ⇒ <code>number</code>
  - [.distanceSq(a, b)](#module_vec3.distanceSq) ⇒ <code>number</code>
  - [.limit(a, len)](#module_vec3.limit) ⇒ [<code>vec3</code>](#vec3)
  - [.lerp(a, b, t)](#module_vec3.lerp) ⇒ [<code>vec3</code>](#vec3)
  - [.toString(a, [precision])](#module_vec3.toString) ⇒ <code>string</code>

<a name="module_vec3.create"></a>

### vec3.create() ⇒ [<code>vec3</code>](#vec3)

Returns a new vec3 at 0, 0, 0.

**Kind**: static method of [<code>vec3</code>](#module_vec3)
<a name="module_vec3.copy"></a>

### vec3.copy(a) ⇒ [<code>vec3</code>](#vec3)

Returns a copy of a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.set"></a>

### vec3.set(a, b) ⇒ [<code>vec3</code>](#vec3)

Sets a vector to another vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.equals"></a>

### vec3.equals(a, b) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.add"></a>

### vec3.add(a, b) ⇒ [<code>vec3</code>](#vec3)

Adds a vector to another.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.sub"></a>

### vec3.sub(a, b) ⇒ [<code>vec3</code>](#vec3)

Subtracts a vector from another.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.scale"></a>

### vec3.scale(a, s) ⇒ [<code>vec3</code>](#vec3)

Scales a vector by a number.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| s     | <code>number</code>        |

<a name="module_vec3.addScaled"></a>

### vec3.addScaled(a, b, s) ⇒ [<code>vec3</code>](#vec3)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |
| s     | <code>number</code>        |

<a name="module_vec3.multMat4"></a>

### vec3.multMat4(a, m) ⇒ [<code>vec3</code>](#vec3)

Multiplies a vector by a matrix.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| m     | [<code>mat4</code>](#mat4) |

<a name="module_vec3.multQuat"></a>

### vec3.multQuat(a, q) ⇒ [<code>vec3</code>](#vec3)

Multiplies a vector by a quaternion.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| q     | [<code>quat</code>](#quat) |

<a name="module_vec3.dot"></a>

### vec3.dot(a, b) ⇒ <code>number</code>

Calculates the dot product of two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.cross"></a>

### vec3.cross(a, b) ⇒ [<code>vec3</code>](#vec3)

Calculates the cross product of two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.length"></a>

### vec3.length(a) ⇒ <code>number</code>

Calculates the length of a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.lengthSq"></a>

### vec3.lengthSq(a) ⇒ <code>number</code>

Calculates the squared length of a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.normalize"></a>

### vec3.normalize(a) ⇒ [<code>vec3</code>](#vec3)

Normalises a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.distance"></a>

### vec3.distance(a, b) ⇒ <code>number</code>

Calculates the distance between two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.distanceSq"></a>

### vec3.distanceSq(a, b) ⇒ <code>number</code>

Calculates the squared distance between two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |

<a name="module_vec3.limit"></a>

### vec3.limit(a, len) ⇒ [<code>vec3</code>](#vec3)

Limits a vector to a length.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| len   | <code>number</code>        |

<a name="module_vec3.lerp"></a>

### vec3.lerp(a, b, t) ⇒ [<code>vec3</code>](#vec3)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec3</code>](#vec3) |
| b     | [<code>vec3</code>](#vec3) |
| t     | <code>number</code>        |

<a name="module_vec3.toString"></a>

### vec3.toString(a, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param       | Type                       | Default        |
| ----------- | -------------------------- | -------------- |
| a           | [<code>vec3</code>](#vec3) |                |
| [precision] | <code>number</code>        | <code>4</code> |

<a name="module_vec4"></a>

## vec4

- [vec4](#module_vec4)
  - [.create()](#module_vec4.create) ⇒ [<code>vec4</code>](#vec4)
  - [.copy(a)](#module_vec4.copy) ⇒ [<code>vec4</code>](#vec4)
  - [.set(a, b)](#module_vec4.set) ⇒ [<code>vec4</code>](#vec4)
  - [.equals(a, b)](#module_vec4.equals) ⇒ <code>boolean</code>
  - [.add(a, b)](#module_vec4.add) ⇒ [<code>vec4</code>](#vec4)
  - [.sub(a, b)](#module_vec4.sub) ⇒ [<code>vec4</code>](#vec4)
  - [.scale(a, s)](#module_vec4.scale) ⇒ [<code>vec4</code>](#vec4)
  - [.addScaled(a, b, s)](#module_vec4.addScaled) ⇒ [<code>vec4</code>](#vec4)
  - [.fromVec3(a, b)](#module_vec4.fromVec3) ⇒ [<code>vec4</code>](#vec4)
  - [.multMat4(a, m)](#module_vec4.multMat4) ⇒ [<code>vec4</code>](#vec4)
  - [.lerp(a, b, t)](#module_vec4.lerp) ⇒ [<code>vec4</code>](#vec4)
  - [.toString(a, [precision])](#module_vec4.toString) ⇒ <code>string</code>

<a name="module_vec4.create"></a>

### vec4.create() ⇒ [<code>vec4</code>](#vec4)

Returns a new vec4 at 0, 0, 0, 1.

**Kind**: static method of [<code>vec4</code>](#module_vec4)
<a name="module_vec4.copy"></a>

### vec4.copy(a) ⇒ [<code>vec4</code>](#vec4)

Returns a copy of a vector.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |

<a name="module_vec4.set"></a>

### vec4.set(a, b) ⇒ [<code>vec4</code>](#vec4)

Sets a vector to another vector.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |
| b     | [<code>vec4</code>](#vec4) |

<a name="module_vec4.equals"></a>

### vec4.equals(a, b) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |
| b     | [<code>vec4</code>](#vec4) |

<a name="module_vec4.add"></a>

### vec4.add(a, b) ⇒ [<code>vec4</code>](#vec4)

Adds a vector to another.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |
| b     | [<code>vec4</code>](#vec4) |

<a name="module_vec4.sub"></a>

### vec4.sub(a, b) ⇒ [<code>vec4</code>](#vec4)

Subtracts a vector from another.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |
| b     | [<code>vec4</code>](#vec4) |

<a name="module_vec4.scale"></a>

### vec4.scale(a, s) ⇒ [<code>vec4</code>](#vec4)

Scales a vector by a number.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |
| s     | <code>number</code>        |

<a name="module_vec4.addScaled"></a>

### vec4.addScaled(a, b, s) ⇒ [<code>vec4</code>](#vec4)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |
| b     | [<code>vec4</code>](#vec4) |
| s     | <code>number</code>        |

<a name="module_vec4.fromVec3"></a>

### vec4.fromVec3(a, b) ⇒ [<code>vec4</code>](#vec4)

Create a vec4 from vec3.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |
| b     | [<code>vec3</code>](#vec3) |

<a name="module_vec4.multMat4"></a>

### vec4.multMat4(a, m) ⇒ [<code>vec4</code>](#vec4)

Multiplies a vector with a matrix.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |
| m     | [<code>mat4</code>](#mat4) |

<a name="module_vec4.lerp"></a>

### vec4.lerp(a, b, t) ⇒ [<code>vec4</code>](#vec4)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>vec4</code>](#vec4) |
| b     | [<code>vec4</code>](#vec4) |
| t     | <code>number</code>        |

<a name="module_vec4.toString"></a>

### vec4.toString(a, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param       | Type                       | Default        |
| ----------- | -------------------------- | -------------- |
| a           | [<code>vec4</code>](#vec4) |                |
| [precision] | <code>number</code>        | <code>4</code> |

<a name="TypedArray"></a>

## TypedArray : <code>Int8Array</code> \| <code>Uint8Array</code> \| <code>Uint8ClampedArray</code> \| <code>Int16Array</code> \| <code>Uint16Array</code> \| <code>Int32Array</code> \| <code>Uint32Array</code> \| <code>Float32Array</code> \| <code>Float64Array</code> \| <code>BigInt64Array</code> \| <code>BigUint64Array</code>

**Kind**: global typedef
<a name="avec4"></a>

## avec4 : [<code>TypedArray</code>](#TypedArray)

**Kind**: global typedef
<a name="avec3"></a>

## avec3 : [<code>TypedArray</code>](#TypedArray)

**Kind**: global typedef
<a name="amat4"></a>

## amat4 : [<code>TypedArray</code>](#TypedArray)

**Kind**: global typedef
<a name="aquat"></a>

## aquat : [<code>TypedArray</code>](#TypedArray)

**Kind**: global typedef
<a name="euler"></a>

## euler : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="mat2x3"></a>

## mat2x3 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="mat3"></a>

## mat3 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="mat4"></a>

## mat4 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="quat"></a>

## quat : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="vec2"></a>

## vec2 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="vec3"></a>

## vec3 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="vec4"></a>

## vec4 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="Degrees"></a>

## Degrees : <code>number</code>

**Kind**: global typedef
<a name="Radians"></a>

## Radians : <code>number</code>

**Kind**: global typedef

<!-- api-end -->

## License

MIT. See [license file](https://github.com/pex-gl/pex-math/blob/main/LICENSE.md).
