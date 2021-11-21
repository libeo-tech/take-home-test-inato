/**
 * Represents a pharmacy, contains a list of drug items available in the store.
 */
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * Update the benefits of every drugs available in the store for a single day.
   * @returns {Drug[]} The list of drugs available in the store.
   */
  updateBenefitValue() {
    this.drugs.forEach(drug => drug.updateBenefitValue());

    return this.drugs;
  }
}