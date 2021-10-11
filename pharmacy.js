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
  getFervexBenefit(expiresIn, benefit) {
    if (expiresIn >= 10) {
      return benefit + 1;
    }
    if (expiresIn >= 5) {
      return benefit + 2;
    }
    if (expiresIn >= 0) {
      return benefit + 3;
    }
    return 0;
  }

  getNewBenefit(drug) {
    const maxBenefitValue = 50;
    const specialBenefitIncrements = {
      "Herbal Tea": 1,
      "Magic Pill": 0,
      Dafalgan: -2
    };
    let newBenefit;
    if (drug.name === "Fervex") {
      newBenefit = this.getFervexBenefit(drug.expiresIn, drug.benefit);
    } else {
      let benefitIncrement =
        specialBenefitIncrements[drug.name] !== undefined
          ? specialBenefitIncrements[drug.name]
          : -1;

      if (drug.expiresIn < 0) {
        benefitIncrement = 2 * benefitIncrement;
      }
      newBenefit = drug.benefit + benefitIncrement;
    }
    if (newBenefit <= 0) {
      return 0;
    }
    if (newBenefit >= maxBenefitValue) {
      return maxBenefitValue;
    }

    return newBenefit;
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
