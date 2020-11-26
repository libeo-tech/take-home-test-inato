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

    it("should not exceed a benefit of 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 3, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 2, 50)]);
    });
  });

  describe("Fervex", () => {
    it("should increase in benefit by 2 when expires in 10 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 8, 5)]);
    });

    it("should increase in benefit by 3 when expires in 5 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 4, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 3, 6)]);
    });

    it("should drop benefit to 0 when expired", () => {
      expect(
        new Pharmacy([new Drug("Fervex", -1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -2, 0)]);
    });

    it("should not exceed a benefit of 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 3, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 2, 50)]);
    });
  });

  describe("Dafalgan", () => {
    it("should degrades in Benefit twice as fast as normal drugs", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 1, 1)]);
    });

    it("should degrades in Benefit twice as fast as normal drugs", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 10)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -1, 6)]);
    });
  });
});
