export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseExpiresIn(value) {
    this.expiresIn -= value;
  }

  increaseBenefit(value) {
    this.setBenefit(this.benefit + value);
  }

  decreaseBenefit(value) {
    this.setBenefit(this.benefit - value);
  }

  setBenefit(benefit) {
    if (benefit > 50) {
      this.benefit = 50;
    } else if (benefit < 0) {
      this.benefit = 0;
    } else {
      this.benefit = benefit;
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          this.drugs[i].decreaseExpiresIn(1);
          this.drugs[i].expiresIn < 0
            ? this.drugs[i].increaseBenefit(2)
            : this.drugs[i].increaseBenefit(1);
          break;
        case "Magic Pill":
          break;
        case "Fervex":
          this.drugs[i].decreaseExpiresIn(1);
          if (this.drugs[i].expiresIn < 0) {
            this.drugs[i].setBenefit(0);
          } else if (this.drugs[i].expiresIn < 5) {
            this.drugs[i].increaseBenefit(3);
          } else if (this.drugs[i].expiresIn < 10) {
            this.drugs[i].increaseBenefit(2);
          } else {
            this.drugs[i].increaseBenefit(1);
          }
          break;
        case "Dafalgan":
          this.drugs[i].decreaseExpiresIn(1);
          this.drugs[i].expiresIn < 0
            ? this.drugs[i].decreaseBenefit(4)
            : this.drugs[i].decreaseBenefit(2);
          break;
        default:
          this.drugs[i].decreaseExpiresIn(1);
          this.drugs[i].expiresIn < 0
            ? this.drugs[i].decreaseBenefit(2)
            : this.drugs[i].decreaseBenefit(1);

          break;
      }
    }
    return this.drugs;
  }
}
