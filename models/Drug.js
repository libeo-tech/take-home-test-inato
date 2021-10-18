/**
 * @typedef {Object} Drug
 * @property {string} name The drug's name
 * @property {number} expiresIn Number of days left until the drug is considered as expired
 * @property {number} benefit Benefit value of the drug
 */

/**
 * A drug class from which all other drugs inherit.
 * Contains shared parameters used by different child drugs.
 * @class
 */
export default class Drug {
  /**
   * Represents a drug.
   * @constructor
   * @param {string} name The drug's name
   * @param {number} expiresIn Number of days left until the drug is considered as expired
   * @param {number} benefit Benefit value of the drug
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
