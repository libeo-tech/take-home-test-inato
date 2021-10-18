import AbstractDrugStrategy from "./AbstractDrugStrategy";

/**
 * Degrading drug strategy.
 * Any drug using this strategy to update its benefit will decrease it.
 * @class
 * @extends AbstractDrugStrategy
 */
export default class DegradingDrugStrategy extends AbstractDrugStrategy {
  /**
   * Update the drug's benefit value.
   * If the drug has expired, the benefit is decreased twice.
   * Otherwise, the benefit is decreased once.
   * @method
   * @param {import("./Drug").Drug} drug - The drug to update.
   */
  updateBenefit(drug) {
    if (this.checkDrugMinBenefit(drug)) {
      drug.benefit--;
    }
    if (this.checkDrugMinBenefit(drug) && this.checkDrugIsExpired(drug)) {
      drug.benefit--;
    }
  }
}
