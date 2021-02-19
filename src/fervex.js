import {Drug} from './drug';

export class Fervex extends Drug {

  constructor(expiresIn, benefit) {
    super('Fervex', expiresIn, benefit);
  }

  increaseBenefit() {
    super.increaseBenefit();
    if (this.expiresIn < 11) {
      super.increaseBenefit();
    }
    if (this.expiresIn < 6) {
      super.increaseBenefit();
    }
  }

  decreaseExpiration() {
    super.decreaseExpiration();
    if (this.expiresIn <= 0) {
      this.benefit = 0;
    }
  }

  benefitCanItBeDecreased() {
    return false;
  }

}
