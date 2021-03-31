import { DAFALGAN, MIN_BENEFIT_VALUE } from "./constants";
import { Drug } from "./drug";

const DAFALGAN_DECREASE_MULTIPLIER = 2;

export class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super(DAFALGAN, expiresIn, benefit);
  }

  updateDrugValues() {
    this.expiresIn--;

    const newBenefit =
      this.benefit -
      DAFALGAN_DECREASE_MULTIPLIER * (this.expiresIn < 0 ? 2 : 1);

    this.benefit = Math.max(MIN_BENEFIT_VALUE, newBenefit);
  }
}
