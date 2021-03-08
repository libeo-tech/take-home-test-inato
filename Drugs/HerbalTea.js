import { Drug } from "../pharmacy";

export class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit, benefitVariation) {
    super(name, expiresIn, benefit);
    this.benefitVariation = benefitVariation;
  }

  updateBenefit() {
    this.benefit < 50 ? (this.benefit += 1) : null;
  }
}
