import { MIN_BENEFIT_VALUE } from "./constants";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateDrugValues() {
    this.expiresIn--;

    const newBenefit = this.benefit - (this.expiresIn < 0 ? 2 : 1);

    this.benefit = Math.max(MIN_BENEFIT_VALUE, newBenefit);
  }
}
