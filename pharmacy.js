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
      if (this.drugs[i].expiresIn > 0) {
        if (
          this.drugs[i].name != "Herbal Tea" &&
          this.drugs[i].name != "Fervex"
        ) {
          //Benefit is never negative.
          if (this.drugs[i].benefit > 0) {
            if (this.drugs[i].name != "Magic Pill") {
              //Doliprane
              if (this.drugs[i].name == "Doliprane") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
              //"Dafalgan" degrades in Benefit twice as fast as normal drugs.
              if (this.drugs[i].name == "Dafalgan") {
                this.drugs[i].benefit = this.drugs[i].benefit - 2;
              }
            }
          }
        } else {
          //Benefit of an item is never more than 50.
          if (this.drugs[i].benefit < 50) {
            //"Herbal Tea" increases Benefit. Benefit increases twice after the expiration.
            if (this.drugs[i].name == "Herbal Tea") {
              this.drugs[i].benefit = this.drugs[i].benefit + 1;
            }
            //"Fervex" increases Benefit.
            if (this.drugs[i].name == "Fervex") {
              if (this.drugs[i].expiresIn > 10) {
                if (this.drugs[i].benefit < 50) {
                  this.drugs[i].benefit = this.drugs[i].benefit + 1;
                }
              }
              //Benefit increases by 2 within 10 days or less
              if (this.drugs[i].expiresIn > 5 && this.drugs[i].expiresIn < 11) {
                if (this.drugs[i].benefit < 49) {
                  this.drugs[i].benefit = this.drugs[i].benefit + 2;
                }
              }
              //Benefit increase by 3 within 5 days or less
              if (this.drugs[i].expiresIn > 0 && this.drugs[i].expiresIn < 6) {
                if (this.drugs[i].benefit < 48) {
                  this.drugs[i].benefit = this.drugs[i].benefit + 3;
                }
              }
            }
          }
        }
      }

      //"Magic Pill" never expires nor decreases in Benefit.
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }

      //Once the expiration date has passed, Benefit degrades twice as fast.
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            //Benefit is never negative.
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                //Doliprane
                if (this.drugs[i].name == "Doliprane") {
                  this.drugs[i].benefit = this.drugs[i].benefit - 2;
                }
                //"Dafalgan" degrades in Benefit twice as fast as normal drugs.
                if (this.drugs[i].name == "Dafalgan") {
                  this.drugs[i].benefit = this.drugs[i].benefit - 4;
                }
              }
            }
          } else {
            //Fervex's Benefit drops to 0 after the expiration.
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          //"Herbal Tea"'s benefit increases twice after the expiration.
          if (this.drugs[i].benefit < 49) {
            this.drugs[i].benefit = this.drugs[i].benefit + 2;
          }
        }
      }
    }

    return this.drugs;
  }
}
