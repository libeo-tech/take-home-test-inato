import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  // GENERAL
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("benefit should not go below 0", () => {
    expect(new Pharmacy([new Drug("test", 10, 5)]).updateBenefitValueXDays(10)).toEqual(
      [new Drug("test", 0, 0)]
    );
  });

  // HERBAL TEA
  it("Herbal Tea should increase by 1 the benefit each day", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
  it("benefit should not go above 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValueXDays(30)).toEqual(
      [new Drug("Herbal Tea", -20, 50)]
    );
  });

  //MAGIC PILL
  it("Magic Pill should not move", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValueXDays(100)).toEqual(
      [new Drug("Magic Pill", 15, 40)]
    );
  });

  //FERVEX
  it("Fervew should gain 2 benefit when exp. date is between 10 and 5", () => {
    expect(new Pharmacy([new Drug("Fervex", 8, 5)]).updateBenefitValueXDays(1)).toEqual(
      [new Drug("Fervex", 7, 7)]
    );
  });

  it("Fervew should gain 3 benefit when exp. date is between 5 and 0", () => {
    expect(new Pharmacy([new Drug("Fervex", 3, 5)]).updateBenefitValueXDays(1)).toEqual(
      [new Drug("Fervex", 2, 8)]
    );
  });

  it("Fervew should benefit should drop to 0 after exp. date", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 50)]).updateBenefitValueXDays(1)).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
});
