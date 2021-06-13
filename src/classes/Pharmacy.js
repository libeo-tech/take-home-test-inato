/* eslint-disable prettier/prettier */

import { updatedDrugValues } from "../utils";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => updatedDrugValues(drug));

    return this.drugs;
  }
}
