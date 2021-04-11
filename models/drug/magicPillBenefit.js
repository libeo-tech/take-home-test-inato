export class MagicPillBenefit {
    constructor(drug) {
        if (drug.name != "Magic Pill") {
            throw new Error("The drug parameter received is incorrect. Its name should be 'Magic Pill'")
        }
        this.drug = drug
    }

    updateBenefitValue() {
        return
    }
}