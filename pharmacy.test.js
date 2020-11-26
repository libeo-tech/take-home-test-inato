import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should not lower benefit below 0", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 0)]);
  });

  it("should degrade benefit twice as fast once the expiration date has passed", () => {
    expect(
      new Pharmacy([new Drug("test", 0, 5)]).updateBenefitValue()
    ).toEqual([new Drug("test", -1, 3)]);
  });

  it("should not increase benefit over 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 50)]);
  });
});

describe("Herbal Tea", () => {
  it("should increase the benefit twice as fast when expiration date has passed", () => {
    expect(
      new Pharmacy([
        new Drug("Herbal Tea", 2, 3),
        new Drug("Herbal Tea", 0, 3),
      ]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4), new Drug("Herbal Tea", -1, 5)]);
  });
});

describe("Fervex", () => {
  it("should increase in Benefit as its expiration date approaches", () => {
    expect(
      new Pharmacy([
        new Drug("Fervex", 15, 4),
        new Drug("Fervex", 9, 4),
        new Drug("Fervex", 4, 4),
        new Drug("Fervex", 0, 4),
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Fervex", 14, 5),
      new Drug("Fervex", 8, 6),
      new Drug("Fervex", 3, 7),
      new Drug("Fervex", -1, 0),
    ]);
  });
});

describe("Dafalgan", () => {
  it("should decrease the benefit twice as fast as normal drugs", () => {
    expect(
      new Pharmacy([
        new Drug("Dafalgan", 2, 3),
        new Drug("Dafalgan", 0, 3)
      ]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 1), new Drug("Dafalgan", -1, 0)]);
  });
});

describe("Magic Pill", () => {
  it("should decrease the benefit twice as fast as normal drugs", () => {
    expect(
      new Pharmacy([
        new Drug("Magic Pill", 1, 1, { expirable: false }),
      ]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 1, 1, { expirable: false })]);
  });
});
