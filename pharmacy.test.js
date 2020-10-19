import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should not decrease the benefit below zero", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
  it("should decrease twice as fast if the expiresIn is below zero", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 8)]);
  });
  describe("Herbal Tea", () => {
    it("should increase in benefit", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 2)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 3)]);
    });
    it("should increase twice as fast if the expiresIn is below zero", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 12)]);
    });
  });
  describe("Magic Pill", () => {
    it("should not update the benefit or the expireIn values", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 2)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 2)]);
    });
  });
  describe("Fervex", () => {
    it("should increase in benefit", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 20, 2)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 19, 3)]);
    });
    it("should increase twice as fast if the expiresIn is strictly below 11", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 10)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 12)]);
    });
    it("should increase thrice as fast if the expiresIn is strictly below 6", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 10)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 13)]);
    });
    it("should have no benefit when the expiresIn drops below 0", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 20)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });
  describe("Dafalgan", () => {
    it("should decrease in benefit twice as fast as normal drugs", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 20, 4)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 19, 2)]);
    });
    it("should decrease in benefit twice as fast as normal drugs if expiresIn is below zero", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 6)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -1, 2)]);
    });
  });
});
