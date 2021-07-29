import { Drug, Pharmacy } from "./pharmacy";
import { PHARMA_TYPE } from "./constants";

const allDrugs = [...Object.values(PHARMA_TYPE), "test"];
describe("Pharmacy", () => {
  it("should never have a drug with negative benefit value", () => {
    allDrugs.forEach(name => {
      expect(
        new Pharmacy([new Drug(name, 1, 0)]).updateBenefitValue()[0].benefit
      ).toBeGreaterThanOrEqual(0);
    });
  });
  it("should never have a drug with benefit value >= 50", () => {
    allDrugs.forEach(name => {
      expect(
        new Pharmacy([new Drug(name, 1, 50)]).updateBenefitValue()[0].benefit
      ).toBeLessThanOrEqual(50);
    });
  });
  describe("for normal drugs", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });
    it("should decrease twice the benefit when expired", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 10)]).updateBenefitValue()[0].benefit
      ).toEqual(8);
    });
    describe(`for ${PHARMA_TYPE.HERBAL} & ${PHARMA_TYPE.FERVEX} drugs`, () => {
      it("should increase benefit when expiresIn decreases", () => {
        new Pharmacy([
          new Drug(PHARMA_TYPE.HERBAL, 1, 10),
          new Drug(PHARMA_TYPE.FERVEX, 1, 10)
        ])
          .updateBenefitValue()
          .forEach(drug => {
            expect(drug.benefit).toBeGreaterThan(10);
          });
      });
      it(`should increase benefit twice after expiration for ${PHARMA_TYPE.HERBAL}, when expiration <= 10 & > 5 for ${PHARMA_TYPE.FERVEX}`, () => {
        new Pharmacy([
          new Drug(PHARMA_TYPE.HERBAL, 0, 10),
          new Drug(PHARMA_TYPE.FERVEX, 10, 10)
        ])
          .updateBenefitValue()
          .forEach(drug => {
            expect(drug.benefit).toBe(12);
          });
      });
      it(`should increase benefit by three times when 0 =< expiration =< 5 for ${PHARMA_TYPE.FERVEX}`, () => {
        expect(
          new Pharmacy([
            new Drug(PHARMA_TYPE.FERVEX, 1, 10)
          ]).updateBenefitValue()[0].benefit
        ).toBe(13);
      });
      it(`should set benefit to 0 after expiration for ${PHARMA_TYPE.FERVEX}`, () => {
        expect(
          new Pharmacy([
            new Drug(PHARMA_TYPE.FERVEX, 0, 10)
          ]).updateBenefitValue()[0].benefit
        ).toBe(0);
      });
    });
    describe(`for ${PHARMA_TYPE.MAGIC} drug`, () => {
      it("should never decrease expiration nor benefit", () => {
        const drug1 = new Drug(PHARMA_TYPE.MAGIC, 0, 0);
        const drug2 = new Drug(PHARMA_TYPE.MAGIC, 25, 25);
        const drug3 = new Drug(PHARMA_TYPE.MAGIC, 50, 50);
        expect(
          new Pharmacy([drug1, drug2, drug3]).updateBenefitValue()
        ).toEqual(new Pharmacy([drug1, drug2, drug3]).drugs);
      });
    });
  });
  describe(`for ${PHARMA_TYPE.DAFALGAN} drug`, () => {
    it("should decrease by twice benefit", () => {
      expect(
        new Pharmacy([
          new Drug(PHARMA_TYPE.DAFALGAN, 10, 10)
        ]).updateBenefitValue()[0].benefit
      ).toBe(8);
      expect(
        new Pharmacy([
          new Drug(PHARMA_TYPE.DAFALGAN, 0, 10)
        ]).updateBenefitValue()[0].benefit
      ).toBe(6);
    });
  });
});
