import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  it('should decrease the benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug('test', 1, 2)]
    );
  });

  it('should decrease the benefit by 2 and expiresIn by 1 when expiresIn less than 0', () => {
    expect(
      new Pharmacy([new Drug('normal drug', -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug('normal drug', -2, 1)]);
  });

  it('should keep Magic Pill as constant', () => {
    expect(
      new Pharmacy([new Drug('Magic Pill', 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug('Magic Pill', 15, 40)]);
  });

  it('should decrease the benefit of Dafalgan by 2 and decrease expiresIn by 1 if expiresIn greater than 0', () => {
    expect(
      new Pharmacy([new Drug('Dafalgan', 3, 2)]).updateBenefitValue()
    ).toEqual([new Drug('Dafalgan', 2, 0)]);
  });

  it('should decrease the benefit of Dafalgan by 4 and decrease expiresIn by 1 if expiresIn less than 0', () => {
    expect(
      new Pharmacy([new Drug('Dafalgan', -1, 4)]).updateBenefitValue()
    ).toEqual([new Drug('Dafalgan', -2, 0)]);
  });

  it('should increase the benefit of Herbal Tea by 2 and decrease expiresIn by 1 when expiresIn less than 0', () => {
    expect(
      new Pharmacy([new Drug('Herbal Tea', -1, 4)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', -2, 6)]);
  });

  it('should increase the benefit of Herbal Tea by 1 and decrease expiresIn by 1', () => {
    expect(
      new Pharmacy([new Drug('Herbal Tea', 5, 4)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 4, 5)]);
  });

  it('should increase the benefit of Fervex by 3 and decrease expiresIn by 1 when expiresIn equal or less than 5', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 5, 20)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 4, 23)]);
  });

  it('should increase the benefit of Fervex by 2 and decrease expiresIn by 1 when expiresIn equal or less than 10', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 9, 20)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 8, 22)]);
  });

  it('should keep the benefit of Herbal Tea and Fervex under 50 and decrease its expiresIn by 1', () => {
    expect(
      new Pharmacy([new Drug('Herbal Tea', 5, 50)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 4, 50)]);
    expect(
      new Pharmacy([new Drug('Fervex', 5, 50)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 4, 50)]);
  });
});
