import Drugs from "../Drug";

export default class MagicPill extends Drugs {
  constructor(expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }

  /**
   * Return the new benefit, after day change
   * @returns {Number} - The new calculated benefit
   */
  calculateNextBenefit() {
    return this.benefit;
  }

  /**
   * Calculate new benefit and new expireIn, after new day
   * @returns {MagicPill} - The current instance
   */
  toNextDay() {
    return this;
  }
}
