import { Drug } from "./drug";

export class Pharmacy {

  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      if (drug.name === "Herbal Tea") {
        Object.assign(drug, herbalTea(drug))
      }
      else if (drug.name === "Fervex") {
        Object.assign(drug, fervex(drug))
      }
      else if (drug.name === "Dafalgan") {
        Object.assign(drug, dafalgan(drug))
      }
      else if (drug.name !== "Magic Pill") {
        Object.assign(drug, normalDrug(drug))
      }
    });
    return this.drugs;
  }
}


/* Private functions */

const normalDrug = drug => {
  let updatedDrug = {...drug}
  updatedDrug = new Drug(updatedDrug.name, updatedDrug.expiresIn, updatedDrug.benefit)
  // By default, we assume that benefit is between 0 and 50 so it is not necessary
  // if (updatedDrug.benefit > 50) {
  //   updatedDrug.benefit = 50;
  // }
  if (updatedDrug.benefit > 0) {
    updatedDrug.benefit -= 1;
  }
  updatedDrug.expiresIn -= 1;
  return updatedDrug;
}

const herbalTea = drug => {
  let updatedDrug = {...drug}
  updatedDrug = new Drug(updatedDrug.name, updatedDrug.expiresIn, updatedDrug.benefit)
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
  let updatedDrug = {...drug}
  updatedDrug = new Drug(updatedDrug.name, updatedDrug.expiresIn, updatedDrug.benefit)
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

const dafalgan = drug => {
  let updatedDrug = {...drug}
  updatedDrug = new Drug(updatedDrug.name, updatedDrug.expiresIn, updatedDrug.benefit)
  if (updatedDrug.benefit > 0) {
    updatedDrug.benefit -= 2;
  }
  if (updatedDrug.benefit < 0) {
    updatedDrug.benefit = 0;
  }
  updatedDrug.expiresIn -= 1;
  return updatedDrug;
}
