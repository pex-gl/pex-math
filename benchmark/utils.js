const ITERATIONS = 1e6;

export const run = (cb) => {
  for (let i = 0; i < ITERATIONS; i++) {
    cb();
  }
};

globalThis.benchLogs = {};

const bench = (name, cb) => {
  requestAnimationFrame(() => {
    let start;
    const b = {
      start() {
        start = globalThis.performance.now();
      },
      end() {
        const time = globalThis.performance.now() - start;
        console.log(name, time);
        globalThis.benchLogs[name] = globalThis.benchLogs[name] || [];
        globalThis.benchLogs[name].push(time);
      },
    };
    cb(b);
  });
};
export default bench;
