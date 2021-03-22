import { Drug } from "./Drug";

export class Pharmacy {
  constructor(public readonly drugs: Drug[] = []) {}

  public updateBenefitValue(): void {
    for (const drug of this.drugs) {
      drug.updateBenefitValue();
    }
  }
}
