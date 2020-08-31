import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("Dafalgan should decrease twice as fast as normal drugs", () => {
    const dafalgan = new Drug("Dafalgan", 1, 2);

    dafalgan.setBenefitModifier(drug => drug.benefit - 2).updateExpiresIn().updateBenefit();

    expect(dafalgan.benefit).toEqual(0);
    expect(dafalgan.expiresIn).toEqual(0);
  });
});
