import { Drug } from "./Drug.js";

export class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }
  updateBenefit() {
    if (this.expiresIn < 5 && this.expiresIn >= 0 && this.benefit + 3 <= 50) {
      this.benefit = this.benefit + 3;
    } else if (
      this.expiresIn < 10 &&
      this.expiresIn >= 5 &&
      this.benefit + 2 <= 50
    ) {
      this.benefit = this.benefit + 2;
    } else if (this.expiresIn < 0) {
      this.benefit = 0;
    } else this.benefit = this.benefit + 1;
  }
}
