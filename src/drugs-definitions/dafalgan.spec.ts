import { Drug, Pharmacy } from "../pharmacy";

describe("Dafalgan", () => {
  it("should decrease in benefit twice as fast as normal drugs", () => {
    const updatedDrug = new Pharmacy([new Drug("Dafalgan", 5, 5)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(4);
    expect(updatedDrug.benefit).toEqual(3);
  });
});
