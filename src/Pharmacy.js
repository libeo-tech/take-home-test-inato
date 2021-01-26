export class Pharmacy {
  /**
   * @param {(Drug | CommonDrug)[]} drugs
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach(drug => drug.dailyUpdate());

    return this.drugs;
  }
}
