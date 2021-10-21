import * as benefit from './benefit.js';

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      // Update the expiry date
      if(this.drugs[i].name != "Magic Pill"){
        this.drugs[i].expiresIn -= 1;
      }
      // Update the benefit value
      if(this.drugs[i].benefit > 0){
        switch(this.drugs[i].name){
          case "Herbal Tea":
            this.drugs[i].benefit = benefit.HerbalTeaBenefitValue(this.drugs[i].expiresIn, this.drugs[i].benefit);
            break;
          case "Magic Pill":
            this.drugs[i].benefit = benefit.MagicPillBenefitValue(this.drugs[i].expiresIn, this.drugs[i].benefit);
            break;
          case "Fervex":
            this.drugs[i].benefit = benefit.FervexBenefitValue(this.drugs[i].expiresIn, this.drugs[i].benefit);
            break;
          default:
            this.drugs[i].benefit = benefit.DefaultBenefitValue(this.drugs[i].expiresIn, this.drugs[i].benefit);
        }
      }
    }

    return this.drugs;
  }
}
