import { Drug } from '../Drug';

export class HerbalTea extends Drug {
  constructor(expiresIn = 10, benefit = 5) {
    super('Herbal Tea', expiresIn, benefit);
  }

  updateBenefit() {
    this.expiresIn--;
    if (this.expiresIn < 0) {
      this.increaseBenefit(2);
    } else {
      this.increaseBenefit();
    }
  }
}
