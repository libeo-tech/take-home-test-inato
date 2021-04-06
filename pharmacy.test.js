import {
  Drug,
  Pharmacy
} from "./pharmacy";

//test for default
describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

// test for herbal tea
describe("Pharmacy-herbal-tea", () => {
  it("should incremente the benefit and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
});

describe("Pharmacy-herbal-tea", () => {
  it("should incremente the benefit 2 faster and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 5)]
    );
  });
});

// Magic pill

describe("Pharmacy-herbal-tea", () => {
  it("benefit and expiresIn should stay the same", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 12, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 12, 40)]
    );
  });
});

// Fervex
//less than 5
describe("Pharmacy-herbal-tea", () => {
  it("should incremente the benefit by 3 and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 43)]
    );
  });
});

// expireIn betwen 6 and 10
describe("Pharmacy-herbal-tea", () => {
  it("should incremente the benefit by 2 and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 6, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 5, 42)]
    );
  });
});

//expireIn > 10
describe("Pharmacy-herbal-tea", () => {
  it("should incremente the benefit 2 and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 11, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 10, 41)]
    );
  });
});

//expireIN negatif
describe("Pharmacy-herbal-tea", () => {
  it("should set benefit to 0 and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", -6, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -7, 0)]
    );
  });
});

// Dafalgran
//if benefit still >0
describe("Pharmacy-herbal-tea", () => {
  it("should decrease the benefit by 2 and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 12)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 10)]
    );
  });
});

//if benefit is 0 or less should let it to 0 or set it
describe("Pharmacy-herbal-tea", () => {
  it("should set benefit to 0 and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 0)]
    );
  });
});