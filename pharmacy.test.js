import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
});

describe("Dafalgan not expired", () => {
  it("should decrease by 2 the benefit and by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 10, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 9, 0)]);
  });
});

describe("Dafalgan expire in one day", () => {
  it("should decrease by 1 the benefit and by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 0)]);
  });
});

describe("Dafalgan benefit already to zero", () => {
  it("should decrease by the expiresIn but not the benefit", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -1, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -2, 0)]);
  });
});
