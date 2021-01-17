import { Drug, Pharmacy } from "./pharmacy";

describe("Default", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Default", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Default", 1, 2)]
    );
  });
  it("should not decrease the benefit and expiresIn under 0", () => {
    expect(new Pharmacy([new Drug("Default", 0, 0)]).updateBenefitValue()).toEqual(
        [new Drug("Default", 0, 0)]
    );
  });
  it("should decrease by 2 the benefit when expiresIn is 0", () => {
    expect(new Pharmacy([new Drug("Default", 0, 3)]).updateBenefitValue()).toEqual(
        [new Drug("Default", 0, 1)]
    );
  });
});

describe("Herbal Tea", () => {
  it("should increase the benefit", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
        [new Drug("Herbal Tea", 1, 4)]
    );
  });
  it("should not increase the benefit above 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()).toEqual(
        [new Drug("Herbal Tea", 1, 50)]
    );
  });
  it("should increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
        [new Drug("Herbal Tea", 0, 5)]
    );
  });
});



describe("Magic Pill", () => {
  it("should not modify benefit or expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
        [new Drug("Magic Pill", 2, 3)]
    );
  });
});

describe("Dafalgan", () => {
  it("should decrease the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 4)]).updateBenefitValue()).toEqual(
        [new Drug("Dafalgan", 1, 2)]
    );
  });
  it("should decrease by 4 the benefit when expiresIn is 0", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 0, 8)]).updateBenefitValue()).toEqual(
        [new Drug("Dafalgan", 0, 4)]
    );
  });
});

describe("Fervex", () => {
  it("should increase the benefit by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 12, 4)]).updateBenefitValue()).toEqual(
        [new Drug("Fervex", 11, 5)]
    );
  });
  it("should increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 4)]).updateBenefitValue()).toEqual(
        [new Drug("Fervex", 9, 6)]
    );
  });
  it("should increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Fervex", 6, 4)]).updateBenefitValue()).toEqual(
        [new Drug("Fervex", 5, 6)]
    );
  });
  it("should increase the benefit by 3", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 4)]).updateBenefitValue()).toEqual(
        [new Drug("Fervex", 4, 7)]
    );
  });
  it("should increase the benefit by 3", () => {
    expect(new Pharmacy([new Drug("Fervex", 1, 4)]).updateBenefitValue()).toEqual(
        [new Drug("Fervex", 0, 7)]
    );
  });
  it("should set benefit to 0 when expiresIn is 0", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()).toEqual(
        [new Drug("Fervex", 0, 0)]
    );
  });
  it("should not increase the benefit above 50", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 50)]).updateBenefitValue()).toEqual(
        [new Drug("Fervex", 4, 50)]
    );
  });
});