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

describe("Pharmacy MAGIC PILL rules for benefit value", () => {
  // SPECIFIC RULES : HERBAL TEA - MAGIC PILL - FERVEX
  it("should let MAGIC PILL benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 1, 1)]).updateBenefitValueNew()
    ).toEqual([new Drug("Magic Pill", 1, 1)]);
  });
});

describe("Pharmacy HERBAL TEA rules for benefit value", () => {
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

  it("should not increase benefit if 50 (herbal tea and fervex)", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 50)]).updateBenefitValueNew()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
    expect(
      new Pharmacy([new Drug("Fervex", -1, 50)]).updateBenefitValueNew()
    ).toEqual([new Drug("Fervex", -1, 50)]);
  });
});

describe("Pharmacy FERVEX rules for benefit value", () => {
  it("should increase FERVEX benefit by 2 if 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 20)]).updateBenefitValueNew()
    ).toEqual([new Drug("Fervex", 10, 22)]);
  });
  it("should increase FERVEX benefit by 3 if 5 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 20)]).updateBenefitValueNew()
    ).toEqual([new Drug("Fervex", 5, 23)]);
  });
  it("should drop FERVEX benefits to zero", () => {
    expect(
      new Pharmacy([new Drug("Fervex", -1, 20)]).updateBenefitValueNew()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

describe("Pharmacy DAFALGAN rules for benefit value", () => {
  it("should decrease DAFALGAN benefits twice fast", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 2)]).updateBenefitValueNew()
    ).toEqual([new Drug("Dafalgan", 0, 0)]);
  });
  it("should decrease DAFALGAN benefits twice fast for expired", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -1, 4)]).updateBenefitValueNew()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});
