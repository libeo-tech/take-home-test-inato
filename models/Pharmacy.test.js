import { Pharmacy } from "./pharmacy";
import { Drug } from "./Drug";
import { DrugName } from "./DrugName";

describe("Pharmacy", () => {
  it("should decrease expiration date by 1", () => {
    const drug = new Drug("test", 2, 3);
    new Pharmacy([drug]).updateBenefitValue();
    expect(drug.expiresIn).toEqual(1);
  });
  it("should decrease the benefit by 1", () => {
    const drug = new Drug("test", 2, 3);
    new Pharmacy([drug]).updateBenefitValue();
    expect(drug.benefit).toEqual(2);
  });
  it("should decrease the benefit by 2 once expiration date has passed", () => {
    const drug = new Drug("test", 0, 4);
    new Pharmacy([drug]).updateBenefitValue();
    expect(drug.benefit).toEqual(2);
  });
  it("should a benefit >= 0", () => {
    const drugs = [];
    for (const drugName of Object.values(DrugName)) {
      drugs.push(new Drug(drugName, 0, 0));
    }
    new Pharmacy(drugs).updateBenefitValue();
    drugs.forEach(drug => {
      expect(drug.benefit).toBeGreaterThanOrEqual(0);
    });
  });
  it("should have a benefit <= 50", () => {
    const drugs = [];
    for (const drugName of Object.values(DrugName)) {
      drugs.push(new Drug(drugName, 0, 50));
    }
    new Pharmacy(drugs).updateBenefitValue();
    drugs.forEach(drug => {
      expect(drug.benefit).toBeLessThanOrEqual(50);
    });
  });
  describe(DrugName.HERBAL_TEA, () => {
    it("should increase the benefit by 1", () => {
      const drug = new Drug(DrugName.HERBAL_TEA, 1, 1);
      new Pharmacy([drug]).updateBenefitValue();
      expect(drug.benefit).toEqual(2);
    });
    it("should increase the benefit by 2 once expiration date has passed ", () => {
      const drug = new Drug(DrugName.HERBAL_TEA, 0, 1);
      new Pharmacy([drug]).updateBenefitValue();
      expect(drug.benefit).toEqual(3);
    });
  });
  describe(DrugName.MAGIC_PILL, () => {
    it("should never expires nor decreases in benefit", () => {
      const drug = new Drug(DrugName.MAGIC_PILL, 5, 1);
      new Pharmacy([drug]).updateBenefitValue();
      expect(drug.benefit).toEqual(1);
      expect(drug.expiresIn).toEqual(5);
    });
  });
  describe(DrugName.FERVEX, () => {
    it("should increase the benefit by 1 when expiration is > 10 days", () => {
      const drug = new Drug(DrugName.FERVEX, 11, 0);
      new Pharmacy([drug]).updateBenefitValue();
      expect(drug.benefit).toEqual(1);
    });
    it("should increase the benefit by 2 when expiration is >5 and <11", () => {
      const drug = new Drug(DrugName.FERVEX, 10, 0);
      const pharmacy = new Pharmacy([drug]);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      expect(drug.benefit).toEqual(10);
    });
    it("should increase the benefit by 3 expiration is <6", () => {
      const drug = new Drug(DrugName.FERVEX, 5, 0);
      const pharmacy = new Pharmacy([drug]);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();
      expect(drug.benefit).toEqual(15);
    });
    it("should drop benefit to 0 after expiration date", () => {
      const drug = new Drug(DrugName.FERVEX, 0, 10);
      new Pharmacy([drug]).updateBenefitValue();
      expect(drug.benefit).toEqual(0);
    });
  });
  describe(DrugName.DAFALGAN, () => {
    it("should decrease the benefit by 2 when expiration date has not passed", () => {
      const drug = new Drug(DrugName.DAFALGAN, 11, 10);
      new Pharmacy([drug]).updateBenefitValue();
      expect(drug.benefit).toEqual(8);
    });
    it("should decrease the benefit by 4 when expiration date has passed", () => {
      const drug = new Drug(DrugName.DAFALGAN, 0, 10);
      new Pharmacy([drug]).updateBenefitValue();
      expect(drug.benefit).toEqual(6);
    });
  });
});
