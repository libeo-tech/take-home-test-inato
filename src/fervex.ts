import Drug from "./drug";

export default class Fervex extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Fervex', expiresIn, benefit);
    }

    public updateBenefitValue(): Drug {
        if (this.benefit < 50) {
            this.benefit = this.benefit + 1;
            if (this.expiresIn < 11) {
                if (this.benefit < 50) {
                    this.benefit =
                        this.benefit + 1;
                }
            }
            if (this.expiresIn < 6) {
                if (this.benefit < 50) {
                    this.benefit =
                        this.benefit + 1;
                }
            }
        }
        this.expiresIn = this.expiresIn - 1;
        if (this.expiresIn < 0) {
            this.benefit =
                this.benefit - this.benefit;
        }

        return this;
    }
}