import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {

  /**
   * Tests common drug behaviors
   */

  it("should decrease the benefit and expiresIn of common drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease benefit of common drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue().map(drug => drug.benefit)).toEqual([2]);
  })

  it("should decrease expiresIn by one for common drugs", () => {
    expect(new Pharmacy([
      new Drug("test", 2, 3),
      new Drug("Herbal Tea", 2, 3),
      new Drug("Fervex", 2, 3)
    ]).updateBenefitValue().map(drug => drug.expiresIn)).toEqual([1, 1, 1]);
  })

  it("should not create negativ benefit for common drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue().map(drug => drug.benefit)).toEqual([0]);
  })

  it("should degrades benefit of common drugs twice as fast after the expiration date", () => {
    expect(new Pharmacy([new Drug("test", 0, 5)]).updateBenefitValue().map(drug => drug.benefit)).toEqual([3]);
  });

  /**
   * Tests increasing benefit drugs specific behaviors
   */

  it("should increase benefit of increasing benefit drugs", () => {
    expect(new Pharmacy([
      new Drug("Herbal Tea", 2, 3),
      new Drug("Fervex", 2, 3)
    ]).updateBenefitValue().map(drug => drug.benefit)).toEqual([4, 6]);
  })

  it("should not create benefit over 50 for increasing benefit drugs", () => {
    expect(new Pharmacy([
      new Drug("Herbal Tea", 2, 50),
      new Drug("Fervex", 2, 50)
    ]).updateBenefitValue().map(drug => drug.benefit)).toEqual([50, 50]);
  })

  /**
   * Tests Magic Pill specific behaviors
   */

  it("should not decrease benefit of 'Magic Pill'", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue().map(drug => drug.benefit)).toEqual([3]);
  })

  it("should not decrease expiresIn for 'Magic Pill'", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue().map(drug => drug.expiresIn)).toEqual([2]);
  })

  /**
   * Tests Herbal Tea specific behaviors
   */

  it("should increases benefit of Herbal Tea twice as fast after the expiration date", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue().map(drug => drug.benefit)).toEqual([5]);
  });

  /**
   * Tests Fervex specific behaviors
   */

  it("should increases benefit of Fervex twice as fast when expiration date is between 5 and 10", () => {
    expect(new Pharmacy([
      new Drug("Fervex", 10, 3),
      new Drug("Fervex", 6, 3)
    ]).updateBenefitValue().map(drug => drug.benefit)).toEqual([5, 5]);
  });

  it("should increases benefit of Fervex thrice as fast when expiration date is between 0 and 5", () => {
    expect(new Pharmacy([
      new Drug("Fervex", 5, 3),
      new Drug("Fervex", 1, 3)
    ]).updateBenefitValue().map(drug => drug.benefit)).toEqual([6, 6]);
  });

  it("should drop benefit of Fervex to zero after the expiration date", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue().map(drug => drug.benefit)).toEqual([0]);
  });
});
