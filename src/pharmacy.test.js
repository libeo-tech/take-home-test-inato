import { Drug } from './drug';
import { Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  it('normal drugs should decrease the benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Doliprane', 2, 2)]).updateBenefitValue()).toEqual([
      new Drug('Doliprane', 1, 1),
    ]);
  });

  it('normal drugs should keep benefit equal to 0', () => {
    expect(new Pharmacy([new Drug('Doliprane', 1, 0)]).updateBenefitValue()).toEqual([
      new Drug('Doliprane', 0, 0),
    ]);
  });

  it('normal drugs should decrease benefit twice as fast', () => {
    expect(new Pharmacy([new Drug('Doliprane', 0, 2)]).updateBenefitValue()).toEqual([
      new Drug('Doliprane', -1, 0),
    ]);
  });

  it('Herbal Tea should increase benefit and decrease expiresIn', () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 2, 3)]).updateBenefitValue()).toEqual([
      new Drug('Herbal Tea', 1, 4),
    ]);
  });

  it('Herbal Tea should increase benefit twice as fast', () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 0, 2)]).updateBenefitValue()).toEqual([
      new Drug('Herbal Tea', -1, 4),
    ]);
  });

  it('Herbal Tea should not increase benefit', () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 0, 50)]).updateBenefitValue()).toEqual([
      new Drug('Herbal Tea', -1, 50),
    ]);
  });

  it('Fervex should increase benefit', () => {
    expect(new Pharmacy([new Drug('Fervex', 11, 1)]).updateBenefitValue()).toEqual([
      new Drug('Fervex', 10, 2),
    ]);
  });

  it('Fervex should increase benefit twice as fast when decrease expiresIn are less then 10', () => {
    expect(new Pharmacy([new Drug('Fervex', 10, 1)]).updateBenefitValue()).toEqual([
      new Drug('Fervex', 9, 3),
    ]);
  });

  it('Fervex should increase benefit three as fast when decrease expiresIn less than 5', () => {
    expect(new Pharmacy([new Drug('Fervex', 5, 1)]).updateBenefitValue()).toEqual([
      new Drug('Fervex', 4, 4),
    ]);
  });

  it('Fervex should drop benefit to 0 after the expiration date', () => {
    expect(new Pharmacy([new Drug('Fervex', 0, 30)]).updateBenefitValue()).toEqual([
      new Drug('Fervex', -1, 0),
    ]);
  });

  it('Dafalgan should decrease benefit twice as fast as normal drugs', () => {
    expect(new Pharmacy([new Drug('Dafalgan', 1, 2)]).updateBenefitValue()).toEqual([
      new Drug('Dafalgan', 0, 0),
    ]);
  });

  it('Dafalgan should decrease benefit four as fast when expiresIn equal to 0  ', () => {
    expect(new Pharmacy([new Drug('Dafalgan', 0, 4)]).updateBenefitValue()).toEqual([
      new Drug('Dafalgan', -1, 0),
    ]);
  });
});
