import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("Dafalgan benefit decrease twice as fast than normal drug", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", 2, 10)]);

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", 1, 9)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", 0, 8)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", -1, 4)]);
  });
});
