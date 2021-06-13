/* eslint-disable prettier/prettier */

import { updatedDrugValues } from "../utils";

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
    this.drugs.forEach((drug) => updatedDrugValues(drug));

    return this.drugs;
  }
}
