export const ONE_DAY = 1;
export const MIN_BENEFIT = 0;
export const MAX_BENEFIT = 50;
export const BASIC_UNIT = 1;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  isExpired() {
    return this.expiresIn < 0;
  }
  limitBenefit() {
    this.benefit =
      this.benefit > MAX_BENEFIT
        ? MAX_BENEFIT
        : this.benefit < MIN_BENEFIT
        ? MIN_BENEFIT
        : this.benefit;
  }
  update() {
    this.expiresIn -= ONE_DAY;
    const unit = this.isExpired() ? BASIC_UNIT * 2 : BASIC_UNIT;
    this.benefit = this.benefit - unit;
    this.limitBenefit();
    return this;
  }
}
