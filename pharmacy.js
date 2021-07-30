export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

// A drug should never have a benefit > 50 or be negative
function checkBenefitLimit(benefit) {
  if (benefit > 50) {
    return 50;
  }
  if (benefit < 0) {
    return 0;
  }
  return benefit;
}

export function updateDefaultDrug(drug) {
  const delta = drug.expiresIn > 0 ? 1 : 2;
  const expiresIn = drug.expiresIn - 1;
  const benefit = drug.benefit - delta;
  return {
    ...drug,
    expiresIn,
    benefit: checkBenefitLimit(benefit)
  };
}

export function updateMagicPillDrug(drug) {
  const benefit = drug.benefit;
  const expiresIn = drug.expiresIn;
  // if (expiresIn <= 0) {
  //   expiresIn = 1;
  // }
  return {
    ...drug,
    expiresIn,
    benefit: checkBenefitLimit(benefit)
  };
}

export function updateHerbalTeaDrug(drug) {
  const delta = drug.expiresIn > 0 ? 1 : 2;
  const expiresIn = drug.expiresIn - 1;
  const benefit = drug.benefit + delta;
  return {
    ...drug,
    expiresIn,
    benefit: checkBenefitLimit(benefit)
  };
}

export function updateFervexDrug(drug) {
  const expiresIn = drug.expiresIn - 1;
  let benefit = drug.benefit + 1;
  if (drug.expiresIn <= 0) {
    benefit = 0;
  } else if (drug.expiresIn <= 5) {
    benefit = drug.benefit + 3;
  } else if (drug.expiresIn <= 10) {
    benefit = drug.benefit + 2;
  }
  return {
    ...drug,
    expiresIn,
    benefit: checkBenefitLimit(benefit)
  };
}

export function updateDafalganDrug(drug) {
  const delta = drug.expiresIn > 0 ? 2 : 4;
  const expiresIn = drug.expiresIn - 1;
  const benefit = drug.benefit - delta;
  return {
    ...drug,
    expiresIn,
    benefit: checkBenefitLimit(benefit)
  };
}

// List of drug handlers
const updateDrugsHandlers = {
  "Magic Pill": updateMagicPillDrug,
  "Herbal Tea": updateHerbalTeaDrug,
  Fervex: updateFervexDrug,
  Dafalgan: updateDafalganDrug
};
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const handler =
        updateDrugsHandlers[this.drugs[i].name] || updateDefaultDrug;
      this.drugs[i] = handler(this.drugs[i]);
    }
    return this.drugs;
  }
}
