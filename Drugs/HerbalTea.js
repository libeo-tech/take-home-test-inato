import { Drug } from "../pharmacy";

export class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  getBenefitFactor() {
    return super.getBenefitFactor();
  }

  updateBenefit() {
    this.benefit < 49
      ? (this.benefit += this.getBenefitFactor())
      : (this.benefit = 50);
  }
}
