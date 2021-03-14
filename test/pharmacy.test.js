import { Drug, Pharmacy } from "../src/pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  describe("Benefit behaviour check", () => {
    it("should decrease the benefit by one when not yet expired", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease the benefit twice when expired", () => {
      expect(
        new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", -2, 1)]);
    });

    it("should not decrease the benefit under 0 when expired", () => {
      expect(
        new Pharmacy([new Drug("test", -1, 1)]).updateBenefitValue()
      ).toEqual([new Drug("test", -2, 0)]);
    });

    it("should not decrease the benefit under 0 when not expired", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 0)]);
    });

    it("should not increase the benefit over 50 when expired", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 50)]);
    });

    it("should not increase the benefit over 50 when not expired", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 1, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 0, 50)]);
    });
  });

  describe("Magic Pill behaviour", () => {
    it("should not decrease in benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 1, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 1, 30)]);
    });

    it("should never expire", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 1, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 1, 30)]);
    });
  });

  describe("Herbal Tea behaviour", () => {
    it("should increase in benefit by one when not yet expired", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 1, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 0, 31)]);
    });

    it("should increase in benefit by two when expired", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", -1, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -2, 32)]);
    });
  });

  describe("Fervex behaviour", () => {
    it("should increase in benefit by one when expiration date is in more than 10 days", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 18, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 17, 31)]);
    });

    it("should increase in benefit by two when expiration date is 10 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 9, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 8, 32)]);
    });

    it("should increase in benefit by three when expiration date is 5 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 3, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 2, 33)]);
    });

    it("should drop benefit to 0 when expires", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });
});
