import { Drug } from "../drug";

export default class Fervex extends Drug {
    constructor(expiresIn, benefit){
        super("Fervex", expiresIn, benefit);
    }

    updateBenefit(){
        let nextEvolution;
        if(this.expiresIn < 0) nextEvolution = -this.benefit;
        else if(this.expiresIn <= 5) nextEvolution = 3;
        else if(this.expiresIn <= 10) nextEvolution = 2;
        else nextEvolution = 1; // my bad for last comment 
        this.setBenefit(nextEvolution + this.benefit);
    }
}