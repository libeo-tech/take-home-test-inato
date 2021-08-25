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

  describe("Fervex", () => {
    it("should increase the benefit twice when there are 10 days or less and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 15, 12)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 14, 13)]);
    });

    it("should increase the benefit by 3 when there are 5 days or less and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 1, 6)]);
    });

    it("should drop the benefit to 0 and decrease expiresIn after the expiration date. ", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 9)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });

    it("should not increase benefit more than 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 15, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 14, 50)]);
    });
  });
});
