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
    return this.drugs;
  }
}
