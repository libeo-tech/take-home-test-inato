import { Drug, Pharmacy } from "../Pharmacy/pharmacy";
import { DRUGS_TYPES } from "./../constants";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for normal drug", () => {
    const pharmacy = new Pharmacy([new Drug("test", 2, 3)]);

    jest.spyOn(pharmacy, "updateBenefitForNormalDrug");
    jest.spyOn(pharmacy, "limitBenefitValue");

    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("test", 1, 2)]);
    expect(pharmacy.updateBenefitForNormalDrug).toHaveBeenCalledTimes(1);
    expect(pharmacy.limitBenefitValue).toHaveBeenCalledTimes(1);
  });

  it("should update the benefit and expiresIn for Fervex drug", () => {
    const pharmacy = new Pharmacy([
      new Drug(DRUGS_TYPES.FERVEX, 9, 3),
      new Drug(DRUGS_TYPES.FERVEX, 5, 50),
      new Drug(DRUGS_TYPES.FERVEX, 0, 3)
    ]);

    jest.spyOn(pharmacy, "updateBenefitForFervex");
    jest.spyOn(pharmacy, "limitBenefitValue");

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DRUGS_TYPES.FERVEX, 8, 5),
      new Drug(DRUGS_TYPES.FERVEX, 4, 50),
      new Drug(DRUGS_TYPES.FERVEX, -1, 0)
    ]);
    expect(pharmacy.updateBenefitForFervex).toHaveBeenCalledTimes(3);
    expect(pharmacy.limitBenefitValue).toHaveBeenCalledTimes(3);
  });

  it("should update the benefit and expiresIn for Herbal tea drug", () => {
    const pharmacy = new Pharmacy([
      new Drug(DRUGS_TYPES.HERBAL_TEA, 9, 3),
      new Drug(DRUGS_TYPES.HERBAL_TEA, 5, 50),
      new Drug(DRUGS_TYPES.HERBAL_TEA, 0, 3)
    ]);

    jest.spyOn(pharmacy, "updateBenefitForHerbalTea");
    jest.spyOn(pharmacy, "limitBenefitValue");

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DRUGS_TYPES.HERBAL_TEA, 8, 4),
      new Drug(DRUGS_TYPES.HERBAL_TEA, 4, 50),
      new Drug(DRUGS_TYPES.HERBAL_TEA, -1, 5)
    ]);
    expect(pharmacy.updateBenefitForHerbalTea).toHaveBeenCalledTimes(3);
    expect(pharmacy.limitBenefitValue).toHaveBeenCalledTimes(3);
  });

  it("should not update benefit or expiresIn for Magic pill drug", () => {
    const pharmacy = new Pharmacy([
      new Drug(DRUGS_TYPES.MAGIC_PILL, 9, 3),
      new Drug(DRUGS_TYPES.MAGIC_PILL, 0, 3)
    ]);

    jest.spyOn(pharmacy, "limitBenefitValue");

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DRUGS_TYPES.MAGIC_PILL, 9, 3),
      new Drug(DRUGS_TYPES.MAGIC_PILL, 0, 3)
    ]);
    expect(pharmacy.limitBenefitValue).not.toHaveBeenCalled();
  });

  it("should update the benefit and expiresIn for Dafalgan drug", () => {
    const pharmacy = new Pharmacy([
      new Drug(DRUGS_TYPES.DAFALGAN, 9, 3),
      new Drug(DRUGS_TYPES.DAFALGAN, 0, 5)
    ]);

    jest.spyOn(pharmacy, "updateBenefitForDafalgan");
    jest.spyOn(pharmacy, "limitBenefitValue");

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DRUGS_TYPES.DAFALGAN, 8, 1),
      new Drug(DRUGS_TYPES.DAFALGAN, -1, 1)
    ]);
    expect(pharmacy.updateBenefitForDafalgan).toHaveBeenCalledTimes(2);
    expect(pharmacy.limitBenefitValue).toHaveBeenCalledTimes(2);
  });
});
