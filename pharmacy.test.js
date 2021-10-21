import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Common drugs", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", 1, 2)]);
    });
    it("should decrease the benefit by 2 once the expiration date is passed", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", -1, 1)]);
    });
    it("The benefit should never be negative", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 0, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", -1, 0)]);
    });
    it("The benefit should never be more than 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 50)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase  before expiration date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 5, 1)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 4, 2)]);
    });
    it("should increase the benefit by 2 once the expiration date is passed", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 1)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 3)]);
    });
  });

  describe("Magic Pill", () => {
    it("The Benefit should never expire nor decrease", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 5, 1)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 5, 1)]);
    });
  });
  describe("Fervex", () => {
    it("should increase the benefit before expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 20, 23)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 19, 24)]);
    });
    it("should increase the benefit by 2 when expire in 10 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 22)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 24)]);
      expect(
        new Pharmacy([new Drug("Fervex", 7, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 6, 32)]);
    });
    it("should increase the benefit by 3 when expire in 5 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 47)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 50)]);
      expect(
        new Pharmacy([new Drug("Fervex", 1, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 0, 50)]);
    });
    it("should drop the benefit to 0 after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease the benefit by 2", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 10, 22)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 9, 20)]);
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -1, 0)]);
    });
  });
});
