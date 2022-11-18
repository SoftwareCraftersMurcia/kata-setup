import { expect } from "expect";
import { describe, it } from "std/testing/bdd.ts";
import { renameMe } from "../src/kata.ts";

describe("Kata", () => {
  it("change_this_name", () => {
    const result = renameMe();
    expect(result).toBe(true);
  });
});
