import { DRUGS_TYPES, MAX_BENEFIT, MIN_BENEFIT } from "./constants";
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateStandardDrug(drug) {
    drug.expiresIn--;

    if (drug.benefit === MIN_BENEFIT) {
      return;
    }

    drug.benefit--;

    if (drug.expiresIn >= 0 || drug.benefit === MIN_BENEFIT) {
      return;
    }
    drug.benefit--;
  }

  updateDafalganDrug(drug) {
    drug.expiresIn--;
    drug.benefit = drug.benefit - 2;

    if (drug.expiresIn < 0) {
      drug.benefit = drug.benefit - 2;
    }

    if (drug.benefit < MIN_BENEFIT) {
      drug.benefit = MIN_BENEFIT;
      return;
    }
    return;
  }

  updateHerbalTeaDrug(drug) {
    drug.expiresIn--;
    if (drug.benefit >= MAX_BENEFIT) {
      drug.benefit = MAX_BENEFIT;
      return;
    }
    drug.benefit++;
    if (drug.benefit >= MAX_BENEFIT) {
      drug.benefit = MAX_BENEFIT;
      return;
    }
    if (drug.expiresIn < 0 && drug.benefit < MAX_BENEFIT) {
      drug.benefit++;
      return;
    }
  }

  updateFervexDrug(drug) {
    drug.expiresIn--;
    if (drug.benefit >= MAX_BENEFIT && drug.expiresIn >= 0) {
      drug.benefit = MAX_BENEFIT;
      return;
    }
    drug.benefit++;
    if (drug.benefit >= MAX_BENEFIT && drug.expiresIn >= 0) {
      drug.benefit = MAX_BENEFIT;
      return;
    }
    if (drug.expiresIn < 10) {
      drug.benefit++;
    }

    if (drug.expiresIn < 5) {
      drug.benefit++;
    }

    if (drug.expiresIn < 0) {
      drug.benefit = MIN_BENEFIT;
    }

    return;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case DRUGS_TYPES.herbalTea:
          this.updateHerbalTeaDrug(drug);
          break;
        case DRUGS_TYPES.fervex:
          this.updateFervexDrug(drug);
          break;
        case DRUGS_TYPES.magicPill:
          break;
        case DRUGS_TYPES.dafalgan:
          this.updateDafalganDrug(drug);
          break;
        default:
          this.updateStandardDrug(drug);
      }
    });
    return this.drugs;
  }
}
