/**
 * * class Pharmacy : a collection of drugs
 * @extends Drug
 * @property {Drug[]} drugs - a collection of drugs
 */
export class Pharmacy {
  constructor(_drugs = []) {
    this.drugs = _drugs;
  }

  /**
   * Add a drug to the pharmacy
   * @param {Drug} _drug a drug
   */
  addDrug(_drug) {
    this.drugs.push(_drug);
  }

  /**
   * Update the benefit value of each drug in the pharmacy
   * @returns {Drug[]} the updated drugs
   */
  updateBenefitValue() {
    return this.drugs.map(_drug => _drug.updateBenefitValue());
  }
}
