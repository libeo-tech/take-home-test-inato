import { Drug, Pharmacy } from "./types";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drug = new Drug("test", 2, 3);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("test", 1, 2);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("should handle fast degradation of the drug after expiration", () => {
    const drug = new Drug("test", 0, 3);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("test", -1, 1);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("should return positive benefit", () => {
    const drug = new Drug("test", 0, 0);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("test", -1, 0);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("should return herbal tea with one more benefit before expiration", () => {
    const drug = new Drug("Herbal Tea", 10, 10);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Herbal Tea", 9, 11);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("should return herbal tea with two more benefits after expiration", () => {
    const drug = new Drug("Herbal Tea", 0, 10);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Herbal Tea", -1, 12);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("should return max benefit of 50", () => {
    const drug = new Drug("Herbal Tea", 0, 50);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Herbal Tea", -1, 50);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("Magic Pill should return same benefit and expireIn", () => {
    const drug = new Drug("Magic Pill", 1, 50);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Magic Pill", 1, 50);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("Herbal Tea Benefit should increases by 3 when there are 5 days left", () => {
    const drug = new Drug("Fervex", 5, 40);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Fervex", 4, 43);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("Herbal Tea Benefit should increases by 3 when there is 1 day left", () => {
    const drug = new Drug("Fervex", 1, 40);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Fervex", 0, 43);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("Herbal Tea Benefit should increases by 2 when there are 6 left", () => {
    const drug = new Drug("Fervex", 6, 40);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Fervex", 5, 42);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("Herbal Tea Benefit should increases by 2 when there are 10 days left", () => {
    const drug = new Drug("Fervex", 10, 40);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Fervex", 9, 42);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("Herbal Tea Benefit should increases by 1 when there are 11 days left", () => {
    const drug = new Drug("Fervex", 11, 40);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Fervex", 10, 41);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("Herbal Tea Benefit should be 0 when there are 0 days left", () => {
    const drug = new Drug("Fervex", 0, 40);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Fervex", -1, 0);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });

  it("Dafalgan Benefit should decrease by 2", () => {
    const drug = new Drug("Dafalgan", 0, 40);
    const pharmacy = new Pharmacy([drug]);
    const res = new Drug("Dafalgan", -1, 38);
    expect(pharmacy.updateBenefitValue()).toEqual([res]);
  });
});
