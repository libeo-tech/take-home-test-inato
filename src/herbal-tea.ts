import Drug, {DRUG_EXPIRATION_LIMIT, DRUG_MAX_BENEFIT_VALUE} from "./drug";

export default class HerbalTea extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Herbal Tea', expiresIn, benefit);
    }

    public updateBenefitValue(): Drug {
        // Current Benefit increase if benefit is lower than DRUG_MAX_BENEFIT_VALUE.
        this.benefit = this.benefit < DRUG_MAX_BENEFIT_VALUE ?
            this.benefit + 1
            : this.benefit;

        // Benefit increase twice if benefit is lower than DRUG_MAX_BENEFIT_VALUE.
        this.benefit = this.expiresIn < DRUG_EXPIRATION_LIMIT && this.benefit < DRUG_MAX_BENEFIT_VALUE ?
            this.benefit + 1
            : this.benefit;

        return this;
    }
}