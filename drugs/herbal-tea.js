import {HerbalTea} from "../constants";
import {Drug} from "./drug";

export class HerbalTeaDrug extends Drug {
  constructor(expiresIn, benefit) {
    super(HerbalTea, expiresIn, benefit)
  }

  updateBenefitValue() {
    if (this.benefit < 50) {
      this.benefit = this.benefit + 1;
    }
  }

  applyExpiredEffect() {
    if (this.benefit < 50) {
      this.benefit = this.benefit + 1;
    }
  }
}
