export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateDrugsValues() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefit();
      this.drugs[i].updateExpiresIn();
    }
    return this.drugs;
  }
}
