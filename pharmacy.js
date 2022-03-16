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

  updateBenefitValue() {
    // Find out and apply the behavior of the drugs
    for (var i = 0; i < this.drugs.length; i++) {
      const drugId = this.drugs[i]?.name?.replace(' ', '_')?.toUpperCase();
      const updateDrug = SPECIFIC_DRUGS_BEHAVIORS[drugId] || COMMON_DRUG_BEHAVIOR;
      updateDrug(this.drugs[i]);
    }
    return this.drugs;
  }
}

// Decrease drug benefit but keep it over 0
const COMMON_DRUG_BEHAVIOR = function(common_drug) {
  const benefitLoss = 1 + (common_drug.expiresIn <= 0 ? 1 : 0);
  common_drug.benefit = Math.max(0, common_drug.benefit - benefitLoss);
  common_drug.expiresIn -= 1;
}

const SPECIFIC_DRUGS_BEHAVIORS = Object.freeze({

  // Increase benefit but keep it under 50
  HERBAL_TEA: function(herbal_tea) {
    const benefitGain = 1 + (herbal_tea.expiresIn <= 0 ? 1 : 0);
    herbal_tea.benefit = Math.min(50, herbal_tea.benefit + benefitGain);
    herbal_tea.expiresIn -= 1;
  },

  // Increase benefit but keep it under 50
  FERVEX: function(fervex) {
    if (fervex.expiresIn > 0) {
      const benefitGain = 1 + (fervex.expiresIn < 11 ? 1 : 0) + (fervex.expiresIn < 6 ? 1 : 0);
      fervex.benefit = Math.min(50, fervex.benefit + benefitGain);
    } else {
      fervex.benefit = 0;
    }
    fervex.expiresIn -= 1;
  },

  // Do nothing
  MAGIC_PILL: function(magic_pill) {

  }
});