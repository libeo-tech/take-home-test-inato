import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );

    expect(new Pharmacy([new Drug("Doliprane", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", 19, 29)]
    );
  });

  it("should not decrease", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 15, 40)]
    );
  });

  it("should increase benefit", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 6)]
    );
  });

  it("should increase benefit twice", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 7)]
    );
  });

  it("should increase benefit by 3", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 43)]
    );
  });

  it("should increase benefit by 2", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 42)]
    );
  });

  it("should decrease benefit", () => {
    expect(new Pharmacy([new Drug("Fervex", 12, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 11, 39)]
    );
  });

  it("benefit should be 0", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("should decrease twice as fast", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 19, 28)]
    );
  });

});
