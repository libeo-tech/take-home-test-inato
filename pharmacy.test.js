import { Drug, Pharmacy } from "./pharmacy";
import drugs from "./drugs";

describe("Pharmacy", () => {
  describe(drugs.Test, () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug(drugs.Test, 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.Test, 1, 2)]);
    });

    it("should have benefit degrades twice as fast after expirion date as passed", () => {
      expect(
        new Pharmacy([new Drug(drugs.Test, -2, 3)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.Test, -3, 1)]);
    });

    it("should not have negative benefit value", () => {
      expect(
        new Pharmacy([new Drug(drugs.Test, 2, 0)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.Test, 1, 0)]);
    });
  });

  describe(drugs.MagicPill, () => {
    it("should not have changes regarding exiresIn and benefit", () => {
      expect(
        new Pharmacy([new Drug(drugs.MagicPill, 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.MagicPill, 0, 3)]);
    });
  });

  describe(drugs.HerbalTea, () => {
    it(`should increase benefit the older it gets`, () => {
      expect(
        new Pharmacy([new Drug(drugs.HerbalTea, 10, 10)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.HerbalTea, 9, 11)]);
    });

    it(`should increase benefit twice as fast after the expiration date`, () => {
      expect(
        new Pharmacy([new Drug(drugs.HerbalTea, -1, 10)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.HerbalTea, -2, 12)]);
    });

    it(`should not have benefit value > 50`, () => {
      expect(
        new Pharmacy([new Drug(drugs.HerbalTea, 10, 50)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.HerbalTea, 9, 50)]);
    });
  });

  describe(drugs.Fervex, () => {
    it(`should increase benefit by 1 when there are 11 days or more remaining before the expiration`, () => {
      expect(
        new Pharmacy([new Drug(drugs.Fervex, 11, 10)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.Fervex, 10, 11)]);
    });

    it(`should increase benefit by 2 when there are 10 days or less remaining before the expiration`, () => {
      expect(
        new Pharmacy([new Drug(drugs.Fervex, 10, 10)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.Fervex, 9, 12)]);
    });

    it(`should increase benefit by 3 when there are 5 days or less remaining before the expiration`, () => {
      expect(
        new Pharmacy([new Drug(drugs.Fervex, 5, 10)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.Fervex, 4, 13)]);
    });

    it(`should benefit drops to 0 after the expiration date`, () => {
      expect(
        new Pharmacy([new Drug(drugs.Fervex, -1, 10)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.Fervex, -2, 0)]);
    });
  });

  describe(drugs.Dafalgan, () => {
    it(`should decrease benefit twice as fast as normal drugs`, () => {
      expect(
        new Pharmacy([new Drug(drugs.Dafalgan, 11, 10)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.Dafalgan, 10, 8)]);

      expect(
        new Pharmacy([new Drug(drugs.Dafalgan, -1, 10)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.Dafalgan, -2, 6)]);
    });
  });
});
