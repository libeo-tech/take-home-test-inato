import { Fervex } from '../src/drugs/Fervex';

test('constructor', () => {
  const fervexInstance = new Fervex(20, 4);

  expect(fervexInstance.name).toEqual('Fervex');
  expect(fervexInstance.expiresIn).toEqual(20);
  expect(fervexInstance.benefit).toEqual(4);
});

describe('Testing updateExpiration logic.', () => {
  test('expiresIn should only decrease by 1.', () => {
    const fervexInstance = new Fervex(13, 21);
  
    fervexInstance.updateExpiration();
  
    expect(fervexInstance.expiresIn).toEqual(12);
  });
});

describe('Testing updateBenefit logic.', () => {
  test('Benefit should be set to 0 when expireIn < 0', () => {
    const fervexInstance = new Fervex(-100, 49);

    fervexInstance.updateBenefit();

    expect(fervexInstance.benefit).toEqual(0);
  });

  test('Benefit should increase by 2 when 6 >= expireIn >= 10', () => {
    const fervexInstance = new Fervex(6, 10);

    fervexInstance.updateBenefit();

    expect(fervexInstance.benefit).toEqual(12);

    const fervexInstance2 = new Fervex(10, 10);

    fervexInstance2.updateBenefit();

    expect(fervexInstance2.benefit).toEqual(12);
  });

  test('Benefit should increase by 3 when 0 >= expireIn >= 5', () => {
    const fervexInstance = new Fervex(5, 30);

    fervexInstance.updateBenefit();

    expect(fervexInstance.benefit).toEqual(33);

    const fervexInstance2 = new Fervex(0, 30);

    fervexInstance2.updateBenefit();

    expect(fervexInstance2.benefit).toEqual(33);
  });

  test('Benefit should increase by 1 when expireIn > 10', () => {
    const fervexInstance = new Fervex(11, 30);

    fervexInstance.updateBenefit();

    expect(fervexInstance.benefit).toEqual(31);
  });
});
