import { Drug, ERROR_DRUG_INSTANTIATION, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("Should throw an error because of bad params", () => {
    expect(() => new Drug("test", "1", 2)).toThrow(ERROR_DRUG_INSTANTIATION);
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});
