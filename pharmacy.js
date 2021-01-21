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

  decreaseBenefit(drug) {
    if (drug.expiresIn < 0) drug.benefit--;
    drug.benefit--;
    if (drug.benefit < 0) drug.benefit = 0;
  }

  updateHerbalTea(drug) {
    if (drug.expiresIn < 0) drug.benefit++;
    drug.benefit++;
    if (drug.benefit > 50) drug.benefit = 50;
  }

  updateFervex(drug) {
    drug.benefit++;
    if (drug.expiresIn <= 10) drug.benefit++;
    if (drug.expiresIn <= 5) drug.benefit++;
    if (drug.benefit > 50) drug.benefit = 50;
    if (drug.expiresIn < 0) drug.benefit = 0;
  }

  updateBenefitValue() {
    this.drugs.map(drug => {
      drug.expiresIn--;
      switch (drug.name) {
        case "Herbal Tea":
          // "Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
          this.updateHerbalTea(drug);
          break;
        case "Magic Pill":
          // "Magic Pill" never expires nor decreases in Benefit.
          drug.expiresIn++;
          break;
        case "Fervex":
          // "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches. Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.
          this.updateFervex(drug);
          break;
        case "Dafalgan":
          // "Dafalgan" degrades in Benefit twice as fast as normal drugs
          this.decreaseBenefit(drug);
          this.decreaseBenefit(drug);
          break;
        default:
          this.decreaseBenefit(drug);
          break;
      }
    });
    return this.drugs;
  }
}
