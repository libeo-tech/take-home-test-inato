import { Doliprane } from '../src/drugs/Doliprane';

test('constructor', () => {
  const dolipraneInstance = new Doliprane(20, 4);

  expect(dolipraneInstance.name).toEqual('Doliprane');
  expect(dolipraneInstance.expiresIn).toEqual(20);
  expect(dolipraneInstance.benefit).toEqual(4);
});

describe('Testing updateExpiration logic.', () => {
  test('expiresIn should only decrease by 1.', () => {
    const dolipraneInstance = new Doliprane(13, 25);
  
    dolipraneInstance.updateExpiration();
  
    expect(dolipraneInstance.expiresIn).toEqual(12);
  });
});

describe('Testing updateBenefit logic.', () => {
  test('Benefit should decrease by 1 when expireIn >= 0', () => {
    const dolipraneInstance = new Doliprane(0, 44);

    dolipraneInstance.updateBenefit();

    expect(dolipraneInstance.benefit).toEqual(43);
  });

  test('Benefit should increase by 2 when expireIn < 0', () => {
    const dolipraneInstance = new Doliprane(-5, 44);

    dolipraneInstance.updateBenefit();

    expect(dolipraneInstance.benefit).toEqual(42);
  });

});
