import { Drug, Pharmacy } from "../pharmacy";

describe("Herbal Tea", () => {
  it("should increase in benefit", () => {
    const updatedDrug = new Pharmacy([new Drug("Herbal Tea", 1, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(0);
    expect(updatedDrug.benefit).toEqual(2);
  });

  it("should increase in benefit twice as fast after expiration", () => {
    const updatedDrug = new Pharmacy([new Drug("Herbal Tea", 0, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(-1);
    expect(updatedDrug.benefit).toEqual(3);
  });
});
