import { Drug, PrettifiedDrug } from "./drugs";
/* to not break public API */
export { Drug };

export class Pharmacy {
  constructor(public drugs: Drug[] = []) { }

  public updateBenefitValue(): PrettifiedDrug[] {
    for (const drug of this.drugs) {
      drug.updateBenefitValue();
    }

    return this.drugs.map(d => d.prettify());
  }
}
