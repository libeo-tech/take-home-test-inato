import Drugs from "../Drug";

export default class Fervex extends Drugs {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }

  /**
   * Return the new benefit, after day change
   * @returns {Number} - The new calculated benefit
   */
  calculateNextBenefit() {
    if (this.expiresIn < 0){
      this.benefit = 0;
      return this.benefit;
    }

    if (this.benefit < 50) {
      this.benefit++;
    }

    if (this.benefit < 50 && this.expiresIn <= 10) {
      this.benefit++;
    }

    if (this.benefit < 50 && this.expiresIn <= 5 ) {
      this.benefit++;
    }

    return this.benefit;
  }
}
