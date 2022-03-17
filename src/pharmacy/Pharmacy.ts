import { Drug } from '../drugs/Drug';

class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    // This will simply go through all the drugs using
    // map (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    // and update their expiration and Benefits according to their methods.
    return this.drugs.map((drug) => {
      drug.updateExpiration();
      drug.updateBenefit();

      return drug;
    });
  }
}

export { Pharmacy };
