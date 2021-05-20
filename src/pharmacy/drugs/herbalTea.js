import { BASIC_UNIT, Drug, ONE_DAY } from "./drug";

export class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }
  update() {
    this.expiresIn -= ONE_DAY;
    const unit = this.isExpired() ? BASIC_UNIT * 2 : BASIC_UNIT;
    this.benefit = this.benefit + unit;
    this.limitBenefit();
    return this;
  }
}
