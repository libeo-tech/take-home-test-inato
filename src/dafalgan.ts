import Drug, {DRUG_EXPIRATION_LIMIT, DRUG_MIN_BENEFIT_VALUE } from "./drug";

export default class Dafalgan extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Dafalgan', expiresIn, benefit);
    }

    public updateBenefitValue(): Drug {

        // "Dafalgan" degrades in Benefit twice as fast as normal drugs
        super.updateBenefitValue();
        super.updateBenefitValue();

        return this;
    }
}