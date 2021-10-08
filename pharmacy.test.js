import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Normal case", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });
    it("should double degradation once expiration date is passed", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 2)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 0)]);
    });
    it("the benefit of an item is never negative", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 0)]);
    });
  });
});
