import { describe, it } from "node:test";
import { ok, strictEqual } from "node:assert";
import { eases } from "../index.js";

describe("eases", () => {
  describe("bounds", () => {
    for (const ease of Object.keys(eases)) {
      const easeFn = eases[ease];

      it(`${ease}() should return 0 for t=0`, () => {
        ok(Math.abs(easeFn(0)) <= Number.EPSILON);
      });
      it(`${ease}() should return 1 for t=1`, () => {
        ok(Math.abs(1 - easeFn(1)) <= Number.EPSILON);
      });
    }
  });

  describe("step functions", () => {
    describe("stepStart", () => {
      it("should return 0 for t <= 0", () => {
        strictEqual(eases.stepStart(-0.1), 0);
        strictEqual(eases.stepStart(0), 0);
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
      it("should return 0 for t <= 0", () => {
        strictEqual(eases.stepBoth(-0.1), 0);
        strictEqual(eases.stepBoth(0), 0);
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
        strictEqual(eases.stepBoth(1 / 2 - Number.EPSILON, 2), 0.25);
        strictEqual(eases.stepBoth(1 / 2 + Number.EPSILON, 2), 0.75);
      });

      it("should jump at both start and end for n = 3", () => {
        strictEqual(eases.stepBoth(1 / 3 - Number.EPSILON, 3), 0.5 / 3);
        strictEqual(eases.stepBoth(1 / 3 + Number.EPSILON, 3), 0.5);
        strictEqual(eases.stepBoth(2 / 3 - Number.EPSILON, 3), 0.5);
        strictEqual(eases.stepBoth(2 / 3 + Number.EPSILON, 3), 2.5 / 3);
      });
    });
  });
});
