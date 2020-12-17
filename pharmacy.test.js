import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should degrade benefit twice as fast after expiration date", () => {
    const pharmacy = new Pharmacy([new Drug("test", 1, 5)]);
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("test", 0, 4)]);
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("test", -1, 2)]);
  });

  it("should never have a negative benefit value", () => {
    const pharmacy = new Pharmacy([new Drug("test", 2, 1)]);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("test", 0, 0)]);
  });
  it("should upgrade herbal tea benefit", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 2, 1)]);
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("Herbal Tea", 1, 2)]);
  });
  it("should upgrade herbal tea benefit twice as fast after expiration date", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 1, 1)]);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("Herbal Tea", -1, 4)]);
  });

  it("should never have a benefit larger than 50", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 1, 50)]);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("Herbal Tea", -1, 50)]);

    const pharmacy2 = new Pharmacy([new Drug("test", 1, 55)]);
    expect(pharmacy2.drugs).toEqual([new Drug("test", 1, 50)]);
  });

  it("should never change Magic Pill benefit or expiration date", () => {
    const pharmacy = new Pharmacy([new Drug("Magic Pill", 1, 25)]);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("Magic Pill", 1, 25)]);
  });

  it("should increase Fervex benefit by 1 when expiration date > 10", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 11, 25)]);
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("Fervex", 10, 26)]);
  });

  it("should increase Fervex benefit by 2 when expiration date <= 10 and > 5", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 9, 25)]);
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("Fervex", 8, 27)]);
  });

  it("should increase Fervex benefit by 3 when expiration date <= 5 and > 0", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 5, 25)]);
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("Fervex", 4, 28)]);
  });

  it("should drop Fervex benefit to 0 when expiration is over", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 0, 25)]);
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs).toEqual([new Drug("Fervex", -1, 0)]);
  });
});
