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
      if (this.drugs[i].name !== "Magic Pill") {
        this.drugs[i].expiresIn--;

        if (this.drugs[i].name === "Herbal Tea") {
          this.drugs[i].benefit++;
        } else if (
          this.drugs[i].name === "Fervex" &&
          this.drugs[i].expiresIn >= 0
        ) {
          this.drugs[i].benefit++;
          if (this.drugs[i].expiresIn <= 10) this.drugs[i].benefit++;
          if (this.drugs[i].expiresIn <= 5) this.drugs[i].benefit++;
        } else {
          this.drugs[i].benefit--;
        }

        if (this.drugs[i].name === "Fervex" && this.drugs[i].expiresIn < 0) {
          this.drugs[i].benefit = 0;
        } else if (this.drugs[i].expiresIn < 0 && this.drugs[i].benefit > 0) {
          if (this.drugs[i].name === "Herbal Tea") {
            this.drugs[i].benefit++;
          } else {
            this.drugs[i].benefit--;
          }
        }

        if (this.drugs[i].benefit > 50) this.drugs[i].benefit = 50;
        if (this.drugs[i].benefit < 0) this.drugs[i].benefit = 0;
      }
    }
    return this.drugs;
  }
}
