import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should decrease the Dafalgan benefit twice as fast", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
    expect(new Pharmacy([new Drug("Dafalgan", 0, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -1, 0)]
    );
  });
  it("should increase the Herbal Tea benefit by 1 and by 2 after expiration", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 21)]
    );
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 22)]
    );
  });
  it("should not increase or decrease the Magic Pill benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 10, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 10, 20)]
    );
  });
  it("should increase the Fervex benefit by 1, 2 or 3 before expiration", () => {
    expect(new Pharmacy([new Drug("Fervex", 15, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 14, 41)]
    );
    expect(new Pharmacy([new Drug("Fervex", 8, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 7, 42)]
    );
    expect(new Pharmacy([new Drug("Fervex", 5, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 43)]
    );
  });
  it("should set the Fervex benefit at 0 after expiration", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
});
