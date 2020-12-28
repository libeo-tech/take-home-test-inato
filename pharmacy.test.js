import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should decrease Dafalgan drug benefit twice as fast and expiresIn normally", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });
  it("should decrease Dafalgan drug benefit no lower than 0", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 0)]);
  });
  it("should not have drugs with more than 50 benefit or lower than 0", () => {
    expect(
      new Pharmacy([new Drug("Drug", 10, 51)]).updateBenefitValue()
    ).toEqual([new Drug("Drug", 9, 50)]);
    expect(
      new Pharmacy([new Drug("Drug", 10, -2)]).updateBenefitValue()
    ).toEqual([new Drug("Drug", 9, 0)]);
  });
});
