import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for default drug", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit twice as fast for expired default drug", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });

  it("should not decrease the benefit below zero for default drug", () => {
    expect(new Pharmacy([new Drug("test", 6, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 5, 0)]
    );
  });

  it("should increase the benefit for Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 6, 8)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 5, 9)]);
  });

  it("should increase the benefit twice as fast for expired Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -3, 8)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -4, 10)]);
  });

  it("should not increase the benefit above 50 ", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -3, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -4, 50)]);
  });

  it("should not increase or decrease the benefit and expiresIn for Magic Pill ", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 40, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 40, 30)]);
  });

  it("should increase benefit by 1 when expiresIn equals 11 or more days for Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 30, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 29, 31)]);
  });

  it("should increase benefit by 2 when expiresIn equals 10 or less days for Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 32)]);
  });

  it("should increase benefit by 3 when expiresIn equals 5 or less days for Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 33)]);
  });

  it("should set benefit to zero when expiresIn equals 0 or less for Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("should decrease benefit by 2 for Dafalgan", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 28)]);
  });

  it("should decrease benefit by 4 when expired for Dafalgan", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 26)]);
  });
});
