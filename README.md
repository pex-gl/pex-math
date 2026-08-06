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
<dt><a href="#module_pex-math">pex-math</a></dt>
<dd></dd>
<dt><a href="#module_avec2">avec2</a></dt>
<dd></dd>
<dt><a href="#module_avec3">avec3</a></dt>
<dd></dd>
<dt><a href="#module_avec4">avec4</a></dt>
<dd></dd>
<dt><a href="#module_eases">eases</a></dt>
<dd></dd>
<dt><a href="#module_euler">euler</a></dt>
<dd></dd>
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
<dt><a href="#TypedArray">TypedArray</a> : <code>Int8Array</code> | <code>Uint8Array</code> | <code>Uint8ClampedArray</code> | <code>Int16Array</code> | <code>Uint16Array</code> | <code>Int32Array</code> | <code>Uint32Array</code> | <code>Float16Array</code> | <code>Float32Array</code> | <code>Float64Array</code> | <code>BigInt64Array</code> | <code>BigUint64Array</code></dt>
<dd></dd>
<dt><a href="#AVec2">AVec2</a> : <code><a href="#TypedArray">TypedArray</a></code></dt>
<dd></dd>
<dt><a href="#AVec3">AVec3</a> : <code><a href="#TypedArray">TypedArray</a></code></dt>
<dd></dd>
<dt><a href="#AVec4">AVec4</a> : <code><a href="#TypedArray">TypedArray</a></code></dt>
<dd></dd>
<dt><a href="#AMat4">AMat4</a> : <code><a href="#TypedArray">TypedArray</a></code></dt>
<dd></dd>
<dt><a href="#AQuat">AQuat</a> : <code><a href="#TypedArray">TypedArray</a></code></dt>
<dd></dd>
<dt><a href="#Euler">Euler</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#Mat2x3">Mat2x3</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#Mat3">Mat3</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#Mat4">Mat4</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#Quat">Quat</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#Vec2">Vec2</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#Vec3">Vec3</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#Vec4">Vec4</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#Degrees">Degrees</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#Radians">Radians</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#iterativeCallback">iterativeCallback</a> : <code>function</code></dt>
<dd><p>Callback for iterating typed arrays.</p>
</dd>
<dt><a href="#easeFn">easeFn</a> ⇒ <code>number</code></dt>
<dd><p>Ease functions signature.</p>
</dd>
<dt><a href="#easeStepFn">easeStepFn</a> ⇒ <code>number</code></dt>
<dd><p>Ease step functions signature.</p>
</dd>
</dl>

<a name="module_pex-math"></a>

## pex-math

- [pex-math](#module_pex-math)
  - [.mat2x3](#module_pex-math.mat2x3) : [<code>mat2x3</code>](#module_mat2x3)
  - [.mat3](#module_pex-math.mat3) : [<code>mat3</code>](#module_mat3)
  - [.mat4](#module_pex-math.mat4) : [<code>mat4</code>](#module_mat4)
  - [.vec2](#module_pex-math.vec2) : [<code>vec2</code>](#module_vec2)
  - [.vec3](#module_pex-math.vec3) : [<code>vec3</code>](#module_vec3)
  - [.vec4](#module_pex-math.vec4) : [<code>vec4</code>](#module_vec4)
  - [.avec2](#module_pex-math.avec2) : [<code>avec2</code>](#module_avec2)
  - [.avec3](#module_pex-math.avec3) : [<code>avec3</code>](#module_avec3)
  - [.avec4](#module_pex-math.avec4) : [<code>avec4</code>](#module_avec4)
  - [.quat](#module_pex-math.quat) : [<code>quat</code>](#module_quat)
  - [.euler](#module_pex-math.euler) : [<code>euler</code>](#module_euler)
  - [.eases](#module_pex-math.eases) : [<code>eases</code>](#module_eases)
  - [.utils](#module_pex-math.utils) : [<code>utils</code>](#module_utils)

<a name="module_pex-math.mat2x3"></a>

### pex-math.mat2x3 : [<code>mat2x3</code>](#module_mat2x3)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.mat3"></a>

### pex-math.mat3 : [<code>mat3</code>](#module_mat3)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.mat4"></a>

### pex-math.mat4 : [<code>mat4</code>](#module_mat4)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.vec2"></a>

### pex-math.vec2 : [<code>vec2</code>](#module_vec2)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.vec3"></a>

### pex-math.vec3 : [<code>vec3</code>](#module_vec3)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.vec4"></a>

### pex-math.vec4 : [<code>vec4</code>](#module_vec4)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.avec2"></a>

### pex-math.avec2 : [<code>avec2</code>](#module_avec2)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.avec3"></a>

### pex-math.avec3 : [<code>avec3</code>](#module_avec3)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.avec4"></a>

### pex-math.avec4 : [<code>avec4</code>](#module_avec4)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.quat"></a>

### pex-math.quat : [<code>quat</code>](#module_quat)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.euler"></a>

### pex-math.euler : [<code>euler</code>](#module_euler)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.eases"></a>

### pex-math.eases : [<code>eases</code>](#module_eases)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_pex-math.utils"></a>

### pex-math.utils : [<code>utils</code>](#module_utils)

**Kind**: static property of [<code>pex-math</code>](#module_pex-math)
<a name="module_avec2"></a>

## avec2

- [avec2](#module_avec2)
  - [.set2(a, i, x, y)](#module_avec2.set2)
  - [.set(a, i, b, j)](#module_avec2.set)
  - [.equals(a, i, b, j)](#module_avec2.equals) ⇒ <code>boolean</code>
  - [.add(a, i, b, j)](#module_avec2.add)
  - [.sub(a, i, b, j)](#module_avec2.sub)
  - [.scale(a, i, s)](#module_avec2.scale)
  - [.addScaled(a, i, b, j, s)](#module_avec2.addScaled)
  - [.dot(a, i, b, j)](#module_avec2.dot) ⇒ <code>number</code>
  - [.length(a, i)](#module_avec2.length) ⇒ <code>number</code>
  - [.lengthSq(a, i)](#module_avec2.lengthSq) ⇒ <code>number</code>
  - [.normalize(a, i)](#module_avec2.normalize)
  - [.distance(a, i, b, j)](#module_avec2.distance) ⇒ <code>number</code>
  - [.distanceSq(a, i, b, j)](#module_avec2.distanceSq) ⇒ <code>number</code>
  - [.limit(a, i, len)](#module_avec2.limit)
  - [.lerp(a, i, b, j, t)](#module_avec2.lerp)
  - [.forEach(a, callbackFn)](#module_avec2.forEach)
  - [.map(a, callbackFn)](#module_avec2.map) ⇒ [<code>AVec2</code>](#AVec2)
  - [.toString(a, i, [precision])](#module_avec2.toString) ⇒ <code>string</code>

<a name="module_avec2.set2"></a>

### avec2.set2(a, i, x, y)

Sets a vector components.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| x     | <code>number</code>          |
| y     | <code>number</code>          |

<a name="module_avec2.set"></a>

### avec2.set(a, i, b, j)

Sets a vector to another vector.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| b     | [<code>AVec2</code>](#AVec2) |
| j     | <code>number</code>          |

<a name="module_avec2.equals"></a>

### avec2.equals(a, i, b, j) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| b     | [<code>AVec2</code>](#AVec2) |
| j     | <code>number</code>          |

<a name="module_avec2.add"></a>

### avec2.add(a, i, b, j)

Adds a vector to another.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| b     | [<code>AVec2</code>](#AVec2) |
| j     | <code>number</code>          |

<a name="module_avec2.sub"></a>

### avec2.sub(a, i, b, j)

Subtracts a vector from another.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| b     | [<code>AVec2</code>](#AVec2) |
| j     | <code>number</code>          |

<a name="module_avec2.scale"></a>

### avec2.scale(a, i, s)

Scales a vector by a number.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec2.addScaled"></a>

### avec2.addScaled(a, i, b, j, s)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| b     | [<code>AVec2</code>](#AVec2) |
| j     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec2.dot"></a>

### avec2.dot(a, i, b, j) ⇒ <code>number</code>

Calculates the dot product of two vectors.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| b     | [<code>AVec2</code>](#AVec2) |
| j     | <code>number</code>          |

<a name="module_avec2.length"></a>

### avec2.length(a, i) ⇒ <code>number</code>

Calculates the length of a vector.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |

<a name="module_avec2.lengthSq"></a>

### avec2.lengthSq(a, i) ⇒ <code>number</code>

Calculates the squared length of a vector.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |

<a name="module_avec2.normalize"></a>

### avec2.normalize(a, i)

Normalises a vector.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |

<a name="module_avec2.distance"></a>

### avec2.distance(a, i, b, j) ⇒ <code>number</code>

Calculates the distance between two vectors.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| b     | [<code>AVec2</code>](#AVec2) |
| j     | <code>number</code>          |

<a name="module_avec2.distanceSq"></a>

### avec2.distanceSq(a, i, b, j) ⇒ <code>number</code>

Calculates the squared distance between two vectors.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| b     | [<code>AVec2</code>](#AVec2) |
| j     | <code>number</code>          |

<a name="module_avec2.limit"></a>

### avec2.limit(a, i, len)

Limits a vector to a length.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| len   | <code>number</code>          |

<a name="module_avec2.lerp"></a>

### avec2.lerp(a, i, b, j, t)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec2</code>](#AVec2) |
| i     | <code>number</code>          |
| b     | [<code>AVec2</code>](#AVec2) |
| j     | <code>number</code>          |
| t     | <code>number</code>          |

<a name="module_avec2.forEach"></a>

### avec2.forEach(a, callbackFn)

Executes a function once for each array element.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param      | Type                                                 |
| ---------- | ---------------------------------------------------- |
| a          | [<code>AVec2</code>](#AVec2)                         |
| callbackFn | [<code>iterativeCallback</code>](#iterativeCallback) |

<a name="module_avec2.map"></a>

### avec2.map(a, callbackFn) ⇒ [<code>AVec2</code>](#AVec2)

Creates a new array populated with the results of calling a provided function
on every element in the calling array.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param      | Type                                                 |
| ---------- | ---------------------------------------------------- |
| a          | [<code>AVec2</code>](#AVec2)                         |
| callbackFn | [<code>iterativeCallback</code>](#iterativeCallback) |

<a name="module_avec2.toString"></a>

### avec2.toString(a, i, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>avec2</code>](#module_avec2)

| Param       | Type                         | Default        |
| ----------- | ---------------------------- | -------------- |
| a           | [<code>AVec2</code>](#AVec2) |                |
| i           | <code>number</code>          |                |
| [precision] | <code>number</code>          | <code>4</code> |

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
  - [.forEach(a, callbackFn)](#module_avec3.forEach)
  - [.map(a, callbackFn)](#module_avec3.map) ⇒ [<code>AVec3</code>](#AVec3)
  - [.toString(a, i, [precision])](#module_avec3.toString) ⇒ <code>string</code>

<a name="module_avec3.set3"></a>

### avec3.set3(a, i, x, y, z)

Sets a vector components.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
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
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |

<a name="module_avec3.equals"></a>

### avec3.equals(a, i, b, j) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |

<a name="module_avec3.add"></a>

### avec3.add(a, i, b, j)

Adds a vector to another.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |

<a name="module_avec3.sub"></a>

### avec3.sub(a, i, b, j)

Subtracts a vector from another.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |

<a name="module_avec3.scale"></a>

### avec3.scale(a, i, s)

Scales a vector by a number.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec3.addScaled"></a>

### avec3.addScaled(a, i, b, j, s)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec3.multMat4"></a>

### avec3.multMat4(a, i, m, j)

Multiplies a vector by a matrix.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| m     | [<code>AMat4</code>](#AMat4) |
| j     | <code>number</code>          |

<a name="module_avec3.multQuat"></a>

### avec3.multQuat(a, i, q, j)

Multiplies a vector by a quaternion.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| q     | [<code>AQuat</code>](#AQuat) |
| j     | <code>number</code>          |

<a name="module_avec3.dot"></a>

### avec3.dot(a, i, b, j) ⇒ <code>number</code>

Calculates the dot product of two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |

<a name="module_avec3.cross"></a>

### avec3.cross(a, i, b, j)

Calculates the cross product of two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |

<a name="module_avec3.length"></a>

### avec3.length(a, i) ⇒ <code>number</code>

Calculates the length of a vector.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |

<a name="module_avec3.lengthSq"></a>

### avec3.lengthSq(a, i) ⇒ <code>number</code>

Calculates the squared length of a vector.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |

<a name="module_avec3.normalize"></a>

### avec3.normalize(a, i)

Normalises a vector.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |

<a name="module_avec3.distance"></a>

### avec3.distance(a, i, b, j) ⇒ <code>number</code>

Calculates the distance between two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |

<a name="module_avec3.distanceSq"></a>

### avec3.distanceSq(a, i, b, j) ⇒ <code>number</code>

Calculates the squared distance between two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |

<a name="module_avec3.limit"></a>

### avec3.limit(a, i, len)

Limits a vector to a length.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| len   | <code>number</code>          |

<a name="module_avec3.lerp"></a>

### avec3.lerp(a, i, b, j, t)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec3</code>](#AVec3) |
| i     | <code>number</code>          |
| b     | [<code>AVec3</code>](#AVec3) |
| j     | <code>number</code>          |
| t     | <code>number</code>          |

<a name="module_avec3.forEach"></a>

### avec3.forEach(a, callbackFn)

Executes a function once for each array element.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param      | Type                                                 |
| ---------- | ---------------------------------------------------- |
| a          | [<code>AVec3</code>](#AVec3)                         |
| callbackFn | [<code>iterativeCallback</code>](#iterativeCallback) |

<a name="module_avec3.map"></a>

### avec3.map(a, callbackFn) ⇒ [<code>AVec3</code>](#AVec3)

Creates a new array populated with the results of calling a provided function
on every element in the calling array.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param      | Type                                                 |
| ---------- | ---------------------------------------------------- |
| a          | [<code>AVec3</code>](#AVec3)                         |
| callbackFn | [<code>iterativeCallback</code>](#iterativeCallback) |

<a name="module_avec3.toString"></a>

### avec3.toString(a, i, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>avec3</code>](#module_avec3)

| Param       | Type                         | Default        |
| ----------- | ---------------------------- | -------------- |
| a           | [<code>AVec3</code>](#AVec3) |                |
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
  - [.forEach(a, callbackFn)](#module_avec4.forEach)
  - [.map(a, callbackFn)](#module_avec4.map) ⇒ [<code>AVec4</code>](#AVec4)
  - [.toString(a, i, [precision])](#module_avec4.toString) ⇒ <code>string</code>

<a name="module_avec4.set4"></a>

### avec4.set4(a, i, x, y, z, w)

Sets a vector components.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec4</code>](#AVec4) |
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
| a     | [<code>AVec4</code>](#AVec4) |
| i     | <code>number</code>          |
| b     | [<code>AVec4</code>](#AVec4) |
| j     | <code>number</code>          |

<a name="module_avec4.equals"></a>

### avec4.equals(a, i, b, j) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec4</code>](#AVec4) |
| i     | <code>number</code>          |
| b     | [<code>AVec4</code>](#AVec4) |
| j     | <code>number</code>          |

<a name="module_avec4.add"></a>

### avec4.add(a, i, b, j)

Adds a vector to another.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec4</code>](#AVec4) |
| i     | <code>number</code>          |
| b     | [<code>AVec4</code>](#AVec4) |
| j     | <code>number</code>          |

<a name="module_avec4.sub"></a>

### avec4.sub(a, i, b, j)

Subtracts a vector from another.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec4</code>](#AVec4) |
| i     | <code>number</code>          |
| b     | [<code>AVec4</code>](#AVec4) |
| j     | <code>number</code>          |

<a name="module_avec4.scale"></a>

### avec4.scale(a, i, s)

Scales a vector by a number.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec4</code>](#AVec4) |
| i     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec4.addScaled"></a>

### avec4.addScaled(a, i, b, j, s)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec4</code>](#AVec4) |
| i     | <code>number</code>          |
| b     | [<code>AVec4</code>](#AVec4) |
| j     | <code>number</code>          |
| s     | <code>number</code>          |

<a name="module_avec4.multMat4"></a>

### avec4.multMat4(a, i, m, j)

Multiplies a vector with a matrix.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec4</code>](#AVec4) |
| i     | <code>number</code>          |
| m     | [<code>AMat4</code>](#AMat4) |
| j     | <code>number</code>          |

<a name="module_avec4.lerp"></a>

### avec4.lerp(a, i, b, j, t)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>AVec4</code>](#AVec4) |
| i     | <code>number</code>          |
| b     | [<code>AVec4</code>](#AVec4) |
| j     | <code>number</code>          |
| t     | <code>number</code>          |

<a name="module_avec4.forEach"></a>

### avec4.forEach(a, callbackFn)

Executes a function once for each array element.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param      | Type                                                 |
| ---------- | ---------------------------------------------------- |
| a          | [<code>AVec4</code>](#AVec4)                         |
| callbackFn | [<code>iterativeCallback</code>](#iterativeCallback) |

<a name="module_avec4.map"></a>

### avec4.map(a, callbackFn) ⇒ [<code>AVec4</code>](#AVec4)

Creates a new array populated with the results of calling a provided function
on every element in the calling array.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param      | Type                                                 |
| ---------- | ---------------------------------------------------- |
| a          | [<code>AVec4</code>](#AVec4)                         |
| callbackFn | [<code>iterativeCallback</code>](#iterativeCallback) |

<a name="module_avec4.toString"></a>

### avec4.toString(a, i, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>avec4</code>](#module_avec4)

| Param       | Type                         | Default        |
| ----------- | ---------------------------- | -------------- |
| a           | [<code>AVec4</code>](#AVec4) |                |
| i           | <code>number</code>          |                |
| [precision] | <code>number</code>          | <code>4</code> |

<a name="module_eases"></a>

## eases

- [eases](#module_eases)
  - [.linear()](#module_eases.linear) : [<code>easeFn</code>](#easeFn)
  - [.sineIn()](#module_eases.sineIn) : [<code>easeFn</code>](#easeFn)
  - [.sineOut()](#module_eases.sineOut) : [<code>easeFn</code>](#easeFn)
  - [.sineInOut()](#module_eases.sineInOut) : [<code>easeFn</code>](#easeFn)
  - [.quadIn()](#module_eases.quadIn) : [<code>easeFn</code>](#easeFn)
  - [.quadOut()](#module_eases.quadOut) : [<code>easeFn</code>](#easeFn)
  - [.quadInOut()](#module_eases.quadInOut) : [<code>easeFn</code>](#easeFn)
  - [.cubicIn()](#module_eases.cubicIn) : [<code>easeFn</code>](#easeFn)
  - [.cubicOut()](#module_eases.cubicOut) : [<code>easeFn</code>](#easeFn)
  - [.cubicInOut()](#module_eases.cubicInOut) : [<code>easeFn</code>](#easeFn)
  - [.quartIn()](#module_eases.quartIn) : [<code>easeFn</code>](#easeFn)
  - [.quartOut()](#module_eases.quartOut) : [<code>easeFn</code>](#easeFn)
  - [.quartInOut()](#module_eases.quartInOut) : [<code>easeFn</code>](#easeFn)
  - [.quintIn()](#module_eases.quintIn) : [<code>easeFn</code>](#easeFn)
  - [.quintOut()](#module_eases.quintOut) : [<code>easeFn</code>](#easeFn)
  - [.quintInOut()](#module_eases.quintInOut) : [<code>easeFn</code>](#easeFn)
  - [.expoIn()](#module_eases.expoIn) : [<code>easeFn</code>](#easeFn)
  - [.expoOut()](#module_eases.expoOut) : [<code>easeFn</code>](#easeFn)
  - [.expoInOut()](#module_eases.expoInOut) : [<code>easeFn</code>](#easeFn)
  - [.circIn()](#module_eases.circIn) : [<code>easeFn</code>](#easeFn)
  - [.circOut()](#module_eases.circOut) : [<code>easeFn</code>](#easeFn)
  - [.circInOut()](#module_eases.circInOut) : [<code>easeFn</code>](#easeFn)
  - [.backIn()](#module_eases.backIn) : [<code>easeFn</code>](#easeFn)
  - [.backOut()](#module_eases.backOut) : [<code>easeFn</code>](#easeFn)
  - [.backInOut()](#module_eases.backInOut) : [<code>easeFn</code>](#easeFn)
  - [.elasticIn()](#module_eases.elasticIn) : [<code>easeFn</code>](#easeFn)
  - [.elasticOut()](#module_eases.elasticOut) : [<code>easeFn</code>](#easeFn)
  - [.elasticInOut()](#module_eases.elasticInOut) : [<code>easeFn</code>](#easeFn)
  - [.bounceIn()](#module_eases.bounceIn) : [<code>easeFn</code>](#easeFn)
  - [.bounceOut()](#module_eases.bounceOut) : [<code>easeFn</code>](#easeFn)
  - [.bounceInOut()](#module_eases.bounceInOut) : [<code>easeFn</code>](#easeFn)
  - [.stepStart()](#module_eases.stepStart) : [<code>easeStepFn</code>](#easeStepFn)
  - [.stepEnd()](#module_eases.stepEnd) : [<code>easeStepFn</code>](#easeStepFn)
  - [.stepNone()](#module_eases.stepNone) : [<code>easeStepFn</code>](#easeStepFn)
  - [.stepBoth()](#module_eases.stepBoth) : [<code>easeStepFn</code>](#easeStepFn)

<a name="module_eases.linear"></a>

### eases.linear() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.sineIn"></a>

### eases.sineIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.sineOut"></a>

### eases.sineOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.sineInOut"></a>

### eases.sineInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.quadIn"></a>

### eases.quadIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.quadOut"></a>

### eases.quadOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.quadInOut"></a>

### eases.quadInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.cubicIn"></a>

### eases.cubicIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.cubicOut"></a>

### eases.cubicOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.cubicInOut"></a>

### eases.cubicInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.quartIn"></a>

### eases.quartIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.quartOut"></a>

### eases.quartOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.quartInOut"></a>

### eases.quartInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.quintIn"></a>

### eases.quintIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.quintOut"></a>

### eases.quintOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.quintInOut"></a>

### eases.quintInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.expoIn"></a>

### eases.expoIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.expoOut"></a>

### eases.expoOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.expoInOut"></a>

### eases.expoInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.circIn"></a>

### eases.circIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.circOut"></a>

### eases.circOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.circInOut"></a>

### eases.circInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.backIn"></a>

### eases.backIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.backOut"></a>

### eases.backOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.backInOut"></a>

### eases.backInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.elasticIn"></a>

### eases.elasticIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.elasticOut"></a>

### eases.elasticOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.elasticInOut"></a>

### eases.elasticInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.bounceIn"></a>

### eases.bounceIn() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.bounceOut"></a>

### eases.bounceOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.bounceInOut"></a>

### eases.bounceInOut() : [<code>easeFn</code>](#easeFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.stepStart"></a>

### eases.stepStart() : [<code>easeStepFn</code>](#easeStepFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.stepEnd"></a>

### eases.stepEnd() : [<code>easeStepFn</code>](#easeStepFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.stepNone"></a>

### eases.stepNone() : [<code>easeStepFn</code>](#easeStepFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_eases.stepBoth"></a>

### eases.stepBoth() : [<code>easeStepFn</code>](#easeStepFn)

**Kind**: static method of [<code>eases</code>](#module_eases)
<a name="module_euler"></a>

## euler

- [euler](#module_euler)
  - [.create()](#module_euler.create) ⇒ [<code>Euler</code>](#Euler)
  - [.fromQuat(a, q)](#module_euler.fromQuat) ⇒ [<code>Euler</code>](#Euler)

<a name="module_euler.create"></a>

### euler.create() ⇒ [<code>Euler</code>](#Euler)

Create a new euler angles [0, 0, 0]: vec3 array of [x, y, z] rotation [yaw,
pitch, roll] in radians.

**Kind**: static method of [<code>euler</code>](#module_euler)
<a name="module_euler.fromQuat"></a>

### euler.fromQuat(a, q) ⇒ [<code>Euler</code>](#Euler)

Creates euler angles from quaternion. Assumes XYZ order of rotations.

**Kind**: static method of [<code>euler</code>](#module_euler)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>Euler</code>](#Euler) |
| q     | [<code>Quat</code>](#Quat)   |

<a name="module_mat2x3"></a>

## mat2x3

- [mat2x3](#module_mat2x3)
  - [.create()](#module_mat2x3.create) ⇒ [<code>Mat2x3</code>](#Mat2x3)
  - [.identity(a)](#module_mat2x3.identity) ⇒ [<code>Mat2x3</code>](#Mat2x3)
  - [.copy(a)](#module_mat2x3.copy) ⇒ [<code>Mat2x3</code>](#Mat2x3)
  - [.set(a, b)](#module_mat2x3.set) ⇒ [<code>Mat2x3</code>](#Mat2x3)
  - [.equals(a, b)](#module_mat2x3.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_mat2x3.mult) ⇒ [<code>Mat2x3</code>](#Mat2x3)
  - [.translate(a, v)](#module_mat2x3.translate) ⇒ [<code>Mat2x3</code>](#Mat2x3)
  - [.rotate(a, rad)](#module_mat2x3.rotate) ⇒ [<code>Mat2x3</code>](#Mat2x3)
  - [.scale(a, v)](#module_mat2x3.scale) ⇒ [<code>Mat2x3</code>](#Mat2x3)

<a name="module_mat2x3.create"></a>

### mat2x3.create() ⇒ [<code>Mat2x3</code>](#Mat2x3)

Returns a 2x3 identity matrix, a short form for a 3x3 matrix with the last
row ignored.

Row major memory layout:

```txt
0   1
2   3
4   5
```

Equivalent to the column major OpenGL spec:

```txt
0   3
1   4
2   5

m00 m10
m01 m11
m02 m12
```

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)
<a name="module_mat2x3.identity"></a>

### mat2x3.identity(a) ⇒ [<code>Mat2x3</code>](#Mat2x3)

Sets a matrix to the identity matrix.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>Mat2x3</code>](#Mat2x3) |

<a name="module_mat2x3.copy"></a>

### mat2x3.copy(a) ⇒ [<code>Mat2x3</code>](#Mat2x3)

Returns a copy of a matrix.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>Mat2x3</code>](#Mat2x3) |

<a name="module_mat2x3.set"></a>

### mat2x3.set(a, b) ⇒ [<code>Mat2x3</code>](#Mat2x3)

Sets a matrix from another matrix.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>Mat2x3</code>](#Mat2x3) |
| b     | [<code>Mat2x3</code>](#Mat2x3) |

<a name="module_mat2x3.equals"></a>

### mat2x3.equals(a, b) ⇒ <code>boolean</code>

Compares two matrices.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>Mat2x3</code>](#Mat2x3) |
| b     | [<code>Mat2x3</code>](#Mat2x3) |

<a name="module_mat2x3.mult"></a>

### mat2x3.mult(a, b) ⇒ [<code>Mat2x3</code>](#Mat2x3)

Multiplies two matrices.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>Mat2x3</code>](#Mat2x3) |
| b     | [<code>Mat2x3</code>](#Mat2x3) |

<a name="module_mat2x3.translate"></a>

### mat2x3.translate(a, v) ⇒ [<code>Mat2x3</code>](#Mat2x3)

Translates a matrix by a vector.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>Mat2x3</code>](#Mat2x3) |
| v     | [<code>Vec2</code>](#Vec2)     |

<a name="module_mat2x3.rotate"></a>

### mat2x3.rotate(a, rad) ⇒ [<code>Mat2x3</code>](#Mat2x3)

Rotates a matrix by an angle.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                             |
| ----- | -------------------------------- |
| a     | [<code>Mat2x3</code>](#Mat2x3)   |
| rad   | [<code>Radians</code>](#Radians) |

<a name="module_mat2x3.scale"></a>

### mat2x3.scale(a, v) ⇒ [<code>Mat2x3</code>](#Mat2x3)

Scales a matrix by a vector.

**Kind**: static method of [<code>mat2x3</code>](#module_mat2x3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>Mat2x3</code>](#Mat2x3) |
| v     | [<code>Vec2</code>](#Vec2)     |

<a name="module_mat3"></a>

## mat3

- [mat3](#module_mat3)
  - [.create()](#module_mat3.create) ⇒ [<code>Mat3</code>](#Mat3)
  - [.identity(a)](#module_mat3.identity) ⇒ [<code>Mat3</code>](#Mat3)
  - [.copy(a)](#module_mat3.copy) ⇒ [<code>Mat3</code>](#Mat3)
  - [.set(a, b)](#module_mat3.set) ⇒ [<code>Mat3</code>](#Mat3)
  - [.equals(a, b)](#module_mat3.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_mat3.mult) ⇒ [<code>Mat3</code>](#Mat3)
  - [.transpose(a)](#module_mat3.transpose) ⇒ [<code>Mat3</code>](#Mat3)
  - [.fromQuat(a, q)](#module_mat3.fromQuat) ⇒ [<code>Mat3</code>](#Mat3)
  - [.fromMat2x3(a, b)](#module_mat3.fromMat2x3) ⇒ [<code>Mat3</code>](#Mat3)
  - [.fromMat4(a, b)](#module_mat3.fromMat4) ⇒ [<code>Mat3</code>](#Mat3)

<a name="module_mat3.create"></a>

### mat3.create() ⇒ [<code>Mat3</code>](#Mat3)

Returns a 3x3 identity matrix.

Row major memory layout:

```txt
 0   1   2
 3   4   5
 6   7   8
```

Equivalent to the column major OpenGL spec:

```txt
  0   3   6
  1   4   7
  2   5   8

 m00 m10 m20
 m01 m11 m21
 m02 m12 m22
```

**Kind**: static method of [<code>mat3</code>](#module_mat3)
<a name="module_mat3.identity"></a>

### mat3.identity(a) ⇒ [<code>Mat3</code>](#Mat3)

Sets a matrix to the identity matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat3</code>](#Mat3) |

<a name="module_mat3.copy"></a>

### mat3.copy(a) ⇒ [<code>Mat3</code>](#Mat3)

Returns a copy of a matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat3</code>](#Mat3) |

<a name="module_mat3.set"></a>

### mat3.set(a, b) ⇒ [<code>Mat3</code>](#Mat3)

Sets a matrix from another matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat3</code>](#Mat3) |
| b     | [<code>Mat3</code>](#Mat3) |

<a name="module_mat3.equals"></a>

### mat3.equals(a, b) ⇒ <code>boolean</code>

Compares two matrices.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat3</code>](#Mat3) |
| b     | [<code>Mat3</code>](#Mat3) |

<a name="module_mat3.mult"></a>

### mat3.mult(a, b) ⇒ [<code>Mat3</code>](#Mat3)

Multiplies two matrices.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat3</code>](#Mat3) |
| b     | [<code>Mat3</code>](#Mat3) |

<a name="module_mat3.transpose"></a>

### mat3.transpose(a) ⇒ [<code>Mat3</code>](#Mat3)

Transposes a matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat3</code>](#Mat3) |

<a name="module_mat3.fromQuat"></a>

### mat3.fromQuat(a, q) ⇒ [<code>Mat3</code>](#Mat3)

Sets matrix to a quaternion.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat3</code>](#Mat3) |
| q     | [<code>Quat</code>](#Quat) |

<a name="module_mat3.fromMat2x3"></a>

### mat3.fromMat2x3(a, b) ⇒ [<code>Mat3</code>](#Mat3)

Sets a 3x3 matrix from a 2x3 matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                           |
| ----- | ------------------------------ |
| a     | [<code>Mat3</code>](#Mat3)     |
| b     | [<code>Mat2x3</code>](#Mat2x3) |

<a name="module_mat3.fromMat4"></a>

### mat3.fromMat4(a, b) ⇒ [<code>Mat3</code>](#Mat3)

Sets a 3x3 matrix to a 4x4 matrix.

**Kind**: static method of [<code>mat3</code>](#module_mat3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat3</code>](#Mat3) |
| b     | [<code>Mat4</code>](#Mat4) |

<a name="module_mat4"></a>

## mat4

- [mat4](#module_mat4)
  - [.create()](#module_mat4.create) ⇒ [<code>Mat4</code>](#Mat4)
  - [.identity(a)](#module_mat4.identity) ⇒ [<code>Mat4</code>](#Mat4)
  - [.copy(a)](#module_mat4.copy) ⇒ [<code>Mat4</code>](#Mat4)
  - [.set(a, b)](#module_mat4.set) ⇒ [<code>Mat4</code>](#Mat4)
  - [.equals(a, b)](#module_mat4.equals) ⇒ <code>boolean</code>
  - [.mult(a, b)](#module_mat4.mult) ⇒ [<code>Mat4</code>](#Mat4)
  - [.invert(a)](#module_mat4.invert) ⇒ [<code>Mat4</code>](#Mat4)
  - [.transpose(a)](#module_mat4.transpose) ⇒ [<code>Mat4</code>](#Mat4)
  - [.translate(a, v)](#module_mat4.translate) ⇒ [<code>Mat4</code>](#Mat4)
  - [.rotate(a, r, v)](#module_mat4.rotate) ⇒ [<code>Mat4</code>](#Mat4)
  - [.scale(a, v)](#module_mat4.scale) ⇒ [<code>Mat4</code>](#Mat4)
  - [.fromQuat(a, q)](#module_mat4.fromQuat) ⇒ [<code>Mat4</code>](#Mat4)
  - [.fromTranslationRotationScale(a, v, q, s)](#module_mat4.fromTranslationRotationScale) ⇒ [<code>Mat4</code>](#Mat4)
  - [.fromMat3(a, b)](#module_mat4.fromMat3) ⇒ [<code>Mat4</code>](#Mat4)
  - [.frustum(a, left, right, bottom, top, near, far)](#module_mat4.frustum) ⇒ [<code>Mat4</code>](#Mat4)
  - [.frustumZO(a, left, right, bottom, top, near, far)](#module_mat4.frustumZO) ⇒ [<code>Mat4</code>](#Mat4)
  - [.perspective(a, fovy, aspectRatio, near, far)](#module_mat4.perspective) ⇒ [<code>Mat4</code>](#Mat4)
  - [.perspectiveZO(a, fovy, aspectRatio, near, far)](#module_mat4.perspectiveZO) ⇒ [<code>Mat4</code>](#Mat4)
  - [.ortho(a, left, right, bottom, top, near, far)](#module_mat4.ortho) ⇒ [<code>Mat4</code>](#Mat4)
  - [.orthoZO(a, left, right, bottom, top, near, far)](#module_mat4.orthoZO) ⇒ [<code>Mat4</code>](#Mat4)
  - [.lookAt(a, from, to, [up])](#module_mat4.lookAt) ⇒ [<code>Mat4</code>](#Mat4)
  - [.fromDirection(a, direction, [up])](#module_mat4.fromDirection) ⇒ [<code>Mat4</code>](#Mat4)
  - [.fromPointToPoint(a, from, to, [up])](#module_mat4.fromPointToPoint) ⇒ [<code>Mat4</code>](#Mat4)

<a name="module_mat4.create"></a>

### mat4.create() ⇒ [<code>Mat4</code>](#Mat4)

Returns a 4x4 identity matrix.

Row major memory layout:

```txt
 0   1   2   3
 4   5   6   7
 8   9  10  11
12  13  14  15
```

Equivalent to the column major OpenGL spec:

```txt
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

### mat4.identity(a) ⇒ [<code>Mat4</code>](#Mat4)

Sets a matrix to the identity matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |

<a name="module_mat4.copy"></a>

### mat4.copy(a) ⇒ [<code>Mat4</code>](#Mat4)

Returns a copy of a matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |

<a name="module_mat4.set"></a>

### mat4.set(a, b) ⇒ [<code>Mat4</code>](#Mat4)

Sets a matrix from another matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |
| b     | [<code>Mat4</code>](#Mat4) |

<a name="module_mat4.equals"></a>

### mat4.equals(a, b) ⇒ <code>boolean</code>

Compares two matrices.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |
| b     | [<code>Mat4</code>](#Mat4) |

<a name="module_mat4.mult"></a>

### mat4.mult(a, b) ⇒ [<code>Mat4</code>](#Mat4)

Multiplies two matrices.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |
| b     | [<code>Mat4</code>](#Mat4) |

<a name="module_mat4.invert"></a>

### mat4.invert(a) ⇒ [<code>Mat4</code>](#Mat4)

Inverts a matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |

<a name="module_mat4.transpose"></a>

### mat4.transpose(a) ⇒ [<code>Mat4</code>](#Mat4)

Transposes a matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |

<a name="module_mat4.translate"></a>

### mat4.translate(a, v) ⇒ [<code>Mat4</code>](#Mat4)

Translates a matrix by a vector.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |
| v     | [<code>Vec3</code>](#Vec3) |

<a name="module_mat4.rotate"></a>

### mat4.rotate(a, r, v) ⇒ [<code>Mat4</code>](#Mat4)

Rotates a matrix by an angle at an axis.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                             |
| ----- | -------------------------------- |
| a     | [<code>Mat4</code>](#Mat4)       |
| r     | [<code>Radians</code>](#Radians) |
| v     | [<code>Vec3</code>](#Vec3)       |

<a name="module_mat4.scale"></a>

### mat4.scale(a, v) ⇒ [<code>Mat4</code>](#Mat4)

Scales a matrix by a vector.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |
| v     | [<code>Vec3</code>](#Vec3) |

<a name="module_mat4.fromQuat"></a>

### mat4.fromQuat(a, q) ⇒ [<code>Mat4</code>](#Mat4)

Sets a matrix to a quaternion.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |
| q     | [<code>Quat</code>](#Quat) |

<a name="module_mat4.fromTranslationRotationScale"></a>

### mat4.fromTranslationRotationScale(a, v, q, s) ⇒ [<code>Mat4</code>](#Mat4)

Sets a matrix to the TRS matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |
| v     | [<code>Vec3</code>](#Vec3) |
| q     | [<code>Quat</code>](#Quat) |
| s     | [<code>Vec3</code>](#Vec3) |

<a name="module_mat4.fromMat3"></a>

### mat4.fromMat3(a, b) ⇒ [<code>Mat4</code>](#Mat4)

Sets a 4x4 matrix to a 3x3 matrix.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Mat4</code>](#Mat4) |
| b     | [<code>Mat3</code>](#Mat3) |

<a name="module_mat4.frustum"></a>

### mat4.frustum(a, left, right, bottom, top, near, far) ⇒ [<code>Mat4</code>](#Mat4)

Creates a frustum matrix with depth mapped to [-1, 1] (WebGL/OpenGL).

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param  | Type                       |
| ------ | -------------------------- |
| a      | [<code>Mat4</code>](#Mat4) |
| left   | <code>number</code>        |
| right  | <code>number</code>        |
| bottom | <code>number</code>        |
| top    | <code>number</code>        |
| near   | <code>number</code>        |
| far    | <code>number</code>        |

<a name="module_mat4.frustumZO"></a>

### mat4.frustumZO(a, left, right, bottom, top, near, far) ⇒ [<code>Mat4</code>](#Mat4)

Creates a frustum matrix with depth mapped to [0, 1]
(WebGPU/DirectX/Metal/Vulkan).

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param  | Type                       |
| ------ | -------------------------- |
| a      | [<code>Mat4</code>](#Mat4) |
| left   | <code>number</code>        |
| right  | <code>number</code>        |
| bottom | <code>number</code>        |
| top    | <code>number</code>        |
| near   | <code>number</code>        |
| far    | <code>number</code>        |

<a name="module_mat4.perspective"></a>

### mat4.perspective(a, fovy, aspectRatio, near, far) ⇒ [<code>Mat4</code>](#Mat4)

Creates a perspective matrix with depth mapped to [-1, 1] (WebGL/OpenGL).

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param       | Type                             |
| ----------- | -------------------------------- |
| a           | [<code>Mat4</code>](#Mat4)       |
| fovy        | [<code>Radians</code>](#Radians) |
| aspectRatio | <code>number</code>              |
| near        | <code>number</code>              |
| far         | <code>number</code>              |

<a name="module_mat4.perspectiveZO"></a>

### mat4.perspectiveZO(a, fovy, aspectRatio, near, far) ⇒ [<code>Mat4</code>](#Mat4)

Creates a perspective matrix with depth mapped to [0, 1]
(WebGPU/DirectX/Metal/Vulkan).

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param       | Type                             |
| ----------- | -------------------------------- |
| a           | [<code>Mat4</code>](#Mat4)       |
| fovy        | [<code>Radians</code>](#Radians) |
| aspectRatio | <code>number</code>              |
| near        | <code>number</code>              |
| far         | <code>number</code>              |

<a name="module_mat4.ortho"></a>

### mat4.ortho(a, left, right, bottom, top, near, far) ⇒ [<code>Mat4</code>](#Mat4)

Creates an orthographic matrix with depth mapped to [-1, 1] (WebGL/OpenGL).

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param  | Type                       |
| ------ | -------------------------- |
| a      | [<code>Mat4</code>](#Mat4) |
| left   | <code>number</code>        |
| right  | <code>number</code>        |
| bottom | <code>number</code>        |
| top    | <code>number</code>        |
| near   | <code>number</code>        |
| far    | <code>number</code>        |

<a name="module_mat4.orthoZO"></a>

### mat4.orthoZO(a, left, right, bottom, top, near, far) ⇒ [<code>Mat4</code>](#Mat4)

Creates an orthographic matrix with depth mapped to [0, 1]
(WebGPU/DirectX/Metal/Vulkan).

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param  | Type                       |
| ------ | -------------------------- |
| a      | [<code>Mat4</code>](#Mat4) |
| left   | <code>number</code>        |
| right  | <code>number</code>        |
| bottom | <code>number</code>        |
| top    | <code>number</code>        |
| near   | <code>number</code>        |
| far    | <code>number</code>        |

<a name="module_mat4.lookAt"></a>

### mat4.lookAt(a, from, to, [up]) ⇒ [<code>Mat4</code>](#Mat4)

Calculates a lookAt matrix from position, target and up vectors.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       | Default           |
| ----- | -------------------------- | ----------------- |
| a     | [<code>Mat4</code>](#Mat4) |                   |
| from  | [<code>Vec3</code>](#Vec3) |                   |
| to    | [<code>Vec3</code>](#Vec3) |                   |
| [up]  | [<code>Vec3</code>](#Vec3) | <code>Y_UP</code> |

<a name="module_mat4.fromDirection"></a>

### mat4.fromDirection(a, direction, [up]) ⇒ [<code>Mat4</code>](#Mat4)

Sets a matrix from a direction. Note: we assume +Z facing models.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param     | Type                       | Default           |
| --------- | -------------------------- | ----------------- |
| a         | [<code>Mat4</code>](#Mat4) |                   |
| direction | [<code>Vec3</code>](#Vec3) |                   |
| [up]      | [<code>Vec3</code>](#Vec3) | <code>Y_UP</code> |

<a name="module_mat4.fromPointToPoint"></a>

### mat4.fromPointToPoint(a, from, to, [up]) ⇒ [<code>Mat4</code>](#Mat4)

Sets a matrix from a point to another.

**Kind**: static method of [<code>mat4</code>](#module_mat4)

| Param | Type                       | Default           |
| ----- | -------------------------- | ----------------- |
| a     | [<code>Mat4</code>](#Mat4) |                   |
| from  | [<code>Vec3</code>](#Vec3) |                   |
| to    | [<code>Vec3</code>](#Vec3) |                   |
| [up]  | [<code>Vec3</code>](#Vec3) | <code>Y_UP</code> |

<a name="module_quat"></a>

## quat

- [quat](#module_quat)
  - [.set](#module_quat.set) ⇒ [<code>Quat</code>](#Quat)
  - [.equals](#module_quat.equals) ⇒ <code>boolean</code>
  - [.toString](#module_quat.toString) ⇒ [<code>Quat</code>](#Quat)
  - [.create()](#module_quat.create) ⇒ [<code>Quat</code>](#Quat)
  - [.identity(a)](#module_quat.identity) ⇒ [<code>Quat</code>](#Quat)
  - [.copy(a)](#module_quat.copy) ⇒ [<code>Quat</code>](#Quat)
  - [.mult(a, b)](#module_quat.mult) ⇒ [<code>Quat</code>](#Quat)
  - [.invert(a)](#module_quat.invert) ⇒ [<code>Quat</code>](#Quat)
  - [.conjugate(a)](#module_quat.conjugate) ⇒ [<code>Quat</code>](#Quat)
  - [.length(a)](#module_quat.length) ⇒ [<code>Quat</code>](#Quat)
  - [.normalize(a)](#module_quat.normalize) ⇒ [<code>Quat</code>](#Quat)
  - [.dot(a, b)](#module_quat.dot) ⇒ [<code>Quat</code>](#Quat)
  - [.fromEuler(a, e)](#module_quat.fromEuler) ⇒ [<code>Quat</code>](#Quat)
  - [.fromAxisAngle(a, v, r)](#module_quat.fromAxisAngle) ⇒ [<code>Quat</code>](#Quat)
  - [.fromAxes(a, x, y, z)](#module_quat.fromAxes) ⇒ [<code>Quat</code>](#Quat)
  - [.fromMat3(a, m)](#module_quat.fromMat3) ⇒ [<code>Quat</code>](#Quat)
  - [.fromMat4(a, m)](#module_quat.fromMat4) ⇒ [<code>Quat</code>](#Quat)
  - [.fromDirection(a, direction, [up])](#module_quat.fromDirection) ⇒ [<code>Quat</code>](#Quat)
  - [.fromPointToPoint(a, from, to, [up])](#module_quat.fromPointToPoint) ⇒ [<code>Quat</code>](#Quat)
  - [.slerp(a, b, t)](#module_quat.slerp) ⇒ [<code>Quat</code>](#Quat)

<a name="module_quat.set"></a>

### quat.set ⇒ [<code>Quat</code>](#Quat)

Sets a quaternion to another quaternion.

**Kind**: static constant of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |
| b     | [<code>Quat</code>](#Quat) |

<a name="module_quat.equals"></a>

### quat.equals ⇒ <code>boolean</code>

Compares two quaternions.

**Kind**: static constant of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |
| b     | [<code>Quat</code>](#Quat) |

<a name="module_quat.toString"></a>

### quat.toString ⇒ [<code>Quat</code>](#Quat)

Prints a quaternion to a string.

**Kind**: static constant of [<code>quat</code>](#module_quat)

| Param     | Type                       |
| --------- | -------------------------- |
| a         | [<code>Quat</code>](#Quat) |
| precision | <code>number</code>        |

<a name="module_quat.create"></a>

### quat.create() ⇒ [<code>Quat</code>](#Quat)

Returns a new quat at 0, 0, 0, 1.

**Kind**: static method of [<code>quat</code>](#module_quat)
<a name="module_quat.identity"></a>

### quat.identity(a) ⇒ [<code>Quat</code>](#Quat)

Sets a quaternion to the identity quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |

<a name="module_quat.copy"></a>

### quat.copy(a) ⇒ [<code>Quat</code>](#Quat)

Returns a copy of a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |

<a name="module_quat.mult"></a>

### quat.mult(a, b) ⇒ [<code>Quat</code>](#Quat)

Multiplies one quaternion by another.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |
| b     | [<code>Quat</code>](#Quat) |

<a name="module_quat.invert"></a>

### quat.invert(a) ⇒ [<code>Quat</code>](#Quat)

Inverts a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |

<a name="module_quat.conjugate"></a>

### quat.conjugate(a) ⇒ [<code>Quat</code>](#Quat)

Conjugates a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |

<a name="module_quat.length"></a>

### quat.length(a) ⇒ [<code>Quat</code>](#Quat)

Calculates the length of a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |

<a name="module_quat.normalize"></a>

### quat.normalize(a) ⇒ [<code>Quat</code>](#Quat)

Normalizes a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |

<a name="module_quat.dot"></a>

### quat.dot(a, b) ⇒ [<code>Quat</code>](#Quat)

Calculates the dot product of two quaternions.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |
| b     | [<code>Quat</code>](#Quat) |

<a name="module_quat.fromEuler"></a>

### quat.fromEuler(a, e) ⇒ [<code>Quat</code>](#Quat)

Set euler angles to a quaternion. Assumes XYZ rotation order.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                         |
| ----- | ---------------------------- |
| a     | [<code>Quat</code>](#Quat)   |
| e     | [<code>Euler</code>](#Euler) |

<a name="module_quat.fromAxisAngle"></a>

### quat.fromAxisAngle(a, v, r) ⇒ [<code>Quat</code>](#Quat)

Set the angle at an axis of a quaternion.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                             |
| ----- | -------------------------------- |
| a     | [<code>Quat</code>](#Quat)       |
| v     | [<code>Vec3</code>](#Vec3)       |
| r     | [<code>Radians</code>](#Radians) |

<a name="module_quat.fromAxes"></a>

### quat.fromAxes(a, x, y, z) ⇒ [<code>Quat</code>](#Quat)

Sets a quaternion from orthonormal base xyz.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |
| x     | [<code>Vec3</code>](#Vec3) |
| y     | [<code>Vec3</code>](#Vec3) |
| z     | [<code>Vec3</code>](#Vec3) |

<a name="module_quat.fromMat3"></a>

### quat.fromMat3(a, m) ⇒ [<code>Quat</code>](#Quat)

Sets a quaternion to a 3x3 matrix.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |
| m     | [<code>Mat3</code>](#Mat3) |

<a name="module_quat.fromMat4"></a>

### quat.fromMat4(a, m) ⇒ [<code>Quat</code>](#Quat)

Sets a quaternion to a 4x4 matrix.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |
| m     | [<code>Mat4</code>](#Mat4) |

<a name="module_quat.fromDirection"></a>

### quat.fromDirection(a, direction, [up]) ⇒ [<code>Quat</code>](#Quat)

Sets a quaternion from a direction Note: we assume +Z facing models.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param     | Type                       | Default           |
| --------- | -------------------------- | ----------------- |
| a         | [<code>Quat</code>](#Quat) |                   |
| direction | [<code>Vec3</code>](#Vec3) |                   |
| [up]      | [<code>Vec3</code>](#Vec3) | <code>Y_UP</code> |

<a name="module_quat.fromPointToPoint"></a>

### quat.fromPointToPoint(a, from, to, [up]) ⇒ [<code>Quat</code>](#Quat)

Sets a quaternion from a point to another.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       | Default           |
| ----- | -------------------------- | ----------------- |
| a     | [<code>Quat</code>](#Quat) |                   |
| from  | [<code>Vec3</code>](#Vec3) |                   |
| to    | [<code>Vec3</code>](#Vec3) |                   |
| [up]  | [<code>Vec3</code>](#Vec3) | <code>Y_UP</code> |

<a name="module_quat.slerp"></a>

### quat.slerp(a, b, t) ⇒ [<code>Quat</code>](#Quat)

Spherical linear interpolates between two quaternions.

**Kind**: static method of [<code>quat</code>](#module_quat)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Quat</code>](#Quat) |
| b     | [<code>Quat</code>](#Quat) |
| t     | <code>number</code>        |

<a name="module_utils"></a>

## utils

- [utils](#module_utils)
  - [.EPSILON](#module_utils.EPSILON) : <code>number</code>
  - [.HALF_PI](#module_utils.HALF_PI) : <code>number</code>
  - [.Y_UP](#module_utils.Y_UP) : [<code>Vec3</code>](#Vec3)
  - [.lerp(a, b, t)](#module_utils.lerp) ⇒ <code>number</code>
  - [.clamp(n, min, max)](#module_utils.clamp) ⇒ <code>number</code>
  - [.smoothstep(n, min, max)](#module_utils.smoothstep) ⇒ <code>number</code>
  - [.remap(n, inStart, inEnd, outStart, outEnd)](#module_utils.remap) ⇒ <code>number</code>
  - [.toRadians(degrees)](#module_utils.toRadians) ⇒ [<code>Radians</code>](#Radians)
  - [.toDegrees(radians)](#module_utils.toDegrees) ⇒ [<code>Degrees</code>](#Degrees)
  - [.isPowerOfTwo(a)](#module_utils.isPowerOfTwo) ⇒ <code>boolean</code>
  - [.nextPowerOfTwo(n)](#module_utils.nextPowerOfTwo) ⇒ <code>number</code>
  - [.prevPowerOfTwo(n)](#module_utils.prevPowerOfTwo) ⇒ <code>number</code>

<a name="module_utils.EPSILON"></a>

### utils.EPSILON : <code>number</code>

**Kind**: static constant of [<code>utils</code>](#module_utils)
<a name="module_utils.HALF_PI"></a>

### utils.HALF\_PI : <code>number</code>

**Kind**: static constant of [<code>utils</code>](#module_utils)
<a name="module_utils.Y_UP"></a>

### utils.Y\_UP : [<code>Vec3</code>](#Vec3)

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

<a name="module_utils.remap"></a>

### utils.remap(n, inStart, inEnd, outStart, outEnd) ⇒ <code>number</code>

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
  - [.create()](#module_vec2.create) ⇒ [<code>Vec2</code>](#Vec2)
  - [.copy(a)](#module_vec2.copy) ⇒ [<code>Vec2</code>](#Vec2)
  - [.set(a, b)](#module_vec2.set) ⇒ [<code>Vec2</code>](#Vec2)
  - [.equals(a, b)](#module_vec2.equals) ⇒ <code>boolean</code>
  - [.add(a, b)](#module_vec2.add) ⇒ [<code>Vec2</code>](#Vec2)
  - [.sub(a, b)](#module_vec2.sub) ⇒ [<code>Vec2</code>](#Vec2)
  - [.scale(a, s)](#module_vec2.scale) ⇒ [<code>Vec2</code>](#Vec2)
  - [.addScaled(a, b, s)](#module_vec2.addScaled) ⇒ [<code>Vec2</code>](#Vec2)
  - [.dot(a, b)](#module_vec2.dot) ⇒ <code>number</code>
  - [.length(a)](#module_vec2.length) ⇒ <code>number</code>
  - [.lengthSq(a)](#module_vec2.lengthSq) ⇒ <code>number</code>
  - [.normalize(a)](#module_vec2.normalize) ⇒ [<code>Vec2</code>](#Vec2)
  - [.distance(a, b)](#module_vec2.distance) ⇒ <code>number</code>
  - [.distanceSq(a, b)](#module_vec2.distanceSq) ⇒ <code>number</code>
  - [.limit(a, len)](#module_vec2.limit) ⇒ [<code>Vec2</code>](#Vec2)
  - [.lerp(a, b, t)](#module_vec2.lerp) ⇒ [<code>Vec2</code>](#Vec2)
  - [.toString(a, [precision])](#module_vec2.toString) ⇒ <code>string</code>

<a name="module_vec2.create"></a>

### vec2.create() ⇒ [<code>Vec2</code>](#Vec2)

Returns a new vec2 at 0, 0.

**Kind**: static method of [<code>vec2</code>](#module_vec2)
<a name="module_vec2.copy"></a>

### vec2.copy(a) ⇒ [<code>Vec2</code>](#Vec2)

Returns a copy of a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.set"></a>

### vec2.set(a, b) ⇒ [<code>Vec2</code>](#Vec2)

Sets a vector to another vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| b     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.equals"></a>

### vec2.equals(a, b) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| b     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.add"></a>

### vec2.add(a, b) ⇒ [<code>Vec2</code>](#Vec2)

Add a vector to another.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| b     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.sub"></a>

### vec2.sub(a, b) ⇒ [<code>Vec2</code>](#Vec2)

Subtracts a vector from another.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| b     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.scale"></a>

### vec2.scale(a, s) ⇒ [<code>Vec2</code>](#Vec2)

Scales a vector by a number.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| s     | <code>number</code>        |

<a name="module_vec2.addScaled"></a>

### vec2.addScaled(a, b, s) ⇒ [<code>Vec2</code>](#Vec2)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| b     | [<code>Vec2</code>](#Vec2) |
| s     | <code>number</code>        |

<a name="module_vec2.dot"></a>

### vec2.dot(a, b) ⇒ <code>number</code>

Calculates the dot product of two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| b     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.length"></a>

### vec2.length(a) ⇒ <code>number</code>

Calculates the length of a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.lengthSq"></a>

### vec2.lengthSq(a) ⇒ <code>number</code>

Calculates the squared length of a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.normalize"></a>

### vec2.normalize(a) ⇒ [<code>Vec2</code>](#Vec2)

Normalises a vector.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.distance"></a>

### vec2.distance(a, b) ⇒ <code>number</code>

Calculates the distance between two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| b     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.distanceSq"></a>

### vec2.distanceSq(a, b) ⇒ <code>number</code>

Calculates the squared distance between two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| b     | [<code>Vec2</code>](#Vec2) |

<a name="module_vec2.limit"></a>

### vec2.limit(a, len) ⇒ [<code>Vec2</code>](#Vec2)

Limits a vector to a length.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| len   | <code>number</code>        |

<a name="module_vec2.lerp"></a>

### vec2.lerp(a, b, t) ⇒ [<code>Vec2</code>](#Vec2)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec2</code>](#Vec2) |
| b     | [<code>Vec2</code>](#Vec2) |
| t     | <code>number</code>        |

<a name="module_vec2.toString"></a>

### vec2.toString(a, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>vec2</code>](#module_vec2)

| Param       | Type                       | Default        |
| ----------- | -------------------------- | -------------- |
| a           | [<code>Vec2</code>](#Vec2) |                |
| [precision] | <code>number</code>        | <code>4</code> |

<a name="module_vec3"></a>

## vec3

- [vec3](#module_vec3)
  - [.create()](#module_vec3.create) ⇒ [<code>Vec3</code>](#Vec3)
  - [.copy(a)](#module_vec3.copy) ⇒ [<code>Vec3</code>](#Vec3)
  - [.set(a, b)](#module_vec3.set) ⇒ [<code>Vec3</code>](#Vec3)
  - [.equals(a, b)](#module_vec3.equals) ⇒ <code>boolean</code>
  - [.add(a, b)](#module_vec3.add) ⇒ [<code>Vec3</code>](#Vec3)
  - [.sub(a, b)](#module_vec3.sub) ⇒ [<code>Vec3</code>](#Vec3)
  - [.scale(a, s)](#module_vec3.scale) ⇒ [<code>Vec3</code>](#Vec3)
  - [.addScaled(a, b, s)](#module_vec3.addScaled) ⇒ [<code>Vec3</code>](#Vec3)
  - [.multMat4(a, m)](#module_vec3.multMat4) ⇒ [<code>Vec3</code>](#Vec3)
  - [.multQuat(a, q)](#module_vec3.multQuat) ⇒ [<code>Vec3</code>](#Vec3)
  - [.dot(a, b)](#module_vec3.dot) ⇒ <code>number</code>
  - [.cross(a, b)](#module_vec3.cross) ⇒ [<code>Vec3</code>](#Vec3)
  - [.length(a)](#module_vec3.length) ⇒ <code>number</code>
  - [.lengthSq(a)](#module_vec3.lengthSq) ⇒ <code>number</code>
  - [.normalize(a)](#module_vec3.normalize) ⇒ [<code>Vec3</code>](#Vec3)
  - [.distance(a, b)](#module_vec3.distance) ⇒ <code>number</code>
  - [.distanceSq(a, b)](#module_vec3.distanceSq) ⇒ <code>number</code>
  - [.limit(a, len)](#module_vec3.limit) ⇒ [<code>Vec3</code>](#Vec3)
  - [.lerp(a, b, t)](#module_vec3.lerp) ⇒ [<code>Vec3</code>](#Vec3)
  - [.toString(a, [precision])](#module_vec3.toString) ⇒ <code>string</code>

<a name="module_vec3.create"></a>

### vec3.create() ⇒ [<code>Vec3</code>](#Vec3)

Returns a new vec3 at 0, 0, 0.

**Kind**: static method of [<code>vec3</code>](#module_vec3)
<a name="module_vec3.copy"></a>

### vec3.copy(a) ⇒ [<code>Vec3</code>](#Vec3)

Returns a copy of a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.set"></a>

### vec3.set(a, b) ⇒ [<code>Vec3</code>](#Vec3)

Sets a vector to another vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.equals"></a>

### vec3.equals(a, b) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.add"></a>

### vec3.add(a, b) ⇒ [<code>Vec3</code>](#Vec3)

Adds a vector to another.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.sub"></a>

### vec3.sub(a, b) ⇒ [<code>Vec3</code>](#Vec3)

Subtracts a vector from another.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.scale"></a>

### vec3.scale(a, s) ⇒ [<code>Vec3</code>](#Vec3)

Scales a vector by a number.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| s     | <code>number</code>        |

<a name="module_vec3.addScaled"></a>

### vec3.addScaled(a, b, s) ⇒ [<code>Vec3</code>](#Vec3)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |
| s     | <code>number</code>        |

<a name="module_vec3.multMat4"></a>

### vec3.multMat4(a, m) ⇒ [<code>Vec3</code>](#Vec3)

Multiplies a vector by a matrix.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| m     | [<code>Mat4</code>](#Mat4) |

<a name="module_vec3.multQuat"></a>

### vec3.multQuat(a, q) ⇒ [<code>Vec3</code>](#Vec3)

Multiplies a vector by a quaternion.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| q     | [<code>Quat</code>](#Quat) |

<a name="module_vec3.dot"></a>

### vec3.dot(a, b) ⇒ <code>number</code>

Calculates the dot product of two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.cross"></a>

### vec3.cross(a, b) ⇒ [<code>Vec3</code>](#Vec3)

Calculates the cross product of two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.length"></a>

### vec3.length(a) ⇒ <code>number</code>

Calculates the length of a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.lengthSq"></a>

### vec3.lengthSq(a) ⇒ <code>number</code>

Calculates the squared length of a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.normalize"></a>

### vec3.normalize(a) ⇒ [<code>Vec3</code>](#Vec3)

Normalises a vector.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.distance"></a>

### vec3.distance(a, b) ⇒ <code>number</code>

Calculates the distance between two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.distanceSq"></a>

### vec3.distanceSq(a, b) ⇒ <code>number</code>

Calculates the squared distance between two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec3.limit"></a>

### vec3.limit(a, len) ⇒ [<code>Vec3</code>](#Vec3)

Limits a vector to a length.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| len   | <code>number</code>        |

<a name="module_vec3.lerp"></a>

### vec3.lerp(a, b, t) ⇒ [<code>Vec3</code>](#Vec3)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec3</code>](#Vec3) |
| b     | [<code>Vec3</code>](#Vec3) |
| t     | <code>number</code>        |

<a name="module_vec3.toString"></a>

### vec3.toString(a, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>vec3</code>](#module_vec3)

| Param       | Type                       | Default        |
| ----------- | -------------------------- | -------------- |
| a           | [<code>Vec3</code>](#Vec3) |                |
| [precision] | <code>number</code>        | <code>4</code> |

<a name="module_vec4"></a>

## vec4

- [vec4](#module_vec4)
  - [.create()](#module_vec4.create) ⇒ [<code>Vec4</code>](#Vec4)
  - [.copy(a)](#module_vec4.copy) ⇒ [<code>Vec4</code>](#Vec4)
  - [.set(a, b)](#module_vec4.set) ⇒ [<code>Vec4</code>](#Vec4)
  - [.equals(a, b)](#module_vec4.equals) ⇒ <code>boolean</code>
  - [.add(a, b)](#module_vec4.add) ⇒ [<code>Vec4</code>](#Vec4)
  - [.sub(a, b)](#module_vec4.sub) ⇒ [<code>Vec4</code>](#Vec4)
  - [.scale(a, s)](#module_vec4.scale) ⇒ [<code>Vec4</code>](#Vec4)
  - [.addScaled(a, b, s)](#module_vec4.addScaled) ⇒ [<code>Vec4</code>](#Vec4)
  - [.fromVec3(a, b)](#module_vec4.fromVec3) ⇒ [<code>Vec4</code>](#Vec4)
  - [.multMat4(a, m)](#module_vec4.multMat4) ⇒ [<code>Vec4</code>](#Vec4)
  - [.lerp(a, b, t)](#module_vec4.lerp) ⇒ [<code>Vec4</code>](#Vec4)
  - [.toString(a, [precision])](#module_vec4.toString) ⇒ <code>string</code>

<a name="module_vec4.create"></a>

### vec4.create() ⇒ [<code>Vec4</code>](#Vec4)

Returns a new vec4 at 0, 0, 0, 1.

**Kind**: static method of [<code>vec4</code>](#module_vec4)
<a name="module_vec4.copy"></a>

### vec4.copy(a) ⇒ [<code>Vec4</code>](#Vec4)

Returns a copy of a vector.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |

<a name="module_vec4.set"></a>

### vec4.set(a, b) ⇒ [<code>Vec4</code>](#Vec4)

Sets a vector to another vector.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |
| b     | [<code>Vec4</code>](#Vec4) |

<a name="module_vec4.equals"></a>

### vec4.equals(a, b) ⇒ <code>boolean</code>

Compares two vectors.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |
| b     | [<code>Vec4</code>](#Vec4) |

<a name="module_vec4.add"></a>

### vec4.add(a, b) ⇒ [<code>Vec4</code>](#Vec4)

Adds a vector to another.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |
| b     | [<code>Vec4</code>](#Vec4) |

<a name="module_vec4.sub"></a>

### vec4.sub(a, b) ⇒ [<code>Vec4</code>](#Vec4)

Subtracts a vector from another.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |
| b     | [<code>Vec4</code>](#Vec4) |

<a name="module_vec4.scale"></a>

### vec4.scale(a, s) ⇒ [<code>Vec4</code>](#Vec4)

Scales a vector by a number.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |
| s     | <code>number</code>        |

<a name="module_vec4.addScaled"></a>

### vec4.addScaled(a, b, s) ⇒ [<code>Vec4</code>](#Vec4)

Adds two vectors after scaling the second one.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |
| b     | [<code>Vec4</code>](#Vec4) |
| s     | <code>number</code>        |

<a name="module_vec4.fromVec3"></a>

### vec4.fromVec3(a, b) ⇒ [<code>Vec4</code>](#Vec4)

Create a vec4 from vec3.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |
| b     | [<code>Vec3</code>](#Vec3) |

<a name="module_vec4.multMat4"></a>

### vec4.multMat4(a, m) ⇒ [<code>Vec4</code>](#Vec4)

Multiplies a vector with a matrix.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |
| m     | [<code>Mat4</code>](#Mat4) |

<a name="module_vec4.lerp"></a>

### vec4.lerp(a, b, t) ⇒ [<code>Vec4</code>](#Vec4)

Linearly interpolates between two vectors.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param | Type                       |
| ----- | -------------------------- |
| a     | [<code>Vec4</code>](#Vec4) |
| b     | [<code>Vec4</code>](#Vec4) |
| t     | <code>number</code>        |

<a name="module_vec4.toString"></a>

### vec4.toString(a, [precision]) ⇒ <code>string</code>

Prints a vector to a string.

**Kind**: static method of [<code>vec4</code>](#module_vec4)

| Param       | Type                       | Default        |
| ----------- | -------------------------- | -------------- |
| a           | [<code>Vec4</code>](#Vec4) |                |
| [precision] | <code>number</code>        | <code>4</code> |

<a name="TypedArray"></a>

## TypedArray : <code>Int8Array</code> \| <code>Uint8Array</code> \| <code>Uint8ClampedArray</code> \| <code>Int16Array</code> \| <code>Uint16Array</code> \| <code>Int32Array</code> \| <code>Uint32Array</code> \| <code>Float16Array</code> \| <code>Float32Array</code> \| <code>Float64Array</code> \| <code>BigInt64Array</code> \| <code>BigUint64Array</code>

**Kind**: global typedef
<a name="AVec2"></a>

## AVec2 : [<code>TypedArray</code>](#TypedArray)

**Kind**: global typedef
<a name="AVec3"></a>

## AVec3 : [<code>TypedArray</code>](#TypedArray)

**Kind**: global typedef
<a name="AVec4"></a>

## AVec4 : [<code>TypedArray</code>](#TypedArray)

**Kind**: global typedef
<a name="AMat4"></a>

## AMat4 : [<code>TypedArray</code>](#TypedArray)

**Kind**: global typedef
<a name="AQuat"></a>

## AQuat : [<code>TypedArray</code>](#TypedArray)

**Kind**: global typedef
<a name="Euler"></a>

## Euler : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="Mat2x3"></a>

## Mat2x3 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="Mat3"></a>

## Mat3 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="Mat4"></a>

## Mat4 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="Quat"></a>

## Quat : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="Vec2"></a>

## Vec2 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="Vec3"></a>

## Vec3 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="Vec4"></a>

## Vec4 : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
<a name="Degrees"></a>

## Degrees : <code>number</code>

**Kind**: global typedef
<a name="Radians"></a>

## Radians : <code>number</code>

**Kind**: global typedef
<a name="iterativeCallback"></a>

## iterativeCallback : <code>function</code>

Callback for iterating typed arrays.

**Kind**: global typedef

| Param   | Type                                                                                         |
| ------- | -------------------------------------------------------------------------------------------- |
| element | [<code>Vec2</code>](#Vec2) \| [<code>Vec3</code>](#Vec3) \| [<code>Vec4</code>](#Vec4)       |
| index   | <code>number</code>                                                                          |
| array   | [<code>AVec2</code>](#AVec2) \| [<code>AVec3</code>](#AVec3) \| [<code>AVec4</code>](#AVec4) |

<a name="easeFn"></a>

## easeFn ⇒ <code>number</code>

Ease functions signature.

**Kind**: global typedef

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| t     | <code>number</code> | Interpolant value |

<a name="easeStepFn"></a>

## easeStepFn ⇒ <code>number</code>

Ease step functions signature.

**Kind**: global typedef

| Param  | Type                | Default        | Description       |
| ------ | ------------------- | -------------- | ----------------- |
| t      | <code>number</code> |                | Interpolant value |
| [step] | <code>number</code> | <code>1</code> | Number of steps   |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/pex-gl/pex-math/blob/main/LICENSE.md).
