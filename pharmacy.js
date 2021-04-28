export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const increaseValue = (drug) => (drug.benefit = drug.benefit + 1);

const decreaseValue = (drug) => (drug.benefit = drug.benefit - 1);

const isPastExpirationDate = (drug) => drug.expiresIn < 0;

const updateExpiration = (drug) => (drug.expiresIn = drug.expiresIn - 1);

const isDrugExpiring = (drug) => drug.name != "Magic Pill";

const MAX_ITEM_BENEFIT = 50;

const updateBeforeExpirationDateBenefit = (drug) => {};

const updateAfterExpirationDateBenefit = (drug) => {};
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
        updateBeforeExpirationDateBenefit(drug);
      } else {
        updateAfterExpirationDateBenefit(drug);
      }

      if (drug.name == "Herbal Tea" || drug.name == "Fervex") {
        if (drug.benefit < MAX_ITEM_BENEFIT) {
          increaseValue(drug);
        }
      } else {
        if (drug.benefit > 0) {
          decreaseValue(drug);
        }
      }

      if (isPastExpirationDate(drug)) {
        if (drug.name == "Fervex") {
          drug.benefit = 0;
        }
        if (drug.name == "Herbal Tea") {
          if (drug.benefit < MAX_ITEM_BENEFIT) {
            increaseValue(drug);
          }
        } else {
          if (drug.benefit > 0) {
            decreaseValue(drug);
          }
        }
      }
    }

    return this.drugs;
  }
}
