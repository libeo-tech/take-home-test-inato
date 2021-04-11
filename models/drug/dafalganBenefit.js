import { MIN_DRUG_BENEFIT } from "./constants"

export const DAFALGAN_DRUG_NAME = "Dafalgan"

export class DafalganBenefit {
    constructor(drug) {
        if (drug.name != DAFALGAN_DRUG_NAME) {
            throw new Error(`The drug parameter received is incorrect. Its name should be '${DAFALGAN_DRUG_NAME}'`)
        }
        this.drug = drug
    }

    updateBenefitValue() {
        this.drug.expiresIn -= 1;
        if (this.drug.expiresIn < 0) {
            this.drug.benefit = Math.max(this.drug.benefit - 4, MIN_DRUG_BENEFIT)
        } else {
            this.drug.benefit = Math.max(this.drug.benefit - 2, MIN_DRUG_BENEFIT)
        }
    }
}