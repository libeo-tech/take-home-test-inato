import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn but the benifit should not go under 0 ", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease expiresIn but the benifit should not go over 50 ", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 50)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 15, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 15, 3)]
    );
  });
});