import {
  Drug,
  Pharmacy,
  MAGIC_PILL,
  HERBAL_TEA,
  FERVEX,
  DAFALGAN
} from "./pharmacy";

const createDrugs = (name, expiresIn, benefit) => [
  new Drug(name, expiresIn, benefit)
];

const createPharma = (name, expiresIn, benefit) =>
  new Pharmacy(createDrugs(name, expiresIn, benefit));

describe("Pharmacy", () => {
  describe("Any Drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(createPharma("test", 2, 3).updateBenefitValue()).toEqual(
        createDrugs("test", 1, 2)
      );
    });

    it("should not decrease benefit if already 0", () => {
      expect(createPharma("test", 2, 0).updateBenefitValue()).toEqual(
        createDrugs("test", 1, 0)
      );
    });

    it("should decrease benefit twice as fast if expired", () => {
      expect(createPharma("test", -1, 7).updateBenefitValue()).toEqual(
        createDrugs("test", -2, 5)
      );
    });
  });

  describe("Magic Pill", () => {
    it("should not update Magic pill", () => {
      expect(createPharma(MAGIC_PILL, 6, 7).updateBenefitValue()).toEqual(
        createDrugs(MAGIC_PILL, 6, 7)
      );
    });
  });

  describe("Herbal Tea", () => {
    it("should increase benefit if not expired", () => {
      expect(createPharma(HERBAL_TEA, 10, 7).updateBenefitValue()).toEqual(
        createDrugs(HERBAL_TEA, 9, 8)
      );
    });

    it("should not increase benefit if already at 50", () => {
      expect(createPharma(HERBAL_TEA, 10, 50).updateBenefitValue()).toEqual(
        createDrugs(HERBAL_TEA, 9, 50)
      );
    });

    it("should increase twice the benefit if expired", () => {
      expect(createPharma(HERBAL_TEA, -1, 8).updateBenefitValue()).toEqual(
        createDrugs(HERBAL_TEA, -2, 10)
      );
    });
  });

  describe("Fervex", () => {
    it("should reset benefice if expired", () => {
      expect(createPharma(FERVEX, -1, 8).updateBenefitValue()).toEqual(
        createDrugs(FERVEX, -2, 0)
      );
    });

    it("should increase by 3 the benefit if expires in less than 5 days", () => {
      expect(createPharma(FERVEX, 2, 8).updateBenefitValue()).toEqual(
        createDrugs(FERVEX, 1, 11)
      );
    });

    it("should increase twice the benefit if expires in less than 10 days", () => {
      expect(createPharma(FERVEX, 8, 10).updateBenefitValue()).toEqual(
        createDrugs(FERVEX, 7, 12)
      );
    });

    it("should increase normally the benefit if not expiring soon", () => {
      expect(createPharma(FERVEX, 12, 5).updateBenefitValue()).toEqual(
        createDrugs(FERVEX, 11, 6)
      );
    });
  });

  describe("Dafalgan", () => {
    it("should decrease twice dafalgan benefits", () => {
      expect(createPharma(DAFALGAN, 7, 5).updateBenefitValue()).toEqual(
        createDrugs(DAFALGAN, 6, 3)
      );
    });

    it("should decrease twice dafalgan benefits but not under 0", () => {
      expect(createPharma(DAFALGAN, -4, 1).updateBenefitValue()).toEqual(
        createDrugs(DAFALGAN, -5, 0)
      );
    });

    it("should decrease for time fast dafalgan after expiration date", () => {
      expect(createPharma(DAFALGAN, -4, 9).updateBenefitValue()).toEqual(
        createDrugs(DAFALGAN, -5, 5)
      );
    });
  });
});
