import { Drug } from "./drug";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });
});

// Adding more tests

// For Dafalgan
describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for Dafalgan properly", () => {
    expect(
      new Pharmacy([
        new Drug("Dafalgan", 9, 2),
        new Drug("Dafalgan", 0, 25),
        new Drug("Dafalgan", 3, 1)
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Dafalgan", 8, 0),
      new Drug("Dafalgan", -1, 21),
      new Drug("Dafalgan", 2, 0)
    ]);
  });
});

// For Magic Pill
describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for Magic Pill properly", () => {
    expect(
      new Pharmacy([
        new Drug("Magic Pill", 2, 3),
        new Drug("Magic Pill", 20, 10),
        new Drug("Magic Pill", 25, 1)
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Magic Pill", 2, 3),
      new Drug("Magic Pill", 20, 10),
      new Drug("Magic Pill", 25, 1)
    ]);
  });
});

// For Fervex
describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for Fervex properly", () => {
    expect(
      new Pharmacy([
        new Drug("Fervex", 9, 2),
        new Drug("Fervex", 5, 20),
        new Drug("Fervex", 0, 25),
        new Drug("Fervex", 3, 49)
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Fervex", 8, 4),
      new Drug("Fervex", 4, 23),
      new Drug("Fervex", -1, 0),
      new Drug("Fervex", 2, 50)
    ]);
  });
});

// For Herbal Tea
describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for Herbal Tea properly", () => {
    expect(
      new Pharmacy([
        new Drug("Herbal Tea", 3, 2),
        new Drug("Herbal Tea", 0, 20),
        new Drug("Herbal Tea", 1, 50)
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Herbal Tea", 2, 3),
      new Drug("Herbal Tea", -1, 22),
      new Drug("Herbal Tea", 0, 50)
    ]);
  });
});

// For 'default' drugs like Doliprane
describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for Doliprane properly", () => {
    expect(
      new Pharmacy([
        new Drug("Doliprane", 9, 2),
        new Drug("Doliprane", 5, 0),
        new Drug("Doliprane", 0, 25)
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Doliprane", 8, 1),
      new Drug("Doliprane", 4, 0),
      new Drug("Doliprane", -1, 23)
    ]);
  });
});
