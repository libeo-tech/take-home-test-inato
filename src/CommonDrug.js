const MAX_BENEFIT = 50;

/**
 * Represents any drug, with default behaviors
 */
export class CommonDrug {
  /**
   * Create a common Drug, with no specific behavior
   * @param {string} name
   * @param {number} expiresIn in number of days
   * @param {number} benefit
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * Updates benefit and expiry. This is intended to be called at the end of each day.
   * @public
   */
  dailyUpdate() {
    this.benefit = this._normalizeBenefit(this.benefit + this._benefitDiff());
    this._updateExpiry();
  }

  _updateExpiry() {
    this.expiresIn = this.expiresIn - 1;
  }

  /**
   * Force benefit in range
   * @param {number} benefit submitted raw benefit
   * @return {number} normalized benefit
   * @private
   */
  _normalizeBenefit(benefit) {
    return Math.min(Math.max(benefit, 0), MAX_BENEFIT);
  }

  /**
   * Default benefit change for common drugs
   * @return {number} benefit to add to current
   * @protected
   */
  _benefitDiff() {
    return this.expiresIn > 0 ? -1 : -2;
  }
}
