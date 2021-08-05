import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drug = new Drug("test", 2, 3);
    const expectedDrug = new Drug("test", 1, 2);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });

  it("should decrease the benefit twice as fast when the expiration date has passed", () => {
    const drug = new Drug("test", 0, 3);
    const expectedDrug = new Drug("test", -1, 1);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });

  it("should not decrease the benefit below 0", () => {
    const drug = new Drug("test", -1, 0);
    const expectedDrug = new Drug("test", -2, 0);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });

  it("should increase the benefit for HerbalTea", () => {
    const drug = new Drug("Herbal Tea", 10, 5);
    const expectedDrug = new Drug("Herbal Tea", 9, 6);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });

  it("should increase the benefit for HerbalTea twice as fast when the expiration date has passed", () => {
    const drug = new Drug("Herbal Tea", -1, 5);
    const expectedDrug = new Drug("Herbal Tea", -2, 7);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });

  it("should not increase the benefit of an item more than 50", () => {
    const drug = new Drug("Herbal Tea", 10, 50);
    const expectedDrug = new Drug("Herbal Tea", 9, 50);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });

  it("should not decrease the benefit or expire for Magic Pill", () => {
    const drug = new Drug("Magic Pill", 10, 50);
    const expectedDrug = new Drug("Magic Pill", 10, 50);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });

  it("should increase the benefit by 2 for Fervex when expiration date is in 10 days or less", () => {
    const drug = new Drug("Fervex", 9, 10);
    const expectedDrug = new Drug("Fervex", 8, 12);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });

  it("should increase the benefit by 3 for Fervex when expiration date is in 5 days or less", () => {
    const drug = new Drug("Fervex", 4, 10);
    const expectedDrug = new Drug("Fervex", 3, 13);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });

  it("should drop the benefit to 0 for Fervex after the expiration date", () => {
    const drug = new Drug("Fervex", 0, 10);
    const expectedDrug = new Drug("Fervex", -1, 0);
    expect(new Pharmacy([drug]).updateBenefitValue()).toEqual([expectedDrug]);
  });
});
