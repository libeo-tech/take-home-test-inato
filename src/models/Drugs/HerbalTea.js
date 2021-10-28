import Drugs from "../Drug";

export default class HerbalTea extends Drugs {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }

  /**
   * Return the new benefit, after day change
   * @returns {Number} - The new calculated benefit
   */
  calculateNextBenefit() {
    if (this.benefit < 50) {
      this.benefit++;
    }

    if (this.benefit < 50 && this.expiresIn < 0) {
      this.benefit++;
    }

    return this.benefit;
  }
}
