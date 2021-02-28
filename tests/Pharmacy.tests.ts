import Drug from '../src/Drug';
import { Pharmacy } from '../src/Pharmacy';
import { DRUGS_NAME } from '../src/Constant';

describe('Pharmacy', () => {
  describe('ANY_DRUG', () => {
    it('should decreased the benefit and expiresIn', () => {
      expect(new Pharmacy([new Drug('D1', 4, 6)]).updateBenefitValue()).toEqual(
        [new Drug('D1', 3, 5)],
      );
    });

    it('should have  benefit twice decreased once expiresIn <= 0', () => {
      expect(new Pharmacy([new Drug('D1', 0, 4)]).updateBenefitValue()).toEqual(
        [new Drug('D1', -1, 2)],
      );
    });

    it('should not have benefit negative (< 0)', () => {
      expect(new Pharmacy([new Drug('D1', 3, 0)]).updateBenefitValue()).toEqual(
        [new Drug('D1', 2, 0)],
      );
    });

    it('should not have benefit negative even expiresIn <= 0', () => {
      expect(
        new Pharmacy([new Drug('D1', -2, 0)]).updateBenefitValue(),
      ).toEqual([new Drug('D1', -3, 0)]);
    });

    it('should not have benefit more than 50', () => {
      expect(
        new Pharmacy([new Drug('D1', 46, 63)]).updateBenefitValue(),
      ).toEqual([new Drug('D1', 45, 50)]);
    });

    describe(DRUGS_NAME.HERBAL_TEA, () => {
      it('should  decreased benefit and expiresIn', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.HERBAL_TEA, 10, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.HERBAL_TEA, 9, 6)]);
      });

      it('should have increased the benefit twice once expiresIn <= 0', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.HERBAL_TEA, 0, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.HERBAL_TEA, -1, 7)]);
      });

      it('should have the property benefit not more then 50', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.HERBAL_TEA, -4, 50),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.HERBAL_TEA, -5, 50)]);
      });
    });

    describe(DRUGS_NAME.MAGIG_PILL, () => {
      it('should not decrease the benefit and expiresIn', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.MAGIG_PILL, 10, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.MAGIG_PILL, 10, 5)]);
      });

      it('should not benefit even if expiresIn <= 0', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.MAGIG_PILL, 0, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.MAGIG_PILL, 0, 5)]);
      });
    });

    describe(DRUGS_NAME.FERVEX, () => {
      it('should decrease the property benefit and expiresIn', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.FERVEX, 15, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.FERVEX, 14, 6)]);
      });

      it('should increased benefit twice when expiresIn between 5 and 10', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.FERVEX, 10, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.FERVEX, 9, 7)]);
      });

      it('should increase the property benefit by 3 when expiresIn between 0 and 5', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.FERVEX, 5, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.FERVEX, 4, 8)]);
      });

      it('should increase the property benefit by 3 when expiresIn between 0 and 5', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.FERVEX, 2, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.FERVEX, 1, 8)]);
      });

      it('should have benefit = 0 once once expiresIn <= 0', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.FERVEX, 0, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.FERVEX, -1, 0)]);
      });
    });

    describe(DRUGS_NAME.DAFALGAN, () => {
      it('should not decrease benefit twice while expiresIn > 0', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.DAFALGAN, 10, 5),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.DAFALGAN, 9, 3)]);
      });

      it('should decrease benefit four times once expiresIn <= 0', () => {
        expect(
          new Pharmacy([
            new Drug(DRUGS_NAME.DAFALGAN, 0, 14),
          ]).updateBenefitValue(),
        ).toEqual([new Drug(DRUGS_NAME.DAFALGAN, -1, 10)]);
      });
    });
  });
});
