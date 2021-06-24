import { DefaultDrugProperties } from "../defaultDrugsProperties";

export class Fervex extends DefaultDrugProperties {
  updateBenefit(benefit: number, expiration: number): number {
    if (expiration >= 10) return benefit + 1;
    else if (expiration >= 5) return benefit + 2;
    else if (expiration >= 0) return benefit + 3;
    return 0;
  }
}
