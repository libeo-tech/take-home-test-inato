import { Drug } from "../drug";

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super(HerbalTea.name, expiresIn, benefit);
  }

  decreaseExpiresIn() {
    this.expiresIn -= 1;

    if (super.isExpired()) {
      this.benefit += super.defaultBenefitPerDay * 2;
    } else {
      this.benefit += super.defaultBenefitPerDay;
    }
  }
}
