import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the expiresIn and benefit", () => {
    expect(new Pharmacy([
      new Drug("test", 5, 10)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("test", 4, 9)
      ]
    );
  });
  it("should decrease the expiresIn and benefit twice when expiresIn is 0 or lower", () => {
    expect(new Pharmacy([
      new Drug("test", 0, 10)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("test", -1, 8)
      ]
    );
  });
  it("should decrease the expiresIn and increase benefit", () => {
    expect(new Pharmacy([
      new Drug("Herbal Tea", 10, 10)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Herbal Tea", 9, 11)
      ]
    );
  });
  it("should decrease the expiresIn and increase benefit twice when expiresIn is 0 or lower", () => {
    expect(new Pharmacy([
      new Drug("Herbal Tea", 0, 10)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Herbal Tea", -1, 12)
      ]
    );
  });
  it("should set expiresIn to 0 and not change benefit", () => {
    expect(new Pharmacy([
      new Drug("Magic Pill", 2, 3)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Magic Pill", 0, 3)
      ]
    );
  });
  it("should decrease expiresIn and increase benefit by 1", () => {
    expect(new Pharmacy([
      new Drug("Fervex", 12, 10)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Fervex", 11, 11)
      ]
    );
  });
  it("should decrease expiresIn and increase benefit by 2", () => {
    expect(new Pharmacy([
      new Drug("Fervex", 8, 10)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Fervex", 7, 12)
      ]
    );
  });
  it("should decrease expiresIn and increase benefit by 3", () => {
    expect(new Pharmacy([
      new Drug("Fervex", 4, 10)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Fervex", 3, 13)
      ]
    );
  });
  it("should decrease expiresIn and set benefit to 0", () => {
    expect(new Pharmacy([
      new Drug("Fervex", -2, 10)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Fervex", -3, 0)
      ]
    );
  });
});
