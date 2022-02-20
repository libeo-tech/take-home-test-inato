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

          // If drug is Fervex
          if (drug.name === 'Fervex') {
            if (drug.expiresIn < 0) {
              drug.benefit = 0;
            } else {
              drug.addBenefit();
              if (oldDrugValue.expiresIn <= 10) {
                drug.addBenefit();
              }
              if (oldDrugValue.expiresIn <= 5) {
                drug.addBenefit();
              }
            }
          } else if (drug.name === 'Herbal Tea') {
            // If drug is Herbal Tea
            drug.addBenefit();
          } else {
            // For all others drugs
            drug.decreaseBenefit();
          }

          if (drug.name !== 'Fervex') {
            this.checkForExpireUpdate(drug);
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
  checkForExpireUpdate(drug) {
    if (drug.expiresIn < 0) {
      if (drug.name === 'Herbal Tea') {
        drug.addBenefit();
      } else {
        drug.decreaseBenefit();
      }
    }
  }
}
