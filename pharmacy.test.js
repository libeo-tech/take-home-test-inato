import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("when any drug is given", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("benefit can not be negative", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 0)]);
    });

    it("benefit can not be more than 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 2, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 1, 50)]);
    });

    it("benefit decrease twice as fast once expriration date is passed", () => {
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
});
