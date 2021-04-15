import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should never decrease under 0 benefit", () => {
    const pharmacy = new Pharmacy([new Drug("Doliprane", 2, 2)]);
    for (let i = 0; i < 10; i++) pharmacy.updateBenefitValue();
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Doliprane", -9, 0)
    ]);
  });

  it("should never increase over 50 benefit", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 2, 2)]);
    for (let i = 0; i < 30; i++) pharmacy.updateBenefitValue();
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Herbal Tea", -29, 50)
    ]);
  });

  it("should stay constant for Magic Pill", () => {
    const pharmacy = new Pharmacy([new Drug("Magic Pill", 11, 2)]);
    for (let i = 0; i < 10; i++) pharmacy.updateBenefitValue();
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Magic Pill", 11, 2)
    ]);
  });

  it("should increase the benefit correctly for Fervex", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 11, 2)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 10, 3)]);
    for (let i = 0; i < 4; i++) pharmacy.updateBenefitValue();
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 5, 13)]);
    for (let i = 0; i < 4; i++) pharmacy.updateBenefitValue();
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 0, 28)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("should increase the benefit correctly for Herbal Tea", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 2, 3)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Herbal Tea", 1, 4)
    ]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Herbal Tea", 0, 5)
    ]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Herbal Tea", -1, 7)
    ]);
  });
});
