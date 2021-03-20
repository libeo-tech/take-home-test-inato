import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit by 1 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("v2 should decrease the benefit by 1 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue2()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should increase the benefit by 1 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 6)]
    );
  });
  it("v2 should increase the benefit by 1 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue2()).toEqual(
      [new Drug("Herbal Tea", 9, 6)]
    );
  });
});
