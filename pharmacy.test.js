import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  describe("Herbal Tea", () => {
    it("Benefit increases the older it gets", () => {
      const pharmacy = new Pharmacy([new Drug("Herbal Tea", 2, 2)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", 1, 3)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", 0, 4)
      ]);
    });

    it("Benefit increases twice as fast after the expiration", () => {
      const pharmacy = new Pharmacy([new Drug("Herbal Tea", 0, 2)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", -1, 4)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", -2, 6)
      ]);
    });
  });

  describe("Fervex", () => {
    it("Benefit increases the older it gets", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 20, 3)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Fervex", 19, 4)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Fervex", 18, 5)
      ]);
    });

    it("Benefit increases by 2 when there are 10 days or less", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 10, 3)]);

      expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 9, 5)]);
      expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 8, 7)]);
    });

    it("Benefit increases by 3 when there are 5 days or less", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 5, 3)]);

      expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 4, 6)]);
      expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 3, 9)]);
    });

    it("Benefit drops to 0 after the expiration date", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 1, 3)]);

      expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 0, 6)]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Fervex", -1, 0)
      ]);
    });
  });

  describe("Magic Pill", () => {
    it("never expires nor decreases in Benefit", () => {
      const pharmacy = new Pharmacy([new Drug("Magic Pill", 10, 3)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Magic Pill", 10, 3)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Magic Pill", 10, 3)
      ]);
    });
  });

  describe("Doliprane (default behavior)", () => {
    it("Benefit decreases the older it gets", () => {
      const pharmacy = new Pharmacy([new Drug("Doliprane", 10, 5)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Doliprane", 9, 4)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Doliprane", 8, 3)
      ]);
    });

    it("Benefit decreases twice as fast when expired", () => {
      const pharmacy = new Pharmacy([new Drug("Doliprane", 1, 8)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Doliprane", 0, 7)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Doliprane", -1, 5)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Doliprane", -2, 3)
      ]);
    });
  });

  describe("Dafalgan", () => {
    it("Benefit decreases twice as fast as normal drugs", () => {
      const pharmacy = new Pharmacy([new Drug("Dafalgan", 10, 5)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Dafalgan", 9, 3)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Dafalgan", 8, 1)
      ]);
    });

    it("Benefit decreases twice as fast when expired", () => {
      const pharmacy = new Pharmacy([new Drug("Dafalgan", 1, 8)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Dafalgan", 0, 6)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Dafalgan", -1, 2)
      ]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Dafalgan", -2, 0)
      ]);
    });
  });
});
