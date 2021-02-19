export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  nextDay() {
    this.expiresIn = this.name === 'Magic Pill' ? this.expiresIn : --this.expiresIn;
  }

  processBenefit(valueChange) {
    let newBenefit;
    switch (this.name) {
      case 'Magic Pill':
        this.benefit = this.benefit;
        break;
      default:
        newBenefit =
          this.expiresIn > 0 ? this.benefit + valueChange : this.benefit + 2 * valueChange;
        this.benefit = newBenefit > 50 || newBenefit < 0 ? this.benefit : newBenefit;
        break;
    }
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
