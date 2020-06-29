import {Dafalgan} from "../constants";
import {Drug} from "./drug";

export class DafalganDrug extends Drug {
  constructor(expiresIn, benefit) {
    super(Dafalgan, expiresIn, benefit)
  }

  updateBenefitValue() {
    if (this.benefit > 1) {
      this.benefit = this.benefit - 2;
    }
    if (this.benefit === 1) {
      this.benefit = 0;
    }
  }

  applyExpiredEffect() {
    // Nothing to do
  }
}
