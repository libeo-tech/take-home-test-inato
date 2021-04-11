import { MIN_DRUG_BENEFIT } from "./constants"

export class DefaultDrugBenefit {
    constructor(drug) {
        this.drug = drug
    }

    updateBenefitValue() {
        this.drug.expiresIn -= 1;
        if (this.drug.expiresIn < 0) {
            this.drug.benefit = Math.max(this.drug.benefit - 2, MIN_DRUG_BENEFIT)
        } else {
            this.drug.benefit = Math.max(this.drug.benefit - 1, MIN_DRUG_BENEFIT)
        }
    }
}