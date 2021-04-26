export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => drug.nextDayValues());

    return this.drugs;
  }
}
