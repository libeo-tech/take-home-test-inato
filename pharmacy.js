import {
  DRUGS,
  calculateBenefitValue,
  calculateExpirationValue,
} from "./utils";

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
    this.drugs.forEach((drug) => {
      drug.benefit = calculateBenefitValue(drug);
      drug.expiresIn = calculateExpirationValue(drug);
    });

    return this.drugs;
  }
}
