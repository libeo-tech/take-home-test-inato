import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );

    // expect(new Pharmacy([new Drug("Doliprane", 20, 30)]).updateBenefitValue()).toEqual(
    //   [new Drug("Doliprane", 19, 29)]
    // );

    expect(new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 6)]
    );

    expect(new Pharmacy([new Drug("Fervex", 5, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 43)]
    );

    expect(new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 15, 40)]
    );
  });
});
