export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  update() {
    this.updateBenefitValue();
    this.updateExpiresIn();
    if (this.expiresIn < 0) {
      this.applyExpiredEffect();
    }
  }

  updateBenefitValue() {
    if (this.benefit > 0) {
      this.benefit = this.benefit - 1;
    }
  }

  updateExpiresIn() {
    this.expiresIn = this.expiresIn - 1;
  }

  applyExpiredEffect() {
    if (this.benefit > 0) {
      this.benefit = this.benefit - 1;
    }
  }
}
