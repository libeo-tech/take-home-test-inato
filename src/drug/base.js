export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit() {
    this.benefit += this._benefitVariation;
    if (this.benefit < 0) this.benefit = 0;
    if (this.benefit > 50) this.benefit = 50;
    this.expiresIn--;
  }

  get _benefitVariation() {
    return (this.expiresIn <= 0 ? -1 : 0) - 1;
  }
}
