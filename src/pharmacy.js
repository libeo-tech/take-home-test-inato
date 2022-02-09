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
  degrade(drug) {
    switch (drug.name) {
      case "Herbal Tea":
        if (drug.expiresIn > 0) drug.benefit++;
        else drug.benefit += 2;
        break;
      case "Magic Pill":
        break;
      case "Fervex":
        drug.benefit++;
        if (drug.expiresIn <= 10) drug.benefit++;
        if (drug.expiresIn <= 5) drug.benefit++;
        if (drug.expiresIn == 0) drug.benefit = 0;
        break;
      case "Dafalgan":
        if (drug.expiresIn > 0) drug.benefit -= 2;
        else drug.benefit -= 4;
        break;
      default:
        if (drug.expiresIn > 0) drug.benefit--;
        else drug.benefit -= 2;
        break;
    }

    if (drug.benefit < 0) drug.benefit = 0;
    if (drug.benefit > 50) drug.benefit = 50;
  }
  expire(drug) {
    switch (drug.name) {
      case "Magic Pill":
        break;
      default:
        drug.expiresIn--;
        break;
    }

    if (drug.expiresIn < 0) drug.expiresIn = 0;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => {
      this.degrade(drug);
      this.expire(drug);
    });

    return this.drugs;
  }
}
