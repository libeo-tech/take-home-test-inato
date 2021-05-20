import { Pharmacy } from "./pharmacy";
import { Drug, Fervex, HerbalTea, MagicPill, Dafalgan } from "./drugs";

describe("Pharmacy", () => {
  it("normal drug should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
  it("Herbal Tea should increase the benefit and decrease expiresIn", () => {
    expect(
      new Pharmacy([new HerbalTea("", 2, 3)]).updateBenefitValue()
    ).toEqual([new HerbalTea("", 1, 4)]);
  });
  it("Herbal Tea should increase the benefit twice after expiresIn < 0", () => {
    expect(
      new Pharmacy([new HerbalTea("", 0, 3)]).updateBenefitValue()
    ).toEqual([new HerbalTea("", -1, 5)]);
  });
  it("Magic Pill should do nothing", () => {
    expect(
      new Pharmacy([new MagicPill("", 2, 3)]).updateBenefitValue()
    ).toEqual([new MagicPill("", 2, 3)]);
  });
  it("Fervex should increase the benefit twice and decrease expiresIn when expiresIn <= 10", () => {
    expect(new Pharmacy([new Fervex("", 7, 3)]).updateBenefitValue()).toEqual([
      new Fervex("", 6, 5)
    ]);
  });
  it("Fervex should increase the benefit by 3 and decrease expiresIn when expiresIn <= 5", () => {
    expect(new Pharmacy([new Fervex("", 5, 3)]).updateBenefitValue()).toEqual([
      new Fervex("", 4, 6)
    ]);
  });
  it("Fervex should do like Herbal Tea when expiresIn > 10", () => {
    expect(new Pharmacy([new Fervex("", 12, 3)]).updateBenefitValue()).toEqual([
      new Fervex("", 11, 4)
    ]);
  });
  it("Fervex should decrease benefit to 0 when expiresIn", () => {
    expect(new Pharmacy([new Fervex("", 0, 50)]).updateBenefitValue()).toEqual([
      new Fervex("", -1, 0)
    ]);
  });
  it("Dafalgan should decrease the benefit twice as fast as normal drug and decrease expiresIn", () => {
    expect(
      new Pharmacy([new Dafalgan("", 12, 3)]).updateBenefitValue()
    ).toEqual([new Dafalgan("", 11, 1)]);
  });
  it("Dafalgan should decrease the benefit twice as fast as normal drug and decrease expiresIn when expiresIn < 0", () => {
    expect(new Pharmacy([new Dafalgan("", 0, 4)]).updateBenefitValue()).toEqual(
      [new Dafalgan("", -1, 0)]
    );
  });
});
