import { MagicPill } from './MagicPill';

describe('Magic Pill', () => {
  it('set the correct default values', () => {
    const magicPill = new MagicPill();
    expect(magicPill).toMatchObject({
      name: 'Magic Pill',
      expiresIn: 15,
      benefit: 40,
    });
  });

  it('never expires nor lose benefit', () => {
    const magicPill = new MagicPill();
    for (let i = 0; i < 1000; i++) {
      magicPill.updateBenefit();
    }
    expect(magicPill).toMatchObject({
      name: 'Magic Pill',
      expiresIn: 15,
      benefit: 40,
    });
  });
});
