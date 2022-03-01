import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should not result to a negative benefit", () => {
    const result = new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue();

    expect(result).toEqual([new Drug("test", 1, 0)]);
  });

  it("shoud not result to a benefit > 50", () => {
    const result = new Pharmacy([new Drug("test", 2, 55)]).updateBenefitValue();

    expect(result).toEqual([new Drug("test", 1, 50)]);
  });

  it("should decrease by 2 when expiration date has passed", () => {
    const result = new Pharmacy([new Drug("test", 0, 10)]).updateBenefitValue();

    expect(result).toEqual([new Drug("test", -1, 8)]);
  });

  describe("Herbal Tea", () => {
    it("should increase in benefit", () => {
      const result = new Pharmacy([new Drug("Herbal Tea", 2, 10)]).updateBenefitValue();

      expect(result).toEqual([new Drug("Herbal Tea", 1, 11)]);
    });

    it("should increase in benefit by 2 when expiration date has passed", () => {
      const result = new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue();

      expect(result).toEqual([new Drug("Herbal Tea", -1, 12)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not expire nor decrease in benefit", () => {
      const drugs = [new Drug("Magic Pill", 1, 10)];
      const result = new Pharmacy(drugs).updateBenefitValue();

      expect(result).toEqual(drugs);
    });
  });

  describe("Fervex", () => {
    it("should increase in benefit by 2 when expiration date <= 10", () => {
      const result = new Pharmacy([new Drug("Fervex", 7, 5)]).updateBenefitValue();

      expect(result).toEqual([new Drug("Fervex", 6, 7)]);
    });

    it("should increase in benefit by 3 when expiration date <= 5", () => {
      const result = new Pharmacy([new Drug("Fervex", 3, 5)]).updateBenefitValue();

      expect(result).toEqual([new Drug("Fervex", 2, 8)]);
    });

    it("should drop benefit to 0 when expiration date has passed", () => {
      const result = new Pharmacy([new Drug("Fervex", 0, 8)]).updateBenefitValue();

      expect(result).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });
});
