import { DefaultDrugProperties } from "../defaultDrugsProperties";

export class Dafalgan extends DefaultDrugProperties {
  updateBenefit(benefit: number, expiration: number): number {
    if (expiration >= 0) return benefit - 2;
    return benefit - 4;
  }
}
