import { Dafalgan } from './dafalgan';

test('constructor', () => {
  const dafalgan = new Dafalgan(5, 10);

  expect(dafalgan.name).toEqual('Dafalgan');
  expect(dafalgan.expiresIn).toEqual(5);
  expect(dafalgan.benefit).toEqual(10);
});

describe('updateBenefit', () => {
  test('should remove 2 when : expireIn >= 0', () => {
    const dafalgan = new Dafalgan(0, 30);

    dafalgan.updateBenefit();

    expect(dafalgan.benefit).toEqual(28);
  });

  test('should remove 4 when : expireIn < 0', () => {
    const dafalgan = new Dafalgan(-1, 30);

    dafalgan.updateBenefit();

    expect(dafalgan.benefit).toEqual(26);
  });

  test('should reset to 50 when : benefit > 50', () => {
    const dafalgan = new Dafalgan(11, 55);

    dafalgan.updateBenefit();

    expect(dafalgan.benefit).toEqual(50);
  });

  test('should reset to 0 when : benefit < 0', () => {
    const dafalgan = new Dafalgan(11, -55);

    dafalgan.updateBenefit();

    expect(dafalgan.benefit).toEqual(0);
  });
});

test('updateExpiration', () => {
  const dafalgan = new Dafalgan(5, 10);

  dafalgan.updateExpiration();

  expect(dafalgan.expiresIn).toEqual(4);
});
