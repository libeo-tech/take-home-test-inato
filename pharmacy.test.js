import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy updateBenefitValue", () => {

  it("should decrease the benefit and expiresIn for normal drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should do nothing for magic pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 44, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 44, 30)]
    );
  });
});
