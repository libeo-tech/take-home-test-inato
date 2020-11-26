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

    it("should not exceed a benefit of 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 3, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 2, 50)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not expires nor decrease in benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase in benefit", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });

    it("should increase twice as fast after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });
  });
});
