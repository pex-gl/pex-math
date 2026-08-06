const opsPerSec = (task) => task.result.throughput.mean;
const nanos = (task) => task.result.latency.mean * 1e6;
const format = (n) => Math.round(n).toLocaleString("en-US");

// One table per group, implementations sorted fastest first with a multiplier
// showing how much slower each is than the group's fastest.
export const rankGroups = (groups) => {
  for (const [group, tasks] of Object.entries(groups)) {
    const ranked = [...tasks].sort((a, b) => opsPerSec(b) - opsPerSec(a));
    const fastest = opsPerSec(ranked[0]);

    console.log(`\n${group}`);
    console.table(
      Object.fromEntries(
        ranked.map((task) => [
          task.name,
          {
            "ops/s": format(opsPerSec(task)),
            "avg (ns)": nanos(task).toFixed(2),
            relative:
              task === ranked[0]
                ? "fastest"
                : `${(fastest / opsPerSec(task)).toFixed(2)}× slower`,
          },
        ]),
      ),
    );
  }
};

// Side-by-side comparison of two implementations across many operations, with
// the speed ratio and the faster side.
export const pairTable = (title, [labelA, labelB], rows) => {
  console.log(`\n${title}`);
  console.table(
    Object.fromEntries(
      rows.map(({ name, a, b }) => {
        const oa = opsPerSec(a);
        const ob = opsPerSec(b);
        return [
          name,
          {
            [`${labelA} ops/s`]: format(oa),
            [`${labelB} ops/s`]: format(ob),
            faster: oa > ob ? labelA : labelB,
            "×": (oa > ob ? oa / ob : ob / oa).toFixed(2),
          },
        ];
      }),
    ),
  );
};
