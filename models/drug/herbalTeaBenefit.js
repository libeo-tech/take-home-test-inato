import { MAX_DRUG_BENEFIT } from "./constants"

export const HERBAL_TEA_DRUG_NAME = "Herbal Tea"

const BENEFIT_INCREASE_RATE = 1
export class HerbalTeaBenefit {
    constructor(drug) {
        if (drug.name != HERBAL_TEA_DRUG_NAME) {
            throw new Error(`The drug parameter received is incorrect. Its name should be '${HERBAL_TEA_DRUG_NAME}'`)
        }
        this.drug = drug
    }

    updateBenefitValue() {
        this.drug.expiresIn -= 1;
        if (this.drug.benefit < MAX_DRUG_BENEFIT && this.drug.expiresIn < 0) {
            this.drug.benefit = Math.min(this.drug.benefit + 2 * BENEFIT_INCREASE_RATE, MAX_DRUG_BENEFIT)
        }
        else if (this.drug.benefit < MAX_DRUG_BENEFIT) {
            this.drug.benefit += BENEFIT_INCREASE_RATE
        }

    }
}