import { Drug } from '../drug/drug';

class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    return this.drugs.map(drug => {
      drug.updateExpiration();
      drug.updateBenefit();

      return drug;
    });
  }
}

export { Pharmacy };
