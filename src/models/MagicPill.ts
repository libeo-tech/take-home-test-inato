import { Drug } from './Drug';

export class MagicPill extends Drug {

    constructor(name: string, expiresIn: number, benefit: number,) {
        super(name, expiresIn, benefit);
    }

    updateBenefit() {
        this.benefit = this.benefit;
    }

    updateExpireIn() {
        this.expiresIn = this.expiresIn;
    }
}
