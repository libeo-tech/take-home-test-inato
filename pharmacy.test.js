import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should decrease the Dafalgan benefit twice as fast", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
    expect(new Pharmacy([new Drug("Dafalgan", 0, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -1, 0)]
    );
  });
});
