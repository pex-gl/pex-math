import test from "tape";
import { utils } from "../index.js";

const allMethods = Object.keys(utils);
const handledMethods = [];

test("utils.sign", (t) => {
  t.deepEqual(utils.sign(1), 1, "should return sign of a number");
  t.deepEqual(utils.sign(42), 1, "should return sign of a number");
  t.deepEqual(utils.sign(-666), -1, "should return sign of a number");

  handledMethods.push("sign");
  t.end();
});

test("utils.isPowerOfTwo", (t) => {
  t.true(utils.isPowerOfTwo(2), "should return bool");
  t.true(utils.isPowerOfTwo(256), "should return bool");
  t.false(utils.isPowerOfTwo(-512), "should return bool");
  t.false(utils.isPowerOfTwo(3), "should return bool");
  t.false(utils.isPowerOfTwo(666), "should return bool");

  handledMethods.push("isPowerOfTwo");
  t.end();
});

test("coverage", (t) => {
  allMethods.forEach((name) => {
    if (!handledMethods.includes(name)) {
      console.log(`missing test for utils.${name}`);
    }
  });
  t.end();
});
