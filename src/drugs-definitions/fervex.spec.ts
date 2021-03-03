import { Drug, Pharmacy } from "../pharmacy";

describe("Fervex", () => {
  it("should increase in benefit", () => {
    const updatedDrug = new Pharmacy([new Drug("Fervex", 12, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(11);
    expect(updatedDrug.benefit).toEqual(2);
  });

  it("should increase in benefit by 2 as its expiration date is in 10 days or less", () => {
    const updatedDrug = new Pharmacy([new Drug("Fervex", 10, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(9);
    expect(updatedDrug.benefit).toEqual(3);
  });

  it("should increase in benefit by 3 as its expiration date is in 5 days or less", () => {
    const updatedDrug = new Pharmacy([new Drug("Fervex", 5, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(4);
    expect(updatedDrug.benefit).toEqual(4);
  });

  it("should set benefit to 0 after expiration", () => {
    const updatedDrug = new Pharmacy([new Drug("Fervex", 0, 5)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(-1);
    expect(updatedDrug.benefit).toEqual(0);
  });
});
