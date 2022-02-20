export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * Update the Pharmacy drugs list
   * @returns updated drugs list
   */
   updateBenefitValue() {
    this.drugs.forEach(drug => {
      if (drug.benefit <= 50 && drug.benefit >= 0) {
        // Magic Pill never expires nor gain/lose benefit
        if (drug.name !== 'Magic Pill') {
          const oldDrugValue = Object.assign({}, drug);
          drug.decreaseExpiresIn();

          if (drug.name === 'Fervex' && drug.expiresIn < 0) {
            drug.benefit = 0;
          } else if (drug.name === 'Fervex' || drug.name === 'Herbal Tea') {
            drug.addBenefit();
            if (drug.name === 'Fervex') {
              if (oldDrugValue.expiresIn <= 10) {
                drug.addBenefit();
              } 
              if (oldDrugValue.expiresIn <= 5) {
                drug.addBenefit();
              }
            } else if (drug.expiresIn < 0) {
              drug.addBenefit();
            }
          } else {
            this.drugLoseBenefit(drug);

            if (drug.expiresIn < 0) {
              this.drugLoseBenefit(drug);
            }
          }
        }
      } else {
        throw new Error(`Benefit value must be between 1 and 50 includes`);
      }
    });
    
    return this.drugs;
  }

  /**
   * Update benefit when drug is expired
   * @param {*} drug 
   */
  drugLoseBenefit(drug) {
    // For all others drugs
    drug.decreaseBenefit();

    // If drug is Dafalgan, it lose 1 more Benefit
    if (drug.name === 'Dafalgan') {
      drug.decreaseBenefit();
    }
  }
}
