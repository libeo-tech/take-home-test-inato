import {Fervex} from "../constants";
import {Drug} from "./drug";

export class FervexDrug extends Drug {
  constructor(expiresIn, benefit) {
    super(Fervex, expiresIn, benefit)
  }

  updateBenefitValue() {
    if (this.benefit < 50) {
      this.benefit = this.benefit + 1;
      if (this.expiresIn < 11) {
        if (this.benefit < 50) {
          this.benefit = this.benefit + 1;
        }
      }
      if (this.expiresIn < 6) {
        if (this.benefit < 50) {
          this.benefit = this.benefit + 1;
        }
      }
    }
  }

  applyExpiredEffect() {
    this.benefit = this.benefit - this.benefit;
  }
}
