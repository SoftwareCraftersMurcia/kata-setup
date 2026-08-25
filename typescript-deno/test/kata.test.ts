import { assertEquals } from "jsr:@std/assert@^1.0.0";
import { describe, it } from "jsr:@std/testing@^1.0.0/bdd";
import { renameMe } from "../src/kata.ts";

describe("Kata", () => {
  it("change_this_name", () => {
    const result = renameMe();
    assertEquals(result, true);
  });
});
