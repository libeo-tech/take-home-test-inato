import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 0, 0)]);
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit by 4 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});
