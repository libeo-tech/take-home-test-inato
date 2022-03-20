export class Drug {
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

export class HerbalTea extends Drug {
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

export class MagicPill extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Magic Pill', expiresIn, benefit);
    }

    public updateBenefitValue(): Drug {
        return this;
    }
}

export class Fervex extends Drug {
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

export class Pharmacy {
    constructor(public drugs: Array<Drug> = []) {
        this.drugs = drugs;
    }

    updateBenefitValue() {
        for (const drug of this.drugs) {
            drug.updateBenefitValue();
        }

        return this.drugs;
    }
}
