import Drug from "../drug";
import drugNames from "../statics/drugNames";

export default class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super(drugNames.HERBAL_TEA, expiresIn, benefit);
  }

  updateBenefitValue() {
    this.decreaseExpiresIn();
    if (this.expiresIn < 0) return this.increaseBenefitValue(2);
    return this.increaseBenefitValue(1);
  }
}
