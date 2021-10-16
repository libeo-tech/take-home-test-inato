import { THRESHOLD_CONSTANTS } from "../constants";

export default class AbstractDrugStrategy {
  constructor() {
    this.minBenefit = THRESHOLD_CONSTANTS.BENEFIT.MIN_VALUE;
    this.maxBenefit = THRESHOLD_CONSTANTS.BENEFIT.MAX_VALUE;
    this.expiryDateLimit = THRESHOLD_CONSTANTS.EXPIRY_DATE.LIMIT;
    if (new.target === AbstractDrugStrategy) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }

  checkDrugIsExpired(drug) {
    return drug.expiresIn <= this.expiryDateLimit;
  }

  checkDrugMinBenefit(drug) {
    return drug.benefit > this.minBenefit;
  }

  checkDrugMaxBenefit(drug) {
    return drug.benefit < this.maxBenefit;
  }

  updateExpiryDate(drug) {
    drug.expiresIn--;
  }
}
