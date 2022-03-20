export class Drug {
    constructor(
        public readonly name: string,
        public expiresIn: number,
        public benefit: number
    ) {
    }

    public updateBenefitValue(): Drug {
        if (
            this.name != 'Herbal Tea' && this.name != 'Fervex'
        ) {
            if (this.benefit > 0) {
                if (this.name != 'Magic Pill') {
                    this.benefit = this.benefit - 1;
                }
            }
        } else {
            if (this.benefit < 50) {
                this.benefit = this.benefit + 1;
                if (this.name == 'Fervex') {
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
            }
        }
        if (this.name != 'Magic Pill') {
            this.expiresIn = this.expiresIn - 1;
        }
        if (this.expiresIn < 0) {
            if (this.name != 'Herbal Tea') {
                if (this.name != 'Fervex') {
                    if (this.benefit > 0) {
                        if (this.name != 'Magic Pill') {
                            this.benefit =
                                this.benefit - 1;
                        }
                    }
                } else {
                    this.benefit =
                        this.benefit - this.benefit;
                }
            } else {
                if (this.benefit < 50) {
                    this.benefit = this.benefit + 1;
                }
            }
        }

        return this;
    }
}

export class HerbalTea extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Herbal Tea', expiresIn, benefit);
    }
}

export class MagicPill extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Magic Pill', expiresIn, benefit);
    }
}

export class Fervex extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super('Fervex', expiresIn, benefit);
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
