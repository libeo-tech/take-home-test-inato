import { Drug } from './Drug';

class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Fervex', expiresIn, benefit);
  }

  // "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches.
  //  Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less
  //  but Benefit drops to 0 after the expiration date.
  updateBenefit(): void {
    if (this.expiresIn < 0) {
      this.benefit = 0;
      return;
    }

    let increaseValue = 1;

    if (this.expiresIn <= 10) increaseValue += 1;
    if (this.expiresIn <= 5) increaseValue += 1;

    this.benefit += increaseValue;

    super.updateBenefit();
  }

  updateExpiration(): void {
    this.expiresIn -= 1;
  }
}

export { Fervex };
