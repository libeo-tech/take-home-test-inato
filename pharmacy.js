/** Object of modifiers we want to apply on old drugs systems */
const modifiers = {
  "Herbal Tea": drug => drug.benefit + (drug.expiresIn < 0 ? 2 : 1),
  Fervex: drug => {
    if (drug.expiresIn > 5 && drug.expiresIn <= 10) {
      return drug.benefit + 2;
    }

    if (drug.expiresIn >= 0 && drug.expiresIn <= 5) {
      return drug.benefit + 3;
    }

    return 0;
  },
  "Magic Pill": drug => drug.benefit,
  Dafalgan: drug => drug.benefit - 2
};

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = Math.min(50, benefit);
  }

  setExpiresInModifier(modifier) {
    if (typeof modifier === "function") {
      this.expiresInModifier = modifier;
    }

    return this;
  }

  setBenefitModifier(modifier) {
    if (typeof modifier === "function") {
      this.benefitModifier = modifier;
    }

    return this;
  }

  updateExpiresIn() {
    if (this.expiresInModifier) {
      this.expiresIn = this.expiresInModifier(this);
    } else {
      this.expiresIn--;
    }

    return this;
  }

  updateBenefit() {
    if (this.benefitModifier) {
      this.benefit = this.benefitModifier(this);
    } else {
      this.benefit--;
    }

    this.benefit = Math.min(50, this.benefit);
    this.benefit = Math.max(0, this.benefit);

    return this;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;

    /** We setup modifiers here due to API change, we must declare our drugs otherwise */
    this.drugs.forEach(drug => {
      if (drug.name === "Magic Pill") {
        drug.setExpiresInModifier(drug => drug.expiresIn);
      }

      if (modifiers[drug.name]) {
        drug.setBenefitModifier(modifiers[drug.name]);
      }
    });
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => drug.updateExpiresIn().updateBenefit());

    return this.drugs;
  }
}
