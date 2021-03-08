export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  getBenefitFactor() {
    const benefitFactor = this.expiresIn > 0 ? 1 : 2;
    return benefitFactor;
  }

  updateExpireIn() {
    this.expiresIn -= 1;
  }

  updateBenefit() {
    this.benefit > 0
      ? (this.benefit -= this.getBenefitFactor())
      : (this.benefit = 0);
    if (Math.sign(this.benefit) < 0) this.benefit = 0;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefit();
      this.drugs[i].updateExpireIn();
    }

    return this.drugs;
  }
}
