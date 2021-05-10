import { Pharmacy } from "../../pharmacy/pharmacy";
import { MagicPill } from "./magicPill";

describe("Magic pill should never be alterated", () => {
  it("expires in and benefit should remains the same", () => {
    expect(new Pharmacy([new MagicPill(5, 5)]).updateBenefitValue()).toEqual([
      new MagicPill(5, 5)
    ]);
  });
});
