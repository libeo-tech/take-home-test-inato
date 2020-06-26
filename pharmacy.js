export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateDrugBenefit() {
    switch (this.name) {
      case "Herbal Tea":
        if (this.expiresIn < 1) this.benefit += 2;
        else this.benefit += 1;
        break;
      case "Magic Pill":
        this.expiresIn += 1;
        break;
      case "Fervex":
        if (this.expiresIn < 1) this.benefit = 0;
        else if (this.expiresIn < 6) this.benefit += 3;
        else if (this.expiresIn < 11) this.benefit += 2;
        else this.benefit += 1;
        break;
      case "Dafalgan":
        this.benefit -= 2;
        break;
      default:
        if (this.expiresIn < 0) this.benefit -= 2;
        else this.benefit -= 1;
        break;
    }
    this.expiresIn -= 1;
    this.benefit = Math.min(50, Math.max(0, this.benefit));
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => drug.updateDrugBenefit());

    return this.drugs;
  }
}
