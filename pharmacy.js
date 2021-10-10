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
  getNewBenefit(drug) {
    const maxBenefitValue = 50;
    const specialBenefitIncrements = {
      "Herbal Tea": 1,
      "Magic Pill": 0
    };

    let benefitIncrement =
      specialBenefitIncrements[drug.name] !== undefined
        ? specialBenefitIncrements[drug.name]
        : -1;
    if (drug.expiresIn < 0) {
      benefitIncrement = 2 * benefitIncrement;
    }
    if (drug.benefit + benefitIncrement <= 0) {

      return 0;
    }
    if (drug.benefit >= maxBenefitValue) {

      return maxBenefitValue;
    }

    return drug.benefit + benefitIncrement;
  }

  getNewExpiresIn(drug) {
    const specialExpiresInIncrements = {
      "Magic Pill": 0
    };
    let expiresInIncrement =
      specialExpiresInIncrements[drug.name] !== undefined
        ? specialExpiresInIncrements[drug.name]
        : -1;

    return drug.expiresIn + expiresInIncrement;
  }
  updateBenefitValue() {
    this.drugs.map(drug => {
      drug.expiresIn = this.getNewExpiresIn(drug);
      drug.benefit = this.getNewBenefit(drug);

      // const specialBenefitIncrements = {
      //   "Herbal Tea": 1,
      //   "Magic Pill": 0,
      //   Fervex: {
      //     standard: 1,
      //     10: 2,
      //     5: 3
      //   }
      // };
      // const specialExpiresInIncrements = {
      //   "Magic Pill": 0
      // };
      // const maxBenefitValue = 50;
      // this.drugs.map(drug => {
      //   // decrement days
      //   let expiresInIncrement =
      //     specialExpiresInIncrements[drug.name] !== undefined
      //       ? specialExpiresInIncrements[drug.name]
      //       : -1;
      //   drug.expiresIn += expiresInIncrement;

      //   // normal case
      //   let benefitIncrement =
      //     specialBenefitIncrements[drug.name] !== undefined
      //       ? specialBenefitIncrements[drug.name]
      //       : -1;
      //   if (drug.expiresIn < 0) {
      //     benefitIncrement = 2 * benefitIncrement;
      //   }
      //   drug.benefit += benefitIncrement;
      //   drug.benefit = drug.benefit >= 0 ? drug.benefit : 0;
      //   drug.benefit = drug.benefit >= maxBenefitValue ? maxBenefitValue : drug.benefit;

      //   return drug;
      return drug;
    });

    return this.drugs;
  }
}
