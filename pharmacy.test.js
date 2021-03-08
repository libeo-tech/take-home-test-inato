import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
});

describe("Dafalgan not expired", () => {
  it("should decrease by 2 the benefit and by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 9, 8)]);
  });
});
