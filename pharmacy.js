export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

/**
 * An object describing for each type of drug, which behavior it has
 * Properties are:
 *  - minBenefit/maxBenefit: the minimum and maximum value for the drug benefit
 *  - nextBenefit: a function that returns for a given drug the next benefit value it should get after 1 iteration
 *  The value of nextBenefit will then be capped from minBenefit and maxBenefit value
 *  - nextExpiry: a function that returns for a given drug the next expiresIn value it should get after 1 iteration
 * For each property, if key is not present for the given drug, it will fallback to "_default" propetry
 */
const drugBehaviors = {
  "_default": {
    "minBenefit": (_drug) => 0,
    "maxBenefit": (_drug) => 50,
    "nextBenefit": (drug) => (drug.expiresIn > 0) ? drug.benefit - 1 : drug.benefit - 2,
    "nextExpiry": (drug) => drug.expiresIn - 1
  },
  "Herbal Tea": {
    "nextBenefit": (drug) => (drug.expiresIn > 0) ? drug.benefit + 1 : drug.benefit + 2
  },
  "Magic Pill": {
    "nextBenefit": (drug) => drug.benefit,
    "nextExpiry": (drug) => drug.expiresIn
  },
  "Fervex": {
    "nextBenefit": (drug) => {
      if (drug.expiresIn <= 0)
        return 0;
      else if (drug.expiresIn <= 5)
        return drug.benefit + 3;
      else if (drug.expiresIn <= 10)
        return drug.benefit + 2;
      else
        return drug.benefit + 1;
    }
  },
  "Dafalgan": {
    "nextBenefit": (drug) => (drug.expiresIn > 0) ? drug.benefit - 2 : drug.benefit - 4,
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (const drug of this.drugs) {
      const drugBehavior = {
        ...drugBehaviors["_default"],
        ...drugBehaviors[drug.name]
      };
      const minBenefit = drugBehavior.minBenefit(drug);
      const maxBenefit = drugBehavior.maxBenefit(drug);
      const nextBenefit = drugBehavior.nextBenefit(drug);
      const nextBenefitCapped = Math.min(maxBenefit, Math.max(minBenefit, nextBenefit));
      drug.benefit = nextBenefitCapped;
      const nextExpiry = drugBehavior.nextExpiry(drug);
      drug.expiresIn = nextExpiry;
    }

    return this.drugs;
  }
}
