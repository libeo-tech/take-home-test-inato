import { Pharmacy } from "./pharmacy";
import { Drug } from "../drug/drug";

describe("Pharmacy", () => {
  describe("standardDrugs", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease the benefit twice when the date expiration is passed", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 1)]);
    });

    it("should decrease the benefit once when the date expiration is not passed", () => {
      expect(
        new Pharmacy([new Drug("test", 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 0, 2)]);
    });

    it("should not return negative benefit if the expire date is not passed", () => {
      expect(
        new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 0, 0)]);
    });

    it("should not return negative benefit if the expire date is passed", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 1)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 0)]);
    });
  });

  describe("HerbalTeaDrugs", () => {
    it("should increase twice the benefit of Herbal Tea if the expire date is passed", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });

    it("should increase once the benefit of Herbal Tea if the expire date is not passed", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 0, 4)]);
    });

    it("should not increase the benefit more then 50 for Herbal Tea", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 1, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 0, 50)]);
    });

    it("should not increase the benefit more then 50 for Herbal Tea even if it's twice", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 50)]);
    });
  });

  describe("FervexDrugs", () => {
    it("should reset benefit to 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 1, 51)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 0, 50)]);
    });

    it.only("should reset benefit to 50 ( second test )", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 2, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 1, 50)]);
    });

    it("should not increase the benefit more then 50 ( third test )", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 1, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 0, 50)]);
    });

    it("should increase the benefit of Fervex once when there more than 10 days to expire", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 11, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 10, 4)]);
    });

    it("should increase the benefit of Fervex twice when there are 10 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 8, 5)]);
    });

    it("should increase the benefit of Fervex by 3 when there are 5 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 3, 45)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 2, 48)]);
    });

    it("should increase the benefit of Fervex by 3 when there are 5 days or less ( second test )", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 3, 45)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 2, 48)]);
    });

    it("should drop to 0 the benefit after expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 4)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });

  describe("MagicPillDrugs", () => {
    it("should not decrease the benefit of Magic Pill and never expire", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 1, 3)]);
    });
  });
});
