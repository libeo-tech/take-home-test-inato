export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  checkOverMaxBenefit() {
    this.benefit = this.benefit > 50 ? 50 : this.benefit;
  }

  checkUnderMinBenefit() {
    this.benefit = this.benefit < 0 ? 0 : this.benefit;
  }

  updateBenefit() {
    this.benefit -= this.expiresIn > 0 ? 1 : 2;
    this.checkOverMaxBenefit();
    this.checkUnderMinBenefit();
  }

  updateExpiresIn() {
    this.expiresIn -= 1;
  }

  updateDrug() {
    this.updateBenefit();
    this.updateExpiresIn();
  }
}

export class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    this.benefit += this.expiresIn > 0 ? 1 : 2;
    this.checkOverMaxBenefit();
  }

  updateExpiresIn() {
    this.expiresIn -= 1;
  }
}

export class MagicPill extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    this.expiresIn += 0;
    this.checkOverMaxBenefit();
  }

  updateExpiresIn() {
    //this.expiresIn += 0;
  }
}

export class Fervex extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    if (this.expiresIn <= 10 && this.expiresIn >= 6) this.benefit += 2;
    if (this.expiresIn <= 5 && this.expiresIn > 0) this.benefit += 3;
    if (this.expiresIn <= 0) this.benefit = 0;
    this.checkOverMaxBenefit();
  }

  updateExpiresIn() {
    this.expiresIn -= 1;
  }
}

export class Dafalgan extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
  }

  updateBenefit() {
    this.expiresIn >= 0 ? (this.benefit -= 2) : (this.benefit -= 4);
    this.checkOverMaxBenefit();
    this.checkUnderMinBenefit();
  }
}
