import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

export default class Dafalgan extends Drug {
  constructor(expiresIn, benefit, strategy) {
    super(MODEL_CONSTANTS.DRUG.DAFALGAN, expiresIn, benefit);
    this.strategy = strategy;
  }

  updateBenefit() {
    this.strategy.updateBenefit(this);
    this.strategy.updateBenefit(this);
  }

  updateExpiryDate() {
    this.strategy.updateExpiryDate(this);
  }
}
