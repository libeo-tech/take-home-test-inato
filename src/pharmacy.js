const BENEFIT_LIMIT = 50;

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  checkBenefitLimit(drug) {
    if (drug.benefit > BENEFIT_LIMIT) {
      drug.benefit = BENEFIT_LIMIT;
    }
    return drug;
  }
  updateAllBenefitValues() {
    return this.drugs.map(drug => {
      drug.updateBenefitValue();
      return this.checkBenefitLimit(drug);
    });
  }
}
