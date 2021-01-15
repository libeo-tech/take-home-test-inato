const drugNames = {
  HERBAL_TEA: "Herbal Tea",
  MAGIC_PILL: "Magic Pill",
  FERVEX: "Fervex",
  DAFALGAN: "Dafalgan"
};

export const drugEffects = {
  INCREASE: "increase",
  DEGRADE: "degrade",
  NONE: "none"
};

const baseOptions = {
  drugEffect: drugEffects.DEGRADE,
  coefficient: 1,
  afterExpirationCoefficient: 2,
  hasHardExpiration: false,
  neverExpire: false
};

const availableDrugs = {
  [drugNames.HERBAL_TEA]: {
    drugEffect: drugEffects.INCREASE
  },
  [drugNames.MAGIC_PILL]: {
    drugEffect: drugEffects.NONE,
    neverExpire: true
  },
  [drugNames.FERVEX]: {
    drugEffect: drugEffects.INCREASE,
    hasHardExpiration: true,
    customRules: [
      {
        expirationInLessThan: 10,
        coefficient: 2
      },
      {
        expirationInLessThan: 5,
        coefficient: 3
      }
    ]
  },
  [drugNames.DAFALGAN]: {
    coefficient: 2,
    afterExpirationCoefficient: 4
  }
};

export class Drug {
  constructor(name, expiresIn, benefit, options) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;

    if (options) {
      this.options = {
        ...baseOptions,
        ...options
      };
    } else if (availableDrugs[name]) {
      this.options = {
        ...baseOptions,
        ...availableDrugs[name]
      };
    } else {
      this.options = baseOptions;
    }
  }

  getCurrentCoefficient() {
    let currentCoefficient = this.options.coefficient;

    if (this.options.customRules) {
      this.options.customRules.sort(
        (a, b) => a.expirationInLessThan - b.expirationInLessThan
      );

      const currentRule = this.options.customRules.find(
        rule => this.expiresIn <= rule.expirationInLessThan
      );

      if (currentRule) currentCoefficient = currentRule.coefficient;
    }

    return currentCoefficient;
  }

  getBenefitValue() {
    const effet = this.options.drugEffect === drugEffects.INCREASE ? 1 : -1;

    if (this.expiresIn > 0) {
      return effet * this.getCurrentCoefficient();
    }

    return effet * this.options.afterExpirationCoefficient;
  }

  updateBenefit() {
    if (this.options.drugEffect === drugEffects.NONE) return;
    if (this.options.hasHardExpiration && this.expiresIn <= 0) {
      this.benefit = 0;
      return;
    }

    this.benefit += this.getBenefitValue();

    if (this.benefit > 50) this.benefit = 50;
    if (this.benefit < 0) this.benefit = 0;
  }

  updateExpiration() {
    if (this.options.neverExpire) return;

    this.expiresIn -= 1;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefit();
      this.drugs[i].updateExpiration();
    }

    return this.drugs;
  }
}
