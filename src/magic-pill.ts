import Drug from "./drug";

export default class MagicPill extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Magic Pill', expiresIn, benefit);
    }

    public updateBenefitValue(): Drug {
        return this;
    }
}