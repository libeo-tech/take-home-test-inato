export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateDrugs() {
    return this.drugs.map(drug => drug.update());
  }
}
