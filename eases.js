import { HALF_PI } from "./utils.js";

const out =
  (easeIn) =>
  (t, ...rest) =>
    1 - easeIn(1 - t, ...rest);
const inOut =
  (easeIn) =>
  (t, ...rest) =>
    t < 0.5
      ? easeIn(t * 2, ...rest) * 0.5
      : 1 - easeIn((1 - t) * 2, ...rest) * 0.5;

// Linear
const linear = (t) => t;

// Sine
const sineIn = (t) => 1 - Math.cos(t * HALF_PI);
const sineOut = (t) => Math.sin(t * HALF_PI);
const sineInOut = (t) => -0.5 * (Math.cos(Math.PI * t) - 1);

// Quad
const quadIn = (t) => t ** 2;
const quadOut = out(quadIn);
const quadInOut = inOut(quadIn);

// Cubic
const cubicIn = (t) => t ** 3;
const cubicOut = out(cubicIn);
const cubicInOut = inOut(cubicIn);

// Quart
const quartIn = (t) => t ** 4;
const quartOut = out(quartIn);
const quartInOut = inOut(quartIn);

// Quint
const quintIn = (t) => t ** 5;
const quintOut = out(quintIn);
const quintInOut = inOut(quintIn);

// Expo
const boundZero = (t) => {
  if (t === 0) return 0;
};
const expoIn = (t) => boundZero(t) ?? 2 ** (10 * t - 10);
const expoOut = out(expoIn);
const expoInOut = inOut(expoIn);

// Circ
const circIn = (t) => 1 - Math.sqrt(1 - t ** 2);
const circOut = out(circIn);
const circInOut = inOut(circIn);

// Back
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = c2 + 1;
const backIn = (t) => t ** 2 * (c3 * t - c1);
const backOut = out(backIn);
const backInOut = (t) => {
  const t2 = t * 2;
  if (t2 < 1) return 0.5 * (t2 ** 2 * (c4 * t2 - c2));
  return 0.5 * ((t2 - 2) ** 2 * (c4 * (t2 - 2) + c2) + 2);
};

// Elastic
const elasticIn = (t) => Math.sin(13 * t * HALF_PI) * expoIn(t);
const elasticOut = out(elasticIn);
const elasticInOut = inOut(elasticIn);

// Bounce
const n1 = 7.5625;
const d1 = 2.75;
const d1_1 = 1 / d1;
const d1_2 = 2 / d1;
const d1_1_5 = 1.5 / d1;
const d1_2_5 = 2.5 / d1;
const d1_2_25 = 2.25 / d1;
const d1_2_625 = 2.625 / d1;

const bounceOut = (t) => {
  if (t < d1_1) return n1 * t ** 2;
  if (t < d1_2) return n1 * (t - d1_1_5) ** 2 + 0.75;
  if (t < d1_2_5) return n1 * (t - d1_2_25) ** 2 + 0.9375;
  return n1 * (t - d1_2_625) ** 2 + 0.984375;
};
const bounceIn = (t) => 1 - bounceOut(1 - t);
const bounceInOut = (t) =>
  t < 0.5 ? 0.5 * (1 - bounceOut(1 - 2 * t)) : 0.5 + 0.5 * bounceOut(2 * t - 1);

// Steps
// https://drafts.csswg.org/css-easing-2/#step-easing-functions
const stepEdges = (t) => {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
};

const stepStart = (t, n = 1) => stepEdges(t) ?? Math.ceil(t * n) / n;
const stepEnd = (t, n = 1) => stepEdges(t) ?? Math.floor(t * n) / n;
const stepNone = (t, n = 1) => stepEdges(t) ?? Math.floor(t * n) / (n - 1);
const stepBoth = (t, n = 1) => stepEdges(t) ?? (Math.floor(t * n) + 0.5) / n;

export {
  sineIn,
  sineOut,
  sineInOut,
  quadIn,
  quadOut,
  quadInOut,
  cubicIn,
  cubicOut,
  cubicInOut,
  quartIn,
  quartOut,
  quartInOut,
  quintIn,
  quintOut,
  quintInOut,
  expoIn,
  expoOut,
  expoInOut,
  circIn,
  circOut,
  circInOut,
  backIn,
  backOut,
  backInOut,
  elasticIn,
  elasticOut,
  elasticInOut,
  bounceIn,
  bounceOut,
  bounceInOut,
  stepStart,
  stepEnd,
  stepNone,
  stepBoth,
  linear,
};
