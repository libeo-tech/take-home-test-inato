const BENEFIT_LIMIT = 50;

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  checkBenefitValue(drug) {
    if (drug.benefit > BENEFIT_LIMIT) {
      drug.benefit = BENEFIT_LIMIT;
    }
    if (drug.benefit < 0) {
      drug.benefit = 0;
    }
    return drug;
  }
  updateAllBenefitValues() {
    return this.drugs.map(drug => {
      drug.updateBenefitValue();
      return this.checkBenefitValue(drug);
    });
  }
}
