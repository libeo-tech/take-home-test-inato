import { updateBenefitAfterExpiration } from "./updateBenefitAfterExpiration";
import { updateBenefitBeforeExpiration } from "./updateBenefitBeforeExpiration";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const MAX_ITEM_BENEFIT = 50;

const increaseValue = (drug) =>
  (drug.benefit = Math.min(MAX_ITEM_BENEFIT, drug.benefit + 1));

const decreaseValue = (drug) => (drug.benefit = Math.max(drug.benefit - 1, 0));

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

      if (drug.name == "Herbal Tea" || drug.name == "Fervex") {
        increaseValue(drug);
      } else {
        decreaseValue(drug);
      }

      if (isPastExpirationDate(drug)) {
        if (drug.name == "Fervex") {
          drug.benefit = 0;
        }
        if (drug.name == "Herbal Tea") {
          increaseValue(drug);
        } else {
          decreaseValue(drug);
        }
      }
    }

    return this.drugs;
  }
}
