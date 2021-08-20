import { Drug } from "../drug";

export default class MagicPill extends Drug {
    constructor(expiresIn, benefit){
        super("Magic Pill", expiresIn, benefit);
    }

    updateBenefit(){
    }

    decreaseExpiresIn(){
    }
}