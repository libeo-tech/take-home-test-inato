import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
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

  it("should not lower benefit below 0", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 0)]);
  });
});
