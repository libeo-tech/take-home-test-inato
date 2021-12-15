import { Drug } from "../drug";

export class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super(Fervex.name, expiresIn, benefit);
  }

  decreaseExpiresIn() {
    this.expiresIn -= 1;

    if (this.expiresIn > 10) {
      this.benefit += super.defaultBenefitPerDay;
    } else if (this.expiresIn <= 10 && this.expiresIn > 3) {
      this.benefit += super.defaultBenefitPerDay * 2;
    } else if (this.expiresIn <= 3 && this.expiresIn > 0) {
      this.benefit += super.defaultBenefitPerDay * 3;
    } else {
      this.benefit = 0;
    }
  }
}
