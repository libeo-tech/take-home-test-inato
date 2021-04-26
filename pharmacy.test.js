import { Drug } from './drugs';
import { Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  it('should decrease the benefit and expiresIn', () => {
    expect(
      new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug('test', 1, 2)]);
  });
  it('should decrease and expiresIn and increase benefits for Fervex', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 1, 6)]);
  });
  it('should not update anything for Magic Pill', () => {
    expect(
      new Pharmacy([new Drug('Magic Pill', 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Magic Pill', 2, 3)]);
  });
  it('should increase in value for Magic Pill. Increase is faster if expired', () => {
    expect(
      new Pharmacy([new Drug('Herbal Tea', 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 1, 4)]);
    expect(
      new Pharmacy([new Drug('Herbal Tea', -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', -2, 5)]);
  });
});
