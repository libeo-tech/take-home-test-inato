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

    if (drug.expiresIn >= 0 || drug.benefit === 0) {
      return;
    }
    drug.benefit--;
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
        default:
          this.updateStandardDrug(drug);
      }
    });
    return this.drugs;
  }
}
