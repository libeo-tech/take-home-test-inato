import { Pharmacy } from "./pharmacy";
import { DrugFactory } from "../drug";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([DrugFactory.createDrug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [DrugFactory.createDrug("test", 1, 2)]
    );
  });

  it("should decrease by 2", () => {
    expect(new Pharmacy([DrugFactory.createDrug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [DrugFactory.createDrug("test", -1, 1)]
    );
  });

  it("should decrease the benefit by 2 for Dafalgan", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Dafalgan", 1, 1)]);
  });

  it("should decrease the benefit by 4 for Dafalgan", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Dafalgan", 0, 5)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Dafalgan", -1, 1)]);
  });

  it("should not decrease under 0", () => {
    expect(new Pharmacy([DrugFactory.createDrug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [DrugFactory.createDrug("test", 1, 0)]
    );
  });

  it("should not decrease for Magic Pill", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Magic Pill", 2, 3)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Magic Pill", 2, 3)]);
  });

  it("should increase 1 for Herbal Tea", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Herbal Tea", 1, 4)]);
  });

  it("should increase 2 for Herbal Tea", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Herbal Tea", -1, 5)]);
  });

  it("should not increase 2 for Herbal Tea in more than 50", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Herbal Tea", 0, 49)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Herbal Tea", -1, 50)]);
  });

  it("should increase 1 for Fervex", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Fervex", 12, 3)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Fervex", 11, 4)]);
  });

  it("should increase 2 for Fervex", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Fervex", 11, 3)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Fervex", 10, 5)]);
  });

  it("should increase 3 for Fervex", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Fervex", 6, 3)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Fervex", 5, 6)]);
  });

  it("should set benefit to 0 for Fervex", () => {
    expect(
      new Pharmacy([DrugFactory.createDrug("Fervex", 0, 3)]).updateBenefitValue()
    ).toEqual([DrugFactory.createDrug("Fervex", -1, 0)]);
  });
});
