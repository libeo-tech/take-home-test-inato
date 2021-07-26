import { Pharmacy } from "./pharmacy";
import { Drug, drugs } from "./drug";

describe("Global pharmacy guidelines", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should decrease benefit twice as fast after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 1)]);
  });

  it("should never lower benefit below 0", () => {
    expect(
      new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", 0, 0)]);
  });

  it("should never raise benefit above 50", () => {
    expect(
      new Pharmacy([new Drug(drugs.herbalTea, 1, 50)]).updateBenefitValue()
    ).toEqual([new Drug(drugs.herbalTea, 0, 50)]);
  });
});

describe("Herbal tea guidelines", () => {
  it("should increase benefit and decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug(drugs.herbalTea, 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug(drugs.herbalTea, 0, 2)]);
  });

  it("should increase benefit twice as fast after the expiration date", () => {
    expect(
      new Pharmacy([new Drug(drugs.herbalTea, 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug(drugs.herbalTea, -1, 3)]);
  });
});

describe("Magic pill guidelines", () => {
  it("should never decrease benefit nor expiration date", () => {
    expect(
      new Pharmacy([new Drug(drugs.magicPill, 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug(drugs.magicPill, 1, 1)]);
  });
});

describe("Fervex guidelines", () => {
  it("should increase benefit when expiration date is in more than 10 days", () => {
    expect(
      new Pharmacy([new Drug(drugs.fervex, 14, 2)]).updateBenefitValue()
    ).toEqual([new Drug(drugs.fervex, 13, 3)]);
  });

  it("should increase benefit by 2 when expiration date is in less than 10 days and more than 5 days", () => {
    expect(
      new Pharmacy([new Drug(drugs.fervex, 8, 2)]).updateBenefitValue()
    ).toEqual([new Drug(drugs.fervex, 7, 4)]);
  });

  it("should increase benefit by 3 when expiration date is in less than 5 days", () => {
    expect(
      new Pharmacy([new Drug(drugs.fervex, 3, 6)]).updateBenefitValue()
    ).toEqual([new Drug(drugs.fervex, 2, 9)]);
  });

  it("should drop benefit to 0 on expiration date", () => {
    expect(
      new Pharmacy([new Drug(drugs.fervex, 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug(drugs.fervex, -1, 0)]);
  });
});
