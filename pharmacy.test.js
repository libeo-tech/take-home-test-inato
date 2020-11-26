import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy updateBenefitValue", () => {
  describe("generic rules", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("generic", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("generic", 1, 2)]);
    });

    it("should degrade twice as fast if expired ", () => {
      expect(
        new Pharmacy([new Drug("generic", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("generic", -1, 1)]);
    });

    it("should not have a negative benefit ", () => {
      expect(
        new Pharmacy([new Drug("generic", 2, 0)]).updateBenefitValue()
      ).toEqual([new Drug("generic", 1, 0)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not expires nor decrease in benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });
});
