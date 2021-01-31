const MAGIC_PILL = "Magic Pill";
const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const DOLIPRANE = "Doliprane";
const DAFALGAN = "Dafalgan";
const MIN_BENEFIT = 0;
const MAX_BENEFIT = 50;

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
    return {
      [DOLIPRANE]: () => {
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

    return {
      name,
      expiresIn: expiresIn - 1,
      benefit: this.calculateBenefit(drug),
    };
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => this.updateDrug(drug));
    return this.drugs;
  }
}
