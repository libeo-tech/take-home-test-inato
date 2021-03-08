import { Drug } from "./base";

export class RateDrug extends Drug {
  /**
   * RateDrugs will age at a specific rate, which may be negative (=improvement through time)
   */
  constructor(name, expiresIn, benefit, rate = 1) {
    super(name, expiresIn, benefit);
    this.rate = rate;
  }

  get _benefitVariation() {
    return this.rate * super._benefitVariation;
  }

  toJSON() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit
    };
  }
}
