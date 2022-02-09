import { Drug, Pharmacy } from "../src/pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("Herbal Tea actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 4, 4)]);
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 0, 5)]);
  });
  it("Magic Pill sould not decrease", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 5, 3)]);
  });
  it("Fervex increases in Benefit as its expiration date approaches. Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less, Benefit drops to 0 after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 19, 4)]);
    expect(
      new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 5)]);
    expect(
      new Pharmacy([new Drug("Fervex", 4, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 6)]);
    expect(
      new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 0, 0)]);
  });
  it("Dafalgan should degrade twice as fast", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 4, 1)]);
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 0, 1)]);
  });
});
