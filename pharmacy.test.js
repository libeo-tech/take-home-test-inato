import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Normal Drug case", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });
    it("should decrease the benefit twice as fast when expired", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 1)]);
    });
    it("should the benefit never be negative", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 0)]);
    });
  });

  describe("Herbal Tea case", () => {
    it("should the 'Herbal Tea' benefit increase", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });
    it("should the 'Herbal Tea' benefit increase twice after expiration date", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });
    it("should the 'Herbal Tea' benefit never exceeds 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 50)]);
    });
  });

  describe("Magic Pill case", () => {
    it("should 'Magic Pill' never expires nor decreases in Benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });

  describe("Fervex case", () => {
    it("should the 'Fervex' benefit increases by 1 when expires in more than 10 days", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 12, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 11, 4)]);
    });
    it("should the 'Fervex' benefit increases by 2 when expires in 10 days or less", () => {
      for (let i = 0; i < 5; i++) {
        expect(
          new Pharmacy([new Drug("Fervex", 10 - i, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 9 - i, 5)]);
      }
    });
    it("should the 'Fervex' benefit increases by 3 when expires in 5 days or less", () => {
      for (let i = 0; i < 5; i++) {
        expect(
          new Pharmacy([new Drug("Fervex", 5 - i, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 4 - i, 6)]);
      }
    });
    it("should the 'Fervex' benefit drops to 0 after the expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });
    it("should 'Fervex' benefit never exceeds 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 2, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 1, 50)]);
    });
  });

  describe("Dafalgan case", () => {
    it("should Dafalgan decreases by 2 when not expired", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 2, 5)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 1, 3)]);
    });
    it("should Dafalgan decreases by 4 when expired", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 5)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -1, 1)]);
    });
  });
});
