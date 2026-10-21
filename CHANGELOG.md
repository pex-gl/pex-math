# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

# [4.5.0](https://github.com/pex-gl/pex-math/compare/v4.4.0...v4.5.0) (2026-10-21)

### Bug Fixes

* **eases:** align stepStart and stepBoth with CSS easing spec ([9e9b71a](https://github.com/pex-gl/pex-math/commit/9e9b71ab44ece824db11322c8fbe0a25a2165351))
* **eases:** default stepNone to 2 steps ([0f4a6f0](https://github.com/pex-gl/pex-math/commit/0f4a6f07f8f2f396b82880f9e64317842f30402b))
* **euler:** compute fromQuat angles accurately in and near gimbal lock ([7fd1bcc](https://github.com/pex-gl/pex-math/commit/7fd1bcc9bd744f206b1a8a7c77b9ff203dca48fa))
* **mat3:** compare only the 9 entries in equals ([4c29a44](https://github.com/pex-gl/pex-math/commit/4c29a4496c0b99ab070a2f22c9a380944fdcd03f))
* **mat4:** leave matrix unchanged when invert fails ([a7f219f](https://github.com/pex-gl/pex-math/commit/a7f219ffdc9606b6bdab97545044972a4c6ba86e))
* **mat4:** use a fallback axis in lookAt and fromDirection when up is parallel to the view direction ([4ff1a2a](https://github.com/pex-gl/pex-math/commit/4ff1a2af54237ea479cb161e6e55675095f8c6b0)), closes [#34](https://github.com/pex-gl/pex-math/issues/34) [#34](https://github.com/pex-gl/pex-math/issues/34) [#36](https://github.com/pex-gl/pex-math/issues/36)
* normalise y axis instead of x in lookAt ([1487af5](https://github.com/pex-gl/pex-math/commit/1487af55e1a298f0357d36b8e9cfaf2c914d748e))
* **quat:** require a normalized axis in fromAxisAngle ([76bf0ea](https://github.com/pex-gl/pex-math/commit/76bf0ea05468bff149e27af942574e900e04afdb))
* truncate toString values toward zero without float error ([345392c](https://github.com/pex-gl/pex-math/commit/345392c1e7d218ce06fc6317ca31570f9ef458a9))
* **types:** drop BigInt arrays from TypedArray and type iterativeCallback return ([fd8c5f3](https://github.com/pex-gl/pex-math/commit/fd8c5f388e68023ac812087654feb27d68330144))
* update quat.dot return type ([c085bc2](https://github.com/pex-gl/pex-math/commit/c085bc2e9b220f1053b9acff6ec8ff4355d342c5))
* **utils:** return isPowerOfTwo true only for positive integer powers of two ([cc375cd](https://github.com/pex-gl/pex-math/commit/cc375cd2a6c97967a271d82457ae0de0226aa686))
* **utils:** type Y_UP as Vec3 so it can be passed to vector parameters ([f2c72a4](https://github.com/pex-gl/pex-math/commit/f2c72a44dd1fc9a13b8c6c576d8089b66a9a1ca0))

### Performance Improvements

* **mat4:** read vector parameters by index instead of destructuring ([3d2803c](https://github.com/pex-gl/pex-math/commit/3d2803cdb45b1cbe4ca54646ad32ca9815ade340))
* **mat4:** skip normalizing the third axis in lookAt and fromDirection ([961886f](https://github.com/pex-gl/pex-math/commit/961886f97336c394dcb31faab59a1ceab3b869a9))

# [4.4.0](https://github.com/pex-gl/pex-math/compare/v4.3.2...v4.4.0) (2026-08-12)


### Features

* add mat4.determinant ([d550d18](https://github.com/pex-gl/pex-math/commit/d550d18c81e4097611cd1d218c1795287a0c572b))



## [4.3.2](https://github.com/pex-gl/pex-math/compare/v4.3.1...v4.3.2) (2026-08-06)



## [4.3.1](https://github.com/pex-gl/pex-math/compare/v4.3.0...v4.3.1) (2026-08-06)


### Bug Fixes

* add Float16Array to TypedArray ([f24ebd0](https://github.com/pex-gl/pex-math/commit/f24ebd0f576ec798d2eb1bfd8fce3ab2c29c40b0))
* re-export types ([bc2add4](https://github.com/pex-gl/pex-math/commit/bc2add4ddb06935e8605ca20ce453be6cffe70b1))



# [4.3.0](https://github.com/pex-gl/pex-math/compare/v4.2.0...v4.3.0) (2026-07-08)


### Features

* add mat4.perspectiveZO/orthoZO/frustumZO for WebGPU ([a2ec04e](https://github.com/pex-gl/pex-math/commit/a2ec04eb97e00a5b2c78f55464e4a6b0afbeac0e)), closes [#40](https://github.com/pex-gl/pex-math/issues/40)



# [4.2.0](https://github.com/pex-gl/pex-math/compare/v4.1.2...v4.2.0) (2026-01-12)


### Features

* add eases ([51e00f9](https://github.com/pex-gl/pex-math/commit/51e00f9793c84ff38d007b0ea900c1e768241cd7)), closes [#38](https://github.com/pex-gl/pex-math/issues/38)



## [4.1.2](https://github.com/pex-gl/pex-math/compare/v4.1.1...v4.1.2) (2025-07-11)



## [4.1.1](https://github.com/pex-gl/pex-math/compare/v4.1.0...v4.1.1) (2024-07-09)



# [4.1.0](https://github.com/pex-gl/pex-math/compare/v4.0.0...v4.1.0) (2024-02-13)


### Features

* deprecate map in favor of remap ([e9aa6c5](https://github.com/pex-gl/pex-math/commit/e9aa6c5f278960120eebe33a1050d38355f9e290)), closes [#35](https://github.com/pex-gl/pex-math/issues/35)



# [4.0.0](https://github.com/pex-gl/pex-math/compare/v4.0.0-alpha.5...v4.0.0) (2024-02-05)


### Features

* add mat4.quat fromDirection ([f12548a](https://github.com/pex-gl/pex-math/commit/f12548a2ec1f7e96dc9bd5c95ed4abdcbb7eb198))
* add quat/mat4. fromPointToPoint ([c9c8903](https://github.com/pex-gl/pex-math/commit/c9c8903cab9a6652b178918f842cab573f15d655))
* remove quat/mat4.targetTo and quat.fromTo ([041313b](https://github.com/pex-gl/pex-math/commit/041313bc04a5be56fe1e9ab77060334bbba8aa28)), closes [#30](https://github.com/pex-gl/pex-math/issues/30) [#31](https://github.com/pex-gl/pex-math/issues/31)



# [4.0.0-alpha.5](https://github.com/pex-gl/pex-math/compare/v4.0.0-alpha.4...v4.0.0-alpha.5) (2023-08-01)


### Features

* add avec2 ([cf3298f](https://github.com/pex-gl/pex-math/commit/cf3298f52816ca6e6f35fa2a7cc7756591be01ab))
* add forEach/map to avec ([13099cd](https://github.com/pex-gl/pex-math/commit/13099cd2edbc5da8ffd171540324a196e288b288))



# [4.0.0-alpha.4](https://github.com/pex-gl/pex-math/compare/v4.0.0-alpha.3...v4.0.0-alpha.4) (2023-05-31)


### Bug Fixes

* remove array returns in avec ([25fe7ba](https://github.com/pex-gl/pex-math/commit/25fe7babacb92128140489d8857f7fd69e36eba6))


### Features

* add avec multMat4 and avec3.multQuat ([1a9ea22](https://github.com/pex-gl/pex-math/commit/1a9ea224c3cb9208e904784b3a83379ecd7614ce))
* add utils.prevPowerOfTwo ([68456d7](https://github.com/pex-gl/pex-math/commit/68456d78ba24230b3f1fe4e1b840aae7b0508dbc))



# [4.0.0-alpha.3](https://github.com/pex-gl/pex-math/compare/v4.0.0-alpha.2...v4.0.0-alpha.3) (2022-10-15)


### Features

* add mat4.targetTo and quat.targetTo ([2458c43](https://github.com/pex-gl/pex-math/commit/2458c4357cb7f9cb727b115015607c7f7ec27fdc)), closes [#14](https://github.com/pex-gl/pex-math/issues/14)



# [4.0.0-alpha.2](https://github.com/pex-gl/pex-math/compare/v4.0.0-alpha.1...v4.0.0-alpha.2) (2022-07-07)


### Bug Fixes

* export avec3/4 ([72673ed](https://github.com/pex-gl/pex-math/commit/72673edd6548775402e6f281834c1146e00bc74e))



# [4.0.0-alpha.1](https://github.com/pex-gl/pex-math/compare/v4.0.0-alpha.0...v4.0.0-alpha.1) (2022-06-30)



# [4.0.0-alpha.0](https://github.com/pex-gl/pex-math/compare/v2.1.1...v4.0.0-alpha.0) (2022-06-30)


### Bug Fixes

* add back quat.normalize ([c84e6b1](https://github.com/pex-gl/pex-math/commit/c84e6b1a045bc30b3eae159bfb6ed737833483df))
* add missing index args in avec3/4 ([68b90bd](https://github.com/pex-gl/pex-math/commit/68b90bd0e80aeae7b695877884dca57ea3bbb91d))
* export quat.fromTo directly ([89c4abe](https://github.com/pex-gl/pex-math/commit/89c4abe363baaafc6ef11c56e6d14d6c72184f7f))
* remove duplicated mat4.lookAt ([bfa2f2b](https://github.com/pex-gl/pex-math/commit/bfa2f2beb18afd74be01c994fe2f2c7fdf7f803c)), closes [/github.com/pex-gl/pex-math/commit/595c1bc42fa098020107d0cff35b212a2f0f4f63#diff-a8b1188fe06c86a97756bb7b791f94cb2ae630b03f1b5ff86fc963e7d8e55071](https://github.com//github.com/pex-gl/pex-math/commit/595c1bc42fa098020107d0cff35b212a2f0f4f63/issues/diff-a8b1188fe06c86a97756bb7b791f94cb2ae630b03f1b5ff86fc963e7d8e55071)
* remove useless decimals ([54dfd59](https://github.com/pex-gl/pex-math/commit/54dfd59a8344b806b5c1b67810ad63a69f7c9ed7))


### Code Refactoring

* use ES modules ([49fc854](https://github.com/pex-gl/pex-math/commit/49fc854812605209b2d9773596ccb486495fb8ca)), closes [#9](https://github.com/pex-gl/pex-math/issues/9)


### Features

* add avec3 and avec4 ([14b167c](https://github.com/pex-gl/pex-math/commit/14b167c893078162c6c8da92477983be6a824495))
* add mat3.transpose ([0a3ba3b](https://github.com/pex-gl/pex-math/commit/0a3ba3b41f6145a12a73dd06099904524dcd3e6b))
* add missing vec4 methods ([f5f5634](https://github.com/pex-gl/pex-math/commit/f5f5634f4e7e133b14c062ef462219581e1e5037))
* remove extra avec4 methods ([e3fc917](https://github.com/pex-gl/pex-math/commit/e3fc917f1b850f222f6e39c2499ac5d105142572))
* remove extra vec4 methods ([86b7b03](https://github.com/pex-gl/pex-math/commit/86b7b036aa515d8239ea6cd3a17f9c7d30f29c3c))
* remove mat4 private functions ([1aaa8dc](https://github.com/pex-gl/pex-math/commit/1aaa8dc9cdd516907031dc70eba7b6213ac39f49))
* uniformise EPSILON ([1c878a3](https://github.com/pex-gl/pex-math/commit/1c878a329fafee9f7b989e44c20e64f0028f3761))
* uniformise matX common methods ([aac7090](https://github.com/pex-gl/pex-math/commit/aac70905c9a754ca860627ea0b41e6fdbf4ffbda))


### Performance Improvements

* add caching to mat4.invert + negate determinant check instead of === 0 ([71abd1e](https://github.com/pex-gl/pex-math/commit/71abd1e712db13cb677283b31b6af2573c1d89b4))
* divide by 2 ([7b4df3d](https://github.com/pex-gl/pex-math/commit/7b4df3d94e847ab53a92867929baf8a487109c7b))
* improve all copy ([25e9761](https://github.com/pex-gl/pex-math/commit/25e9761b4d30b7fad0c17791b51fd2a0f63a8166))
* improve mat4.rotate ([ec699c7](https://github.com/pex-gl/pex-math/commit/ec699c79b69186698bddf29d489ff86acbde6473))
* improve mat4.scale ([b10e687](https://github.com/pex-gl/pex-math/commit/b10e687b52c1ef6f2ae82455c357072f642e52a4))
* improve mat4.translate ([7f9f37f](https://github.com/pex-gl/pex-math/commit/7f9f37f075b76c77bdf4e4d83bd8094d4333bfe7))
* inline mat4.fromTranslationRotationScale ([08ea95b](https://github.com/pex-gl/pex-math/commit/08ea95b9db4d791eb8a6277b5b5fcbfce9fd9c22))
* remove assert ([5f19ae5](https://github.com/pex-gl/pex-math/commit/5f19ae5bd26680ce6d16efc06c040f808a076f28))
* remove early let declarations and use mat4.identity for equal eye/target edge case in _lookAt9 ([5b114bd](https://github.com/pex-gl/pex-math/commit/5b114bd8a347cb030eae2cfeee675840404e287a))
* reuse variable in mat4.mult ([1badef0](https://github.com/pex-gl/pex-math/commit/1badef079016c64dd1a34827536ccbfb496ddfd3))
* update benchmark ([87e33bb](https://github.com/pex-gl/pex-math/commit/87e33bb03cdf0991f5f4e7f5c422a7634fec3c21))


### BREAKING CHANGES

* switch to type module
