export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  isExpired() {
    return this.expiresIn <= 0;
  }

  updateExpiresIn() {
    this.expiresIn -= 1;
  }

  updateBenefit(amount) {
    this.benefit += amount;
    if (this.benefit < 0)
      this.benefit = 0;
    else if (this.benefit > 50)
      this.benefit = 50;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.filter(drug => drug.name !== "Magic Pill").map(drug => {
      switch (drug.name) {
        case "Herbal Tea":
          drug.updateBenefit(drug.isExpired() ? 2 : 1);
          break;
        case "Fervex":
          if (drug.isExpired())
            drug.benefit = 0;
          else if (drug.expiresIn <= 5)
            drug.updateBenefit(3);
          else if (drug.expiresIn <= 10)
            drug.updateBenefit(2);
          break;
        case "Dafalgan":
          drug.updateBenefit(drug.isExpired() ? -4 : -2);
          break;
        default:
          drug.updateBenefit(drug.isExpired() ? -2 : -1);
      }
      drug.updateExpiresIn();
    });
    return this.drugs;
  }
}
