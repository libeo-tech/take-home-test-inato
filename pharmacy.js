import { DRUG, MAX_BENEFIT, MIN_BENEFIT } from "./contants/drugs";

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
  isExpired(expiresIn) {
    if (expiresIn < 0) return true;
    return false;
  }
  increaseBenefit(drug, amount) {
    const benefit = drug.benefit + amount;
    return Math.min(Math.max(MIN_BENEFIT, benefit), MAX_BENEFIT);
  }
  decreaseBenefit(drug, amount) {
    const benefit = drug.benefit - amount;

    return Math.min(Math.max(MIN_BENEFIT, benefit), MAX_BENEFIT);
  }
  updateFervex(drug) {
    const { expiresIn } = drug;

    switch (true) {
      case expiresIn >= 10:
        drug.benefit += 1;
        break;
      case expiresIn < 10 && expiresIn >= 5:
        drug.benefit += 2;
        break;
      case expiresIn < 5 && expiresIn > 0:
        drug.benefit += 3;
        break;
      case this.isExpired(expiresIn):
        drug.benefit = 0;
        break;
    }
    return Math.min(Math.max(MIN_BENEFIT, drug.benefit), MAX_BENEFIT);
  }
  updateBenefitValue() {
    return this.drugs.map(drug => {
      if (drug.name !== DRUG.MAGIC_PILL) drug.expiresIn = drug.expiresIn - 1;
      switch (drug.name) {
        case DRUG.MAGIC_PILL:
          break;
        case DRUG.HERBAL_TEA:
          drug.benefit = this.isExpired(drug.expiresIn)
            ? this.increaseBenefit(drug, 2)
            : this.increaseBenefit(drug, 1);
          break;
        case DRUG.FERVEX:
          drug.benefit = this.updateFervex(drug);
          break;
        case DRUG.DAFALGAN:
          drug.benefit = this.decreaseBenefit(drug, 2);
          break;

        default:
          drug.benefit = this.isExpired(drug.expiresIn)
            ? this.decreaseBenefit(drug, 2)
            : this.decreaseBenefit(drug, 1);
      }

      return drug;
    });
  }
}
