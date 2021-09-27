import { SPECIAL_DRUGS, DRUGS_TYPES } from "../constants";

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

  limitBenefitValue(i) {
    if (this.drugs[i].benefit > 50) {
      this.drugs[i].benefit = 50;
    } else if (this.drugs[i].benefit < 0) {
      this.drugs[i].benefit = 0;
    }
  }

  updateBenefitForNormalDrug(i) {
    this.drugs[i].expiresIn <= 0
      ? (this.drugs[i].benefit -= 2)
      : (this.drugs[i].benefit -= 1);
  }

  updateBenefitForFervex(i) {
    if (this.drugs[i].expiresIn <= 0) {
      this.drugs[i].benefit = 0;
      return;
    }
    if (this.drugs[i].expiresIn > 6 && this.drugs[i].expiresIn < 11) {
      this.drugs[i].benefit += 2;
      return;
    }
    if (this.drugs[i].expiresIn < 6) {
      this.drugs[i].benefit += 3;
    }
  }

  updateBenefitForHerbalTea(i) {
    this.drugs[i].benefit += 1;
    if (this.drugs[i].expiresIn <= 0) {
      this.drugs[i].benefit += 1;
    }
  }

  updateBenefitForDafalgan(i) {
    this.drugs[i].expiresIn <= 0
      ? (this.drugs[i].benefit -= 4)
      : (this.drugs[i].benefit -= 2);
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name === DRUGS_TYPES.MAGIC_PILL) break;

      if (!SPECIAL_DRUGS.includes(this.drugs[i].name)) {
        this.updateBenefitForNormalDrug(i);
      } else if (this.drugs[i].name === DRUGS_TYPES.FERVEX) {
        this.updateBenefitForFervex(i);
      } else if (this.drugs[i].name === DRUGS_TYPES.HERBAL_TEA) {
        this.updateBenefitForHerbalTea(i);
      } else if (this.drugs[i].name === DRUGS_TYPES.DAFALGAN) {
        this.updateBenefitForDafalgan(i);
      }
      this.limitBenefitValue(i);
      this.drugs[i].expiresIn -= 1;
    }
    return this.drugs;
  }
}
