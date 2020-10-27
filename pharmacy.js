import genericUpdate from './mutators/generic';
import dafalganUpdate from './mutators/dafalgan';
import fervexAndHerbalTeaUpdate from './mutators/fervex-herbal';
import expiryUpdate from './mutators/expiry-date'
import fervexUpdate from './mutators/fervex'
import herbalUpdate from './mutators/herbel-tea'

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
      switch (drug.name) {
        case 'Dafalgan':
          dafalganUpdate(drug);
          expiryUpdate(drug)
          break;
        case 'Herbal Tea':
          fervexAndHerbalTeaUpdate(drug);
          herbalUpdate(drug)
          expiryUpdate(drug)
          break;
        case 'Fervex':
          fervexAndHerbalTeaUpdate(drug);
          fervexUpdate(drug)
          expiryUpdate(drug)
          break;
        case 'Magic Pill':
          return drug;
        default:
          genericUpdate(drug);
          expiryUpdate(drug)
      }
    });
    return this.drugs;
  }
}
