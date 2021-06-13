import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease benefit and expiresIn of a drug", () => {
    const drugs = [new Drug("test", 2, 3)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([new Drug("test", 1, 2)]);
  });

  it("should decrease benefit and expiresIn of several drugs", () => {
    const drugs = [new Drug("test1", 2, 3), new Drug("test2", 4, 5)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([
      new Drug("test1", 1, 2),
      new Drug("test2", 3, 4)
    ]);
  });

  it("should decrease benefit and expiresIn several times", () => {
    const drugs = [new Drug("test1", 2, 3), new Drug("test2", 4, 5)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([
      new Drug("test1", 0, 1),
      new Drug("test2", 2, 3)
    ]);
  });

  it("should not decrease benefit below zero", () => {
    const drugs = [new Drug("test", 99, 1)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([new Drug("test", 97, 0)]);
  });

  it("should decrease benefit twice as fast after drug expires", () => {
    const drugs = [new Drug("test", 0, 6)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([new Drug("test", -2, 2)]);
  });

  it("should not decrease benefit below zero, even if drug expired", () => {
    const drugs = [new Drug("test", 0, 2)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();

    expect(pharmacy.drugs).toEqual([new Drug("test", -2, 0)]);
  });

  describe("Herbal Tea", () => {
    it("should increase benefit until it expires", () => {
      const drugs = [new Drug("Herbal Tea", 2, 2)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Herbal Tea", 0, 4)]);
    });

    it("should increase benefit twice as fast after it expires", () => {
      const drugs = [new Drug("Herbal Tea", 0, 2)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Herbal Tea", -2, 6)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not change benefit or expiresIn", () => {
      const drugs = [new Drug("Magic Pill", 2, 2)];
      const pharmacy = new Pharmacy(drugs);
      pharmacy.updateBenefitValue();
      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs).toEqual([new Drug("Magic Pill", 2, 2)]);
    });
  });
});
