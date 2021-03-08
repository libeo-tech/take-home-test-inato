import { Drug } from "../pharmacy";

export class Dafalgan extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  getBenefitFactor() {
    const benefitFactor = super.getBenefitFactor() * 2;
    return benefitFactor;
  }

  updateBenefit() {
    this.benefit > 0
      ? (this.benefit -= this.getBenefitFactor())
      : (this.benefit = 0);
    if (Math.sign(this.benefit) < 0) this.benefit = 0;
  }
}
