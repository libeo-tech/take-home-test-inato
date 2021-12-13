import { Drug } from "./Drug.js";

/**
 * * class Fervex : a drug that increases in Benefit as its expiration date approaches.
 * Benefit increases by 2 when there are 10 days or less
 * Benefit increases by 3 when there are 5 days or less
 * Benefit drops to 0 after the expiration date
 * @extends Drug
 * @property {number} expiresIn - number of days before drug expires
 * @property {number} benefit - the benefit of the drug (0 <= benefit <= 50)
 */
export class Fervex extends Drug {
  constructor(_expiresIn, _benefit) {
    super("Fervex", _expiresIn, _benefit, 1);
  }

  /**
   * * Update the benefit value :
   *   Compute the benefit value :
   *      - benefit = 0 if the expiration date has expired
   *      - benefit increases by 1 if the expiration date > 10
   *      - benefit increases by 2 if the expiration date is "5 < expirationDate < 10"
   *      - benefit increases by 3 if the expiration date is "expirationDate <= 5"
   *   Decrease the expiresIn prop
   * @returns {object} a plain js object representation for the class props
   */
  updateBenefitValue() {
    if (this.expiresIn <= 0) {
      this.benefit = 0; // Benefit drops to 0 after the expiration date
    } else if (this.expiresIn > 10) {
      this.benefit += 1 * this.benefitFactor; // At the end of each day our system lowers both values for every drug
    } else if (this.expiresIn <= 5) {
      this.benefit += 3 * this.benefitFactor; // Benefit increases by 3 when there are 5 days or less
    } else if (this.expiresIn <= 10) {
      this.benefit += 2 * this.benefitFactor; // Benefit increases by 2 when there are 10 days or less
    }
    this.decreaseExpiresIn();
    return this.toJSON();
  }
}
