import { Drug, Pharmacy } from "../src/pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
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
