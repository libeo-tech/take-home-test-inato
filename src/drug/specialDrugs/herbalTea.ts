import { DefaultDrugProperties } from "../defaultDrugsProperties";

export class HerbalTea extends DefaultDrugProperties {
  updateBenefit(benefit: number, expiration: number): number {
    if (expiration >= 0) return benefit + 1;
    return benefit + 2;
  }
}
