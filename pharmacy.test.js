import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("The Benefit of an item is never negative", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 0)]);
  });

  it("Herbal Tea benefit increases twice as fast after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });

  it("Magic Pill never expires nor decreases in Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 0, 3)]);
  });

  it("Fervex Benefit increases by 2 when there are 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 5)]);
  });

  it("Fervex Benefit increases by 3 when there are 5 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 6)]);
  });

  it("Fervex Benefit drops to 0 after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});
