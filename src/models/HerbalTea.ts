import { Drug } from './Drug';

export class HerbalTea extends Drug {

    constructor(name: string, expiresIn: number, benefit: number) {
        super(name, expiresIn, benefit);
    }

    updateBenefit() {
        this.benefit = this.incrementBenefit(this.expiresIn < 0 ? 2 : 1);
    }
}
