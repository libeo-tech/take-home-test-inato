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
    this.specialDrugs = ["Herbal Tea", "Magic Pill", "Dafalgan"];
    this.drugsEvolution = { "Herbal Tea": 1, Dafalgan: -2, general: -1 };
  }
  benefitEvolitionOrLimitValue(benefit, evolution) {
    if (evolution == 0) return 0
    else if (evolution > 0) {
      if (benefit + evolution < 50) return benefit + evolution
      if (benefit + evolution >= 50) return 50
    } else if (evolution < 0) {
      if (benefit + evolution > 0) return benefit + evolution
      if (benefit + evolution <= 0) return 0
    }
  }
  fervexBenefitEvolutionWithTime(remainingDays) {
    if (remainingDays > 10) return 1
    if (remainingDays <= 10 && remainingDays > 5) return 2
    if (remainingDays <= 5 && remainingDays > 0) return 3
    if (remainingDays <= 0) return 0
  }
  updateFervexBenefitValue(fervex) {
    const fervexBenefitEvolution = this.fervexBenefitEvolutionWithTime(fervex.expiresIn)
    const newBenefit = this.benefitEvolitionOrLimitValue(fervex.benefit, fervexBenefitEvolution)
    fervex.expiresIn -= 1
    fervex.benefit = newBenefit
    return fervex
  }
  updateBenefitValue() {
    if (!this.drugs || !this.drugs.length) return [];
    this.drugs.forEach((drug) => {
      if (drug.name === "Magic Pill") return drug;
      if (drug.name === "Fervex") return this.updateFervexBenefitValue(drug);
      const drugType = this.specialDrugs.includes(drug.name) ? drug.name : "general";
      const timeInfluenceOnBenefit =
        drug.expiresIn > 0
          ? this.drugsEvolution[drugType]
          : this.drugsEvolution[drugType] * 2;
      const newBenefit = this.benefitEvolitionOrLimitValue(drug.benefit, timeInfluenceOnBenefit)
      drug.expiresIn -= 1;
      drug.benefit = newBenefit;
    });
    return this.drugs;
  }
  updateBenefitValueXDays(x) {
    for (let i = 0; i < x; i++) {
      this.updateBenefitValue();
    }
    return this.drugs;
  }
}
