import { MAX_BENEFIT, MIN_BENEFIT } from "./constants";

export class Drug {
  /*
   * @param name Drug's name
   * @param expiresIn Drug's expiration date
   * @param benefit Drug's strength
   */

  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /*
   * Alterates the drug characteristics after one day
   */
  aging() {
    this.expiresIn--;
    if (!this.isDrugIneffective()) {
      this.calculatesBenefitAddition();
    }
  }

  /*
   * Determines how to alterate the benefit value, regarding the expiredIn value
   */
  calculatesBenefitAddition() {
    if (this.isOutdated()) {
      this.benefit - 2 <= MIN_BENEFIT
        ? (this.benefit = 0)
        : (this.benefit -= 2);
    } else {
      this.benefit--;
    }
  }

  isDrugIneffective() {
    return this.benefit === MIN_BENEFIT;
  }

  isOutdated() {
    return this.expiresIn < 0;
  }

  isDrugBenefitAtMax() {
    return this.benefit >= MAX_BENEFIT;
  }
}
