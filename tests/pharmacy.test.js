import { Drug } from "../src/drugs";
import { Pharmacy } from "../src/pharmacy";

describe("Pharmacy", () => {
  // Normal drugs
  it("should decrease the benefit by 1 and expiresIn by 1 when expiresIn >=0", () => {
    expect(new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Doliprane", 1, 2)]
    );
  });
  it("should decrease the benefit by 2 and expiresIn by 1 when expiresIn < 0", () => {
    expect(new Pharmacy([new Drug("Doliprane", -1, 3)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Doliprane", -2, 1)]
    );
  });
  // Herbal Tea
  it("should increase the benefit by 1 and decrease expiresIn by 1 when expiresIn >= 0", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
  it("should increase the benefit by 2 and decrease expiresIn by 1 when expiresIn < 0", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -2, 3)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Herbal Tea", -3, 5)]
    );
  });
  // Fervex
  it("should increase the benefit by 1 and decrease expiresIn by 1 when expiresIn > 10", () => {
    expect(new Pharmacy([new Drug("Fervex", 12, 30)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Fervex", 11, 31)]
    );
  });
  it("should increase the benefit by 2 and decrease expiresIn by 1 when 5 < expiresIn <= 10", () => {
    expect(new Pharmacy([new Drug("Fervex", 7, 30)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Fervex", 6, 32)]
    );
  });
  it("should increase the benefit by 3 and decrease expiresIn by 1 when 0 < expiresIn <= 5", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 30)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Fervex", 3, 33)]
    );
  });
  it("should drop the benefit at 0 and decrease expiresIn by 1 when expiresIn <= 0", () => {
    expect(new Pharmacy([new Drug("Fervex", -1, 30)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Fervex", -2, 0)]
    );
  });
  // Dafalgan
  it("should decrease the benefit by 2 and expiresIn by 1 when expiresIn >= 0", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
  });
  it("should decrease the benefit by 4 and expiresIn by 1 when expiresIn < 0", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -2, 10)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Dafalgan", -3, 6)]
    );
  });
  // Magic Pill
  it("should always leave the benefit and expiresIn at the same value overtime", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValueAndExpirationDate()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
  });
});
