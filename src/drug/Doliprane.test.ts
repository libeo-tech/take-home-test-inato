import { Doliprane } from './doliprane';

test('constructor', () => {
  const doliprane = new Doliprane(5, 10);

  expect(doliprane.name).toEqual('Doliprane');
  expect(doliprane.expiresIn).toEqual(5);
  expect(doliprane.benefit).toEqual(10);
});

describe('updateBenefit', () => {
  test('should remove 1 when : expireIn >= 0', () => {
    const doliprane = new Doliprane(0, 30);

    doliprane.updateBenefit();

    expect(doliprane.benefit).toEqual(29);
  });

  test('should remove 2 when : expireIn < 0', () => {
    const doliprane = new Doliprane(-1, 30);

    doliprane.updateBenefit();

    expect(doliprane.benefit).toEqual(28);
  });

  test('should reset to 50 when : benefit > 50', () => {
    const doliprane = new Doliprane(11, 51);

    doliprane.updateBenefit();

    expect(doliprane.benefit).toEqual(50);
  });

  test('should reset to 0 when : benefit < 0', () => {
    const doliprane = new Doliprane(11, -50);

    doliprane.updateBenefit();

    expect(doliprane.benefit).toEqual(0);
  });
});

test('updateExpiration', () => {
  const doliprane = new Doliprane(5, 10);

  doliprane.updateExpiration();

  expect(doliprane.expiresIn).toEqual(4);
});
