const { DRUGS_NAME, MIN_BENEFIT, MAX_BENEFIT } = require('./constants');

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
    this.drugs.forEach( (drug, key) => {
    
      switch (drug.name) {
        case DRUGS_NAME.DAFALGAN:
          this.updateDalfaganBenefitValue(drug, key);
          break;
        case DRUGS_NAME.FERVEX:
          this.updateFervexBenefitValue(drug, key);
          break;
        case DRUGS_NAME.HERBAL_TEA:
          this.updateHerbalTeaBenefitValue(drug, key);
          break;
        case DRUGS_NAME.MAGIC_PILL:
          this.updateMagicPillBenefitValue(drug, key);
          break;
        default:
          this.updateClassicDrogBenefitValue(drug, key);
          break;
      }

    })
    return this.drugs;
  }

  updateClassicDrogBenefitValue(drug, key){
    this.drugs[key].expiresIn -= 1
    if (this.drugs[key].expiresIn > 0) {
      this.drugs[key].benefit = Math.max((drug.benefit - 1), MIN_BENEFIT)
    } 
    else {
      this.drugs[key].benefit = Math.max((drug.benefit - 1 * 2), MIN_BENEFIT)
    }
  }

  updateDalfaganBenefitValue(drug, key) {
    this.drugs[key].expiresIn -= 1
    if (this.drugs[key].expiresIn > 0) {
      this.drugs[key].benefit = Math.max((drug.benefit - 2), MIN_BENEFIT)
    } 
    else {
      this.drugs[key].benefit = Math.max((drug.benefit - 2 * 2), MIN_BENEFIT)
    }
  }

  updateFervexBenefitValue(drug, key) {
    this.drugs[key].expiresIn -= 1
      
      if ( this.drugs[key].expiresIn <= 10 && this.drugs[key].expiresIn > 5) {
        this.drugs[key].benefit = Math.min((drug.benefit + 1 * 2 ), 50)
      } 
      else if ( drug.expiresIn <=  5 && drug.expiresIn > 0  ) {
        this.drugs[key].benefit = Math.min((drug.benefit + 1 * 3 ), 50)
      } 
      else if (drug.expiresIn <= 0) {
        this.drugs[key].benefit = 0
      }
      else {
        this.drugs[key].benefit = Math.min((drug.benefit + 1), 50)
      }
  }

  updateHerbalTeaBenefitValue(drug, key) {    
    this.drugs[key].expiresIn -= 1      
      if (drug.expiresIn > 0) {
        this.drugs[key].benefit = Math.min((drug.benefit + 1), MAX_BENEFIT)
      } 
      else {
        this.drugs[key].benefit = Math.min((drug.benefit + 1 * 2), MAX_BENEFIT)
      }
  }

  updateMagicPillBenefitValue(drug, key) {
    return
  }

  

}
