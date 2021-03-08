import { Drug, Pharmacy } from "../pharmacy";

describe("Fervex not expired", () => {
  it("should increase by 1 the benefit and decrease by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 12, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 11, 11)]);
  });
});

describe("Fervex not expired but expiresIn between 10 and 6", () => {
  it("should increase by 2 the benefit and decrease by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 12)]);
  });
});

describe("Fervex not expired but expiresIn between 5 and 1", () => {
  it("should increase by 3 the benefit and decrease by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 13)]);
  });
});

describe("Fervex expired", () => {
  it("should drop to 0 the benefit and by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", -1, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -2, 0)]);
  });
});
