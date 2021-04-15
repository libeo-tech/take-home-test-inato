export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  updateBenefitValue() {
    switch (this.name) {
      case "Herbal Tea":
        if (this.benefit < 50) {
          if (this.expiresIn <= 0)
            this.benefit = this.benefit + 2 > 50 ? 50 : this.benefit + 2;
          else this.benefit++;
        }
        break;
      case "Fervex":
        if (this.benefit < 50) {
          if (this.expiresIn <= 0) this.benefit = 0;
          else if (this.expiresIn <= 5)
            this.benefit = this.benefit + 3 > 50 ? 50 : this.benefit + 3;
          else if (this.expiresIn <= 10)
            this.benefit = this.benefit + 2 > 50 ? 50 : this.benefit + 2;
          else this.benefit++;
        } else if (this.expiresIn <= 0) this.benefit = 0;
        break;
      case "Magic Pill":
        break;
      case "Dafalgan":
        this.benefit = this.benefit - 2 <= 0 ? 0 : this.benefit - 2;
        break;
      default:
        if (this.benefit > 0) {
          if (this.expiresIn <= 0) this.benefit -= 2;
          else this.benefit--;
        }
        break;
    }
    if (this.name !== "Magic Pill") this.expiresIn--;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let drug of this.drugs) drug.updateBenefitValue();
    return this.drugs;
  }
}
