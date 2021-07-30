import { Drug, Pharmacy } from "./pharmacy";
import {
  updateDefaultDrug,
  updateDafalganDrug,
  updateFervexDrug,
  updateHerbalTeaDrug,
  updateMagicPillDrug,
} from "./pharmacy";

describe("Pharmacy", () => {
  it("Should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  describe("updateDefaultDrug", () => {
    it("Should decrease the benefit and expiresIn", () => {
      const drug = new Drug("test", 2, 3);
      expect(updateDefaultDrug(drug)).toEqual(new Drug("test", 1, 2));
    });
    it("Should decrease the benefit x2 when expired", () => {
      const drug = new Drug("test", 0, 4);
      expect(updateDefaultDrug(drug)).toEqual(new Drug("test", -1, 2));
    });
    it("Should never have negative benefit", () => {
      const drug = new Drug("test", 2, 0);
      expect(updateDefaultDrug(drug)).toEqual(new Drug("test", 1, 0));
    });
  });
  describe("updateMagicPillDrug", () => {
    it("Should not decrease the benefit and expiresIn", () => {
      const drug = new Drug("Magic Pill", 2, 3);
      expect(updateMagicPillDrug(drug)).toEqual(new Drug("Magic Pill", 2, 3));
    });
  });
  describe("updateHerbalTeaDrug", () => {
    it("Should increase the benefit and decrease expiresIn", () => {
      const drug = new Drug("Herbal Tea", 2, 3);
      expect(updateHerbalTeaDrug(drug)).toEqual(new Drug("Herbal Tea", 1, 4));
    });
  });
  describe("updateFervexDrug", () => {
    it("Should increase the benefit by 3 if <= 5 days and decrease expiresIn", () => {
      const drug = new Drug("Fervex", 2, 3);
      expect(updateFervexDrug(drug)).toEqual(new Drug("Fervex", 1, 6));
    });
    it("Should increase the benefit by 2 if <= 10 days and decrease expiresIn", () => {
      const drug = new Drug("Fervex", 8, 3);
      expect(updateFervexDrug(drug)).toEqual(new Drug("Fervex", 7, 5));
    });
    it("Should set the benefit to 0 if expired and decrease expiresIn", () => {
      const drug = new Drug("Fervex", 0, 3);
      expect(updateFervexDrug(drug)).toEqual(new Drug("Fervex", -1, 0));
    });
  });
  describe("updateDafalganDrug", () => {
    it("Should increase the benefit x2 and decrease expiresIn", () => {
      const drug = new Drug("Dafalgan", 2, 3);
      expect(updateDafalganDrug(drug)).toEqual(new Drug("Dafalgan", 1, 1));
    });
  });
});
