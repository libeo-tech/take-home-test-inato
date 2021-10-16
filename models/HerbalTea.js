import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

export default class HerbalTea extends Drug {
  constructor(expiresIn, benefit, strategy) {
    super(MODEL_CONSTANTS.DRUG.HERBAL_TEA, expiresIn, benefit);
    this.strategy = strategy;
  }

  updateBenefit() {
    this.strategy.updateBenefit(this);
  }

  updateExpiryDate() {
    this.strategy.updateExpiryDate(this);
  }
}
