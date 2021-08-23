import { Drug } from "./Drug.js";

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }
  updateBenefit() {
    if (this.expiresIn <= 0 && this.benefit + 2 <= 50) {
      this.benefit = this.benefit + 2;
    } else this.benefit = this.benefit + 1;
  }
}
