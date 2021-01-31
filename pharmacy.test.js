import { Drug, Pharmacy } from "./pharmacy";
import {
  MAGIC_PILL,
  HERBAL_TEA,
  FERVEX,
  DOLIPRANE,
  DAFALGAN,
  DEFAULT,
  MIN_BENEFIT,
  MAX_BENEFIT,
} from "./constants";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should not get a benefit more than 50", () => {
    expect(
      new Pharmacy([new Drug(HERBAL_TEA, -1, 50)]).updateBenefitValue()
    ).toEqual([new Drug(HERBAL_TEA, -2, 50)]);
  });
  it("should decrease normally when expiresIn > 0", () => {
    expect(
      new Pharmacy([
        new Drug(DOLIPRANE, 20, 30),
        new Drug(HERBAL_TEA, 10, 5),
        new Drug(FERVEX, 5, 40),
        new Drug(MAGIC_PILL, 15, 40),
        new Drug(DAFALGAN, 20, 50),
      ]).updateBenefitValue()
    ).toEqual([
      new Drug(DOLIPRANE, 19, 29),
      new Drug(HERBAL_TEA, 9, 6),
      new Drug(FERVEX, 4, 43),
      new Drug(MAGIC_PILL, 15, 40),
      new Drug(DAFALGAN, 19, 48),
    ]);
  });
  it("should decrease normally when expiresIn < 0", () => {
    expect(
      new Pharmacy([
        new Drug(DOLIPRANE, -1, 28),
        new Drug(HERBAL_TEA, -1, 5),
        new Drug(FERVEX, -1, 43),
        new Drug(MAGIC_PILL, 15, 40),
        new Drug(DAFALGAN, -1, 48),
      ]).updateBenefitValue()
    ).toEqual([
      new Drug(DOLIPRANE, -2, 26),
      new Drug(HERBAL_TEA, -2, 7),
      new Drug(FERVEX, -2, 0),
      new Drug(MAGIC_PILL, 15, 40),
      new Drug(DAFALGAN, -2, 44),
    ]);
  });
});