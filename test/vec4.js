import test from "tape";
import { vec4 } from "../index.js";

const allMethods = Object.keys(vec4);
const handledMethods = [];

test("vec4.create", (t) => {
  const expected = [0, 0, 0, 1];

  const a = vec4.create();
  t.deepEqual(a, expected, "should return a new vec4");

  handledMethods.push("create");
  t.end();
});

test("coverage", (t) => {
  allMethods.forEach((name) => {
    if (!handledMethods.includes(name)) {
      console.log(`missing test for vec4.${name}`);
    }
  });
  t.end();
});
