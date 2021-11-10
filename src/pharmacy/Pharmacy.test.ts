import { Doliprane } from '../drug/doliprane';
import { MagicPill } from '../drug/magicPill';
import { Pharmacy } from './pharmacy';

describe('constructor', () => {
  test('should be empty by default', () => {
    const pharmacy = new Pharmacy();

    expect(pharmacy.drugs).toEqual([]);
  });

  test('should fill drugs from param', () => {
    const doliprane = new Doliprane(5, 10);
    const magicPill = new MagicPill(10, 15);
    const pharmacy = new Pharmacy([doliprane, magicPill]);

    expect(pharmacy.drugs[0]).toBe(doliprane);
    expect(pharmacy.drugs[1]).toBe(magicPill);
  });
});

test('updateBenefitValue', () => {
  const doliprane = new Doliprane(5, 10);
  const magicPill = new MagicPill(10, 15);

  const dolipraneUpdateBenefitMock = jest.fn();
  const dolipraneUpdateExpirationMock = jest.fn();
  const magicPillUpdateBenefitMock = jest.fn();
  const magicPillUpdateExpirationMock = jest.fn();

  jest.spyOn(doliprane, 'updateBenefit').mockImplementation(dolipraneUpdateBenefitMock);
  jest.spyOn(doliprane, 'updateExpiration').mockImplementation(dolipraneUpdateExpirationMock);
  jest.spyOn(magicPill, 'updateBenefit').mockImplementation(magicPillUpdateBenefitMock);
  jest.spyOn(magicPill, 'updateExpiration').mockImplementation(magicPillUpdateExpirationMock);

  const pharmacy = new Pharmacy([doliprane, magicPill]);

  const result = pharmacy.updateBenefitValue();

  expect(dolipraneUpdateBenefitMock).toHaveBeenCalledTimes(1);
  expect(dolipraneUpdateExpirationMock).toHaveBeenCalledTimes(1);
  expect(magicPillUpdateBenefitMock).toHaveBeenCalledTimes(1);
  expect(magicPillUpdateExpirationMock).toHaveBeenCalledTimes(1);
  expect(result).toEqual(pharmacy.drugs);
});
