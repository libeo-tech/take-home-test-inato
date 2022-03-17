import { Dafalgan } from '../src/drugs/Dafalgan';

test('constructor', () => {
  const dafalganInstance = new Dafalgan(20, 4);

  expect(dafalganInstance.name).toEqual('Dafalgan');
  expect(dafalganInstance.expiresIn).toEqual(20);
  expect(dafalganInstance.benefit).toEqual(4);
});

describe('Testing updateExpiration logic.', () => {
  test('expiresIn should only decrease by 1.', () => {
    const dafalganInstance = new Dafalgan(13, 25);
  
    dafalganInstance.updateExpiration();
  
    expect(dafalganInstance.expiresIn).toEqual(12);
  });
});

describe('Testing updateBenefit logic.', () => {
  test('Benefit should decrease by 2 when expireIn >= 0', () => {
    const dafalganInstance = new Dafalgan(0, 44);

    dafalganInstance.updateBenefit();

    expect(dafalganInstance.benefit).toEqual(42);
  });

  test('Benefit should decrease by 4 when expireIn < 0', () => {
    const dafalganInstance = new Dafalgan(-5, 44);

    dafalganInstance.updateBenefit();

    expect(dafalganInstance.benefit).toEqual(40);
  });
});
