import { HerbalTea } from './herbalTea';

test('constructor', () => {
  const herbalTea = new HerbalTea(5, 10);

  expect(herbalTea.name).toEqual('Herbal Tea');
  expect(herbalTea.expiresIn).toEqual(5);
  expect(herbalTea.benefit).toEqual(10);
});

describe('updateBenefit', () => {
  test('should add 1 when : expireIn >= 0', () => {
    const herbalTea = new HerbalTea(0, 30);

    herbalTea.updateBenefit();

    expect(herbalTea.benefit).toEqual(31);
  });

  test('should add 2 when : expireIn < 0', () => {
    const herbalTea = new HerbalTea(-1, 30);

    herbalTea.updateBenefit();

    expect(herbalTea.benefit).toEqual(32);
  });

  test('should reset to 50 when : benefit > 50', () => {
    const herbalTea = new HerbalTea(11, 51);

    herbalTea.updateBenefit();

    expect(herbalTea.benefit).toEqual(50);
  });

  test('should reset to 0 when : benefit < 0', () => {
    const herbalTea = new HerbalTea(11, -50);

    herbalTea.updateBenefit();

    expect(herbalTea.benefit).toEqual(0);
  });
});

test('updateExpiration', () => {
  const herbalTea = new HerbalTea(5, 10);

  herbalTea.updateExpiration();

  expect(herbalTea.expiresIn).toEqual(4);
});
