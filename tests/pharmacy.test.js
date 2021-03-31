import { Drug, Pharmacy } from "../src/services/pharmacy";

describe("Pharmacy ExpiresIn", () => {
  it("should decrease the expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateExpiresIn()).toEqual([
      new Drug("test", 1, 0)
    ]);
  });
  // expiresIn can be negative
  it("should decrease the expiresIn to negative number", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateExpiresIn()).toEqual([
      new Drug("test", -1, 0)
    ]);
  });
});

describe("Pharmacy Benefit", () => {
  it("should decrease the benefit", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 1)]).updateBenefitValueNew()
    ).toEqual([new Drug("test", 2, 0)]);
  });
  // benefit never negative
  it("should let benefit to zero", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValueNew()
    ).toEqual([new Drug("test", 0, 0)]);
  });
  // expiration passed -> benefit degrades twice as fast
  it("should decrease benefit twice fast if expired", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 2)]).updateBenefitValueNew()
    ).toEqual([new Drug("test", -1, 0)]);
  });
});

describe("Pharmacy specifics rules for expiresIn value", () => {
  // it('should let magic pill benefit', () => {
  //   expect(new Pharmacy([new Drug('Magic Pill', 0, 0)]).updateBenefitValueNew()).toEqual([
  //     new Drug('Magic Pill', 0, 0),
  //   ]);
  // });
});

describe("Pharmacy specifics rules for benefit value", () => {
  // SPECIFIC RULES : HERBAL TEA - MAGIC PILL - FERVEX
  it("should let MAGIC PILL benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 1, 1)]).updateBenefitValueNew()
    ).toEqual([new Drug("Magic Pill", 1, 1)]);
  });

  it("should increase HERBAL TEA benefit", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 1)]).updateBenefitValueNew()
    ).toEqual([new Drug("Herbal Tea", 0, 2)]);
  });
  it("should increase HERBAL TEA benefit even if benefit to zero", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 0)]).updateBenefitValueNew()
    ).toEqual([new Drug("Herbal Tea", 0, 1)]);
  });
  it("should increase HERBAL TEA benefit twice fast if expired", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 2)]).updateBenefitValueNew()
    ).toEqual([new Drug("Herbal Tea", -1, 4)]);
  });
});
