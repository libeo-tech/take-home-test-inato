export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const increaseValue = (drug) => (drug.benefit = drug.benefit + 1);

const decreaseValue = (drug) => (drug.benefit = drug.benefit - 1);

const isPastExpirationDate = (drug) => drug.expiresIn < 0;

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            decreaseValue(this.drugs[i]);
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                increaseValue(this.drugs[i]);
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                increaseValue(this.drugs[i]);
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (isPastExpirationDate(this.drugs[i])) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                decreaseValue(this.drugs[i]);
              }
            }
          } else {
            this.drugs[i].benefit = 0;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            increaseValue(this.drugs[i]);
          }
        }
      }
    }

    return this.drugs;
  }
}
