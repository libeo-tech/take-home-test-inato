import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should set benefit to the max bound", () => {
    const pharmacy = new Pharmacy([new Drug("test", 2, 100)]).updateBenefitValue()

    expect(pharmacy).toEqual(
      [new Drug("test", 1, 50)]
    );
  });

  it("should set benefit to the min bound", () => {
    const pharmacy = new Pharmacy([new Drug("test", 2, -5)]).updateBenefitValue()

    expect(pharmacy).toEqual(
      [new Drug("test", 1, 0)]
    );
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should increase twice the benefit from Doliprane", () => {
    const pharmacy = new Pharmacy([new Drug("Doliprane", 20, 30)]).updateBenefitValue()

    expect(pharmacy).toEqual(
      [new Drug("Doliprane", 19, 29)]
    );
  });

  it("should increase twice the benefit from Herbal Tea", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 10, 5, -1, [2])]).updateBenefitValue()

    expect(pharmacy).toEqual(
      [new Drug("Herbal Tea", 9, 7, -1, [2])]
    );
  });

  it("should keep benefit value and decrease expiresIn from Fervex", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 1, 50, -1, [
      ['>', 0, 0],
      ['<', 10, 2],
      ['<', 5, 3],
      ['===', 0, 0]
    ])]).updateBenefitValue()

    expect(pharmacy).toEqual(
      [new Drug("Fervex", 0, 50, -1, [
        ['>', 0, 0],
        ['<', 10, 2],
        ['<', 5, 3],
        ['===', 0, 0]
      ])]
    );
  });

  it("should increase twice benefit value from Fervex", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 7, 10, -1, [
      ['>', 0, 0],
      ['<', 10, 2],
      ['<', 5, 3],
      ['===', 0, 0]
    ])]).updateBenefitValue()

    expect(pharmacy).toEqual(
      [new Drug("Fervex", 6, 12, -1, [
        ['>', 0, 0],
        ['<', 10, 2],
        ['<', 5, 3],
        ['===', 0, 0]
      ])]
    );
  });

  it("should increase by 3 benefit value from Fervex", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 1, 10, -1, [
      ['>', 0, 0],
      ['<', 10, 2],
      ['<', 5, 3],
      ['===', 0, 0]
    ])]).updateBenefitValue()

    expect(pharmacy).toEqual(
      [new Drug("Fervex", 0, 13, -1, [
        ['>', 0, 0],
        ['<', 10, 2],
        ['<', 5, 3],
        ['===', 0, 0]
      ])]
    );
  });

  it("should decrease benefit and keep expiresIn value from Magic Pill", () => {
    const pharmacy = new Pharmacy([new Drug("Magic Pill", 100, 100, 0, [0])]).updateBenefitValue()

    expect(pharmacy).toEqual(
      [new Drug("Magic Pill", 100, 50, 0, [0])]
    );
  });

  it("should decrease by 2 benefit value from Dafalgan", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", 1, 10, -1, [-2])]).updateBenefitValue()

    expect(pharmacy).toEqual(
      [new Drug("Dafalgan", 0, 8, -1, [-2])]
    );
  });
  
});