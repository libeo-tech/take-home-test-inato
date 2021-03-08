import { Drug } from "../pharmacy";

export class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit, benefitVariation) {
    super(name, expiresIn, benefit);
    this.benefitVariation = benefitVariation;
  }

  updateBenefit() {
    this.benefit < 50
      ? (this.benefit += 1 * (this.expiresIn > 0 ? 1 : 2))
      : null;
    if (this.benefit > 50) this.benefit = 50;
    this.updateExpireIn();
  }
}
