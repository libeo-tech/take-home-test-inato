import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit of dafalgan by four after expiration date", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -1, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -2, 36)]);
  });
});
