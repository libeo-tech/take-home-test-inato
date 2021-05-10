import { Pharmacy } from "./pharmacy";
import { Fervex } from "../drugs/fervex/fervex";
import { HerbalTea } from "../drugs/herbalTea/herbalTea";
import { MagicPill } from "../drugs/magicPill/magicPill";
import { Daffalgan } from "../drugs/daffalgan/daffalgan";

describe("Pharmacy with different type of drugs", () => {
  it("should calls the respective aging function and alterate drugs attributes", () => {
    expect(
      new Pharmacy([
        new Fervex(10, 5),
        new HerbalTea(5, 2),
        new MagicPill(1, 1)
      ]).updateBenefitValue()
    ).toEqual([new Fervex(9, 7), new HerbalTea(4, 3), new MagicPill(1, 1)]);
  });
});

describe("Pharmacy with different type of outdated drugs", () => {
  it("should increases the benefit twice", () => {
    expect(
      new Pharmacy([
        new Fervex(0, 5),
        new HerbalTea(0, 5),
        new Daffalgan(0, 8)
      ]).updateBenefitValue()
    ).toEqual([new Fervex(-1, 0), new HerbalTea(-1, 7), new Daffalgan(-1, 4)]);
  });
});
