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
      const benefit = this.drugs[i].benefit;
      const expiresIn = this.drugs[i].expiresIn;
      const name = this.drugs[i].name;

      benefit = benefit > 50 ? 50 : benefit;

      switch (name) {
        case "Herbal Tea":
          if (benefit < 50) {
            benefit += expiresIn > 0 ? 1 : 2;
          }
          expiresIn -= 1;
          benefit = benefit > 50 ? 50 : benefit;
          break;
        case "Magic Pill":
          break;
        case "Fervex":
          if (expiresIn > 10) {
            benefit += 1;
          } else if (expiresIn <= 10 && expiresIn > 5) {
            benefit += 2;
          } else if (expiresIn > 0 && expiresIn <= 5) {
            benefit += 3;
          } else {
            benefit = 0;
          }
          benefit = benefit > 50 ? 50 : benefit;
          expiresIn -= 1;
          break;
        case "Dafalgan":
          if (benefit > 0) {
            benefit -= expiresIn > 0 ? 2 : 4;
            benefit = benefit < 0 ? 0 : benefit;
          }
          expiresIn -= 1;
          break;
        default:
          if (benefit > 0) {
            benefit -= expiresIn > 0 ? 1 : 2;
            benefit = benefit < 0 ? 0 : benefit;
          }
          expiresIn -= 1;
          break;
      }
      this.drugs[i].benefit = benefit;
      this.drugs[i].expiresIn = expiresIn;
    }
    return this.drugs;
  }
}
