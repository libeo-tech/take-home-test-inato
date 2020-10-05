import { Drug, Pharmacy } from "./pharmacy";
import { BenefitUpdaterFactory } from './src/BenefitUpdaterFactory';

describe("drug benefit value updater", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drug = new Drug("test", 2, 3);
    const benefitUpdater = new BenefitUpdaterFactory().getBenefitUpdater("test");
    drug.updateBenefitValue(benefitUpdater);

    expect(drug.benefit).toEqual(2);
    expect(drug.expiresIn).toEqual(1);
  });
})

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});
