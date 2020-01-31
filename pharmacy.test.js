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

  describe("Regular Drugs", () => {
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

  describe("Special Drugs", () => {
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

      it("should decrease expiresIn by 1 but benefit should increase by 2 after expiration", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", 0, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -1, 7)]);
      });

      it("should decrease expiresIn by 1 but benefit should increase by 2 after expiration - its been 84 years", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", -30681, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -30682, 7)]);
      });
    });

    describe("Magic Pill cases", () => {
      it("should never expire nor decrease in Benefit", () => {
        expect(
          new Pharmacy([new Drug("Magic Pill", 5, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Magic Pill", 5, 5)]);
      });

      it("should never expire nor decrease in Benefit", () => {
        expect(
          new Pharmacy([new Drug("Magic Pill", 10, 10)]).updateBenefitValue()
        ).toEqual([new Drug("Magic Pill", 10, 10)]);
      });

      it("should never expire nor decrease in Benefit", () => {
        expect(
          new Pharmacy([new Drug("Magic Pill", 0, 10)]).updateBenefitValue()
        ).toEqual([new Drug("Magic Pill", 0, 10)]);
      });
    });

    describe("Fervex cases", () => {
      it("should decrease expiresIn by 1 but benefit should increase by 1", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 20, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 19, 6)]);
      });

      it("should decrease expiresIn by 1 but benefit should increase by 2 if there's 10 days or less left", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 10, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 9, 7)]);
      });

      it("should decrease expiresIn by 1 but benefit should increase by 3 if there's 5 days or less left", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 5, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 4, 8)]);
      });

      it("should decrease expiresIn by 1 but benefit should increase by 3 if there's 5 days or less left, case with one day left", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 1, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 0, 8)]);
      });

      it("should set benefit to 0 if the drug is expired", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 0, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", -1, 0)]);
      });

      it("should set benefit to 0 if the drug is expired, case where the drug is alredy expired", () => {
        expect(
          new Pharmacy([new Drug("Fervex", -10, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", -11, 0)]);
      });
    });

    describe("Dafalgan cases", () => {
      it("should decrease expiresIn by 1 but benefit should decrease by 2, twice as fast as regular drugs", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", 20, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", 19, 3)]);
      });

      it("should decrease the benefit of a drug twice as fast (by 2 * 2) after its expiration", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", -1, 1)]);
      });

      it("should stop decreasing benefit after it's reached 0", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", -10, 2)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", -11, 0)]);
      });
    });
  });

  describe("General rules", () => {
    it("The Benefit of an item is never more than 50", () => {
      const drugs = [new Drug("Herbal Tea", 10, 50)];
      expect(new Pharmacy(drugs).updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", 9, 50)
      ]);
    });

    it.skip("FIXE ME ?? - Should not fail silently if drug has a benefit higher than 50", () => {
      // TODO this test passes, make it fail if you have time
      const drugs = [
        new Drug("Herbal Tea", 10, 55),
        new Drug("Magic Pill", 10, 55),
        new Drug("Regular Drug", 10, 55)
      ];
      expect(new Pharmacy(drugs).updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", 9, 55),
        new Drug("Magic Pill", 10, 55),
        new Drug("Regular Drug", 9, 54)
      ]);
    });
  });
});
