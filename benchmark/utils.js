const ITERATIONS = 1e6;

export const run = (cb) => {
  for (let i = 0; i < ITERATIONS; i++) {
    cb();
  }
};
