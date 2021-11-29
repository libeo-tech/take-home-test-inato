import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";

describe("Pharmacy", () => {
  it("should initialized a Pharmacy without drugs", () => {
    expect(new Pharmacy().drugs).toEqual([]);
  });

  it("should update the benefit and expiresIn of all drugs", () => {
    const initialDrugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40),
    ];

    const updatedDrugs = [
      new Drug("Doliprane", 19, 29),
      new Drug("Herbal Tea", 9, 6),
      new Drug("Fervex", 4, 43),
      new Drug("Magic Pill", 15, 40),
    ];

    expect(new Pharmacy(initialDrugs).updateBenefitValue()).toEqual(
      updatedDrugs
    );
  });
});
