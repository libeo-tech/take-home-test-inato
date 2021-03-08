import { Drug } from "../pharmacy";

export class Fervex extends Drug {
  constructor(name, expiresIn, benefit, benefitVariation) {
    super(name, expiresIn, benefit);
    this.benefitVariation = benefitVariation;
  }

  updateBenefit() {
    if (this.expiresIn > 0) {
      if (this.expiresIn < 11 && this.expiresIn > 5) {
        this.benefit += 2;
      } else if (this.expiresIn < 6) {
        this.benefit += 3;
      } else {
        this.benefit += 1;
      }
    } else {
      this.dropToZero();
    }
    if (this.benefit > 50) this.benefit = 50;
    this.updateExpireIn();
  }

  dropToZero() {
    this.benefit = 0;
  }
}
