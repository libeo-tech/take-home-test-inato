export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

/**
 * Object that maps a drug's name to the corresponding function for updating his attributes.
 * The function takes as a parameter the drug instance of the drugs array (from the Pharmacy class).
 */
const perDrugUpdateBenefitValue = {
  "Herbal Tea": (drug) => {
    if (drug.expiresIn > 0) {
      drug.benefit += 1;
    } else {
      drug.benefit += 2;
    }
    drug.expiresIn -= 1;
  },
  "Magic Pill": (drug) => {},
  Fervex: (drug) => {
    if (drug.expiresIn > 10) {
      drug.benefit += 1;
    } else if (drug.expiresIn > 5) {
      drug.benefit += 2;
    } else if (drug.expiresIn > 0) {
      drug.benefit += 3;
    } else {
      drug.benefit = 0;
    }
    drug.expiresIn -= 1;
  },
  Dafalgan: (drug) => {
    drug.benefit -= 2;
    drug.expiresIn -= 1;
  },
};

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  /**
   * In order to update the benefit value each day, we check for each drug in `this.drugs`
   * if the name of the drug is in our map `perDrugUpdateBenefitValue`. We then run the function
   * with the drug instance as a parameter. If not, we execute generic instructions for every
   * other drugs.
   */
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];

      if (Object.keys(perDrugUpdateBenefitValue).includes(drug.name)) {
        perDrugUpdateBenefitValue[drug.name](drug);
      } else {
        if (drug.expiresIn <= 0) {
          drug.benefit -= 2;
        } else {
          drug.benefit -= 1;
        }
        drug.expiresIn -= 1;
      }
      if (drug.benefit <= 0) {
        drug.benefit = 0;
      }
      if (drug.benefit >= 50) {
        drug.benefit = 50;
      }
    }

    return this.drugs;
  }
}
