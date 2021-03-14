import { Drug } from "./drug";

export class HerbalTea extends Drug {
  updateBenefitValue() {
    const increaseValue = this.expiresIn > 0 ? 1 : 2;
    this.benefit = Math.min(this.benefit + increaseValue, 50);
    this.expiresIn--;
  }
}
