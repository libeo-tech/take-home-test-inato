export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateAllBenefitValues() {
    return this.drugs.map(function (drug) {
      drug.updateBenefitValue();
      return drug;
    });
  }
}
