import { Drug, Pharmacy } from "../pharmacy";

describe("Magic Pill", () => {
  it("should never expires nor decreases in benefit", () => {
    const updatedDrug = new Pharmacy([new Drug("Magic Pill", 0, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(0);
    expect(updatedDrug.benefit).toEqual(1);
  });
});
