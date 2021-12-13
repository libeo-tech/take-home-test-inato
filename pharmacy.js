import { updateDrugs } from "./lib/drugsUpdater";

export const MIN_BENEFIT = 0;
export const MAX_BENEFIT = 50;

export const ERROR_DRUG_INSTANTIATION =
  "Error while creating a new drug: Bad params";
export class Drug {
  constructor(name, expiresIn, benefit) {
    if (
      typeof name !== "string" ||
      typeof expiresIn !== "number" ||
      typeof benefit !== "number"
    ) {
      throw new Error(ERROR_DRUG_INSTANTIATION);
    }
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  dicreaseExpiresInByOne() {
    this.expiresIn -= 1;
  }

  dicreaseBenefitBy(n) {
    this.benefit = Math.max(this.benefit - n, MIN_BENEFIT);
  }

  increaseBenefitBy(n) {
    this.benefit = Math.min(this.benefit + n, MAX_BENEFIT);
  }

  setBenefitToZero() {
    this.benefit = 0;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(updateDrugs);
    return this.drugs;
  }
}
