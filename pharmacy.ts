import { Drug } from "./drugs/drug";

class Pharmacy {
  constructor(public drugs: Drug[] = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].update();
    }
    return this.drugs;
  }
}

export { Pharmacy, Drug };
