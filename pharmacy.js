export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    return this.drugs.map(drug => {
      drug.updateExpiration();
      drug.updateBenefit();
      return drug;
    });
  }
}
