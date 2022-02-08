import test from "tape";
import { mat3 } from "../index.js";

const allMethods = Object.keys(mat3);
const handledMethods = [];

test("mat3.create", (t) => {
  t.deepEqual(
    mat3.create(),
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    "should return a new mat3"
  );

  handledMethods.push("create");
  t.end();
});

test("coverage", (t) => {
  allMethods.forEach((name) => {
    if (!handledMethods.includes(name)) {
      console.log(`missing test for mat3.${name}`);
    }
  });
  t.end();
});
