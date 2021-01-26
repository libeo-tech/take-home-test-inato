import { Pharmacy } from "./Pharmacy";
import { Drug } from "./Drug";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
  it("degrades benefit twice as fast if the expiration date has passed", () => {
    expect(
      new Pharmacy([new Drug("test", 1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 0, 2)]);
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });
  it("keeps benefit always positive or null", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 0)]);
  });
  describe("Herbal Tea", () => {
    it("actually increases in Benefit the older it gets", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });
    it("increases benefits twice as fast after the expiration date.", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 0, 4)]);
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });
    it("keeps benefit within 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 50)]);
    });
  });
  describe("Magic Pill", () => {
    it("never expires nor decreases in benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 1, 10)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 1, 10)]);
      expect(
        new Pharmacy([new Drug("Magic Pill", 5, 15)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 5, 15)]);
    });
  });
  describe("Fervex", () => {
    it("actually increases in Benefit by 1 when 11 days or more before expiry", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 11, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 10, 4)]);
      expect(
        new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 19, 4)]);
    });
    it("actually increases in Benefit by 2 when 10 days or less before expiry", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 5)]);
      expect(
        new Pharmacy([new Drug("Fervex", 6, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 5, 5)]);
    });
    it("actually increases in Benefit by 3 when 5 days or more before expiry", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 6)]);
      expect(
        new Pharmacy([new Drug("Fervex", 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 0, 6)]);
    });
    it("drops benefit to 0 after expiry", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 15)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
      expect(
        new Pharmacy([new Drug("Fervex", -1, 12)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -2, 0)]);
    });
  });
  describe("Dafalgan", () => {
    it("degrades in Benefit twice as fast as normal drugs", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 11, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 10, 1)]);
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -1, 1)]);
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 1)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -1, 0)]);
    });
  });
});
