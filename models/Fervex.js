import Drug from "./Drug";
import { MODEL_CONSTANTS, THRESHOLD_CONSTANTS } from "../constants";

export default class Fervex extends Drug {
  constructor(expiresIn, benefit, strategy) {
    super(MODEL_CONSTANTS.DRUG.FERVEX, expiresIn, benefit);
    this.strategy = strategy;
  }

  updateBenefit() {
    if (this.expiresIn <= THRESHOLD_CONSTANTS.EXPIRY_DATE.LIMIT) {
      this.benefit = THRESHOLD_CONSTANTS.BENEFIT.MIN_VALUE;
    } else {
      this.strategy.updateBenefit(this);
      if (this.expiresIn <= THRESHOLD_CONSTANTS.FERVEX.FIRST_EXPIRY_LIMIT) {
        this.strategy.updateBenefit(this);
      }
      if (this.expiresIn <= THRESHOLD_CONSTANTS.FERVEX.SECOND_EXPIRY_LIMIT) {
        this.strategy.updateBenefit(this);
      }
    }
  }

  updateExpiryDate() {
    this.strategy.updateExpiryDate(this);
  }
}
