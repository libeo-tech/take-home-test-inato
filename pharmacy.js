import { Drug } from "./drug";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var drug of this.drugs) {
      if (
        drug.name != "Herbal Tea" &&
        drug.name != "Fervex"
      ) {
          if (drug.name != "Magic Pill") {
            drug.setBenefit(drug.benefit - 1);
          }
      } else {
          drug.setBenefit(drug.benefit + 1);
          if (drug.name == "Fervex") {
            if (drug.expiresIn < 11) {
                drug.setBenefit(drug.benefit + 1);
            }
            if (drug.expiresIn < 6) {
                drug.setBenefit(drug.benefit + 1);
            }
          }
      }
      if (drug.name != "Magic Pill") {
        drug.expiresIn = drug.expiresIn - 1;
      }
      if (drug.expiresIn < 0) {
        if (drug.name != "Herbal Tea") {
          if (drug.name != "Fervex") {
              if (drug.name != "Magic Pill") {
                drug.setBenefit(drug.benefit - 1);
            }
          } else {
            drug.benefit =
              drug.benefit - drug.benefit;
          }
        } else {
            drug.setBenefit(drug.benefit + 1);
        }
      }
    }

    return this.drugs;
  }
}
