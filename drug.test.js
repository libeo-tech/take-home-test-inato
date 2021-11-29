import { Drug } from "./drug";

describe("Drug", () => {
  describe("#constructor", () => {
    it("should throw if a drug is intialized with a benefit < 0", () => {
      expect(() => new Drug("Doliprane", 20, -1)).toThrowError(
        new Error("benefit must be > 0")
      );
    });
    it("should throw if a drug is intialized with a benefit > 50", () => {
      expect(() => new Drug("Doliprane", 20, 51)).toThrowError(
        new Error("benefit must be < MAX_BENEFIT")
      );
    });
  });

  describe("common drugs", () => {
    it("should decrease expiresIn and benefit by 1", () => {
      expect(new Drug("Doliprane", 20, 30).updateBenefit()).toEqual(
        new Drug("Doliprane", 19, 29)
      );
    });
    it("should not decrease the benefit if it's already equal to 0", () => {
      expect(new Drug("Doliprane", 20, 0).updateBenefit()).toEqual(
        new Drug("Doliprane", 19, 0)
      );
    });
    it("should decrease expiresIn and benefit by 2 if expiresIn is negative", () => {
      expect(new Drug("Doliprane", 0, 30).updateBenefit()).toEqual(
        new Drug("Doliprane", -1, 28)
      );
    });

    it("should decrease expiresIn and benefit by 2 if expiresIn is negative without exceeding 0", () => {
      expect(new Drug("Doliprane", -5, 1).updateBenefit()).toEqual(
        new Drug("Doliprane", -6, 0)
      );
    });
  });

  describe("Herbal Tea", () => {
    it("should decrease expiresIn and increase benefit by 1", () => {
      expect(new Drug("Herbal Tea", 20, 30).updateBenefit()).toEqual(
        new Drug("Herbal Tea", 19, 31)
      );
    });
    it("should decrease expiresIn and let the benefit at its maximum (50)", () => {
      expect(new Drug("Herbal Tea", 20, 50).updateBenefit()).toEqual(
        new Drug("Herbal Tea", 19, 50)
      );
    });
    it("should decrease expiresIn and increase benefit by 2 if expiresIn is negative", () => {
      expect(new Drug("Herbal Tea", 0, 30).updateBenefit()).toEqual(
        new Drug("Herbal Tea", -1, 32)
      );
    });
  });

  describe("Magic Pill", () => {
    it("should not change expiresIn of benefit", () => {
      expect(new Drug("Magic Pill", 20, 30).updateBenefit()).toEqual(
        new Drug("Magic Pill", 20, 30)
      );
    });
  });

  describe("Fervex", () => {
    it("should decrease expiresIn and increase benefit by 1", () => {
      expect(new Drug("Fervex", 20, 30).updateBenefit()).toEqual(
        new Drug("Fervex", 19, 31)
      );
    });
    it("should decrease expiresIn and increase benefit by 2 if 5 <= expiresIn <= 10 ", () => {
      expect(new Drug("Fervex", 10, 30).updateBenefit()).toEqual(
        new Drug("Fervex", 9, 32)
      );
    });

    it("should decrease expiresIn and increase benefit if 5 <= expiresIn <= 10 without exceeding 50", () => {
      expect(new Drug("Fervex", 10, 49).updateBenefit()).toEqual(
        new Drug("Fervex", 9, 50)
      );
    });

    it("should decrease expiresIn and increase benefit by 3 if 0 <= expiresIn < 5 ", () => {
      expect(new Drug("Fervex", 5, 30).updateBenefit()).toEqual(
        new Drug("Fervex", 4, 33)
      );
    });

    it("should decrease expiresIn and increase benefit by 3 if 0 <= expiresIn < 5 without exceeding 50", () => {
      expect(new Drug("Fervex", 5, 48).updateBenefit()).toEqual(
        new Drug("Fervex", 4, 50)
      );
    });

    it("should decrease expiresIn and set benefit a 0 if expiresIn is <= 0", () => {
      expect(new Drug("Fervex", 0, 30).updateBenefit()).toEqual(
        new Drug("Fervex", -1, 0)
      );
    });
  });
});
