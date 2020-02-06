import drugEffects from './drugEffects';

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  getDrugEffects() {
    return drugEffects[this.name] || drugEffects.default;
  }

  getExpirationStatus() {
    return this.expiresIn > 0 ?
      "regular" :
      "expired"
  }

  updateBenefitLimits() {
    this.benefit = this.benefit > 50 ? 50 : this.benefit;
    this.benefit = this.benefit < 0 ? 0 : this.benefit;
  }

  update(benefitValue) {
    const drugEffects = this.getDrugEffects();
    const expirationStatus = this.getExpirationStatus();
    this.benefit = this.benefit + drugEffects.benefitIncrements[expirationStatus];
    this.updateBenefitLimits();

    this.expiresIn -= 1;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => drug.update());

    return this.drugs;
  }
}
