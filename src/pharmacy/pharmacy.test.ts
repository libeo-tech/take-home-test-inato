import { Drug } from "../drug/drug";
import { SpecialDrugsNames } from "../drug/specialDrugsList";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should update all drugs in the pharmacy", () => {
    const myParmacy = new Pharmacy([
      new Drug("test", 2, 3),
      new Drug(SpecialDrugsNames.HerbalTea, 5, 2),
      new Drug(SpecialDrugsNames.MagicPill, -2, 5),
      new Drug(SpecialDrugsNames.Fervex, 10, 0)
    ]);
    expect(myParmacy.updateBenefitValue()).toEqual([
      new Drug("test", 1, 2),
      new Drug(SpecialDrugsNames.HerbalTea, 4, 3),
      new Drug(SpecialDrugsNames.MagicPill, -2, 5),
      new Drug(SpecialDrugsNames.Fervex, 9, 2)
    ]);
  });
});
