import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";

describe("Pharmacy", () => {
  it("Should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
});
