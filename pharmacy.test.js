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
    it("The Benefit of an item should never be more than 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 50)]);
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 50)]);
    });
  });
  describe("Herbal Tea case", () => {
    it("should increases in Benefit the older it gets", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });
    it("Benefit should increase twice as fast after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 2)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 4)]);
    });
  });
  describe("Magic Pill case", () => {
    it("should never expire nor decrease in Benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });
  describe("Fervex case", () => {
    it("should increase in Benefit before expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 11, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 10, 51)]);
    });
    it("Benefit should increase by 2 when there are 10 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 52)]);
      expect(
        new Pharmacy([new Drug("Fervex", 6, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 5, 52)]);
    });
    it("Benefit should increase by 3 when there are 5 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 53)]);
      expect(
        new Pharmacy([new Drug("Fervex", 1, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 0, 53)]);
    });
    it("Benefit should drop to 0 after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });
});
