export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    return this.drugs.map((drug) => drug.toNextDay())
  }
}
