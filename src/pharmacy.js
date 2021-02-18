import {DRUGS} from "./drug";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      if (drug.name !== DRUGS.HERBAL_TEA && drug.name !== DRUGS.FERVEX) {
        if (drug.benefit > 0 && drug.name !== DRUGS.MAGIC_PILL) {
          drug.benefit = drug.benefit - 1;
        }
      } else {
        if (drug.benefit < 50) {
          drug.benefit = drug.benefit + 1;
          if (drug.name === DRUGS.FERVEX) {
            if (drug.expiresIn < 11 && drug.benefit < 50) {
              drug.benefit = drug.benefit + 1;
            }
            if (drug.expiresIn < 6 && drug.benefit < 50) {
              drug.benefit = drug.benefit + 1;
            }
          }
        }
      }
      if (drug.name !== DRUGS.MAGIC_PILL) {
        drug.expiresIn = drug.expiresIn - 1;
      }
      if (drug.expiresIn < 0) {
        if (drug.name !== DRUGS.HERBAL_TEA) {
          if (drug.name !== DRUGS.FERVEX) {
            if (drug.benefit > 0 && drug.name !== DRUGS.MAGIC_PILL) {
              drug.benefit = drug.benefit - 1;
            }
          } else {
            drug.benefit = drug.benefit - drug.benefit;
          }
        } else {
          if (drug.benefit < 50) {
            drug.benefit = drug.benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
