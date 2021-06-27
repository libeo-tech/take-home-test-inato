import { Pharmacy } from "../src/pharmacy";
import { Drug } from "../src/drug";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should update the benefit and expiresIn", () => {
    expect(
      new Pharmacy([
        new Drug("Doliprane", 20, 30),
        new Drug("Herbal Tea", 10, 5),
        new Drug("Fervex", 5, 40),
        new Drug("Magic Pill", 15, 40)
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Doliprane", 19, 29),
      new Drug("Herbal Tea", 9, 6),
      new Drug("Fervex", 4, 43),
      new Drug("Magic Pill", 15, 40)
    ]);
  });
  it("should not change", () => {
    expect(new Pharmacy([]).updateBenefitValue()).toEqual([]);
  });
});
