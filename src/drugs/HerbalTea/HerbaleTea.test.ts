import { HerbalTea } from './HerbalTea';

describe('Herbal Tea', () => {
  it('set the correct default values', () => {
    const herbalTea = new HerbalTea();
    expect(herbalTea).toMatchObject({
      name: 'Herbal Tea',
      expiresIn: 10,
      benefit: 5,
    });
  });

  it(
    'actually increases in Benefit the older it gets. ' +
      'Benefit increases twice as fast after the expiration date.',
    () => {
      const herbalTea = new HerbalTea();
      herbalTea.updateBenefit();
      expect(herbalTea).toMatchObject({
        benefit: 6,
        expiresIn: 9,
      });

      herbalTea.expiresIn = 0;
      herbalTea.updateBenefit();
      expect(herbalTea).toMatchObject({
        benefit: 8,
        expiresIn: -1,
      });
    },
  );
});
