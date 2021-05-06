import { Drug, Pharmacy } from "../pharmacy";
import { DRUGS_NAME } from "../constants"

describe("Fervex Drug Text", () => {

  it("should increase the benefit and lower expiresIn by when expire > 10", () => {
    const validFervex = new Drug(DRUGS_NAME.FERVEX, 20, 30);
    const updatedFervex = new Pharmacy([validFervex]).updateBenefitValue();
    expect(updatedFervex.benefit).toEqual(31);
    expect(updatedFervex.expiresIn).toEqual(19);
  });

  it("should increase the benefit by 2 when there are 10 days or less", () => {
    const validFervex = new Drug(DRUGS_NAME.FERVEX, 9, 30);
    const updatedFervex = new Pharmacy([validFervex]).updateBenefitValue();
    expect(updatedFervex[0].benefit).toEqual(32);
    expect(updatedFervex[0].expiresIn).toEqual(8);
  });

  it("should increase the benefit by 3 when there are 5 days or less", () => {
    const validFervex = new Drug(DRUGS_NAME.FERVEX, 4, 30);
    const updatedFervex = new Pharmacy([validFervex]).updateBenefitValue();
    expect(updatedFervex[0].benefit).toEqual(33);
    expect(updatedFervex[0].expiresIn).toEqual(3);
  });

  it("should drop the benefit to 0 after the expiration date", () => {
    const expiredFervex = new Drug(DRUGS_NAME.FERVEX, 0, 25);
    const updatedFervex = new Pharmacy([expiredFervex]).updateBenefitValue();
    expect(updatedFervex[0].benefit).toEqual(0);
  });

  it("should never increase the benefit more than 50", () => {
    const validFervex = new Drug(DRUGS_NAME.FERVEX, 2, 49 );
    const updatedFervex = new Pharmacy([validFervex]).updateBenefitValue();
    expect(updatedFervex[0].benefit).toBeLessThanOrEqual(50);
  });
});