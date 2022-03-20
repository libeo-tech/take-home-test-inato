export default class Drug {
    constructor(
        public readonly name: string,
        public expiresIn: number,
        public benefit: number
    ) {
    }

    public updateBenefitValue(): Drug {
        if (this.benefit > 0) {
            this.benefit = this.benefit - 1;
        }

        this.expiresIn = this.expiresIn - 1;

        if (this.expiresIn < 0 && this.benefit > 0) {
            this.benefit =
                this.benefit - 1;
        }

        return this;
    }
}