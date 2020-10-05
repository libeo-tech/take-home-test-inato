import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for Doliprane", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 19, 29)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", 18, 28)]);
    expect(
      new Pharmacy([new Drug("Doliprane", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", -1, 8)]);
  });
  it("should decrease the benefit and expiresIn for Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 9, 6)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 8, 7)]);
    expect(
      new Pharmacy([new Drug("Herbal Tea", -5, 25)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -6, 27)]);
  });
  it("should decrease the benefit and expiresIn for Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 43)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 46)]);
    expect(
      new Pharmacy([new Drug("Fervex", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
  it("Do nothing for Magic pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 15, 40)]);
  });
  it("should decrease the benefit and expiresIn for Dalfalgan ", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 14, 38)]);
    expect(
      new Pharmacy([new Drug("Dafalgan", -5, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -6, 6)]);
  });
});
