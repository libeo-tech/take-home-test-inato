import { Drug } from '../drugs';

export class Pharmacy {
  drugs: Drug[];
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue(): Drug[] {
    for (const drug of this.drugs) {
      drug.updateBenefit();
    }

    return this.drugs;
  }
}
