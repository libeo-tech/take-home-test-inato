export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  decrementExpiresIn() {
    this.expiresIn -= 1;
  }
  incrementBenefit() {

  }
  decrementBenefit() {

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
