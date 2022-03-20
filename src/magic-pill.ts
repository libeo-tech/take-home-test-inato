import Drug from "./drug";

export default class MagicPill extends Drug {
    constructor(benefit: number) {
        super('Magic Pill', 0, benefit);
    }

    public updateExpiration(): Drug {
        // MagiPill never expires nor decreases in Benefit.
        return this;
    }

    public updateBenefitValue(): Drug {
        // MagiPill never expires nor decreases in Benefit.
        return this;
    }
}