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
  updateBenefitValue() {
    this.drugs.forEach(drug => {
    });
    return this.drugs;
  }
}
