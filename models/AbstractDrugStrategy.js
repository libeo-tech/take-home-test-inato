import { THRESHOLD_CONSTANTS, ERROR_CONSTANTS } from "../constants";

/**
 * @typedef {Object} AbstractDrugStrategy
 * @property {number} minBenefit Min benefit a drug can ever have
 * @property {number} maxBenefit Max benefit a drug can ever have
 * @property {number} expiryDateLimit Value after which a drug is then considered expired (equal or below)
 */

/**
 * Abstract drug strategy.
 * An abstract class from which all other drug strategy classes inherit.
 * Contains shared pieces of logic used by different strategies.
 * @class
 */
export default class AbstractDrugStrategy {
  /**
   * Represents a drug strategy.
   * Default parameters are thresholds shared between the different strategies (max/min benefit, etc).
   * @constructor
   */
  constructor() {
    this.minBenefit = THRESHOLD_CONSTANTS.BENEFIT.MIN_VALUE;
    this.maxBenefit = THRESHOLD_CONSTANTS.BENEFIT.MAX_VALUE;
    this.expiryDateLimit = THRESHOLD_CONSTANTS.EXPIRY_DATE.LIMIT;
    if (new.target === AbstractDrugStrategy) {
      throw new TypeError(ERROR_CONSTANTS.ABSTRACT_CLASS_INSTANTIATION_ERROR);
    }
  }

  /**
   * Check the drug's expiration date value.
   * If the drug has expired, returns true.
   * Otherwise, returns false.
   * @method
   * @param {import("./Drug").Drug} drug - The drug to update.
   * @returns {Boolean}
   */
  checkDrugIsExpired(drug) {
    return drug.expiresIn <= this.expiryDateLimit;
  }

  /**
   * Check the drug's benefit value.
   * If the drug has a benefit value still superior to the minimum reachable benefit, returns true.
   * Otherwise, returns false.
   * @method
   * @param {import("./Drug").Drug} drug - The drug to update.
   * @returns {Boolean}
   */
  checkDrugMinBenefit(drug) {
    return drug.benefit > this.minBenefit;
  }

  /**
   * Check the drug's benefit value.
   * If the drug has a benefit value still inferior to the maximum reachable benefit, returns true.
   * Otherwise, returns false.
   * @method
   * @param {import("./Drug").Drug} drug - The drug to update.
   * @returns {Boolean}
   */
  checkDrugMaxBenefit(drug) {
    return drug.benefit < this.maxBenefit;
  }

  /**
   * Decrease the drug's expiry date.
   * @method
   * @param {import("./Drug").Drug} drug - The drug to update.
   */
  updateExpiryDate(drug) {
    drug.expiresIn--;
  }
}
