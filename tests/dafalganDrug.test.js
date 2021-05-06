import { Drug, Pharmacy } from "../pharmacy";
import { DRUGS_NAME } from "../constants"

describe("Dafalgan Drug Text", () => {

  it("should decrease the benefit and expiresIn twice fast", () => {
    const validDafalgan = new Drug(DRUGS_NAME.DAFALGAN, 20, 30);
    const dafalganUpdate = new Pharmacy([validDafalgan]).updateBenefitValue();
    expect(dafalganUpdate[0].benefit).toEqual(28);
    expect(dafalganUpdate[0].expiresIn).toEqual(19);
  });

  it("should decrease the benefit by 2 after the expiration date", () => {
    const expiredDafalgan = new Drug(DRUGS_NAME.DAFALGAN, 0, 25);
    const dafalganUpdate = new Pharmacy([expiredDafalgan]).updateBenefitValue();
    expect(dafalganUpdate[0].benefit).toEqual(21);
  });

  it("should never decrease the benefit under 0", () => {
    const expiredDafalgan = new Drug(DRUGS_NAME.DAFALGAN, 0, 1);
    const dafalganUpdate = new Pharmacy([expiredDafalgan]).updateBenefitValue();
    expect(dafalganUpdate[0].benefit).toBeGreaterThanOrEqual(0);
  });
});