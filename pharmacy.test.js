import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("The Benefit of an item is never negative", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });
  it("Once the expiration date has passed, Benefit degrades twice as fast", () => {
    expect(new Pharmacy([new Drug("test", 0, 5)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 3)]
    );
  });
  
  
});
