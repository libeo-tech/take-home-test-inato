import { MIN_DRUG_BENEFIT } from "./constants"

const BENEFIT_DEGRADATION_RATE = 1
export class DefaultDrugBenefit {
    constructor(drug) {
        this.drug = drug
    }

    updateBenefitValue() {
        this.drug.expiresIn -= 1;
        if (this.drug.expiresIn < 0) {
            this.drug.benefit = Math.max(this.drug.benefit - 2 * BENEFIT_DEGRADATION_RATE, MIN_DRUG_BENEFIT)
        } else {
            this.drug.benefit = Math.max(this.drug.benefit - BENEFIT_DEGRADATION_RATE, MIN_DRUG_BENEFIT)
        }
    }
}