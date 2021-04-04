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
      console.log(this.drugs[i].name);
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
        //if the drug is not HerbalTea nor Fervex
      ) {
        if (this.drugs[i].benefit > 0) {
          //benefit>0
          if (this.drugs[i].name != "Magic Pill") {
            //if the drug is not Magic Pill
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
            //benefit drop 1 point => Doliprane => nomal case
          }
          if (this.drugs[i].name == "Dafalgan") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
            //console.log(this.drugs[i].benefit);
            //Dafalgan => -1 again, so totally -2
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          //if the drug is HerbalTea or Fervex, and the benefit < 50
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          //benefit + 1
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
                //the drug is Fervex and expire in 10 days, benefit + 1 again, so toally +2
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
                //Fervex expire in 5 days, benefit + 1 again, so toally +3
              }
            }
          }
        }
      }
      //Beside Magic Pill, all other drugs expire date - 1
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      //if Drugs get expired
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
                //when normal drug Doliprane expire => benefit -1, so totally -2
              }
              if (this.drugs[i].name == "Dafalgan") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
                //console.log(this.drugs[i].benefit);
                //Dafalgan => -1 again, so totally -4
                //2 times faster than normal drugs
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
            //when Fervex expire => benefit is always 0
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
            //when Herbal Tea expire && benefit less than 50 => benefit +1 again, so totally + 2
          }
        }
      }
    }

    return this.drugs;
  }
}
