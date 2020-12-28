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
      this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].expiresIn < 0
              ? (this.drugs[i].benefit = this.drugs[i].benefit + 2)
              : (this.drugs[i].benefit = this.drugs[i].benefit + 1);
          }
          break;
        case "Magic Pill":
          this.drugs[i].expiresIn = this.drugs[i].expiresIn + 1;
          break;
        case "Fervex":
          if (this.drugs[i].expiresIn < 0) {
            this.drugs[i].benefit = 0;
          } else {
            if (this.drugs[i].benefit < 50) {
              if (this.drugs[i].expiresIn > 10) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              } else if (this.drugs[i].expiresIn > 5) {
                this.drugs[i].benefit = this.drugs[i].benefit + 2;
              } else if (this.drugs[i].expiresIn >= 0) {
                this.drugs[i].benefit = this.drugs[i].benefit + 3;
              }
            }
          }
          break;
        case "Dafalgan":
          if (this.drugs[i].benefit > 0) {
            this.drugs[i].benefit = this.drugs[i].benefit - 2;
          }
          break;
        default:
          if (this.drugs[i].benefit > 0) {
            this.drugs[i].expiresIn < 0
              ? (this.drugs[i].benefit = this.drugs[i].benefit - 2)
              : (this.drugs[i].benefit = this.drugs[i].benefit - 1);
          }
          break;
      }
      if (this.drugs[i].benefit > 50) this.drugs[i].benefit = 50;
      if (this.drugs[i].benefit < 0) this.drugs[i].benefit = 0;
    }
    return this.drugs;
  }
}
