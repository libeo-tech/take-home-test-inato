export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefit();
      this.drugs[i].updateExpiryDate();
    }
    return this.drugs.map(drug => {
      return {
        name: drug.name,
        expiresIn: drug.expiresIn,
        benefit: drug.benefit
      };
    });
  }
}
