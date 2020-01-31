import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Legacy tests, delete me at the end of refacto", () => {
    // TODO delete me
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });
  });

  describe("Base case, with a Regular drug", () => {
    it("should decrease expiresIn and benefit by 1 each", () => {
      expect(
        new Pharmacy([
          new Drug("Im not a special drug", 5, 5)
        ]).updateBenefitValue()
      ).toEqual([new Drug("Im not a special drug", 4, 4)]);
    });

    it("should decrease the benefit and expiresIn by 1 each - even with one day left", () => {
      expect(
        new Pharmacy([
          new Drug("Im not a special drug", 1, 5)
        ]).updateBenefitValue()
      ).toEqual([new Drug("Im not a special drug", 0, 4)]);
    });

    it("should decrease the benefit of a drug twice as fast (by 2) after its expiration", () => {
      expect(
        new Pharmacy([
          new Drug("Im not a special drug", 0, 5)
        ]).updateBenefitValue()
      ).toEqual([new Drug("Im not a special drug", -1, 3)]);
    });

    it("should stop decreasing benefit after it's reached 0", () => {
      expect(
        new Pharmacy([
          new Drug("Im not a special drug", -10, 2)
        ]).updateBenefitValue()
      ).toEqual([new Drug("Im not a special drug", -11, 0)]);
    });

    it("should stop decreasing benefit after it's reached 0 - tiny edge case", () => {
      expect(
        new Pharmacy([
          new Drug("Im not a special drug", -10, 1) // 1 - 2 => but should be smart enough to set benefit at 0
        ]).updateBenefitValue()
      ).toEqual([new Drug("Im not a special drug", -11, 0)]);
    });
  });

  describe("Herbal Teas cases", () => {
    it("should decrease expiresIn by 1 but benefit should increase by 1", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 5, 5)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 4, 6)]);
    });

    it("should decrease expiresIn by 1 but benefit should increase by 1, one day left", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 1, 5)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 0, 6)]);
    });

    it("should decrease expiresIn by 1 but benefit should increase by 2 - after expiration", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 5)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 7)]);
    });

    it("should decrease expiresIn by 1 but benefit should increase by 2 - its been 84 years", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -30681, 5)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -30682, 7)]);
    });
  });
});
