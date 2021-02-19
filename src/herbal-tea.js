import {Drug} from './drug';

export class HerbalTea extends Drug {

  constructor(expiresIn, benefit) {
    super('Herbal Tea', expiresIn, benefit);
  }

  increaseBenefit() {
    super.increaseBenefit();
    if (this.expiresIn < 0) {
      super.increaseBenefit();
    }
  }

  decreaseBenefit() {
  }

  benefitCanItBeDecreased() {
    return false;
  }

}
