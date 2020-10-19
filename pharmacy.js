export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  getBenefitCalculator() {
    switch (this.name) {
      case "Magic Pill":
        return new MagicPillBenefitCalculator();
      case "Herbal Tea":
        return new HerbalTeaBenefitCalculator();
      case "Fervex":
        return new FervexBenefitCalculator();
      default:
        return new DefaultBenefitCalculator();
    }
  }
}

class DefaultBenefitCalculator {
  constructor() {
    this.benefitStep = -1;
    this.maxBenefitValue = 50;
    this.minBenefitValue = 0;
  }
  updateExpiresInValue(drug) {
    drug.expiresIn--;
  }
  updateBenefitValue(drug) {
    if (drug.expiresIn < 0) this.benefitStep = this.benefitStep * 2;

    if (this.benefitStep + drug.benefit > this.maxBenefitValue)
      drug.benefit = this.maxBenefitValue;
    else if (this.benefitStep + drug.benefit < this.minBenefitValue)
      drug.benefit = this.minBenefitValue;
    else drug.benefit = drug.benefit + this.benefitStep;
  }
}

class MagicPillBenefitCalculator extends DefaultBenefitCalculator {
  constructor() {
    super();
  }
  updateExpiresInValue() {}
  updateBenefitValue() {}
}

class HerbalTeaBenefitCalculator extends DefaultBenefitCalculator {
  constructor() {
    super();
    this.benefitStep = 1;
  }
}

class FervexBenefitCalculator extends DefaultBenefitCalculator {
  constructor() {
    super();
    this.benefitStep = 1;
  }
  updateBenefitValue(drug) {
    if (drug.expiresIn < 0) drug.benefit = 0;
    else {
      if (drug.expiresIn < 11) this.benefitStep = 2;
      if (drug.expiresIn < 6) this.benefitStep = 3;
      super.updateBenefitValue(drug);
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];
      const calculator = drug.getBenefitCalculator();
      calculator.updateExpiresInValue(drug);
      calculator.updateBenefitValue(drug);
    }

    return this.drugs;
  }
}
