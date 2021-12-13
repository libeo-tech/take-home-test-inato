import {
  Drug,
  Pharmacy,
  ERROR_DRUG_INSTANTIATION,
  MIN_BENEFIT,
  MAX_BENEFIT
} from "./pharmacy";

describe("Pharmacy", () => {
  it("Should throw an error because of bad params", () => {
    expect(() => new Drug("test", "1", 2)).toThrow(ERROR_DRUG_INSTANTIATION);
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should decrease by one expireIn", () => {
    const drug = new Drug("test", 1, 2);
    drug.dicreaseExpiresInByOne();
    expect(drug).toEqual(new Drug("test", 0, 2));
  });
  it("should decrease benefit by 4", () => {
    const drug = new Drug("test", 1, 6);
    drug.dicreaseBenefitBy(4);
    expect(drug).toEqual(new Drug("test", 1, 2));
  });

  it(`should stop the decrease at ${MIN_BENEFIT} (MIN_BENEFIT)`, () => {
    const drug = new Drug("test", 1, MIN_BENEFIT + 2);
    drug.dicreaseBenefitBy(4);
    expect(drug).toEqual(new Drug("test", 1, MIN_BENEFIT));
  });

  it(`should stop the increase at ${MAX_BENEFIT} (MAX_BENEFIT)`, () => {
    const drug = new Drug("test", 1, MAX_BENEFIT - 2);
    drug.increaseBenefitBy(4);
    expect(drug).toEqual(new Drug("test", 1, MAX_BENEFIT));
  });
});
