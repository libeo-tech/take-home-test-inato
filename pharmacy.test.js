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

  describe("Magic Pill", () => {
    it("should not change the benefit or expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 15, 40)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 15, 40)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 14, 41)]);
    });

    it("should increase the benefit twice and decrease expiresIn after expiration date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -2, 18)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -3, 20)]);
    });

    it("should not increase benefit more than 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 15, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 14, 50)]);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease the benefit twice and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 15, 40)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 14, 38)]);
    });

    it("should decrease the benefit by 4 and decrease expiresIn after expiration date", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", -1, 35)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -2, 31)]);
    });
  });
});
