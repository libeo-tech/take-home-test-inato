import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Generic drug", () => {
    it("should decrease the benefit before expiration", () => {
      const drugs = new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue();
      expect(drugs[0].benefit).toEqual(2);
    });

    it("should decrease the benefit twice as fast after the expiration", () => {
      const drugs = new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue();
      expect(drugs[0].benefit).toEqual(1);
    });

    it("should decrease the expiration date", () => {
      const drugs = new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue();
      expect(drugs[0].expiresIn).toEqual(1);
    });

    it("should work with several drugs", () => {
      const drugs = new Pharmacy([
        new Drug("test", 2, 3),
        new Drug("test 2", 5, 5),
      ]).updateBenefitValue();
      expect(drugs).toEqual([new Drug("test", 1, 2), new Drug("test 2", 4, 4)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit before expiration", () => {
      const drugs = new Pharmacy([
        new Drug("Herbal Tea", 2, 3),
      ]).updateBenefitValue();
      expect(drugs[0].benefit).toEqual(4);
    });

    it("should increase the benefit twice as fast after expiration", () => {
      const drugs = new Pharmacy([
        new Drug("Herbal Tea", 0, 3),
      ]).updateBenefitValue();
      expect(drugs[0].benefit).toEqual(5);
    });

    it("should decrease the expiration date", () => {
      const drugs = new Pharmacy([
        new Drug("Herbal Tea", 2, 3),
      ]).updateBenefitValue();
      expect(drugs[0].expiresIn).toEqual(1);
    });
  });

  describe("Magic Pill", () => {
    it("should never lose benefit", () => {
      const drugs = new Pharmacy([
        new Drug("Magic Pill", 2, 3),
      ]).updateBenefitValue();
      expect(drugs[0].benefit).toEqual(3);
    });

    it("should never expire", () => {
      const drugs = new Pharmacy([
        new Drug("Magic Pill", 2, 3),
      ]).updateBenefitValue();
      expect(drugs[0].expiresIn).toEqual(2);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit before expiration", () => {
      const drugs = new Pharmacy([
        new Drug("Fervex", 15, 3),
      ]).updateBenefitValue();
      expect(drugs[0].benefit).toEqual(4);
    });

    it("should increase the benefit by 2 when 10 days or less before expiration", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 10, 3)]);
      let drugs = pharmacy.updateBenefitValue();
      expect(drugs[0].benefit).toEqual(5);
      drugs = pharmacy.updateBenefitValue();
      expect(drugs[0].benefit).toEqual(7);
    });

    it("should increase the benefit by 3 when 5 days or less before expiration", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 5, 3)]);
      let drugs = pharmacy.updateBenefitValue();
      expect(drugs[0].benefit).toEqual(6);
      drugs = pharmacy.updateBenefitValue();
      expect(drugs[0].benefit).toEqual(9);
    });

    it("should drop the benefit to 0 after expiration", () => {
      const drugs = new Pharmacy([
        new Drug("Fervex", 0, 10),
      ]).updateBenefitValue();
      expect(drugs[0].benefit).toEqual(0);
    });

    it("should decrease the expiration date", () => {
      const drugs = new Pharmacy([
        new Drug("Fervex", 2, 3),
      ]).updateBenefitValue();
      expect(drugs[0].expiresIn).toEqual(1);
    });
  });
});
