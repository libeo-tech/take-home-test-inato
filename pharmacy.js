const minBenefitValue = 0;
const maxBenefitValue = 50;

// TODO : put this configuration object in BDD
const drugsConfiguration = {
  'Herbal Tea': { expireVariation: -1, benefitVariation: [ { operator: 'lte', value: 0, benefitVariation: 2 }, { operator: 'gt', value: 0, benefitVariation: 1 }] },
  'Magic Pill': { expireVariation: 0, benefitVariation: [] },
  'Fervex': { expireVariation: -1, benefitVariation: [ { operator: 'lte', value: 0, benefitValue: 0 }, { operator: 'lte', value: 5, benefitVariation: 3 }, { operator: 'lte', value: 10, benefitVariation: 2 }] },
  'Doliprane': { expireVariation: -1, benefitVariation: [ { operator: 'gt', value: 0, benefitVariation: -1 }, { operator: 'lte', value: 0, benefitVariation: -2 }] }
};
// Use for not configured drug like test in the pharmacy.test file
const defaultDrugConfiguration = { expireVariation: -1, benefitVariation: [ { operator: 'gt', value: 0, benefitVariation: -1 }, { operator: 'lte', value: 0, benefitVariation: -2 }] };

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

  /**
   * Update the benefit value and the expiresIn of all drugs
   * @return {*[]}
   */
  updateBenefitValue() {

    for ( const drug of this.drugs ) {
      const tmpBenefit = this.getNewBenefitValue( drug );
      drug.benefit = Math.max( Math.min( tmpBenefit, maxBenefitValue ), minBenefitValue );
      drug.expiresIn += drugsConfiguration[ drug.name ] ? drugsConfiguration[ drug.name ].expireVariation : defaultDrugConfiguration.expireVariation;
    }

    return this.drugs;
  }

  /**
   * Calculate the new possible value of the benefit of a drug
   * @param drug [Drug]
   * @return newBenefit [number]
   */
  getNewBenefitValue( drug ) {
    let res = 0
    const conditions = drugsConfiguration[ drug.name ] ? drugsConfiguration[ drug.name ].benefitVariation : defaultDrugConfiguration.benefitVariation
    if ( conditions && conditions.length > 0 ) {
      for ( const condition of conditions ) {
        if ( condition.operator === 'gt' ) {
          // Create 2 if for performances
          if ( drug.expiresIn > condition.value ) {
            if ( typeof condition.benefitValue !== 'undefined' ) { return condition.benefitValue; }
            res = condition.benefitVariation;
            break;
          }
        // Create four conditions for possible futur needs
        } else if ( condition.operator === 'gte' ) {
          if ( drug.expiresIn >= condition.value ) {
            if ( typeof condition.benefitValue !== 'undefined' ) { return condition.benefitValue; }
            res = condition.benefitVariation;
            break;
          }
        } else if ( condition.operator === 'lt' ) {
          if ( drug.expiresIn < condition.value ) {
            if ( typeof condition.benefitValue !== 'undefined' ) { return condition.benefitValue; }
            res = condition.benefitVariation;
            break;
          }
        } else if ( condition.operator === 'lte' ) {
          if ( drug.expiresIn <= condition.value ) {
            if ( typeof condition.benefitValue !== 'undefined' ) { return condition.benefitValue; }
            res = condition.benefitVariation;
            break;
          }
        }
      }
    }
    return drug.benefit + res;
  }
}
