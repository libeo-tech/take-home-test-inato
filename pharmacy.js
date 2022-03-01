const DrugName = {
  HerbalTea: "Herbal Tea",
  MagicPill: "Magic Pill",
  Fervex: "Fervex",
  Dafalgan: "Dafalgan",
};

export class GenericDrug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  #maxBenefit = 50;
  #minBenefit = 0;

  get isExpired() {
    return this.expiresIn < 0;
  }
  get canUpdateBenefit() {
    return this.benefit < this.#maxBenefit && this.benefit > this.#minBenefit;
  }
  get canUpdateExpiresIn() {
    return true;
  }
  get benefitStep() {
    return this.isExpired ? -2 : -1;
  }

  #updateBenefit() {
    if (!this.canUpdateBenefit) {
      return;
    }

    this.benefit += this.benefitStep;
  }

  #updateExpiresIn() {
    if (!this.canUpdateExpiresIn) {
      return;
    }

    this.expiresIn--;
  }

  updateBenefitValue() {
    this.#updateBenefit();
    this.#updateExpiresIn();
  }
}
class HerbalTea extends GenericDrug {
  constructor(name, expiresIn, benefit) {
    super(DrugName.HerbalTea, expiresIn, benefit);
  }

  get benefitStep() {
    return this.isExpired ? 2 : 1;
  }
}

class MagicPill extends GenericDrug {
  constructor(name, expiresIn, benefit) {
    super(DrugName.MagicPill, expiresIn, benefit);
  }

  get canUpdateBenefit() {
    return false;
  }
  get canUpdateExpiresIn() {
    return false;
  }
}

class Fervex extends GenericDrug {
  constructor(name, expiresIn, benefit) {
    super(DrugName.Fervex, expiresIn, benefit);
  }

  get benefitStep() {
    if (this.expiresIn <= 5) {
      return 3;
    } else if (this.expiresIn <= 10) {
      return 2;
    }

    return 1;
  }

  updateBenefitValue() {
    super.updateBenefitValue();

    if (this.isExpired) {
      this.benefit = 0;
    }
  }
}

class Dafalgan extends GenericDrug {
  constructor(name, expiresIn, benefit) {
    super(DrugName.Dafalgan, expiresIn, benefit);
  }

  get benefitStep() {
    return super.benefitStep * 2;
  }
}

const drugs = {
  [DrugName.HerbalTea]: HerbalTea,
  [DrugName.MagicPill]: MagicPill,
  [DrugName.Fervex]: Fervex,
  [DrugName.Dafalgan]: Dafalgan,
};

function getDrugByName(name) {
  return drugs[name] ?? GenericDrug;
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    const _Drug = getDrugByName(name);
    this.drug = new _Drug(name, expiresIn, benefit);
  }

  updateBenefitValue() {
    this.drug.updateBenefitValue();
  }
}

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
