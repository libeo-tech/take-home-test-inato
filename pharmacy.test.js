import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  it('should decrease the benefit and expiresIn', () => {
    expect(
      new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug('test', 1, 2)]);
  });

  it('should never tell a product has a negative benefit', () => {
    expect(
      new Pharmacy([new Drug('test', 2, 0)]).updateBenefitValue()
    ).toEqual([new Drug('test', 1, 0)]);
  });

  it('should degrade expired products twice as fast', () => {
    expect(
      new Pharmacy([new Drug('test', 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug('test', -1, 2)]);
  });

  it('should keep magic pill properties intact over time', () => {
    expect(
      new Pharmacy([new Drug('Magic Pill', 3, 12)]).updateBenefitValue()
    ).toEqual([new Drug('Magic Pill', 3, 12)]);
  });

  it('should not have excessive benefits', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 1, 50)]);
    expect(
      new Pharmacy([new Drug('Herbal Tea', 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 1, 50)]);
  });

  it('should add benefits to herbal tea and fervex by 2 where they expire in 10 days to 5 days', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 10, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 9, 10)]);
    expect(
      new Pharmacy([new Drug('Fervex', 5, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 4, 11)]);
    expect(
      new Pharmacy([new Drug('Herbal Tea', 10, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 9, 10)]);
    expect(
      new Pharmacy([new Drug('Herbal Tea', 5, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 4, 11)]);
  });

  it('should add benefits to herbal tea and fervex by 3 where they expire in 5 days to expiry date', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 5, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 4, 11)]);
    expect(
      new Pharmacy([new Drug('Fervex', 1, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 0, 11)]);
    expect(
      new Pharmacy([new Drug('Herbal Tea', 5, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 4, 11)]);
    expect(
      new Pharmacy([new Drug('Herbal Tea', 1, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 0, 11)]);
  });

  it('should degrade dafalgan twice as fast both before and after expiration date', () => {
    expect(
      new Pharmacy([new Drug('Dafalgan', 10, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Dafalgan', 9, 6)]);
    expect(
      new Pharmacy([new Drug('Dafalgan', 0, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Dafalgan', -1, 4)]);
  });
  
  it('Fervex should lose benefits at expiry date', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 0, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', -1, 0)])
  })

  it('Herbal tea should doubles benefits after expiry date', () => {
    expect(
      new Pharmacy([new Drug('Herbal Tea', 0, 8)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', -1, 10)])
  })
});

