import Drug from './drug';

export default class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue(): Drug[] {
    this.drugs.forEach(drug => drug.tick());
    return this.drugs;
  }
}
