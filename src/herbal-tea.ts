import Drug from "./drug";

export default class HerbalTea extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Herbal Tea', expiresIn, benefit);
    }

    public updateBenefitValue(): Drug {
        if (this.benefit < 50) {
            this.benefit = this.benefit + 1;
        }

        this.expiresIn = this.expiresIn - 1;
        if (this.expiresIn < 0 && this.benefit < 50) {
            this.benefit = this.benefit + 1;
        }

        return this;
    }
}