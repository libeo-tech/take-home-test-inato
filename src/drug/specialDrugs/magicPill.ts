import { DefaultDrugProperties } from "../defaultDrugsProperties";

export class MagicPill extends DefaultDrugProperties {
  updateBenefit(benefit: number): number {
    return benefit;
  }
  updateExpiration(expiration: number): number {
    return expiration;
  }
}
