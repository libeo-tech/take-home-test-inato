import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Common drugs", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease the benefit twice after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("test", -2, 6)]).updateBenefitValue()
      ).toEqual([new Drug("test", -3, 4)]);
    });

    it("should only decrease expiresIn if benefit is 0", () => {
      expect(
        new Pharmacy([new Drug("test", -1, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", -2, 0)]);
    });
  });
});
