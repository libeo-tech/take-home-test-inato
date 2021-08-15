import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const pharma = new Pharmacy([new Drug("test", 2, 3)]);
    expect(pharma.updateBenefitValue()).toEqual([new Drug("test", 1, 2)]);
    expect(pharma.updateBenefitValue()).toEqual([new Drug("test", 0, 1)]);
  });

  it("should not decrease the benefit under 0", () => {
    const pharma = new Pharmacy([new Drug("test", 0, 1)]);
    expect(pharma.updateBenefitValue()).toEqual([new Drug("test", -1, 0)]);
    expect(pharma.updateBenefitValue()).toEqual([new Drug("test", -2, 0)]);
  });

  it("should not increase the benefit beyond 50", () => {
    const pharma = new Pharmacy([new Drug("Herbal Tea", 10, 49)]);
    expect(pharma.updateBenefitValue()).toEqual([
      new Drug("Herbal Tea", 9, 50)
    ]);
    expect(pharma.updateBenefitValue()).toEqual([
      new Drug("Herbal Tea", 8, 50)
    ]);
  });
});

describe("business rules", () => {
  // -- Magic Pill --
  describe("Magic Pill", () => {
    it("should never expires nor decreases in Benefit for 'Magic Pill'", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });

  // -- Herbal Tea --
  describe("Herbal Tea", () => {
    it("should increased Benefit the older it gets for 'Herbal Tea'", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });
    it("should increased Benefit twice as fast after the expiration date for 'Herbal Tea'", () => {
      const pharma = new Pharmacy([new Drug("Herbal Tea", 0, 3)]);
      expect(pharma.updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", -1, 5)
      ]);
      expect(pharma.updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", -2, 7)
      ]);
    });
  });

  // -- Fervex --
  describe("Fervex", () => {
    it("should increased Benefit the older it gets for 'Fervex', more 10 day before expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 12, 8)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 11, 9)]);
    });
    it("should increased Benefit increases by 2 for 'Fervex', when there are 10 days or less before expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 8, 5)]);
    });
    it("should increased Benefit increases by 3 for 'Fervex', when there are 5 days or less before expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 4, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 3, 6)]);
    });
    it("should set Benefit to 0 for 'Fervex', after expiration date", () => {
      expect(
        new Pharmacy([new Drug("Fervex", -1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -2, 0)]);
    });
  });

  // -- Dafalgan --
  describe("Dafalgan", () => {
    it("should decrease the benefit twice as fast as normal drugs for 'Dafalgan'", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 1, 1)]);
    });
  });
});
