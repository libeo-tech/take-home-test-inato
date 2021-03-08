import { HerbalTea } from "../Drugs/HerbalTea";
import { Pharmacy } from "../pharmacy";

describe("Herbal Tea not expired", () => {
  it("should increase by 1 the benefit and decrease by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new HerbalTea("Herbal Tea", 10, 4)]).updateBenefitValue()
    ).toEqual([new HerbalTea("Herbal Tea", 9, 5)]);
  });
});

describe("Herbal Tea expired", () => {
  it("should increase by 2 the benefit and decrease by 1 the expiresIn", () => {
    expect(
      new Pharmacy([new HerbalTea("Herbal Tea", -2, 10)]).updateBenefitValue()
    ).toEqual([new HerbalTea("Herbal Tea", -3, 12)]);
  });
});
