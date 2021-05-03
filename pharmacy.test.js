import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [new Drug("test", 2, 3)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("test", 1, 2)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should decrease the benefit twice as fast when and expiresIn is below zero", () => {
    const drugs = [new Drug("test", -1, 4)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("test", -2, 2)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should not decrease benefit below zero", () => {
    const drugs = [new Drug("test", 1, 0)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("test", 0, 0)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should increase benefit of the Herbal Tea", () => {
    const drugs = [new Drug("Herbal Tea", 1, 0)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Herbal Tea", 0, 1)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should increase benefit of the Herbal Tea twice as fast after expiration", () => {
    const drugs = [new Drug("Herbal Tea", -1, 0)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Herbal Tea", -2, 2)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should not increase benefit above fifty", () => {
    const drugs = [new Drug("Herbal Tea", 1, 50)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Herbal Tea", 0, 50)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should not increase or decrease benefit and expiration of the MagicPill", () => {
    const drugs = [new Drug("Magic Pill", 3, 3)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Magic Pill", 3, 3)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should increase benefit by 1 of Fervex if expires in more than 10 days", () => {
    const drugs = [new Drug("Fervex", 15, 3)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Fervex", 14, 4)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should increase benefit by 2 of Fervex if expires in more than 5 days and less than 10 days", () => {
    const drugs = [new Drug("Fervex", 8, 3)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Fervex", 7, 5)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should increase benefit by 3 of Fervex if expires in less than 5 days", () => {
    const drugs = [new Drug("Fervex", 8, 3)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Fervex", 7, 6)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should drop benefit to 0 of Fervex if expiration date is past", () => {
    const drugs = [new Drug("Fervex", -2, 3)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Fervex", -3, 0)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should drop benefit of Dafalgan twice as fast as normal drugs", () => {
    const drugs = [new Drug("Dafalgan", 3, 3)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Dafalgan", 2, 1)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });

  it("should drop benefit of Dafalgan twice as fast as normal drugs after expiration", () => {
    const drugs = [new Drug("Dafalgan", -1, 5)];
    const pharmacy = new Pharmacy(drugs);

    const expectedDrugs = [new Drug("Dafalgan", -2, 1)];

    expect(pharmacy.updateBenefitValue()).toEqual(expectedDrugs);
  });
});
