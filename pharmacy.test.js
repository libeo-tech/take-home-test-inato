import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

// Adding more tests

// For Dafalgan

// For Magic Pill

// For Fervex

// For Herbal Tea

// For 'default' drugs like Doliprane
