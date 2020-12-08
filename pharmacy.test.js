import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("when any drug is given", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should not decrease benefit under 0", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 0)]);
    });

    it("should decrease benefit twice as fast once expriration date is passed", () => {
      expect(
        new Pharmacy([new Drug("test", -1, 42)]).updateBenefitValue()
      ).toEqual([new Drug("test", -2, 40)]);
    });
  });

  describe("when Dafalgan is given", () => {
    it("should decrease the benefit by two", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 1, 1)]);
    });

    it("should not decrease benefit under 0", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 1, 0)]);
    });

    it("should decrease benefit twice as fast once expriration date is passed", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", -1, 42)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -2, 38)]);
    });
  });

  describe("when the given drug is Magic Pill", () => {
    it("should not decrease the benefit and expireIn", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 15, 40)]);
    });
  });

  describe("when the given drug is Herbal Tea or Fervex", () => {
    it("should increase the benefit and decrease expireIn", () => {
      expect(
        new Pharmacy([
          new Drug("Herbal Tea", 15, 40),
          new Drug("Fervex", 13, 35)
        ]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 14, 41), new Drug("Fervex", 12, 36)]);
    });

    it("should not increase the benefit past 50", () => {
      expect(
        new Pharmacy([
          new Drug("Herbal Tea", 15, 50),
          new Drug("Fervex", 13, 50)
        ]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 14, 50), new Drug("Fervex", 12, 50)]);
    });

    describe("when the given drug is Herbal Tea", () => {
      it("should increase benefit twice as fast once expriration date is passed", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", -1, 40)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -2, 42)]);
      });
    });

    describe("when the given drug is Fervex", () => {
      it("should increase the benefit by 2 when expiration date <= 10 days", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 10, 40)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 9, 42)]);
      });

      it("should increase the benefit by 3 when expiration date <= 5 days", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 5, 40)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 4, 43)]);
      });

      it("should set benefit to 0 once expriration date is passed", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 0, 40)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", -1, 0)]);
      });
    });
  });
});
