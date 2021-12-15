import { Pharmacy } from "./pharmacy";
import { Doliparne } from "./drugs/doliparne";
import { HerbalTea } from "./drugs/herbalTea";
import { Fervex } from "./drugs/fervex";
import { MagicPill } from "./drugs/magicPill";
import { Dafalgan } from "./drugs/dafalgan";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy(
      [
        new Doliparne(20, 30),
        new HerbalTea(10, 5),
        new Fervex(5, 40),
        new MagicPill(15, 40),
        new Dafalgan(15, 10)
      ]
    ).updateBenefitValue()).toEqual(
      [
        new Doliparne(19, 29),
        new HerbalTea(9, 6),
        new Fervex(4, 42),
        new MagicPill(15, 40),
        new Dafalgan(14, 8)
      ]
    );
  });
});
