import { Dafalgan } from './Daflagan';

describe('Dafalgan', () => {
  it('set the correct default values', () => {
    const dafalgan = new Dafalgan();
    expect(dafalgan).toMatchObject({
      name: 'Dafalgan',
      expiresIn: 10,
      benefit: 10,
    });
  });

  it('degrades in Benefit twice as fast as normal drugs.', () => {
    const dafalgan = new Dafalgan();
    dafalgan.updateBenefit();
    expect(dafalgan).toMatchObject({
      expiresIn: 9,
      benefit: 8,
    });

    dafalgan.expiresIn = 0;
    dafalgan.updateBenefit();
    expect(dafalgan).toMatchObject({
      expiresIn: -1,
      benefit: 4,
    });
  });
});
