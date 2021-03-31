import { Drug, Pharmacy } from "../src/pharmacy";

describe("Pharmacy", () => {
  describe("Normal drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("benefit should not be negative", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 0)]);
    });

    it("once the expiration date has passed, benefit should decrease twice as fast", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 4)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 2)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not decrease the benefit nor expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });

    it("should increase the benefit twice as fast after expiration date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });

    it("the benefit of an item should never be more than 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -4, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -5, 50)]);
    });
  });

  describe("Fervex", () => {
    it("benefit should drops to 0 after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });

    it("benefit should increase by 3 when there are 5 days or less before expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 33)]);
    });

    it("benefit should increase by 2 when there are 10 days or less before expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 6, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 5, 32)]);

      expect(
        new Pharmacy([new Drug("Fervex", 10, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 32)]);
    });

    it("benefit should increase by 1 when expiration date approaches", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 11, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 10, 31)]);
    });

    it("benefit should not be negative", () => {
      expect(
        new Pharmacy([new Drug("Fervex", -1, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -2, 0)]);
    });

    it("the benefit of an item should never be more than 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 4, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 3, 50)]);
    });
  });
});
