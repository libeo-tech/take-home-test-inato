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
      if (this.drugs[i].benefit > 50) {
        this.drugs[i].benefit = 50;
      }
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit += this.drugs[i].expiresIn > 0 ? 1 : 2;
          }
          this.drugs[i].expiresIn -= 1;
          this.drugs[i].benefit =
            this.drugs[i].benefit > 50 ? 50 : this.drugs[i].benefit;
          break;
        case "Magic Pill":
          break;
        case "Fervex":
          if (this.drugs[i].expiresIn > 0) {
            if (this.drugs[i].benefit < 50) {
              if (this.drugs[i].expiresIn > 10) {
                this.drugs[i].benefit += 1;
              } else if (
                this.drugs[i].expiresIn <= 10 &&
                this.drugs[i].expiresIn > 5
              ) {
                this.drugs[i].benefit += 2;
              } else {
                this.drugs[i].benefit += 3;
              }
              this.drugs[i].benefit =
                this.drugs[i].benefit > 50 ? 50 : this.drugs[i].benefit;
            }
          } else {
            this.drugs[i].benefit = 0;
          }
          this.drugs[i].expiresIn -= 1;
          break;
        case "Dafalgan":
          if (this.drugs[i].benefit > 0) {
            this.drugs[i].benefit -= this.drugs[i].expiresIn > 0 ? 2 : 4;
            this.drugs[i].benefit =
              this.drugs[i].benefit < 0 ? 0 : this.drugs[i].benefit;
          }
          this.drugs[i].expiresIn -= 1;
          break;
        default:
          if (0 < this.drugs[i].benefit < 50 && this.drugs[i].benefit > 0) {
            this.drugs[i].benefit -= this.drugs[i].expiresIn > 0 ? 1 : 2;
            this.drugs[i].benefit =
              this.drugs[i].benefit < 0 ? 0 : this.drugs[i].benefit;
          }
          this.drugs[i].expiresIn -= 1;
          break;
      }
    }
    return this.drugs;
  }
}
