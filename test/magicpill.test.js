import { MagicPill } from "../Drugs/MagicPill";
import { Pharmacy } from "../pharmacy";

describe("Magic Pill not expired", () => {
  it("should have the same benefit and expiresIn", () => {
    expect(
      new Pharmacy([new MagicPill("Magic Pill", 10, 10)]).updateBenefitValue()
    ).toEqual([new MagicPill("Magic Pill", 10, 10)]);
  });
});
