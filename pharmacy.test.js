import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy updateBenefitValue", () => {

  it("should decrease the benefit and expiresIn for normal drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should do nothing for magic pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 30, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 30, 44)]
    );
  });

  it("should increase the benefit and decrease expiresIn for normal herbal tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 30, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 29, 45)]
    );
  });

  it("should increase the benefit twice faster and decrease expiresIn for expired herbal tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 30, 44)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 29, 46)]
    );
  });
});
