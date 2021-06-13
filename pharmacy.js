export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    Drug.benefitUpdaters.default(this);
  }
}

Drug.benefitUpdaters = {
  default(drug) {
    drug.expiresIn--;
    drug.benefit--;
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
