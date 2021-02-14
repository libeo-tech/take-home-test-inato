import { Pharmacy } from '../src/pharmacy'

describe('Pharmacy', () => {
  it('should decrease the benefit and expiresIn', () => {
    expect(new Pharmacy([{ name: 'test', expiresIn: 2, benefit: 3 }]).updateBenefitValue()).toEqual(
      [{ name: 'test', expiresIn: 1, benefit: 2 }]
    );
  });
});
