import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("test", 2, 3)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("test", 1, 2)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });
});
