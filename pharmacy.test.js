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

  it("Herbal Tea increases in Benefit the older it gets.", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 19, 31)]
    );
  });
  it("Herbal Tea increases in Benefit increases twice as fast after the expiration date", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 32)]
    );
  });
  it("The Benefit of an item is never more than 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 50), new Drug("Herbal Tea", -2, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 50), new Drug("Herbal Tea", -3, 50)]
    );
  });

  it("Magic Pill never expires nor decreases in Benefit", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 30)]
    );
  });
  
});
