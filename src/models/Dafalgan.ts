import { Drug } from './Drug';

export class Dafalgan extends Drug {

    constructor(name: string, expiresIn: number, benefit: number) {
        super(name, expiresIn, benefit);
    }

    updateBenefit() {
        this.benefit = this.decrementBenefit(this.expiresIn < 0 ? 4 : 2);
    }
}
