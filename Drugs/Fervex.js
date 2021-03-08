import { Drug } from "../pharmacy";

export class Fervex extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  getBenefitFactor() {
    let benefitFactor = super.getBenefitFactor();
    if (this.expiresIn > 5 && this.expiresIn < 11) {
      return benefitFactor * 2;
    } else if (this.expiresIn < 6) {
      return benefitFactor * 3;
    } else {
      return benefitFactor;
    }
  }

  updateBenefit() {
    this.expiresIn > 0
      ? (this.benefit += this.getBenefitFactor())
      : this.dropToZero();
    if (this.benefit > 50) this.benefit = 50;
  }

  dropToZero() {
    this.benefit = 0;
  }
}
