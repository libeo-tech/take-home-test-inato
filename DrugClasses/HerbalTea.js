import { Drug } from "./Drug";

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }
  updateBenefit() {
    this.expiresIn <= 0 && this.benefit + 2 <= 50
      ? (this.benefit = this.benefit + 2)
      : (this.benefit = this.benefit + 1);
  }
}
