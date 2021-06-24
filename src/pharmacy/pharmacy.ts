import { Drug } from "../drug/drug";

export class Pharmacy {
  drugs: Drug[];
  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }
  updateBenefitValue(): Drug[] {
    this.drugs.forEach(drug => {
      drug.update();
    });

    return this.drugs;
  }
}
