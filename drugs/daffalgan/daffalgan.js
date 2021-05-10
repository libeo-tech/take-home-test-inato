import { MIN_BENEFIT } from "../constants";
import { Drug } from "../drug";

export class Daffalgan extends Drug {
  constructor(expiresIn, benefit) {
    super("Daffalgan", expiresIn, benefit);
  }

  calculatesBenefitAddition() {
    if (this.isOutdated()) {
      this.benefit - 4 <= MIN_BENEFIT
        ? (this.benefit = 0)
        : (this.benefit -= 4);
    } else {
      this.benefit - 2 < MIN_BENEFIT ? (this.benefit = 0) : (this.benefit -= 2);
    }
  }
}
