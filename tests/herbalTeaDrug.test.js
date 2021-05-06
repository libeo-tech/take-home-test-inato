import { Drug, Pharmacy } from "../pharmacy";
import { DRUGS_NAME } from "../constants"

describe("Herbal Tea Drug Text", () => {

  it("should increase the benefit by 1 when the drug is not expired ", () => {
    const validHerbalTea = new Drug(DRUGS_NAME.HERBAL_TEA, 20, 30);
    const updatedHerbalTea = new Pharmacy([validHerbalTea]).updateBenefitValue();
    expect(updatedHerbalTea[0].benefit).toEqual(31);
    expect(updatedHerbalTea[0].expiresIn).toEqual(19);
  });

  it("should increase the benefit by 2 when the drug is expired", () => {
    const expiredHerbalTea = new Drug(DRUGS_NAME.HERBAL_TEA, 0, 25);
    const updatedHerbalTea = new Pharmacy([expiredHerbalTea]).updateBenefitValue();
    expect(updatedHerbalTea[0].benefit).toEqual(27);
  });

  it("should never increase the benefit more than 50", () => {
    const validHerbalTea = new Drug(DRUGS_NAME.HERBAL_TEA, 2, 50 );
    const updatedHerbalTea = new Pharmacy([validHerbalTea]).updateBenefitValue();
    expect(updatedHerbalTea[0].benefit).toBeLessThanOrEqual(50);
  });
});