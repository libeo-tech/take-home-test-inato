export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateExpireIn() {
    this.expiresIn -= 1;
  }

  updateBenefit() {
    this.benefit > 1
      ? (this.benefit -= 1 * (this.expiresIn > 0 ? 1 : 2))
      : this.benefit > 0
      ? (this.benefit -= 1)
      : null;
    this.updateExpireIn();
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefit();
    }

    return this.drugs;
  }
}
