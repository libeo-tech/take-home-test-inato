import { Drug, Pharmacy } from "../pharmacy";

describe("Magic Pill not expired", () => {
  it("should have the same benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 10, 10)]);
  });
});
