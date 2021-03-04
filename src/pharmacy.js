export const DRUG_NAMES = {
  HERBAL_TEA: "Herbal Tea",
  MAGIC_PILL: "Magic Pill",
  FERVEX: "Fervex",
  DAFALGAN: "Dafalgan",
};

export const MAX_BENEFIT = 50;
export const MIN_BENEFIT = 0;
export const BASE_DECREMENT_VALUE = 1;

class DrugBehavior {
  updateValues(benefit, expiresIn) {
    const benefitIncrement = this.getBenefitIncrement(expiresIn);
    const updatedBenefit = this.updateBenefit(benefit, benefitIncrement);
    return { benefit: updatedBenefit, expiresIn: expiresIn - 1 };
  }

  getBenefitIncrement(expiresIn) {
    return expiresIn > 0 ? -BASE_DECREMENT_VALUE : -2 * BASE_DECREMENT_VALUE;
  }

  updateBenefit(current, toAdd) {
    let newValue = current + toAdd;
    if (newValue > MAX_BENEFIT) {
      return MAX_BENEFIT;
    }
    if (newValue < MIN_BENEFIT) {
      return MIN_BENEFIT;
    }
    return newValue;
  }
}

class HerbalTeaBehavior extends DrugBehavior {
  updateValues(benefit, expiresIn) {
    const benefitIncrement = expiresIn <= 0 ? 2 : 1;
    const updatedBenefit = this.updateBenefit(benefit, benefitIncrement);
    return { benefit: updatedBenefit, expiresIn: expiresIn - 1 };
  }
}

class MagicPillBehavior extends DrugBehavior {
  updateValues(benefit, expiresIn) {
    return { benefit, expiresIn: expiresIn };
  }
}

class FervexBehavior extends DrugBehavior {
  updateValues(benefit, expiresIn) {
    const benefitIncrement = this.getBenefitIncrement(expiresIn, benefit);
    const updatedBenefit = this.updateBenefit(benefit, benefitIncrement);

    return { benefit: updatedBenefit, expiresIn: expiresIn - 1 };
  }

  getBenefitIncrement(expiresIn, benefit) {
    if (expiresIn > 10) {
      return 1;
    }
    if (expiresIn > 5) {
      return 2;
    }
    if (expiresIn > 0) {
      return 3;
    }

    return -benefit;
  }
}

class DafalganBehavior extends DrugBehavior {
  updateValues(benefit, expiresIn) {
    const benefitIncrement = this.getBenefitIncrement(expiresIn) * 2;
    const updatedBenefit = this.updateBenefit(benefit, benefitIncrement);

    return { benefit: updatedBenefit, expiresIn: expiresIn - 1 };
  }
}

function createDrugBehavior(drugName) {
  switch (drugName) {
    case DRUG_NAMES.HERBAL_TEA:
      return new HerbalTeaBehavior();
    case DRUG_NAMES.MAGIC_PILL:
      return new MagicPillBehavior();
    case DRUG_NAMES.FERVEX:
      return new FervexBehavior();
    case DRUG_NAMES.DAFALGAN:
      return new DafalganBehavior();
    default:
      return new DrugBehavior();
  }
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.behavior = createDrugBehavior(name);
  }

  elapseDay() {
    const { benefit, expiresIn } = this.behavior.updateValues(
      this.benefit,
      this.expiresIn
    );
    this.benefit = benefit;
    this.expiresIn = expiresIn;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => drug.elapseDay());
    return this.drugs;
  }

  toOutput() {
    return this.drugs.map(({ name, expiresIn, benefit }) => ({
      name,
      expiresIn,
      benefit,
    }));
  }
}
