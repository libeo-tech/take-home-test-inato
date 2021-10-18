import AbstractDrugStrategy from "./AbstractDrugStrategy";
/**
 * Increasing drug strategy.
 * Any drug using this strategy to update its benefit will increase it.
 * @class
 * @extends AbstractDrugStrategy
 */
export default class IncreasingDrugStrategy extends AbstractDrugStrategy {
  /**
   * Update the drug's benefit value.
   * If the drug has expired, the benefit is increase twice.
   * Otherwise, the benefit is increased once.
   * @param {import("./Drug").Drug} drug - The drug to update.
   */
  updateBenefit(drug) {
    if (this.checkDrugMaxBenefit(drug)) {
      drug.benefit++;
    }
    if (this.checkDrugMaxBenefit(drug) && this.checkDrugIsExpired(drug)) {
      drug.benefit++;
    }
  }
}
