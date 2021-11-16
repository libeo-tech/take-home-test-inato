import Drugs from "../drug";

export default class HerbalTea extends Drugs {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }

  updateBenefit() {
    if (this.expiresIn <= 0) {
      this.benefit = this.benefit + 2;
    } else {
      this.benefit = this.benefit + 1;
    }

    super.cleanBenefitValue();
  }
}
