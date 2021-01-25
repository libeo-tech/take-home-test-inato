import { Drug } from '../Drug';

export class Fervex extends Drug {
  constructor(expiresIn = 5, benefit = 40) {
    super('Fervex', expiresIn, benefit);
  }

  updateBenefit() {
    this.expiresIn--;
    if (this.expiresIn < 0) {
      this.benefit = 0;
    } else if (this.expiresIn <= 5) {
      this.increaseBenefit(3);
    } else if (this.expiresIn <= 10) {
      this.increaseBenefit(2);
    }
  }
}
