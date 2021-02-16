import Pharmacy from '../src/models/pharmacy';
import Drug from '../src/models/drug';

describe('Pharmacy', () => {
  describe('Drug entity', () => {
    it('should have decreased the benefit and expiresIn', () => {
      expect(
        new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue(),
      ).toEqual([new Drug('test', 1, 2)]);
    });

    it('should have the property benefit twice decreased once expiresIn <= 0', () => {
      expect(
        new Pharmacy([new Drug('test', 0, 3)]).updateBenefitValue(),
      ).toEqual([new Drug('test', -1, 1)]);
    });

    it('should not have the property benefit negative', () => {
      expect(
        new Pharmacy([new Drug('test', 3, 0)]).updateBenefitValue(),
      ).toEqual([new Drug('test', 2, 0)]);
    });

    it('should not have the property benefit negative even expiresIn <= 0', () => {
      expect(
        new Pharmacy([new Drug('test', -2, 0)]).updateBenefitValue(),
      ).toEqual([new Drug('test', -3, 0)]);
    });

    it('should have the property benefit not more then 50', () => {
      expect(
        new Pharmacy([new Drug('test', 45, 53)]).updateBenefitValue(),
      ).toEqual([new Drug('test', 44, 49)]);
    });
  });

  describe('Herbal Tea', () => {
    it('should have decreased the benefit and expiresIn', () => {
      expect(
        new Pharmacy([new Drug('Herbal Tea', 10, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Herbal Tea', 9, 6)]);
    });

    it('should have increased the benefit twice once expiresIn <= 0', () => {
      expect(
        new Pharmacy([new Drug('Herbal Tea', 0, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Herbal Tea', -1, 7)]);
    });

    it('should have the property benefit not more then 50', () => {
      expect(
        new Pharmacy([new Drug('Herbal Tea', -4, 50)]).updateBenefitValue(),
      ).toEqual([new Drug('Herbal Tea', -5, 50)]);
    });
  });

  describe('Magic Pill', () => {
    it('should not have decreased the benefit and expiresIn', () => {
      expect(
        new Pharmacy([new Drug('Magic Pill', 10, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Magic Pill', 10, 5)]);
    });

    it('should not have decreased the property benefit even if expiresIn <= 0', () => {
      expect(
        new Pharmacy([new Drug('Magic Pill', 0, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Magic Pill', 0, 5)]);
    });
  });

  describe('Fervex', () => {
    it('should have decreased the property benefit and expiresIn', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 15, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Fervex', 14, 6)]);
    });

    it('should have increased the property benefit twice once expiresIn <= 10 but expiresIn > 5', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 10, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Fervex', 9, 7)]);
    });

    it('should have increased the property benefit thrice once expiresIn <= 5 but expiresIn > 0', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 5, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Fervex', 4, 8)]);
    });

    it('should have increased the property benefit thrice once expiresIn <= 5 but expiresIn > 0', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 1, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Fervex', 0, 8)]);
    });

    it('should have increased the property benefit thrice once expiresIn === 1', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 1, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Fervex', 0, 8)]);
    });

    it('should have the property benefit = 0 once once expiresIn <= 0', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 0, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Fervex', -1, 0)]);
    });
  });

  describe('Dafalgan', () => {
    it('should not have the property benefit decreased twice while expiresIn > 0', () => {
      expect(
        new Pharmacy([new Drug('Dafalgan', 10, 5)]).updateBenefitValue(),
      ).toEqual([new Drug('Dafalgan', 9, 3)]);
    });

    it('should have the property benefit decreased four times once expiresIn <= 0', () => {
      expect(
        new Pharmacy([new Drug('Dafalgan', 0, 10)]).updateBenefitValue(),
      ).toEqual([new Drug('Dafalgan', -1, 6)]);
    });

    it('should have the property benefit = 0 once expiresIn <= 0', () => {
      expect(
        new Pharmacy([new Drug('Dafalgan', 0, 2)]).updateBenefitValue(),
      ).toEqual([new Drug('Dafalgan', -1, 0)]);
    });
  });
});
