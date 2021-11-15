import Drugs from "../drug";

export default class Fervex extends Drugs {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }

  updateBenefit() {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
      return;
    }

    if (this.expiresIn > 0 && this.expiresIn <= 5) {
      this.benefit = this.benefit + 3;
      if (this.benefit > 50) {
        this.benefit = 50;
      }
      return;
    }

    if (this.expiresIn > 0 && this.expiresIn <= 10) {
      this.benefit = this.benefit + 2;
      if (this.benefit > 50) {
        this.benefit = 50;
      }
      return;
    }

    this.benefit = this.benefit + 1;
  }
}
