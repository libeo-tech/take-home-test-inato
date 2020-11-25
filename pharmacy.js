export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateDrugs() {
    this.drugs.forEach((drug) => drug.updateDrugValues());
    return this.drugs;
  }
}
