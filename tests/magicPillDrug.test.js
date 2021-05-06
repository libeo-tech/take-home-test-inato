import { Drug, Pharmacy } from "../pharmacy";
import { DRUGS_NAME } from "../constants"

describe("Magic Pill Drug Text", () => {
  it("should never decrease the benefit nor expiresIn", () => {
    const magicPill = new Drug(DRUGS_NAME.MAGIC_PILL, 30, 20)
    expect(new Pharmacy([new Drug(DRUGS_NAME.MAGIC_PILL, 30, 20)]).updateBenefitValue()).toEqual([magicPill]);
  });
});