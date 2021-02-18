import {DRUGS} from "./drug";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      if (drug.name !== DRUGS.HERBAL_TEA && drug.name !== DRUGS.FERVEX) {
        if (drug.benefitCanItBeDecreased()) {
          drug.decreaseBenefit();
        }
      } else {
        drug.increaseBenefit();
      }
      drug.decreaseExpiration();
      if (drug.expiresIn < 0) {
        if (drug.name !== DRUGS.HERBAL_TEA) {
          if (drug.name !== DRUGS.FERVEX) {
            if (drug.benefitCanItBeDecreased()) {
              drug.decreaseBenefit();
            }
          } else {
            drug.benefit = drug.benefit - drug.benefit;
          }
        } else {
          drug.increaseBenefit();
        }
      }
    }

    return this.drugs;
  }
}
