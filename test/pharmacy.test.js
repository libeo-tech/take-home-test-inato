import { Drug, Pharmacy } from "../src/pharmacy";

describe("Drug", () => {
  it("should set benefit to the max bound", () => {
    const entry = new Drug("test", 2, 100);
    const expectedResult = new Drug("test", 2, 50);

    entry.verifyBenefitValue();

    expect(entry).toEqual(expectedResult);
  });

  it("should set benefit to the min bound", () => {
    const entry = new Drug("test", 2, -5);
    const expectedResult = new Drug("test", 2, 0);

    entry.verifyBenefitValue();

    expect(entry).toEqual(expectedResult);
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const entry = new Pharmacy([new Drug("test", 2, 3)]);
    const expectedResult = [new Drug("test", 1, 2)];

    const result = entry.updateDrugs();

    expect(result).toEqual(expectedResult);
  });

  it("should keep benefit value and decrease expiresIn", () => {
    const entry = new Pharmacy([new Drug("test", 3, 0)]);
    const expectedResult = [new Drug("test", 2, 0)];

    const result = entry.updateDrugs();

    expect(result).toEqual(expectedResult);
  });

  it("should keep benefit value and decrease expiresIn", () => {
    const entry = new Pharmacy([new Drug("Fervex", 1, 50)]);
    const expectedResult = [new Drug("Fervex", 0, 50)];

    const result = entry.updateDrugs();

    expect(result).toEqual(expectedResult);
  });

  it("should keep benefit and expiresIn value ('Magic Pill' use case)", () => {
    const drug = new Drug("Magic Pill", 1000, 1000);
    const entry = new Pharmacy([drug]);
    const expectedResult = [drug];

    const result = entry.updateDrugs();

    expect(result).toEqual(expectedResult);
  });

  it("should increase twice the benefit ('Herbal Tea' use case)", () => {
    const entry = new Pharmacy([new Drug("Herbal Tea", -1, 2)]);
    const expectedResult = [new Drug("Herbal Tea", -2, 4)];

    const result = entry.updateDrugs();

    expect(result).toEqual(expectedResult);
  });

  it("should increase twice benefit value", () => {
    const entry = new Pharmacy([new Drug("Fervex", 8, 10)]);
    const expectedResult = [new Drug("Fervex", 7, 12)];

    const result = entry.updateDrugs();

    expect(result).toEqual(expectedResult);
  });

  it("should increase by 3 benefit value", () => {
    const entry = new Pharmacy([new Drug("Fervex", 1, 10)]);
    const expectedResult = [new Drug("Fervex", 0, 13)];

    const result = entry.updateDrugs();

    expect(result).toEqual(expectedResult);
  });

  it("should decrease by 2 benefit value", () => {
    const entry = new Pharmacy([new Drug("Dafalgan", 1, 10)]);
    const expectedResult = [new Drug("Dafalgan", 0, 8)];

    const result = entry.updateDrugs();

    expect(result).toEqual(expectedResult);
  });
});
