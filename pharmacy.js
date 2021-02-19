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
        newBenefit = this.benefit;
        break;
      case 'Herbal Tea':
        newBenefit = this.benefit + 1;
        break;
      case 'Fervex':
        if (this.expiresIn > 10) newBenefit = this.benefit + 1;
        else if (this.expiresIn > 5 && this.expiresIn <= 10) newBenefit = this.benefit + 2;
        else if (this.expiresIn > 0 && this.expiresIn <= 5) newBenefit = this.benefit + 3;
        else if (this.expiresIn <= 0) newBenefit = 0;
        break;
      default:
        newBenefit =
          this.expiresIn > 0 ? this.benefit + valueChange : this.benefit + 2 * valueChange;
        break;
    }

    this.benefit = newBenefit < 0 || newBenefit > 50 ? this.benefit : newBenefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.processBenefit(-1);
      drug.nextDay();
    }

    return this.drugs;
  }
}
