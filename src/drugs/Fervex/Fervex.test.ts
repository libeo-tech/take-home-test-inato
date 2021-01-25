import { Fervex } from './Fervex';

describe('Fervex', () => {
  it('set default values', () => {
    const fervex = new Fervex();

    expect(fervex).toMatchObject({
      name: 'Fervex',
      expiresIn: 5,
      benefit: 40,
    });
  });

  it(
    'increases in Benefit as its expiration date approaches. ' +
      'Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less ' +
      'but Benefit drops to 0 after the expiration date.',
    () => {
      const fervex = new Fervex();
      fervex.updateBenefit();
      expect(fervex).toMatchObject({
        benefit: 43,
        expiresIn: 4,
      });

      fervex.expiresIn = 10;
      fervex.updateBenefit();
      expect(fervex).toMatchObject({
        benefit: 45,
        expiresIn: 9,
      });

      fervex.expiresIn = 0;
      fervex.updateBenefit();
      expect(fervex).toMatchObject({
        benefit: 0,
        expiresIn: -1,
      });
    },
  );
});
