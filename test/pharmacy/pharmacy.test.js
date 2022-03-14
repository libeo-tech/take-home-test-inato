import { Drug, Pharmacy } from '../../src/pharmacy';
import { drugsConfig } from '../../config/drugs';
import { pharmacyConfig } from '../../config/pharmacy';

describe('Pharmacy', () => {
  it.each([
    [
      'should decrease the benefit and expiresIn',
      [new Drug('test', 2, 3)],
      [new Drug('test', 1, 2)],
    ],
    [
      'should decrease the benefit twice as fast',
      [new Drug('test', 0, 3)],
      [new Drug('test', -1, 1)],
    ],
    [
      'should decrease expiresIn and let benefit at 0',
      [new Drug('test', 0, 0)],
      [new Drug('test', -1, 0)],
    ],
    [
      'should increase the benefit of herbal tea',
      [new Drug('Herbal Tea', 1, 3)],
      [new Drug('Herbal Tea', 0, 4)],
    ],
    [
      'should double the increase of the benefit of herbal tea',
      [new Drug('Herbal Tea', 0, 4)],
      [new Drug('Herbal Tea', -1, 6)],
    ],
    [
      'should not increase benefit over 50',
      [new Drug('Herbal Tea', 0, 50)],
      [new Drug('Herbal Tea', -1, 50)],
    ],
    [
      'should not change benefit and expiresIn of magic pill',
      [new Drug('Magic Pill', 0, 50)],
      [new Drug('Magic Pill', 0, 50)],
    ],
    [
      'should increase benefit of fervex',
      [new Drug('Fervex', 15, 10)],
      [new Drug('Fervex', 14, 11)],
    ],
    [
      'should double increase benefit of fervex if 5 < expiresIn <= 10',
      [new Drug('Fervex', 7, 10)],
      [new Drug('Fervex', 6, 12)],
    ],
    [
      'should triple increase benefit of fervex if 0 <= expiresIn <= 4',
      [new Drug('Fervex', 1, 10)],
      [new Drug('Fervex', 0, 13)],
    ],
    [
      'should drop benefit of fervex to 0 if expiresIn < 0',
      [new Drug('Fervex', 0, 10)],
      [new Drug('Fervex', -1, 0)],
    ],
    [
      'should drop benefit of dafalgan twice as fast',
      [new Drug('Dafalgan', 10, 10)],
      [new Drug('Dafalgan', 9, 8)],
    ],
  ])('%s', (testName, oldDrugs, newDrugs) => {
    const pharmacy = new Pharmacy(oldDrugs);

    pharmacy.setDrugsConfig(drugsConfig);
    pharmacy.setConfig(pharmacyConfig);

    expect(pharmacy.updateBenefitValue()).toEqual(newDrugs);
  });
});
