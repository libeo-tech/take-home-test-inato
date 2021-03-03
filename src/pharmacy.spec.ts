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


  it("Herbal Tea increases in benefit", () => {
    const updatedDrug = new Pharmacy([new Drug("Herbal Tea", 1, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(0);
    expect(updatedDrug.benefit).toEqual(2);
  });

  it("Herbal Tea increases in benefit twice as fast after expiration", () => {
    const updatedDrug = new Pharmacy([new Drug("Herbal Tea", 0, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(-1);
    expect(updatedDrug.benefit).toEqual(3);
  });


  it("Magic Pill never expires nor decreases in benefit", () => {
    const updatedDrug = new Pharmacy([new Drug("Magic Pill", 0, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(0);
    expect(updatedDrug.benefit).toEqual(1);
  });


  it("Fervex increases in benefit only as its expiration date approaches", () => {
    const updatedDrug = new Pharmacy([new Drug("Fervex", 12, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(11);
    expect(updatedDrug.benefit).toEqual(2);
  });

  it("Fervex increases in benefit by 2 as its expiration date is in 10 days or less", () => {
    const updatedDrug = new Pharmacy([new Drug("Fervex", 10, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(9);
    expect(updatedDrug.benefit).toEqual(3);
  });

  it("Fervex increases in benefit by 3 as its expiration date is in 5 days or less", () => {
    const updatedDrug = new Pharmacy([new Drug("Fervex", 5, 1)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(4);
    expect(updatedDrug.benefit).toEqual(4);
  });

  it("Fervex benefit is 0 after expiration", () => {
    const updatedDrug = new Pharmacy([new Drug("Fervex", 0, 5)]).updateBenefitValue()[0];
    expect(updatedDrug.expiresIn).toEqual(-1);
    expect(updatedDrug.benefit).toEqual(0);
  });
});
