import { Drug, Pharmacy } from "../src/services/pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("test", 1, 2)]);
  });
});
