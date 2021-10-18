/**
 * @typedef {Object} Pharmacy
 * @property {import("./Drug").Drug[]} drugs Drugs available in the pharmacy's inventory
 */

/**
 * A pharmacy containing different types of drugs.
 * @class
 */
export default class Pharmacy {
  /**
   * Represents a pharmacy.
   * Instantiates with a given number of drugs in its inventory.
   * @constructor
   * @param {import("./Drug").Drug[]} drugs Drugs available in the pharmacy's inventory
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  /**
   * Update the benefit and expiry date of all the pharmacy's drugs.
   * @method
   * @returns {import("./Drug").Drug[]} Updated drugs available in the pharmacy's inventory
   */
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefit();
      this.drugs[i].updateExpiryDate();
    }
    return this.drugs.map(drug => {
      return {
        name: drug.name,
        expiresIn: drug.expiresIn,
        benefit: drug.benefit
      };
    });
  }
}
