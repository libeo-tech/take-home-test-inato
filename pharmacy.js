import drugNames from "./statics/drugNames";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      if (![drugNames.HERBAL_TEA, drugNames.FERVEX].includes(drug.name)) {
        if (drug.benefit > 0 && drug.name != drugNames.MAGIC_PILL) {
          drug.benefit--;
        }
      } else {
        if (drug.benefit < 50) {
          drug.benefit++;
          if (drug.name == drugNames.FERVEX && drug.benefit < 50) {
            if (drug.expiresIn < 11) {
              drug.benefit++;
            }
            if (drug.expiresIn < 6) {
              drug.benefit++;
            }
          }
        }
      }

      if (drug.name != drugNames.MAGIC_PILL) {
        drug.expiresIn--;
      }

      if (drug.expiresIn < 0) {
        if (drug.name != drugNames.HERBAL_TEA) {
          if (drug.name != drugNames.FERVEX) {
            if (drug.benefit > 0 && drug.name != drugNames.MAGIC_PILL) {
              drug.benefit--;
            }
          } else {
            drug.benefit = drug.benefit - drug.benefit;
          }
        } else if (drug.benefit < 50) {
          drug.benefit++;
        }
      }
    });

    return this.drugs;
  }
}
