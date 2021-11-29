import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("common drugs", () => {
    it("should decrease expiresIn and benefit by 1", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 20, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", 19, 29)]);
    });
    it("should not decrease the benefit if it's already equal to 0", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 20, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", 19, 0)]);
    });
    it("should decrease expiresIn and benefit by 2 if expiresIn is negative", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 0, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", -1, 28)]);
    });

    it("should decrease expiresIn and benefit by 2 if expiresIn is negative without exceeding 0", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", -5, 1)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", -6, 0)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should decrease expiresIn and increase benefit by 1", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 20, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 19, 31)]);
    });
    it("should decrease expiresIn and let the benefit at its maximum (50)", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 20, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 19, 50)]);
    });
    it("should decrease expiresIn and increase benefit by 2 if expiresIn is negative", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 32)]);
    });

    it("should decrease expiresIn and increase benefit without exceeding 50 if expiresIn is negative", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 50)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not change expiresIn of benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 20, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 20, 30)]);
    });
  });

  describe("Fervex", () => {
    it("should decrease expiresIn and increase benefit by 1", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 20, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 19, 31)]);
    });
    it("should decrease expiresIn and increase benefit by 2 if 5 <= expiresIn <= 10 ", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 32)]);
    });
    it("should decrease expiresIn and increase benefit without exceeding 50 if 5 <= expiresIn <= 10 ", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 50)]);
    });
    it("should decrease expiresIn and increase benefit by 3 if 0 <= expiresIn < 5 ", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 33)]);
    });

    it("should decrease expiresIn and increase benefit by 3 if 0 <= expiresIn < 5 without exceeding 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 48)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 50)]);
    });
    it("should decrease expiresIn and set benefit a 0 if expiresIn is <= 0", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });

  it("should initialized a Pharmacy without drugs", () => {
    expect(new Pharmacy().drugs).toEqual([]);
  });

  it("should update the benefit and expiresIn of all drugs", () => {
    const initialDrugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40),
    ];

    const updatedDrugs = [
      new Drug("Doliprane", 19, 29),
      new Drug("Herbal Tea", 9, 6),
      new Drug("Fervex", 4, 43),
      new Drug("Magic Pill", 15, 40),
    ];

    expect(new Pharmacy(initialDrugs).updateBenefitValue()).toEqual(
      updatedDrugs
    );
  });
});
