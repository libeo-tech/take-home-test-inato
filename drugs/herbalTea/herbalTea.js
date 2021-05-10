import { Drug } from "../drug";
import { MAX_BENEFIT } from "../constants";

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }

  aging() {
    this.expiresIn--;
    this.calculatesBenefitAddition();
  }

  calculatesBenefitAddition() {
    if (super.isOutdated()) {
      (this.benefit + 2 >= MAX_BENEFIT) ? (this.benefit = MAX_BENEFIT) : (this.benefit += 2);
    } else if (!super.isDrugBenefitAtMax()) {
      this.benefit++;
    }
  }
}
