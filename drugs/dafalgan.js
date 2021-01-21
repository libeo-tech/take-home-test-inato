import { Drug } from "../drug";
import drugNames from "../statics/drugNames";

export default class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super(drugNames.DAFALGAN, expiresIn, benefit);
  }

  updateBenefitValue() {
    this.decreaseExpiresIn();
    return this.expiresIn < 0
      ? this.decreaseBenefitValue(4)
      : this.decreaseBenefitValue(2);
  }
}
