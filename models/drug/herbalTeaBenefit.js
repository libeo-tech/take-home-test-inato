import { MAX_DRUG_BENEFIT } from "./constants"

export class HerbalTeaBenefit {
    constructor(drug) {
        console.log(drug)
        if (drug.name != "Herbal Tea") {
            throw new Error("The drug parameter received is incorrect. Its name should be 'Herbal Tea'")
        }
        this.drug = drug
    }

    updateBenefitValue() {
        this.drug.expiresIn -= 1;
        if (this.drug.benefit < 50 && this.drug.expiresIn < 0) {
            this.drug.benefit = Math.min(this.drug.benefit + 2, MAX_DRUG_BENEFIT)
        }
        else if (this.drug.benefit < MAX_DRUG_BENEFIT) {
            this.drug.benefit += 1
        }

    }
}