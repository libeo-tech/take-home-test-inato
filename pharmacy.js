import genericUpdate from './mutators/generic'
import dafalganUpdate from './mutators/dafalgan'
// import FervexAndHerbalTeaUpdate from './mutators/fervex-herbal'
// import magicPillUpdate from './mutators/magic-pill'
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
    this.drugs.forEach((drug, item) => {
      switch(drug.name) { 
        case 'Dafalgan' :
          dafalganUpdate(drug)
        break;
      default :
        genericUpdate(drug)
      }
    })
    return this.drugs;
  }
}
