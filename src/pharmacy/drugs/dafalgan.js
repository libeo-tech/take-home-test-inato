import { BASIC_UNIT, Drug, ONE_DAY } from "./drug";

const UNIT = BASIC_UNIT * 2;
export class Dafalgan extends Drug {
  constructor(name, expiresIn, benefit) {
    super("Dafalgan", expiresIn, benefit);
  }
  update() {
    this.expiresIn -= ONE_DAY;
    const unit = this.isExpired() ? UNIT * 2 : UNIT;
    this.benefit = this.benefit - unit;
    this.limitBenefit();
    return this;
  }
}
