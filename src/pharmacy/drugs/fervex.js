import {BASIC_UNIT, Drug, MIN_BENEFIT, ONE_DAY} from "./drug";

const TEN_DAYS = 10;
const FIVE_DAYS = 5;
const UNITS = { 10: 2, 5: 3 };
export class Fervex extends Drug {
  constructor(name, expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }
  update() {
    this.expiresIn -= ONE_DAY;
    const unit =
      this.expiresIn <= FIVE_DAYS
        ? UNITS[FIVE_DAYS]
        : this.expiresIn <= TEN_DAYS
        ? UNITS[TEN_DAYS]
        : BASIC_UNIT;
    this.benefit = this.isExpired() ? MIN_BENEFIT : this.benefit + unit;
    this.limitBenefit();
    return this;
  }
}
