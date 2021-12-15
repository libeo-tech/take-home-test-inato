const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;
const DEFAULT_BENEFIT_PER_DAY = 1;

export class Drug {
  get maxBenefit() { return MAX_BENEFIT }
  get minBenefit() { return MIN_BENEFIT }
  get defaultBenefitPerDay() { return DEFAULT_BENEFIT_PER_DAY }
  get benefit() { return this._benefit }

  constructor(name, expiresIn, benefit) {
    if (new.target === Drug) {
      throw new TypeError("Cannot construct Drug instances directly");
    }
    this.name = name;
    this.expiresIn = expiresIn;
    this._benefit = benefit;

  }

  set benefit(value) {
    if (value >= MAX_BENEFIT) {
      this._benefit = this.maxBenefit
    } else if (value <= MIN_BENEFIT) {
      this._benefit = this.minBenefit
    } else {
      this._benefit = value
    }
  }

  isExpired() {
    return this.expiresIn <= 0;
  }

  decreaseExpiresIn() {
    this.expiresIn -= 1;
    if (this.isExpired()) {
      this.benefit -= this.defaultBenefitPerDay * 2;
    } else {
      this.benefit -= this.defaultBenefitPerDay;
    }
  }

  toJSON() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit
    }
  }
}
