import AbstractDrugStrategy from "./AbstractDrugStrategy";

export default class IncreasingDrugStrategy extends AbstractDrugStrategy {
  updateBenefit(drug) {
    if (this.checkDrugMaxBenefit(drug)) {
      drug.benefit++;
    }
    if (this.checkDrugMaxBenefit(drug) && this.checkDrugIsExpired(drug)) {
      drug.benefit++;
    }
  }
}
