import { Drug, Pharmacy } from "./pharmacy";


const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
  new Drug("Dafalgan", 30, 20)
];

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy(drugs).updateBenefitValue()).toEqual(
      [
        new Drug("Doliprane", 19, 29),
        new Drug("Herbal Tea", 9, 6),
        new Drug("Fervex", 4, 43),
        new Drug("Magic Pill", 15, 40),
        new Drug("Dafalgan", 29, 18)
      ]
    );
  });
});