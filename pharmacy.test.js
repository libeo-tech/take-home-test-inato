import { Drug, Pharmacy } from "./pharmacy";
import { Linear } from "./revaluations";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3, [new Linear()])]).updateBenefitValue().toString()).toEqual(
      [new Drug("test", 1, 2, [new Linear()])].toString()
    );
  });
});
