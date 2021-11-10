import { Fervex } from './fervex';

test('constructor', () => {
  const fervex = new Fervex(5, 10);

  expect(fervex.name).toEqual('Fervex');
  expect(fervex.expiresIn).toEqual(5);
  expect(fervex.benefit).toEqual(10);
});

describe('updateBenefit', () => {
  test('should set to 0 when : expireIn < 0', () => {
    const fervex = new Fervex(-1, 30);

    fervex.updateBenefit();

    expect(fervex.benefit).toEqual(0);
  });

  test('should add 3 when expireIn : 0 >= expireIn >= 5', () => {
    const fervex = new Fervex(5, 30);

    fervex.updateBenefit();

    expect(fervex.benefit).toEqual(33);

    const fervex2 = new Fervex(0, 30);

    fervex2.updateBenefit();

    expect(fervex2.benefit).toEqual(33);
  });

  test('should add 2 when : 6 >= expireIn >= 10', () => {
    const fervex = new Fervex(6, 30);

    fervex.updateBenefit();

    expect(fervex.benefit).toEqual(32);

    const fervex2 = new Fervex(10, 30);

    fervex2.updateBenefit();

    expect(fervex2.benefit).toEqual(32);
  });

  test('should add 1 when : expireIn > 10', () => {
    const fervex = new Fervex(11, 30);

    fervex.updateBenefit();

    expect(fervex.benefit).toEqual(31);
  });

  test('should reset to 50 when : benefit > 50', () => {
    const fervex = new Fervex(11, 51);

    fervex.updateBenefit();

    expect(fervex.benefit).toEqual(50);
  });

  test('should reset to 0 when : benefit < 0', () => {
    const fervex = new Fervex(11, -50);

    fervex.updateBenefit();

    expect(fervex.benefit).toEqual(0);
  });
});

test('updateExpiration', () => {
  const fervex = new Fervex(5, 10);

  fervex.updateExpiration();

  expect(fervex.expiresIn).toEqual(4);
});
