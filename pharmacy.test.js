import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  
  describe("when the given drug is Magic Pill", () => {
    it("should not decrease the benefit and expireIn", () => {
      expect(new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()).toEqual(
        [new Drug("Magic Pill", 15, 40)]
      );
    })
  })
});
