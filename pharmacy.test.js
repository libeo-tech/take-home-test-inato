import { Drug, Pharmacy, drugEffects } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Random drug", () => {
    it("should handle no custom options", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });
    it("should handle custom 'drugEffect' option to increase benefit", () => {
      const options = {
        drugEffect: drugEffects.INCREASE
      };
      expect(
        new Pharmacy([new Drug("test", 2, 3, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 4, options)]);
    });
    it("should handle custom 'drugEffect' option to have no benefit", () => {
      const options = {
        drugEffect: drugEffects.NONE
      };
      expect(
        new Pharmacy([new Drug("test", 2, 3, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 3, options)]);
    });
    it("should handle custom 'coefficient' option", () => {
      const options = {
        coefficient: 3
      };
      expect(
        new Pharmacy([new Drug("test", 2, 3, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 0, options)]);
    });
    it("should handle custom 'afterExpirationCoefficient' option", () => {
      const options = {
        afterExpirationCoefficient: 4
      };
      expect(
        new Pharmacy([new Drug("test", -2, 12, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", -3, 8, options)]);
    });
    it("should handle custom 'hasHardExpiration' option", () => {
      const options = {
        hasHardExpiration: true
      };
      expect(
        new Pharmacy([new Drug("test", -2, 12, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", -3, 0, options)]);
    });
    it("should handle custom 'neverExpire' option", () => {
      const options = {
        neverExpire: true
      };
      expect(
        new Pharmacy([new Drug("test", 4, 12, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", 4, 11, options)]);
    });
    it("should handle custom 'hasHardExpiration' option", () => {
      const options = {
        hasHardExpiration: true
      };
      expect(
        new Pharmacy([new Drug("test", -3, 12, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", -4, 0, options)]);
    });
    it("should handle custom 'customRules' option, take one", () => {
      const options = {
        customRules: [
          {
            expirationInLessThan: 4,
            coefficient: 2
          },
          {
            expirationInLessThan: 8,
            coefficient: 3
          },
          {
            expirationInLessThan: 2,
            coefficient: 4
          }
        ]
      };
      expect(
        new Pharmacy([new Drug("test", 7, 12, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", 6, 9, options)]);
    });
    it("should handle custom 'customRules' option, take two", () => {
      const options = {
        customRules: [
          {
            expirationInLessThan: 4,
            coefficient: 2
          },
          {
            expirationInLessThan: 8,
            coefficient: 3
          },
          {
            expirationInLessThan: 2,
            coefficient: 4
          }
        ]
      };
      expect(
        new Pharmacy([new Drug("test", 4, 12, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", 3, 10, options)]);
    });
    it("should handle custom 'customRules' option, take tree", () => {
      const options = {
        customRules: [
          {
            expirationInLessThan: 4,
            coefficient: 2
          },
          {
            expirationInLessThan: 8,
            coefficient: 3
          },
          {
            expirationInLessThan: 2,
            coefficient: 4
          }
        ]
      };
      expect(
        new Pharmacy([new Drug("test", 1, 12, options)]).updateBenefitValue()
      ).toEqual([new Drug("test", 0, 8, options)]);
    });
  });
  describe("Herbal Tea", () => {
    it("should increase benefit when benefit is 0", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 12, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 11, 1)]);
    });
    it("should increase benefit for a valid date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 12, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 11, 7)]);
    });
    it("should increase benefit for the last date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });
    it("should increase benefit by two for an epirated date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -4, 8)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -5, 10)]);
    });
    it("should not increase benefit when already maxed out when the date is valid", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 12, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 11, 50)]);
    });
    it("should not increase benefit when already maxed out when the date is expirated", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -12, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -13, 50)]);
    });
    it("should not go over benefit limit when doubling the value", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -12, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -13, 50)]);
    });
  });
  describe("Magic Pill", () => {
    it("should not increase benefit for a valid date", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 12, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 12, 6)]);
    });
    it("should not increase benefit for the last date", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 0, 4)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 0, 4)]);
    });
    it("should not increase benefit for an epirated date", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", -4, 8)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", -4, 8)]);
    });
    it("should not increase benefit when already maxed out when the date is valid", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 12, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 12, 50)]);
    });
    it("should not increase benefit when already maxed out when the date is expirated", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", -12, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", -12, 50)]);
    });
  });
  describe("Fervex", () => {
    it("should increase benefit when benefit is 0", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 12, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 11, 1)]);
    });
    it("should increase benefit by one for a valid date over 10 days", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 12, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 11, 7)]);
    });
    it("should increase benefit by two for a valid date below 10 days", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 8, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 7, 8)]);
    });
    it("should increase benefit by tree for a valid date below 5 days", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 4, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 3, 9)]);
    });
    it("should stop benefit for the last date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
    it("should drop benefit to zero for an epirated date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", -1, 13)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -2, 0)]);
    });
    it("should not increase benefit when already maxed out when the date is valid", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 12, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 11, 50)]);
    });
    it("should still have a benefit at zero when the date is expirated", () => {
      expect(
        new Pharmacy([new Drug("Fervex", -12, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -13, 0)]);
    });
    it("should not go over benefit limit when adding more than one to the value", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 3, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 2, 50)]);
    });
  });
});
