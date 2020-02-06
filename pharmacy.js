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
    let processed = false

    if("benefitIncrementsByDays" in drugEffects) {
      // update benefit according to days left before expiration
      drugEffects.benefitIncrementsByDays.forEach(incrementByDays => {
        if(this.expiresIn <= incrementByDays.days && processed === false) {
          processed = true;
          this.benefit = this.benefit + incrementByDays.increment;
        }
      })
    }

    if(!processed) {
      this.benefit += drugEffects.benefitIncrements[expirationStatus];
    }

    this.updateBenefitLimits();

    this.expiresIn += drugEffects.expirationDecrease;
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
