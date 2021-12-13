import { Drug } from "./Drug.js";

/**
 * * class MagicPill : a drug that never expires nor decreases in benefit.
 * @extends Drug
 * @property {number} expiresIn - number of days before drug expires
 * @property {number} benefit - the benefit of the drug (0 <= benefit <= 50)
 */
export class MagicPill extends Drug {
  constructor(_expiresIn, _benefit) {
    super("Magic Pill", _expiresIn, _benefit, 0);
  }

  /**
   * * Update the benefit value : never expires nor decreases in benefit
   * @returns {object} a plain js object representation for the class props
   */
  updateBenefitValue() {
    return this.toJSON();
  }
}
