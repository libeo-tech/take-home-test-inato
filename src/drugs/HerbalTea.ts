import { Drug } from './Drug';

class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Herbal Tea', expiresIn, benefit);
  }

  // "Herbal Tea" actually increases in Benefit the older it gets.
  // Benefit increases twice as fast after the expiration date.
  updateBenefit(): void {
    if (this.expiresIn < 0) this.benefit += 2;
    else this.benefit += 1;

    super.updateBenefit();
  }

  updateExpiration(): void {
    this.expiresIn -= 1;
  }
}

export { HerbalTea };
