import { benefitMaxCalc, benefitMinCalc } from "./helpers";

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
  updateBenefitValue() {
    this.drugs.map(drug => {
      if (drug.name === "Fervex") {
        if (drug.expiresIn >= 10) {
          drug.benefit = benefitMaxCalc(drug.benefit, 1);
        } else if (drug.expiresIn <= 9 && drug.expiresIn >= 2) {
          drug.benefit = benefitMaxCalc(drug.benefit, 3);
        } else {
          drug.benefit = 0;
        }
      }
      if (drug.name === "Herbal Tea") {
        drug.expiresIn < 0
          ? (drug.benefit = benefitMaxCalc(drug.benefit, 2))
          : (drug.benefit = benefitMaxCalc(drug.benefit, 1));
      }
      if (drug.name === "Dafalgan") {
        drug.expiresIn >= 0
          ? (drug.benefit = benefitMinCalc(drug.benefit, 2))
          : (drug.benefit = benefitMinCalc(drug.benefit, 4));
      }
      if (
        drug.name !== "Fervex" &&
        drug.name !== "Magic Pill" &&
        drug.name !== "Herbal Tea" &&
        drug.name !== "Dafalgan"
      ) {
        drug.expiresIn >= 0
          ? (drug.benefit = benefitMinCalc(drug.benefit, 1))
          : (drug.benefit = benefitMinCalc(drug.benefit, 2));
      }
      if (drug.name !== "Magic Pill") {
        drug.expiresIn = drug.expiresIn - 1;
      }
    });

    return this.drugs;
  }
}
