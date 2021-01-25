import {Drug} from "../Drug";

export class Dafalgan extends Drug {
    constructor(expiresIn = 10, benefit = 10) {
        super('Dafalgan', expiresIn, benefit);
    }

    updateBenefit() {
        const savedBenefit = this.benefit;
        super.updateBenefit();
        this.decreaseBenefit(savedBenefit - this.benefit);
    }
}