import { Drug } from "../pharmacy";

export class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  getBenefitFactor() {
    return super.getBenefitFactor();
  }

  updateBenefit() {
    this.benefit < 50
      ? (this.benefit += this.getBenefitFactor())
      : (this.benefit = 0);
    if (this.benefit > 50) this.benefit = 50;
  }
}
