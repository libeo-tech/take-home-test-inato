import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn of unregistered drug", () => {
    const updatedDrug = new Pharmacy([new Drug("unregistered", 2, 3)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(1);
    expect(updatedDrug.benefit).toEqual(2);
  });

  it("should decrease the benefit of unregistered drug twice as fast on expiration", () => {
    const updatedDrug = new Pharmacy([new Drug("unregistered", 0, 3)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(-1);
    expect(updatedDrug.benefit).toEqual(1);
  });

  it("should not decrease the benefit of unregistered drug below 0", () => {
    const updatedDrug = new Pharmacy([new Drug("unregistered", 0, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(-1);
    expect(updatedDrug.benefit).toEqual(0);
  });

  it("should not increase the benefit of a drug above 50", () => {
    const updatedDrug = new Pharmacy([new Drug("Herbal Tea", 1, 50)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(0);
    expect(updatedDrug.benefit).toEqual(50);
  });
});
