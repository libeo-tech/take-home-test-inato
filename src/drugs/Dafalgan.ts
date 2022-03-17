import { Drug } from './Drug';

class Dafalgan extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super('Dafalgan', expiresIn, benefit);
  }

  // "Dafalgan" degrades in Benefit twice as fast as normal drugs.
  updateBenefit(): void {
    let decreaseValue = 2;
    if (this.expiresIn < 0) decreaseValue += 2;

    this.benefit -= decreaseValue;

    super.updateBenefit();
  }

  updateExpiration(): void {
    this.expiresIn -= 1;
  }
}

export { Dafalgan };
