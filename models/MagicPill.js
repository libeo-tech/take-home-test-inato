import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

export default class MagicPill extends Drug {
  constructor(expiresIn, benefit, strategy) {
    super(MODEL_CONSTANTS.DRUG.MAGIC_PILL, expiresIn, benefit);
    this.strategy = strategy;
  }

  updateBenefit() {
    this.strategy.updateBenefit(this);
  }

  updateExpiryDate() {
    this.strategy.updateExpiryDate(this);
  }
}
