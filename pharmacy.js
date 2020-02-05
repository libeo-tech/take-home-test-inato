export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  static get BENEFIT_MAX_VALUE() { return 50 };
  static get BENEFIT_MIN_VALUE() { return 0 };

  decrementExpiresIn() {
    this.expiresIn -= 1;
  }
  decrementBenefit(value = 1) {
    this.benefit -= value;
    if (this.benefit < Drug.BENEFIT_MIN_VALUE)
      this.benefit = Drug.BENEFIT_MIN_VALUE
  }
  incrementBenefit(value = 1) {
    this.benefit += value;
    if (this.benefit > Drug.BENEFIT_MAX_VALUE)
      this.benefit = Drug.BENEFIT_MAX_VALUE
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateFervex(drug) {
    if (drug.expiresIn <= 10)
      drug.incrementBenefit(2);
    else if (drug.expiresIn <= 5)
      drug.incrementBenefit(3);
    else if (drug.expiresIn <= 0)
      drug.benefit = 0;
  }

  updateHerbalTea(drug) {
    drug.incrementBenefit(drug.expiresIn <= 0 ? 2 : 1);
  }

  updateDafalgan(drug) {
    drug.decrementBenefit(2);
  }

  updateOthers(drug) {
    drug.decrementBenefit(drug.expiresIn <= 0 ? 2 : 1);
  }
  updateBenefitValue() {
    this.drugs.filter(drug => drug.name != "Magic Pill").forEach(drug => {
      switch (drug.name) {
        case "Fervex":
          this.updateFervex(drug);
          break ;
        case "Herbal Tea":
          this.updateHerbalTea(drug);
          break ;
        case "Dafalgan":
          this.updateDafalgan(drug);
          break ;
        default:
          this.updateOthers(drug);
      }
      drug.decrementExpiresIn();
    });
    return this.drugs;
  }
}
