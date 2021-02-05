import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Generic rules", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", 1, 2)]);
    });
    it("should decrease the benefit twice once the expiration date is passed", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 0, 4)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", -1, 2)]);
    });
    it("should test the benefit minimum value", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 0, 0)]).updateBenefitValue()
      ).toEqual([new Drug("Doliprane", -1, 0)]);
    });
    it("should test the benefit maximum value", () => {
      // we use "Herbal Tea" here as it's the only drug which increases its benefit
      expect(
        new Pharmacy([new Drug("Herbal Tea", 10, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 9, 50)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit and decrease the expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });
    it("should increase the benefit twice when the expiration date is passed", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });
  });

  describe("Magic Pill", () => {
    it("should not decrease the benefit nor the expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit and decrease the expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 15, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 14, 4)]);
    });
    it("should increase the benefit by 2 when there are 10 days or less left in the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 9, 5)]);
    });
    it("should increase the benefit by 3 when there are 5 days or less left in the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 4, 6)]);
    });
    it("should drop the benefit to 0 when the expiration date is passed", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
  });
});
