import { Drug } from "../drug";

export default class CovidVaccin extends Drug {
    constructor(expiresIn, benefit){
        super("CovidVaccin", expiresIn, benefit);
    }

    updateBenefit(){
        let nextEvolution;
        if(this.expiresIn < 0) nextEvolution = -this.benefit;
        else if(this.expiresIn <= 17) nextEvolution = 5;
        else if(this.expiresIn <= 23) nextEvolution = 4;
        else nextEvolution = 1; 
        this.setBenefit(nextEvolution + this.benefit);
    }
}