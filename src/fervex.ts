import Drug, {DRUG_EXPIRATION_LIMIT, DRUG_MAX_BENEFIT_VALUE } from "./drug";

const FERVEX_INCREASE_BY_TWO_LIMIT = 10;
const FERVEX_INCREASE_BY_THREE_LIMIT = 5;

export default class Fervex extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Fervex', expiresIn, benefit);
    }

    public updateBenefitValue(): Drug {
        // Current Benefit increase if benefit is lower than DRUG_MAX_BENEFIT_VALUE.
        this.benefit = this.benefit < DRUG_MAX_BENEFIT_VALUE ? this.benefit + 1 : this.benefit;

        // Benefit increase by if benefit is lower than DRUG_MAX_BENEFIT_VALUE and expiration less than FERVEX_INCREASE_BY_TWO_LIMIT.
        this.benefit = this.expiresIn < FERVEX_INCREASE_BY_TWO_LIMIT && this.benefit < DRUG_MAX_BENEFIT_VALUE ?
            this.benefit + 1
            : this.benefit;

        // Benefit increase by if benefit is lower than DRUG_MAX_BENEFIT_VALUE and expiration less than FERVEX_INCREASE_BY_THREE_LIMIT.
        this.benefit = this.expiresIn < FERVEX_INCREASE_BY_THREE_LIMIT && this.benefit < DRUG_MAX_BENEFIT_VALUE ?
            this.benefit + 1
            : this.benefit;

        // Benefit drops to 0 after the expiration date
        this.benefit = this.expiresIn < DRUG_EXPIRATION_LIMIT ?
            this.benefit - this.benefit : this.benefit;


        return this;
    }
}