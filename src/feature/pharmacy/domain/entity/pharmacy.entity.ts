import { Drug } from "feature/drug";

export class Pharmacy {
  constructor(private _drugs: Drug[] = []) {}

  updateBenefitValue(daysSinceCreation?: number) {
    if (daysSinceCreation != null) {
      for (let drug of this._drugs) {
        drug.daysSinceCreation = daysSinceCreation;
      }
    }
    return this._drugs;
  }
}
