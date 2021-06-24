import { Drug } from "../drug/drug";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should update all drugs in the pharmacy", () => {
    let myParmacy = new Pharmacy([
      new Drug("test", 2, 3),
      new Drug("Herbal Tea", 5, 2),
      new Drug("Magic Pill", -2, 5),
      new Drug("Fervex", 10, 0)
    ]);
    expect(myParmacy.updateBenefitValue()).toEqual([
      new Drug("test", 1, 2),
      new Drug("Herbal Tea", 4, 3),
      new Drug("Magic Pill", -2, 5),
      new Drug("Fervex", 9, 2)
    ]);
  });
});
