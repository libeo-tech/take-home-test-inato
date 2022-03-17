import { Drug } from './Drug';

class Doliprane extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Doliprane', expiresIn, benefit);
  }

  // Once the expiration date has passed, Benefit degrades twice as fast.
  updateBenefit(): void {
    let decreaseValue = 1;

    if (this.expiresIn < 0) decreaseValue = 2;

    this.benefit -= decreaseValue;

    super.updateBenefit();
  }

  updateExpiration(): void {
    this.expiresIn -= 1;
  }
}

export { Doliprane };
