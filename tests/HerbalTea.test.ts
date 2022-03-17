import { HerbalTea } from '../src/drugs/HerbalTea';

test('constructor', () => {
  const herbalTeaInstance = new HerbalTea(20, 4);

  expect(herbalTeaInstance.name).toEqual('Herbal Tea');
  expect(herbalTeaInstance.expiresIn).toEqual(20);
  expect(herbalTeaInstance.benefit).toEqual(4);
});

describe('Testing updateExpiration logic.', () => {
  test('expiresIn should only decrease by 1.', () => {
    const herbalTeaInstance = new HerbalTea(13, 25);
  
    herbalTeaInstance.updateExpiration();
  
    expect(herbalTeaInstance.expiresIn).toEqual(12);
  });
});

describe('Testing updateBenefit logic.', () => {
  test('Benefit should increase by 1 when expireIn >= 0', () => {
    const herbalTeaInstance = new HerbalTea(0, 44);

    herbalTeaInstance.updateBenefit();

    expect(herbalTeaInstance.benefit).toEqual(45);
  });

  test('Benefit should increase by 2 when expireIn <= 0', () => {
    const herbalTeaInstance = new HerbalTea(-5, 44);

    herbalTeaInstance.updateBenefit();

    expect(herbalTeaInstance.benefit).toEqual(46);
  });

});
