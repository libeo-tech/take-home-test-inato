import { Drug } from "../drug";

export default class Dafalgan extends Drug {
    constructor(expiresIn, benefit){
        super("Dafalgan", expiresIn, benefit);
    }

    updateBenefit(){
        let nextEvolution = this.expiresIn >= 0 ? -2 : -4;
        this.setBenefit(nextEvolution + this.benefit);
        return this;
    }
}