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


/* Private functions */

const normalDrug = drug => {
  updatedDrug = drug;
  if (updatedDrug.benefit > 0) {
    updatedDrug.benefit -= 1;
  }
  updatedDrug.expiresIn -= 1;
  return updatedDrug;
}
