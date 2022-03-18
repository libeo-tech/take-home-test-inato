import drugManager from "./drug.manager";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit() {
    // use default manager as fallback
    const manager = (drugManager[this.name] || drugManager.default)({
      benefit: this.benefit,
      expiresIn: this.expiresIn
    });

    this.benefit = manager.updateBenefitValue();

    // decrease expiration date only if the drug expires
    if (!manager.withoutExpire) {
      this.expiresIn--;
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var drug of this.drugs) {
      drug.updateBenefit();
    }

    return this.drugs;
  }
}
