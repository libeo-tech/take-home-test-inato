export class Drug {
  constructor(name, expiresIn, benefit, exipreEvol = 1, benefitEvol = 1, expire = false, isLinear = true, evolArray = []) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.exipreEvol = exipreEvol;
    this.benefitEvol = benefitEvol;
    this.expire = expire;
    this.isLinear = isLinear;
    this.evolArray = evolArray;
  }
  
  updateLinear() {
    // benefit degrades with time
    this.benefit = this.benefit - this.benefitEvol;
    // once theexpiration date is reached, benefit degrades twice as fast
    if (this.expiresIn == 0)
      this.benefit = this.benefit - this.benefitEvol;
  }

  updateEvolveWithTime() {

    for (let i = 0; i < this.evolArray.length; i++) {
      if (this.expiresIn <= this.evolArray[i]) {
        this.benefit = this.benefit - this.benefitEvol;
      }
    }
    this.benefit = this.benefit - this.benefitEvol;
  }

  ExpireAtExpirationDate() {
    if (this.expire == true && this.expiresIn == 0) {
      this.benefit = 0;
    }
  }

  checkBenefit() {
    this.ExpireAtExpirationDate();
    // benefit is never negative.
    if (this.benefit < 0)
      this.benefit = 0;
    // benefit is never more than 50.
    else if (this.benefit > 50)
      this.benefit = 50;
  }

  updateDrug() {
    if (this.isLinear == true)
      this.updateLinear();
    else
      this.updateEvolveWithTime();
    this.checkBenefit();
    // a date should never be negative ?
    if (this.expiresIn > 0)
      this.expiresIn = this.expiresIn - this.exipreEvol;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateDrug();
    }
    return this.drugs;
  }
}
