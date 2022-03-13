export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   *
   * @returns updated Drugs benefit and expiresIn
   */
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateDrug();
    }
    return this.drugs;
  }
}
