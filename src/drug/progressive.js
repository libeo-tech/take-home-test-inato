import { Drug } from "./base";

export class ProgressiveDrug extends Drug {
  get _benefitVariation() {
    if (this.expiresIn <= 0) return -this.benefit;
    if (this.expiresIn <= 5) return 3;
    if (this.expiresIn <= 10) return 2;
    return 1;
  }
}
