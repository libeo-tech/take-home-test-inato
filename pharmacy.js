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

const herbalTea = drug => {
  updatedDrug = drug;
  if (updatedDrug.expiresIn <= 0) {
    updatedDrug.benefit += 2;
  }
  else {
    updatedDrug.benefit += 1;
  }
  if (updatedDrug.benefit > 50) {
    updatedDrug.benefit = 50;
  }
  updatedDrug.expiresIn -= 1;
  return updatedDrug;
}

const fervex = drug => {
  updatedDrug = drug;
  if (updatedDrug.expiresIn <= 0) {
    updatedDrug.benefit = 0;
  }
  else if (updatedDrug.expiresIn <= 5) {
    updatedDrug.benefit += 3;
  }
  else if (updatedDrug.expiresIn <= 10) {
    updatedDrug.benefit += 2;
  }
  else {
    updatedDrug.benefit += 1;
  }
  if (updatedDrug.benefit > 50) {
    updatedDrug.benefit = 50;
  }
  updatedDrug.expiresIn -= 1;
  return updatedDrug;
}
