import { MagicPill } from './magicPill';

test('constructor', () => {
  const magicPill = new MagicPill(5, 10);

  expect(magicPill.name).toEqual('Magic Pill');
  expect(magicPill.expiresIn).toEqual(5);
  expect(magicPill.benefit).toEqual(10);
});

describe('updateBenefit', () => {
  test('should reset to 50 when : benefit > 50', () => {
    const magicPill = new MagicPill(11, 51);

    magicPill.updateBenefit();

    expect(magicPill.benefit).toEqual(50);
  });

  test('should reset to 0 when : benefit < 0', () => {
    const magicPill = new MagicPill(11, -50);

    magicPill.updateBenefit();

    expect(magicPill.benefit).toEqual(0);
  });
});

test('updateExpiration', () => {
  const magicPill = new MagicPill(5, 10);

  magicPill.updateExpiration();

  expect(magicPill.expiresIn).toEqual(5);
});
