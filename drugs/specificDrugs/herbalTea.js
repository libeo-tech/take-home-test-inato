import { Drug } from "../drug";

export default class HerbalTea extends Drug {
    constructor(expiresIn, benefit){
        super("Herbal Tea", expiresIn, benefit);
    }

    updateBenefit(){
        let nextEvolution = this.expiresIn >= 0 ? 1 : 2;
        this.setBenefit(nextEvolution + this.benefit);
    }
}