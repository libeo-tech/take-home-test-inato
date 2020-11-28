import { Drug, Pharmacy } from "../pharmacy";
import Doliprane from "./doliprane";
import Dafalgan from "./dafalgan";
import HerbalTea from "./herbalTea";
import MagicPill from "./magicPill";
import Fervex from "./fervex";

describe("Pharmacy", () => {
  //
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  // business logic of drug Doliprane
  it("test business logic of drug Doliprane", () => {
    const pharmacy = new Pharmacy([new Drug("Doliprane", 20, 30)]);
    Doliprane.forEach(item => {
      expect(pharmacy.updateBenefitValue()).toEqual([item]);
    });
  });
  // business logic of drug Dafalgan
  it("test business logic of drug Dafalgan", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", 10, 30)]);
    Dafalgan.forEach(item => {
      expect(pharmacy.updateBenefitValue()).toEqual([item]);
    });
  });
  // business logic of drug Herbal Tea
  it("test business logic of drug Herbal Tea", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 10, 5)]);
    HerbalTea.forEach(item => {
      expect(pharmacy.updateBenefitValue()).toEqual([item]);
    });
  });
  // business logic of drug Magic Pill
  it("test business logic of drug Magic Pill", () => {
    const pharmacy = new Pharmacy([new Drug("Magic Pill", 15, 40)]);
    MagicPill.forEach(item => {
      expect(pharmacy.updateBenefitValue()).toEqual([item]);
    });
  });
  // business logic of drug Fervex
  it("test business logic of drug Fervex", () => {
    const pharmacy = new Pharmacy([new Drug("Fervex", 5, 40)]);
    Fervex.forEach(item => {
      expect(pharmacy.updateBenefitValue()).toEqual([item]);
    });
  });
});
