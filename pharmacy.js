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
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];

      switch (drug.name) {
        case "Herbal Tea":
          if (drug.expiresIn > 0) {
            drug.benefit += 1;
          } else {
            drug.benefit += 2;
          }
          drug.expiresIn -= 1;
          break;
        case "Magic Pill":
          break;
        case "Fervex":
          if (drug.expiresIn > 10) {
            drug.benefit += 1;
          } else if (drug.expiresIn > 5) {
            drug.benefit += 2;
          } else if (drug.expiresIn > 0) {
            drug.benefit += 3;
          } else {
            drug.benefit = 0;
          }
          drug.expiresIn -= 1;
          break;
        case "Dafalgan":
          drug.benefit -= 2;
          drug.expiresIn -= 1;
          break;
        default:
          if (drug.expiresIn <= 0) {
            drug.benefit -= 2;
          } else {
            drug.benefit -= 1;
          }
          drug.expiresIn -= 1;
      }
      if (drug.benefit <= 0) {
        drug.benefit = 0;
      }
      if (drug.benefit >= 50) {
        drug.benefit = 50;
      }
    }

    return this.drugs;
  }
}
