import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

export default class Doliprane extends Drug {
  constructor(expiresIn, benefit, strategy) {
    super(MODEL_CONSTANTS.DRUG.DOLIPRANE, expiresIn, benefit);
    this.strategy = strategy;
  }

  updateBenefit() {
    this.strategy.updateBenefit(this);
  }

  updateExpiryDate() {
    this.strategy.updateExpiryDate(this);
  }
}
