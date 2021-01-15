import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Random drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });
  });
  describe("Herbal Tea", () => {
    it("should increase benefit when benefit is 0", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 12, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 11, 1)]);
    });
    it("should increase benefit for a valid date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 12, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 11, 7)]);
    });
    it("should increase benefit for the last date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });
    it("should increase benefit by two for an epirated date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -4, 8)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -5, 10)]);
    });
    it("should not increase benefit when already maxed out when the date is valid", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 12, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 11, 50)]);
    });
    it("should not increase benefit when already maxed out when the date is expirated", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -12, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -13, 50)]);
    });
  });
  describe("Magic Pill", () => {
    it("should not increase benefit for a valid date", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 12, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 12, 6)]);
    });
    it("should not increase benefit for the last date", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 0, 4)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 0, 4)]);
    });
    it("should not increase benefit for an epirated date", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", -4, 8)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", -4, 8)]);
    });
    it("should not increase benefit when already maxed out when the date is valid", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 12, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 12, 50)]);
    });
  });
  describe("Fervex", () => {
    it("should increase benefit when benefit is 0", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 12, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 11, 1)]);
    });
    it("should increase benefit by one for a valid date over 10 days", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 12, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 11, 7)]);
    });
    it("should increase benefit by two for a valid date below 10 days", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 8, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 7, 8)]);
    });
    it("should increase benefit by tree for a valid date below 5 days", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 4, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 3, 9)]);
    });
    it("should stop benefit for the last date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
    it("should drop benefit to zero for an epirated date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", -1, 13)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -2, 0)]);
    });
    it("should not increase benefit when already maxed out when the date is valid", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 12, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 11, 50)]);
    });
    it("should still have a benefit at zero when the date is expirated", () => {
      expect(
        new Pharmacy([new Drug("Fervex", -12, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -13, 0)]);
    });
  });
});
