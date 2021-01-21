import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("Herbal Tea working", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 2, 10)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", 1, 11)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", 0, 12)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Herbal Tea", -1, 14)]);
  });

  it("Magic Pill working", () => {
    const pharmacy = new Pharmacy([new Drug("Magic Pill", 2, 11)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Magic Pill", 2, 11)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Magic Pill", 2, 11)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Magic Pill", 2, 11)]);
  });

  it("Fervex working +10 days", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 15, 2)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 14, 3)]);
  });

  it("Fervex working -10 days", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 12, 2)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 11, 3)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 10, 5)]);
  });

  it("Fervex working -5 days", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 7, 2)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 6, 4)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 5, 7)]);
  });

  it("Fervex expirate", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 2, 2)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 1, 5)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", 0, 8)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("Dafalgan working", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", 2, 10)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", 1, 8)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", 0, 6)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", -1, 2)]);
  });
});
