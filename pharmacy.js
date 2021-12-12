export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => drug.updateBenefits());
    return this.drugs;
  }
}
