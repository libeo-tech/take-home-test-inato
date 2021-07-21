import { Drug } from './Drug';

export class Fervex extends Drug {

    constructor(name: string, expiresIn: number, benefit: number) {
        super(name, expiresIn, benefit);
    }

    updateBenefit() {
        if (this.expiresIn < 0) {
            this.benefit = 0;
        } else if (this.expiresIn <= 5) {
            this.benefit = this.incrementBenefit(3);
        } else if (this.expiresIn <= 10) {
            this.benefit = this.incrementBenefit(2);
        } else {
            this.benefit = this.incrementBenefit(1);
        }
    }
}
