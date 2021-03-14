import { Drug } from "./drug";

export class Fervex extends Drug {
  updateBenefitValue() {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
    } else if (this.expiresIn <= 5) {
      this.benefit = Math.min(this.benefit + 3, 50);
    } else if (this.expiresIn <= 10) {
      this.benefit = Math.min(this.benefit + 2, 50);
    } else {
      this.benefit = Math.min(this.benefit + 1, 50);
    }
    this.expiresIn--;
  }
}
