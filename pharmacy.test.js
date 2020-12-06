import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  const doliprane = new Drug('Doliprane', 20, 30);
  const fervex = new Drug('Fervex', 5, 40);
  const herbal = new Drug('Herbal Tea', 10, 5);
  const magic = new Drug('Magic Pill', 15, 40);
  const dafalgan = new Drug('Dafalgan', 21, 7);
  const pharmacy = new Pharmacy([doliprane, fervex, herbal, dafalgan, magic]);
  pharmacy.updateBenefitValue();

  it('should decrease  doliprane benefit and expiresIn', () => {
    expect(doliprane.benefit).toBe(29);
    expect(doliprane.expiresIn).toBe(19);
  });

  it('should decrease  fervex benefit and expiresIn', () => {
    expect(fervex.benefit).toBe(43);
    expect(fervex.expiresIn).toBe(4);
  });

  it('should decrease  herbal benefit and expiresIn', () => {
    expect(herbal.benefit).toBe(6);
    expect(herbal.expiresIn).toBe(9);
  });

  it('should decrease  dafalgan benefit and expiresIn', () => {
    expect(dafalgan.benefit).toBe(5);
    expect(dafalgan.expiresIn).toBe(20);
  });

  it('should not modify magic benefits and expiresIn', () => {
    expect(magic.benefit).toBe(40);
    expect(magic.expiresIn).toBe(15);
  });
});
