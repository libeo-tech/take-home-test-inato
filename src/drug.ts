export const DRUG_MAX_BENEFIT_VALUE = 50;
export const DRUG_MIN_BENEFIT_VALUE = 0;
export const DRUG_EXPIRATION_LIMIT= 0;

export default class Drug {
    constructor(
        public readonly name: string,
        public expiresIn: number,
        public benefit: number
    ) {
        if (benefit > DRUG_MAX_BENEFIT_VALUE || benefit < DRUG_MIN_BENEFIT_VALUE) {
            throw new Error(`Benefit should be included between ${DRUG_MIN_BENEFIT_VALUE} and ${DRUG_MIN_BENEFIT_VALUE}. Current: ${benefit}`)
        }
    }

    public updateExpiration(): Drug {
        this.expiresIn = this.expiresIn - 1;

        return this;
    }

    public updateBenefitValue(): Drug {
        // Current Benefit degradation if benefit greater than DRUG_MIN_BENEFIT_VALUE.
        this.benefit = this.benefit > DRUG_MIN_BENEFIT_VALUE ?
            this.benefit - 1
            : this.benefit;

        // Once the expiration date has passed, Benefit degrades twice as fast if benefit is greater than DRUG_MIN_BENEFIT_VALUE.
        this.benefit = this.expiresIn < DRUG_EXPIRATION_LIMIT && this.benefit > DRUG_MIN_BENEFIT_VALUE
            ? this.benefit - 1
            : this.benefit;

        return this;
    }
}