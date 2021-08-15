import { Drug } from "../src/entity/drug";
import { Pharmacy } from "../src/entity/pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should not change magic pill values", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 20, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 20, 30)]);
  });

  it("should increase the benefit value of Herbal Tea by 2", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -4, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -5, 12)]);
  });

  it("should keep the benefit value of Herbal Tea under 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 11, 55)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 10, 50)]);
  });

  it("should increase the benefit value of Fervex by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 22, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 21, 41)]);
  });

  it("should increase the benefit value of Fervex by 3", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 44)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 47)]);
  });

  it("should increase the benefit value of Fervex by 2", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 32)]);
  });

  it("should decrease the benefit value of Dafalgan by 2", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 10, 22)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 9, 20)]);
  });

  it("should decrease the benefit value of Dafalgan by 4", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -3, 36)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -4, 32)]);
  });
});