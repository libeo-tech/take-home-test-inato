import Drugs from "../Drug";

export default class Dafalgan extends Drugs {
  constructor(expiresIn, benefit) {
    super("Dafalgan", expiresIn, benefit);
  }

    /**
   * Return the new benefit, after day change
   * @returns {Number} - The new calculated benefit
   */
     calculateNextBenefit() {
      if (this.benefit > 0){
        this.benefit -= 2;
      }
      return this.benefit;
    }
}
