import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Pharmacy", () => {
  it("Fervex should increase the benefit by 3 when there is less than 5 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 1, 6)]);
  });
});

describe("Pharmacy", () => {
  it("Fervex should increase the benefit by 2 when there is less than 10 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 6, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 5, 5)]);
  });
});

describe("Pharmacy", () => {
  it("Fervex benefit should be 0 when expires", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});

describe("Pharmacy", () => {
  it("Fervex should not increase over 50", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 2, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 1, 50)]);
  });
});

describe("Pharmacy", () => {
  it("Magic pill do nothing", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 49)]);
  });
});

describe("Pharmacy", () => {
  it("Herbal Tea should increase twice as fast after expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -2, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 12)]);
  });
});

describe("Pharmacy", () => {
  it("Dafalgan benefit should decrease twice as fast", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -1, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -2, 8)]);
  });
});
