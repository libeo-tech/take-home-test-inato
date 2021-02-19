import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy general rules', () => {
  it('should decrease Benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue()).toEqual([
      new Drug('test', 1, 2)
    ]);
  });

  it('should decrease Benefit twice as fast when expiresIn < 0', () => {
    expect(new Pharmacy([new Drug('test', -1, 3)]).updateBenefitValue()).toEqual([
      new Drug('test', -2, 1)
    ]);
  });

  it('should never have a Benefit < 0', () => {
    expect(new Pharmacy([new Drug('test', 2, 0)]).updateBenefitValue()).toEqual([
      new Drug('test', 1, 0)
    ]);
  });
});

describe('Pharmacy of specifif products', () => {
  it('"Magic Pill" should never expires nor decreases in Benefit', () => {
    expect(new Pharmacy([new Drug('Magic Pill', 2, 3)]).updateBenefitValue()).toEqual([
      new Drug('Magic Pill', 2, 3)
    ]);
  });

  it('"Herbal Tea" should increase the Benefit by 1 the older it gets', () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 2, 3)]).updateBenefitValue()).toEqual([
      new Drug('Herbal Tea', 1, 4)
    ]);
  });

  it('"Herbal Tea"should never have a Benefit > 50', () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 2, 50)]).updateBenefitValue()).toEqual([
      new Drug('Herbal Tea', 1, 50)
    ]);
  });

  xit('"Fervex" should increase the Benefit by 1 the older it gets: expire > 10 days', () => {
    expect(new Pharmacy([new Drug('Fervex', 11, 3)]).updateBenefitValue()).toEqual([
      new Drug('Fervex', 10, 4)
    ]);
  });

  xit('"Fervex" should increase the Benefit by 2 the older it gets: 5 < expire <= 10 days', () => {
    expect(new Pharmacy([new Drug('Fervex', 10, 3)]).updateBenefitValue()).toEqual([
      new Drug('Fervex', 9, 5)
    ]);
  });

  xit('"Fervex" should increase the Benefit by 3 the older it gets: expire <= 5 days', () => {
    expect(new Pharmacy([new Drug('Fervex', 5, 3)]).updateBenefitValue()).toEqual([
      new Drug('Fervex', 4, 6)
    ]);
  });

  xit('"Fervex" should loose all Benefit if it expires', () => {
    expect(new Pharmacy([new Drug('Fervex', 0, 5)]).updateBenefitValue()).toEqual([
      new Drug('Fervex', -1, 0)
    ]);
  });

  describe('New product', () => {
    xit('"Dafalgan" should decrease the benefit twice as fast as normal drugs', () => {
      expect(new Pharmacy([new Drug('Dafalgan', 2, 3)]).updateBenefitValue()).toEqual([
        new Drug('test', 1, 1)
      ]);
    });

    xit('"Dafalgan" should decrease the benefit 4 times when expired ', () => {
      expect(new Pharmacy([new Drug('Dafalgan', -1, 10)]).updateBenefitValue()).toEqual([
        new Drug('test', -2, 6)
      ]);
    });

    xit('"Dafalgan" should decrease the benefit 4 times when expired and never be negative', () => {
      expect(new Pharmacy([new Drug('Dafalgan', -1, 3)]).updateBenefitValue()).toEqual([
        new Drug('test', -2, 0)
      ]);
    });
  });
});

describe('Drug', () => {
  it('should decrese expireIn, the next day', () => {
    const testDrug = new Drug('test', 2, 3);
    testDrug.nextDay();
    const testDrugNextDay = new Drug('test', 1, 3);

    expect(testDrug).toEqual(testDrugNextDay);
  });

  it('benefit add 1', () => {
    const testDrug = new Drug('test', 2, 3);
    testDrug.processBenefit(1);
    expect(testDrug).toEqual(new Drug('test', 2, 4));
  });

  it('benefit decrease 1', () => {
    const testDrug = new Drug('test', 2, 3);
    testDrug.processBenefit(-1);
    expect(testDrug).toEqual(new Drug('test', 2, 2));
  });

  it('benefit never over 50', () => {
    const testDrug = new Drug('test', 2, 50);
    testDrug.processBenefit(+1);
    expect(testDrug).toEqual(new Drug('test', 2, 50));
  });

  it('benefit never negative', () => {
    const testDrug = new Drug('test', 2, 0);
    testDrug.processBenefit(-1);
    expect(testDrug).toEqual(new Drug('test', 2, 0));
  });
});
