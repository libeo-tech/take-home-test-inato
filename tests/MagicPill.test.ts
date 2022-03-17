import { MagicPill } from '../src/drugs/MagicPill';

test('constructor', () => {
  const magicPillInstance = new MagicPill(20, 4);

  expect(magicPillInstance.name).toEqual('Magic Pill');
  expect(magicPillInstance.expiresIn).toEqual(20);
  expect(magicPillInstance.benefit).toEqual(4);
});

describe('Testing updateExpiration logic.', () => {
  test('expiresIn should not decrease.', () => {
    const magicPillInstance = new MagicPill(13, 25);
  
    magicPillInstance.updateExpiration();
  
    expect(magicPillInstance.expiresIn).toEqual(13);
  });
});

describe('Testing updateBenefit logic.', () => {
  test('Benefit should do nothing.', () => {
    const magicPillInstance = new MagicPill(0, 44);

    magicPillInstance.updateBenefit();

    expect(magicPillInstance.benefit).toEqual(44);
  });

});
