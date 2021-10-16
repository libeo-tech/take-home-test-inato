import AbstractDrugStrategy from "./AbstractDrugStrategy";

export default class DegradingDrugStrategy extends AbstractDrugStrategy {
  updateBenefit(drug) {
    if (this.checkDrugMinBenefit(drug)) {
      drug.benefit--;
    }
    if (this.checkDrugMinBenefit(drug) && this.checkDrugIsExpired(drug)) {
      drug.benefit--;
    }
  }
}
