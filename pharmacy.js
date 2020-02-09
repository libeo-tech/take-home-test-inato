const BENEFIT_MAX = 50;
const BENEFIT_MIN = 0;
const BENEFIT_STEP = 1;

const rules = {
  basic(drug) {
    if (drug.expiresIn < 0) {
      drug.benefit = drug.benefit - 2 * BENEFIT_STEP;
    } else {
      drug.benefit = drug.benefit - BENEFIT_STEP;
    }

    drug.expiresIn = drug.expiresIn - 1;
    return drug;
  },
  [`Herbal Tea`](drug) {
    if (drug.expiresIn < 0) {
      drug.benefit = drug.benefit + 2 * BENEFIT_STEP;
    } else {
      drug.benefit = drug.benefit + BENEFIT_STEP;
    }

    drug.expiresIn = drug.expiresIn - 1;
    return drug;
  },
  [`Magic Pill`](drug) {
    return drug;
  },
  [`Fervex`](drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit = BENEFIT_MIN;
    } else if (drug.expiresIn < 6) {
      drug.benefit = drug.benefit + 3;
    } else if (drug.expiresIn < 11) {
      drug.benefit = drug.benefit + 2;
    } else {
      drug.benefit = drug.benefit + BENEFIT_STEP;
    }

    drug.expiresIn = drug.expiresIn - 1;
    return drug;
  },
  [`Dafalgan`](drug) {
    drug.benefit = drug.benefit - 2 * BENEFIT_STEP;

    drug.expiresIn = drug.expiresIn - 1;
    return drug;
  }
};

export class Drug {
  constructor(name, expiresIn, benefit = 0) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit =
      benefit < BENEFIT_MIN
        ? BENEFIT_MIN
        : benefit > BENEFIT_MAX
        ? BENEFIT_MAX
        : benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    return this.drugs.map(drug => {
      drug = rules[drug.name] ? rules[drug.name](drug) : rules.basic(drug);

      if (drug.benefit < BENEFIT_MIN) {
        drug.benefit = BENEFIT_MIN;
      }
      if (drug.benefit > BENEFIT_MAX) {
        drug.benefit = BENEFIT_MAX;
      }

      return drug;
    });
  }
}
