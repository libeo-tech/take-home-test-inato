import {
  MAGIC_PILL,
  HERBAL_TEA,
  FERVEX,
  DOLIPRANE,
  DAFALGAN,
  DEFAULT,
  MIN_BENEFIT,
  MAX_BENEFIT,
} from "./constants";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  calculateBenefit({ name, benefit, expiresIn }) {
    if (![HERBAL_TEA, FERVEX, DAFALGAN].includes(name)) {
      name = DEFAULT;
    }

    return {
      [DEFAULT]: () => {
        if (expiresIn < 0) {
          benefit -= 2;
        } else {
          benefit -= 1;
        }
        return benefit > 0 ? benefit : MIN_BENEFIT;
      },
      [HERBAL_TEA]: () => {
        if (expiresIn < 0) {
          benefit += 2;
        } else {
          benefit += 1;
        }
        return benefit < 50 ? benefit : MAX_BENEFIT;
      },
      [FERVEX]: () => {
        if (expiresIn < 0) {
          return MIN_BENEFIT;
        }
        if (expiresIn < 11) {
          benefit += 2;
        }
        if (expiresIn < 6) {
          benefit += 1;
        }
        return benefit < 50 ? benefit : MAX_BENEFIT;
      },
      [DAFALGAN]: () => {
        if (expiresIn < 0) {
          benefit -= 4;
        } else {
          benefit -= 2;
        }
        return benefit > 0 ? benefit : MIN_BENEFIT;
      },
    }[name]();
  }

  updateDrug(drug) {
    // Do nothing
    if (drug.name === MAGIC_PILL) {
      return drug;
    }

    const { name, expiresIn } = drug;

    return new Drug(name, expiresIn - 1, this.calculateBenefit(drug));
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => this.updateDrug(drug));
    return this.drugs;
  }
}
