import { Drug } from "./Drug";
import { PharmacyDrugState } from "./PharmacyDrugState";

export class Pharmacy {
  constructor(private readonly drugs: Drug[] = []) {}

  public getState(): PharmacyDrugState[] {
    return this.drugs.map((drug) => ({
      name: drug.name,
      expiresIn: drug.getState().getExpiresIn(),
      benefit: drug.getState().getBenefit(),
    }));
  }

  public updateBenefitValue(): void {
    for (const drug of this.drugs) {
      drug.updateDayState();
    }
  }
}
