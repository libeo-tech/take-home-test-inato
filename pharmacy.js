export const MAGIC_PILL = "Magic Pill";
export const HERBAL_TEA = "Herbal Tea";
export const FERVEX = "Fervex";
export const DAFALGAN = "Dafalgan";
export const MAX_BENEFIT = 50;
export const MIN_BENEFIT = 0;

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

  updateBenefitCheck(newValue) {
    return Math.min(Math.max(newValue, MIN_BENEFIT), MAX_BENEFIT);
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => {
      const { name, benefit, expiresIn } = drug;
      // values remain still
      if (name === MAGIC_PILL) return drug;

      let benefitModifier = -1;
      if (name === HERBAL_TEA) {
        benefitModifier = expiresIn > 0 ? +1 : +2;
      } else if (name === FERVEX) {
        if (expiresIn <= 0) {
          benefitModifier = -benefit; // reset benefit to 0
        } else if (expiresIn <= 5) {
          benefitModifier = +3;
        } else if (expiresIn <= 10) {
          benefitModifier = +2;
        } else {
          benefitModifier = +1;
        }
      } else if (name === DAFALGAN) {
        benefitModifier = expiresIn > 0 ? -2 : -4;
      } else {
        // regular drugs
        benefitModifier = expiresIn > 0 ? -1 : -2;
      }

      return {
        ...drug,
        benefit: this.updateBenefitCheck(benefit + benefitModifier),
        expiresIn: drug.expiresIn - 1
      };
    });

    return this.drugs;
  }
}
