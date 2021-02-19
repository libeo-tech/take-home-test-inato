export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  nextDay() {
    this.expiresIn = --this.expiresIn;
  }

  processBenefit(valueChange) {
    const newBenefit =
      this.expiresIn > 0 ? this.benefit + valueChange : this.benefit + 2 * valueChange;
    this.benefit = newBenefit > 50 || newBenefit < 0 ? this.benefit : newBenefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.nextDay();
      drug.processBenefit(-1);
    }

    return this.drugs;
  }
}
