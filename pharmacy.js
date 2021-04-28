import {
  updateBenefitAfterExpiration,
  updateBenefitBeforeExpiration,
} from "./updateBenefit.js";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const isPastExpirationDate = (drug) => drug.expiresIn < 0;

const updateExpiration = (drug) => (drug.expiresIn = drug.expiresIn - 1);

const isDrugExpiring = (drug) => drug.name != "Magic Pill";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];

      if (isDrugExpiring(drug)) {
        updateExpiration(drug);
      } else {
        continue;
      }

      if (isPastExpirationDate(drug)) {
        updateBenefitAfterExpiration(drug);
      } else {
        updateBenefitBeforeExpiration(drug);
      }
    }

    return this.drugs;
  }
}
