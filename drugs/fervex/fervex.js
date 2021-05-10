import { Drug } from "../drug";
import { MAX_BENEFIT, MIN_BENEFIT } from "../constants";

export class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }

  aging() {
    this.expiresIn--;
    this.calculatesBenefitAddition();
  }

  calculatesBenefitAddition() {
    if (super.isOutdated()) {
      this.benefit = MIN_BENEFIT;
    } else if (this.expiresIn <= 5 && !super.isDrugBenefitAtMax()) {
      this.benefit + 3 >= MAX_BENEFIT ? (this.benefit = MAX_BENEFIT) : (this.benefit += 3);
    } else if (
      this.expiresIn > 5 &&
      this.expiresIn <= 10 &&
      !super.isDrugBenefitAtMax()
    ) {
      this.benefit + 3 >= MAX_BENEFIT ? (this.benefit = MAX_BENEFIT) : (this.benefit += 2);
    } else if (!super.isDrugBenefitAtMax()) {
      this.benefit++;
    }
  }
}
