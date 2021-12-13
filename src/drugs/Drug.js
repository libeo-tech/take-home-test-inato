/**
 * * class Drug : a basic drug which benefit increases or decreases by a "benefit factor" throughout time
 * @property {string} name - the drug name
 * @property {number} expiresIn - number of days before drug expires
 * @property {number} benefit - the benefit of the drug (0 <= benefit <= 50)
 * @property {number} benefitFactor - the factor by which the drug decreases (negative factor) or increases (positive factor)
 * ! A drug with a custom benefit's update function should extends the drug class and implements the updateBenefitValue fn
 */
export class Drug {
  static MIN_BENEFIT = 0;
  static MAX_BENEFIT = 50;

  constructor(_name, _expiresIn = 0, _benefit = 0, _benefitFactor = -1) {
    this.name = _name;
    this.expiresIn = _expiresIn;
    this.benefit = _benefit;
    this.benefitFactor = _benefitFactor;
  }

  /**
   * * Set the benefit value
   * ! benefit cannot be lower than 0
   * ! benefit cannot be greater than 50
   */
  set benefit(_benefit) {
    if (_benefit < Drug.MIN_BENEFIT) {
      this.__benefit = Drug.MIN_BENEFIT;
    } else if (_benefit > Drug.MAX_BENEFIT) {
      this.__benefit = Drug.MAX_BENEFIT;
    } else {
      this.__benefit = _benefit;
    }
  }

  /**
   * * Get the benefit value
   */
  get benefit() {
    return this.__benefit;
  }

  /**
   * * Decrease the expiresIn prop
   * @returns {void}
   */
  decreaseExpiresIn() {
    this.expiresIn--;
  }

  /**
   * * Returns a json representation of the current class instance
   * @returns {object} the json representation of the current class instance
   */
  toJSON() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit
    };
  }

  /**
   * * Update the benefit value :
   *      - Benefit value should increase/decrease by the benefit factor until expiration has passed
   *      - Once the expiration has passed, benefit degrades twice as fast
   *   Decrease the expiresIn prop
   * @returns {Drug} the current class instance
   */
  updateBenefitValue() {
    if (this.expiresIn <= 0) {
      this.benefit += 2 * this.benefitFactor;
    } else {
      this.benefit += this.benefitFactor;
    }
    this.decreaseExpiresIn();
    return this.toJSON();
  }
}
