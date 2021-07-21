import { Drug } from '../../models/Drug';


export class Pharmacy {

  drugs: Drug[] = [];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug: Drug) => {
      drug.updateExpireIn();
      drug.updateBenefit();
    });
    return this.drugs;
  }
}
