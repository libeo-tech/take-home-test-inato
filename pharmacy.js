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

  }
  updateHerbalTea(drug) {

  }
  updateDafalgan(drug) {

  }
  updateOthers(drug) {

  }
  updateBenefitValue() {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case "Fervex":
          break ;
        case "Herbal Tea":
          break ;
        case "Dafalgan":
          break ;
        default:
      }
      drug.decrementExpiresIn();
    });
    return this.drugs;
  }
}
