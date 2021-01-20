import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";
import drugNames from "./statics/drugNames";

describe("General pharmacy rules", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should decrease twice as fast after expiration date", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 2)]);
  });

  it("should never have a negatif benefit", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 0)]);
  });

  it("should never have a benefit above 50", () => {
    expect(
      new Pharmacy([new Drug(drugNames.HERBAL_TEA, 1, 50)]).updateBenefitValue()
    ).toEqual([new Drug(drugNames.HERBAL_TEA, 0, 50)]);
  });
});

describe("Herbal Tea specific rules", () => {
  it("should increase benefit the older it gets", () => {
    expect(
      new Pharmacy([new Drug(drugNames.HERBAL_TEA, 1, 3)]).updateBenefitValue()
    ).toEqual([new Drug(drugNames.HERBAL_TEA, 0, 4)]);
  });

  it("should double increase benefit the older it gets after expiration", () => {
    expect(
      new Pharmacy([new Drug(drugNames.HERBAL_TEA, 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug(drugNames.HERBAL_TEA, -1, 5)]);
  });
});

describe("Magic Pill specific rules", () => {
  it("should never expire nor decrease in benefit", () => {
    expect(
      new Pharmacy([new Drug(drugNames.MAGIC_PILL, 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug(drugNames.MAGIC_PILL, 0, 3)]);
  });
});

describe("Fervex specific rules", () => {
  it("should increase in benefit if there are more than 10 days left before expiration", () => {
    expect(
      new Pharmacy([new Drug(drugNames.FERVEX, 12, 3)]).updateBenefitValue()
    ).toEqual([new Drug(drugNames.FERVEX, 11, 4)]);
  });

  it("should double increase in benefit if there are less than 10 but more than 5 days left", () => {
    expect(
      new Pharmacy([new Drug(drugNames.FERVEX, 10, 3)]).updateBenefitValue()
    ).toEqual([new Drug(drugNames.FERVEX, 9, 5)]);
  });

  it("should triple increase in benefit if there are less than 5 days left", () => {
    expect(
      new Pharmacy([new Drug(drugNames.FERVEX, 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug(drugNames.FERVEX, 4, 6)]);
  });

  it("should drop to 0 in benefit when expiration hits", () => {
    expect(
      new Pharmacy([new Drug(drugNames.FERVEX, 0, 30)]).updateBenefitValue()
    ).toEqual([new Drug(drugNames.FERVEX, -1, 0)]);
  });
});
