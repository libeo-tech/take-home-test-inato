import { HERBAL_TEA, MAX_BENEFIT_VALUE } from "./constants";
import { Drug } from "./drug";

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super(HERBAL_TEA, expiresIn, benefit);
  }

  updateDrugValues() {
    this.expiresIn--;

    const newBenefit = this.benefit + (this.expiresIn < 0 ? 2 : 1);

    this.benefit = Math.min(MAX_BENEFIT_VALUE, newBenefit);
  }
}
