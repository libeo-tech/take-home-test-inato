/* eslint-disable prettier/prettier */

import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Default", () => {
    it("should decrease the benefit and expiresIn for default drugs", () => {
      expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue())
      .toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease the benefit twice and expiresIn for default drugs", () => {
      expect(new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue())
      .toEqual([new Drug("test", -2, 1)]);
    });

    it("should not decrease the benefit lower than 0 default drugs", () => {
      expect(new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue())
      .toEqual([new Drug("test", 0, 0)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit and decrease expiresIn for Herbal Tea drug", () => {
      expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue())
        .toEqual([new Drug("Herbal Tea", 1, 4)]);
    });

    it("should increase the benefit twice  and decrease expiresIn for Herbal Tea drug after the expiration date", () => {
      expect(new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue())
        .toEqual([new Drug("Herbal Tea", -2, 5)]);
    });

    it("should not increase the benefit greater than 50 for  Herbal Tea dru", () => {
      expect(new Pharmacy([new Drug("Herbal Tea", 1, 50)]).updateBenefitValue())
      .toEqual([new Drug("Herbal Tea", 0, 50)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not decrease the benefit and expiresIn for Magic Pill drug", () => {
      expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue())
        .toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit by 2 and expiresIn for Fervex drug", () => {
      expect(new Pharmacy([new Drug("Fervex", 9, 5)]).updateBenefitValue())
        .toEqual([new Drug("Fervex", 8, 7)]);
    });

    it("should increase the benefit by 3 and expiresIn for Fervex drug", () => {
      expect(new Pharmacy([new Drug("Fervex", 4, 5)]).updateBenefitValue())
        .toEqual([new Drug("Fervex", 3, 8)]);
    });

    it("should drops the benefit to 0 after the expiration date for Fervex drug", () => {
      expect(new Pharmacy([new Drug("Fervex", -1, 5)]).updateBenefitValue())
        .toEqual([new Drug("Fervex", -2, 0)]);
    });

    it("should not increase the benefit greater than 50 for Fervex dru", () => {
      expect(new Pharmacy([new Drug("Fervex", 1, 50)]).updateBenefitValue())
      .toEqual([new Drug("Fervex", 0, 50)]);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease the benefit twice and expiresIn for Dafalgan drug", () => {
      expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue())
        .toEqual([new Drug("Dafalgan", 1, 1)]);
    });
  });
});
