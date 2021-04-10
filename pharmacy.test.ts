import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Common Drugs", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });
    it("should decrease the benefit by 2 if expired", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 1)]);
    });
    it("should not decrease the benefit below 0", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 0)]);
    });
  });
  describe("Magic Pill", () => {
    it("should not update the benefit nor expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 18, 42)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 18, 42)]);
    });
  });
  describe("Herbal Tea", () => {
    it("should increase the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });
    it("should increase the benefit by 2 if expired", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });
    it("should not increase the benefit above 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 50)]);
    });
  });
  describe("Dafalgan", () => {
    it("should decrease the benefit and expiresIn by 2", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 1, 1)]);
    });
    it("should decrease the benefit by 4 if expired", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -1, 1)]);
    });
  });
  describe("Fervex", () => {
    it("should increase the benefit and expiresIn by 1 if expiresIn > 10", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 21, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 20, 4)]);
    });
    it("should increase the benefit and expiresIn by 2 if  5 > expiresIn >= 10", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 8, 5)]);
    });
    it("should increase the benefit and expiresIn by 2 if  0 > expiresIn >= 5", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 1, 6)]);
    });
    it("should set the benefit to 0 if expired", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 28)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });
});
