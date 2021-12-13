import { Pharmacy } from "../src/pharmacy";
import { Drug } from "../src/drugs/Drug";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const trial = new Pharmacy();
    trial.addDrug(new Drug("test", 2, 3));
    const result = trial.updateBenefitValue();
    const expectedResult = new Drug("test", 1, 2).toJSON();
    expect(result).toEqual([expectedResult]);
  });
});
