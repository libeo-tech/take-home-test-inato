import { Drug } from "./Drug";

export class Pharmacy {
  private drugs: Drug[];

  constructor(drugs: Drug[]) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    const drugs = this.drugs;

    drugs.map((d) => {
      d.updateBenefitAndExpiration();
    });

    return drugs;
  }
}
