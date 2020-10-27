export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    return new Pharmacy(this.drugs.map(drug => drug.updateBenefit()));
  }

  log() {
    return this.drugs.map(drug => drug.log());
  }
}
