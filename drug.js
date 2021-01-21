export default class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    this.decreaseExpiresIn();
    if (this.expiresIn < 0) return this.decreaseBenefitValue(2);
    return this.decreaseBenefitValue(1);
  }

  decreaseExpiresIn() {
    this.expiresIn--;
    return this;
  }

  increaseBenefitValue(delta = 1) {
    this.benefit = this.benefit === 50 ? 50 : this.benefit + delta;
    return this;
  }

  decreaseBenefitValue(delta = 1) {
    this.benefit = this.benefit === 0 ? 0 : this.benefit - delta;
    return this;
  }
}
