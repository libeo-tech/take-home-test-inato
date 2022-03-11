import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Pharmacy after expiration", () => {
  it("should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });
});

describe("Pharmacy after expiration, min benefit", () => {
  it("should set the benefit to 0 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });
});

describe("Benefit is 0", () => {
  it("should not decrease benefit", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
});

describe("Herbal Tea before expiration", () => {
  it("should increase the benefit by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
});

describe("Herbal Tea after expiration", () => {
  it("should increase the benefit by 2", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
});

describe("Max benefit", () => {
  it("should not increase over 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 50)]);
  });
});

describe("Magic Pill", () => {
  it("should not decrease benefit nor expireIn", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 1)]);
  });
});

describe("Fervex before 10 days", () => {
  it("should increase benefit by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 20, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 19, 2)]);
  });
});

describe("Fervex between 10 and 5 days", () => {
  it("should increase benefit by 2", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 3)]);
  });
});

describe("Fervex between 5 and 0 days", () => {
  it("should increase benefit by 3", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 4)]);
  });
});

describe("Fervex after expiration", () => {
  it("should drop benefit to 0", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

describe("Dafalgan", () => {
  it("should decrease benefit by 2", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 1, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 0, 8)]);
  });
});

describe("Dafalgan min benefit", () => {
  it("should set benefit to 0", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 1, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 0, 0)]);
  });
});

describe("Dafalgan after expiration", () => {
  it("should decrease the benefit by 4", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 6)]);
  });
});