import { getUpdateStrategy } from "./drugUpdateStrategy";

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
    this.drugs.forEach(drug => {
      const updateStrategy = getUpdateStrategy(drug.name);
      if (updateStrategy) {
        const updatedBenefit = updateStrategy.getUpdatedBenefit(drug);
        const updatedExpireIn = updateStrategy.getUpdatedExpireIn(drug);
        drug.benefit = updatedBenefit;
        drug.expiresIn = updatedExpireIn;
      }
    });
    return this.drugs;
  }
}
