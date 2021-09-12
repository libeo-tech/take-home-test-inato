import { Pharmacy } from "./pharmacy";
import { Drug } from "./Drug";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Benefit", () => {
  it("should decrease twice as fast after expiration", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });
  it("should never be negative", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
  it("should never overpass 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 50)]);
  });
});

describe("Herbal Tea", () => {
  it("should increase with time", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("should increase twice as fast after expiration", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });
});

describe("Magic Pill", () => {
  it("should never expire nor decrease in benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 3)]);
  });
});

describe("Fervex", () => {
  it("should increase with time", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 4)]);
  });
  it("should increase twice as fast when expiration is less than 10 days away", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 5)]);
  });
  it("should increase three times as fast when expiration is less than 5 days away", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 6)]);
  });
  it("should drop to 0 after expiration", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

describe("Dafalgan", () => {
  it("should decrease twice as fast as normal drugs", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 6)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 2)]);
  });
});
