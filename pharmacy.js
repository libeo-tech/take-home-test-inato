export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    Drug.benefitUpdaters.default(this);
    this.benefit = Math.max(this.benefit, 0);
  }
}

Drug.benefitUpdaters = {
  default(drug) {
    if (drug.expiresIn > 0) {
      drug.benefit -= 1;
    } else {
      drug.benefit -= 2;
    }
    drug.expiresIn--;
  }
};

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.updateBenefitValue();
    }
    return this.drugs;
  }
}
