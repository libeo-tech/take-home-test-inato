import { Drug } from "./drug";

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Fervex", expiresIn, benefit);
  }
  calculateBenefit(): void {
    let subOrAdd = 1;
    if (this.expiresIn <= 10 && this.expiresIn > 5) {
      subOrAdd = 2;
    } else if (this.expiresIn >= 0 && this.expiresIn < 5) {
      subOrAdd = 3;
    } else if (this.expiresIn < 0) {
      subOrAdd = this.benefit === 0 ? 0 : -1 * this.benefit;
    }
    this.benefit += subOrAdd;
  }
}
