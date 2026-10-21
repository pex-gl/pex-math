import { describe, it } from "node:test";
import { ok, strictEqual } from "node:assert";
import { eases } from "../index.js";

// CSS jump-start and jump-both jump at t = 0
const JUMP_AT_START = ["stepStart", "stepBoth"];

describe("eases", () => {
  describe("bounds", () => {
    for (const ease of Object.keys(eases)) {
      const easeFn = eases[ease];

      if (!JUMP_AT_START.includes(ease)) {
        it(`${ease}() should return 0 for t=0`, () => {
          ok(Math.abs(easeFn(0)) <= Number.EPSILON);
        });
      }
      it(`${ease}() should return 1 for t=1`, () => {
        ok(Math.abs(1 - easeFn(1)) <= Number.EPSILON);
      });
    }
  });

  describe("bounceOut", () => {
    const d1 = 2.75;

    it("should rise quadratically before the first bounce", () => {
      ok(Math.abs(0.25 - eases.bounceOut(0.5 / d1)) < 1e-12);
    });

    it("should stay within 0 and 1", () => {
      for (let i = 0; i <= 1000; i++) {
        const value = eases.bounceOut(i / 1000);
        ok(value >= 0 && value <= 1 + 1e-12);
      }
    });

    it("should touch 1 between bounces", () => {
      for (const t of [1 / d1, 2 / d1, 2.5 / d1]) {
        ok(Math.abs(1 - eases.bounceOut(t)) < 1e-12);
      }
    });

    it("should bounce back to decreasing heights", () => {
      for (const [t, height] of [
        [1.5 / d1, 0.75],
        [2.25 / d1, 0.9375],
        [2.625 / d1, 0.984375],
      ]) {
        ok(Math.abs(height - eases.bounceOut(t)) < 1e-12);
      }
    });
  });

  describe("step functions", () => {
    describe("stepStart", () => {
      it("should return 0 for t < 0", () => {
        strictEqual(eases.stepStart(-0.1), 0);
      });

      it("should jump at t = 0", () => {
        strictEqual(eases.stepStart(0), 1);
        strictEqual(eases.stepStart(0, 4), 0.25);
      });

      it("should return 1 for t >= 1", () => {
        strictEqual(eases.stepStart(1), 1);
        strictEqual(eases.stepStart(1.1), 1);
      });

      it("should jump to first step immediately for n = 1", () => {
        strictEqual(eases.stepStart(0.1, 1), 1);
        strictEqual(eases.stepStart(0.5, 1), 1);
        strictEqual(eases.stepStart(0.99, 1), 1);
      });

      it("should jump to first step immediately for n = 3", () => {
        strictEqual(eases.stepStart(1 / 3 - Number.EPSILON, 3), 1 / 3);
        strictEqual(eases.stepStart(1 / 3 + Number.EPSILON, 3), 2 / 3);
      });

      it("should take the higher value at step boundaries", () => {
        strictEqual(eases.stepStart(1 / 3, 3), 2 / 3);
        strictEqual(eases.stepStart(0.5, 4), 0.75);
      });
    });

    describe("stepEnd", () => {
      it("should return 0 for t <= 0", () => {
        strictEqual(eases.stepEnd(-0.1), 0);
        strictEqual(eases.stepEnd(0), 0);
      });

      it("should return 1 for t >= 1", () => {
        strictEqual(eases.stepEnd(1), 1);
        strictEqual(eases.stepEnd(1.1), 1);
      });

      it("should hold until first step for n = 1", () => {
        strictEqual(eases.stepEnd(0.1, 1), 0);
        strictEqual(eases.stepEnd(0.5, 1), 0);
        strictEqual(eases.stepEnd(0.99, 1), 0);
      });

      it("should hold until first step for n = 3", () => {
        strictEqual(eases.stepEnd(1 / 3 - Number.EPSILON, 3), 0);
        strictEqual(eases.stepEnd(1 / 3 + Number.EPSILON, 3), 1 / 3);
      });
    });

    describe("stepNone", () => {
      it("should return 0 for t <= 0", () => {
        strictEqual(eases.stepNone(-0.1), 0);
        strictEqual(eases.stepNone(0), 0);
      });

      it("should return 1 for t >= 1", () => {
        strictEqual(eases.stepNone(1), 1);
        strictEqual(eases.stepNone(1.1), 1);
      });

      it("should default to n = 2", () => {
        strictEqual(eases.stepNone(0.25), 0);
        strictEqual(eases.stepNone(0.75), 1);
      });

      it("should distribute steps evenly excluding endpoints for n = 2", () => {
        strictEqual(eases.stepNone(1 / 2 - Number.EPSILON, 2), 0);
        strictEqual(eases.stepNone(1 / 2 + Number.EPSILON, 2), 1);
      });

      it("should distribute steps evenly excluding endpoints for n = 3", () => {
        strictEqual(eases.stepNone(1 / 3 - Number.EPSILON, 3), 0);
        strictEqual(eases.stepNone(1 / 3 + Number.EPSILON, 3), 0.5);
        strictEqual(eases.stepNone(2 / 3 - Number.EPSILON, 3), 0.5);
        strictEqual(eases.stepNone(2 / 3 + Number.EPSILON, 3), 1);
      });
    });

    describe("stepBoth", () => {
      it("should return 0 for t < 0", () => {
        strictEqual(eases.stepBoth(-0.1), 0);
      });

      it("should jump at t = 0", () => {
        strictEqual(eases.stepBoth(0), 0.5);
        strictEqual(eases.stepBoth(0, 4), 0.2);
      });

      it("should return 1 for t >= 1", () => {
        strictEqual(eases.stepBoth(1), 1);
        strictEqual(eases.stepBoth(1.1), 1);
      });

      it("should jump at both start and end for n = 1", () => {
        strictEqual(eases.stepBoth(0.1, 1), 0.5);
        strictEqual(eases.stepBoth(0.5, 1), 0.5);
        strictEqual(eases.stepBoth(0.99, 1), 0.5);
      });
      it("should jump at both start and end, and distribute steps evenly for n = 2", () => {
        strictEqual(eases.stepBoth(1 / 2 - Number.EPSILON, 2), 1 / 3);
        strictEqual(eases.stepBoth(1 / 2 + Number.EPSILON, 2), 2 / 3);
      });

      it("should jump at both start and end for n = 3", () => {
        strictEqual(eases.stepBoth(1 / 3 - Number.EPSILON, 3), 0.25);
        strictEqual(eases.stepBoth(1 / 3 + Number.EPSILON, 3), 0.5);
        strictEqual(eases.stepBoth(2 / 3 - Number.EPSILON, 3), 0.5);
        strictEqual(eases.stepBoth(2 / 3 + Number.EPSILON, 3), 0.75);
      });

      it("should take the higher value at step boundaries", () => {
        strictEqual(eases.stepBoth(1 / 3, 3), 0.5);
        strictEqual(eases.stepBoth(0.5, 4), 0.6);
      });
    });
  });
});
