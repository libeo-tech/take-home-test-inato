import { Drug } from "./drug";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var drug of this.drugs) {
        drug.decreaseExpiresIn();
        drug.updateBenefit();
    }

    return this.drugs;
  }
}
