import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Normal drugs", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease the benefit twice as fast after expiration", () => {
      expect(
        new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", -2, 1)]);
    });

    it("should never have negative benefits", () => {
      expect(
        new Pharmacy([new Drug("test", -1, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", -2, 0)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });

    it("should increase the benefit twice as fast after expiration", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 5)]);
    });

    it("should never have benefits above 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 50)]);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 19, 4)]);
    });

    it("should increase the benefit by 2 when there are 10 days or less before expiration", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 8, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 7, 5)]);
    });

    it("should increase the benefit by 3 when there are 5 days or less before expiration", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 3, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 2, 6)]);
    });

    it("should have 0 benefit after expiration", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 36)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });

    it("should never have benefits above 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 7, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 6, 50)]);
    });
  });

  describe("Magic Pill", () => {
    it("should never expires nor decrease in benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 8, 42)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 8, 42)]);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease the benefit twice as fast as normal drugs", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 1, 1)]);
    });

    it("should decrease the benefit twice as fast after expiration", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", -1, 8)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -2, 4)]);
    });

    it("should never have negative benefits", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", -1, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -2, 0)]);
    });
  });
});
