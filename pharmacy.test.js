import { Drug, MAX_BENEFIT, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("general drug", () => {
    describe("current expiresIn is positive", () => {
      it("should decrease benefit and expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug("test", 1, 2)]);
      });

      it("should not decrease benefit if it is already 0", () => {
        expect(
          new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
        ).toEqual([new Drug("test", 1, 0)]);
      });
    });

    describe("current expiresIn is 0", () => {
      it("should decrease benefit by 2 and expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
        ).toEqual([new Drug("test", -1, 1)]);
      });
    });

    describe("current expiresIn is negative", () => {
      it("should decrease benefit by 2 and expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("test", -10, 2)]).updateBenefitValue()
        ).toEqual([new Drug("test", -11, 0)]);
      });

      it("should not decrease benefit below 0", () => {
        expect(
          new Pharmacy([new Drug("test", -1, 1)]).updateBenefitValue()
        ).toEqual([new Drug("test", -2, 0)]);
      });
    });
  });

  describe("Herbal Tea", () => {
    describe("current expiresIn is positive", () => {
      it("should increase benefit and decrease expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", 1, 4)]);
      });

      it("should not increase benefit if it is already maximal", () => {
        expect(
          new Pharmacy([
            new Drug("Herbal Tea", 2, MAX_BENEFIT)
          ]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", 1, MAX_BENEFIT)]);
      });
    });

    describe("current expiresIn is 0", () => {
      it("should increase benefit by 2 and decrease expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -1, 5)]);
      });
    });

    describe("current expiresIn is negative", () => {
      it("should increase benefit by 2 and decrease expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", -10, 2)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -11, 4)]);
      });

      it("should not increase benefit above maximum", () => {
        expect(
          new Pharmacy([
            new Drug("Herbal Tea", -1, MAX_BENEFIT - 1)
          ]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -2, MAX_BENEFIT)]);
      });
    });
  });

  describe("Magic Pill", () => {
    it("should always keep benefit and expiresIn constant", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 10, 31)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 10, 31)]);

      expect(
        new Pharmacy([new Drug("Magic Pill", -10, 1)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", -10, 1)]);
    });
  });

  describe("Fervex", () => {
    describe("expiresIn > 10", () => {
      it("should increase benefit and decrease expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 11, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 10, 4)]);
      });

      it("should not increase benefit if it is already maximal", () => {
        expect(
          new Pharmacy([
            new Drug("Fervex", 12, MAX_BENEFIT)
          ]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 11, MAX_BENEFIT)]);
      });
    });

    describe("5 < expiresIn <= 10", () => {
      it("should increase benefit by 2 and decrease expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 9, 5)]);

        expect(
          new Pharmacy([new Drug("Fervex", 6, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 5, 5)]);
      });

      it("should not increase benefit above maximum", () => {
        expect(
          new Pharmacy([
            new Drug("Fervex", 7, MAX_BENEFIT - 1)
          ]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 6, MAX_BENEFIT)]);
      });
    });

    describe("0 < expiresIn <= 5", () => {
      it("should increase benefit by 3 and decrease expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 4, 6)]);

        expect(
          new Pharmacy([new Drug("Fervex", 1, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 0, 6)]);
      });

      it("should not increase benefit above maximum", () => {
        expect(
          new Pharmacy([
            new Drug("Fervex", 3, MAX_BENEFIT - 2)
          ]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 2, MAX_BENEFIT)]);
      });
    });

    describe("expiresIn = 0", () => {
      it("should decrease expiresIn by 1 and decrease benefit to 0", () => {
        expect(
          new Pharmacy([
            new Drug("Fervex", 0, MAX_BENEFIT)
          ]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", -1, 0)]);
      });
    });
  });

  describe("Dafalgan", () => {
    describe("current expiresIn is positive", () => {
      it("should decrease benefit by 2 and expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", 1, 1)]);
      });

      it("should not decrease benefit below 0", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", 1, 0)]);
      });
    });

    describe("current expiresIn is 0", () => {
      it("should decrease benefit by 4 and expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", 0, 10)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", -1, 6)]);
      });
    });

    describe("current expiresIn is negative", () => {
      it("should decrease benefit by 4 and expiresIn by 1", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", -1, 4)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", -2, 0)]);
      });

      it("should not decrease benefit below 0", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", -2, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", -3, 0)]);
      });
    });
  });
});
