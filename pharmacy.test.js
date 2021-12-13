import {
  Drug,
  Pharmacy,
  ERROR_DRUG_INSTANTIATION,
  MIN_BENEFIT,
  MAX_BENEFIT
} from "./pharmacy";

describe("Drug", () => {
  it("Should throw an error because of bad params", () => {
    expect(() => new Drug("test", "1", 2)).toThrow(ERROR_DRUG_INSTANTIATION);
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

describe("Pharmacy", () => {
  it("should decrease the benefit by 1 and expiresIn by 1 (DefaultDrugs)", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit by 2 and expiresIn by 1 (DefaultDrugs)", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
  });

  it("should decrease the expiresIn by 1 but not the benefit (DefaultDrugs)", () => {
    expect(new Pharmacy([new Drug("test", 3, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 2, 0)]
    );
  });

  it("should decrease expiresIn and increase the benefit by 1 (HERBAL_TEA)", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  it("should decrease expiresIn and increase the benefit by 2 (HERBAL_TEA)", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });

  it("should decrease expiresIn and not increase the benefit (HERBAL_TEA)", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });

  it("should decrease expiresIn and increase the benefit by 1 (FERVEX)", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 40, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 39, 4)]);
  });

  it("should decrease expiresIn and increase the benefit by 2 (FERVEX)", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 11, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 10, 5)]);
  });

  it("should decrease expiresIn and increase the benefit by 3 (FERVEX)", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 6, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 5, 6)]);
  });

  it("should decrease expiresIn and set the benefit at 0 (FERVEX)", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 33)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("should decrease expiresIn and decrease the benefit by 2 (DAFALGAN)", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 10, 33)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 9, 31)]);
  });

  it("should decrease expiresIn and decrease the benefit by 4 (DAFALGAN)", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 33)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 29)]);
  });

  it("should don't do nothing on expiresIn nor benefit (MAGIC PILL)", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 15, 20)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 15, 20)]);
  });
});
