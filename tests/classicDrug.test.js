import { Drug, Pharmacy } from "../pharmacy";
import { DRUGS_NAME } from "../constants"

describe("Classic Drug Text", () => {

  it("should decrease the benefit and expiresIn by 1", () => {
    const validDoliprane = new Drug(DRUGS_NAME.DOLIPRANE, 20, 30);
    const updatedDoliprane = new Pharmacy([validDoliprane]).updateBenefitValue();
    expect(updatedDoliprane[0].benefit).toEqual(29);
    expect(updatedDoliprane[0].expiresIn).toEqual(19);
  });

  it("should decrease the benefit by 2 after the expiration date", () => {
    const expiredDoliprane = new Drug(DRUGS_NAME.DOLIPRANE, 0, 25);
    const updatedDoliprane = new Pharmacy([expiredDoliprane]).updateBenefitValue();
    expect(updatedDoliprane[0].benefit).toEqual(23);
  });

  it("should never decrease the benefit under 0", () => {
    const expiredDoliprane = new Drug(DRUGS_NAME.DOLIPRANE, 0, 1);
    const updatedDoliprane = new Pharmacy([expiredDoliprane]).updateBenefitValue();
    expect(updatedDoliprane[0].benefit).toBeGreaterThanOrEqual(0);
  });
});