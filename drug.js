const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

export class Drug {
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }

    updateBenefit(){
      let nextEvolution;
      switch (this.name){
        case "Herbal Tea":
          nextEvolution = this.expiresIn >= 0 ? 1 : 2;
        break;

        case "Magic Pill":
          nextEvolution = 0;
        break;
  
        default: 
          nextEvolution = this.expiresIn >= 0 ? -1 : -2;
      }

      this.setBenefit(nextEvolution + this.benefit);
    }

    setBenefit(value){
        if(value < MIN_BENEFIT) this.benefit = MIN_BENEFIT;
        else if (value > MAX_BENEFIT) this.benefit = MAX_BENEFIT;
        else  this.benefit = value;
    }

    decreaseExpiresIn(){
        if (this.name != "Magic Pill") {
          this.expiresIn = this.expiresIn - 1;
        }
      }

  }