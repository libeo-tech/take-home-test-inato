import Drug from "../drug";
import drugNames from "../statics/drugNames";

export default class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super(drugNames.FERVEX, expiresIn, benefit);
  }

  dropBenefit() {
    this.benefit = 0;
    return this;
  }

  updateBenefitValue() {
    this.decreaseExpiresIn();
    if (this.expiresIn < 0) return this.dropBenefit();
    if (this.expiresIn < 5) return this.increaseBenefitValue(3);
    if (this.expiresIn < 10) return this.increaseBenefitValue(2);
    return this.increaseBenefitValue(1);
  }
}
