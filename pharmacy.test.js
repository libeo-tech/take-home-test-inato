import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("when any drug is given", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should not decrease benefit under 0", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 0)]);
    });

    it("should decrease benefit twice as fast once expriration date is passed", () => {
      expect(
        new Pharmacy([new Drug("test", -1, 42)]).updateBenefitValue()
      ).toEqual([new Drug("test", -2, 40)]);
    });
  });

  describe("when the given drug is Magic Pill", () => {
    it("should not decrease the benefit and expireIn", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 15, 40)]);
    });
  });

  describe("when the given drug is Herbal Tea", () => {
    it("should increase the benefit and decrese expireIn", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 15, 40)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 14, 41)]);
    });

    it("should not increase the benefit past 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 15, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 14, 50)]);
    });

    it("should increase benefit twice as fast once expriration date is passed", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 40)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 42)]);
    });
  });
});
