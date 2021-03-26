export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  getState() {
    return this.drugs.map(drug => ({
      name: drug.name,
      expiresIn: drug.getState().getExpiresIn(),
      benefit: drug.getState().getBenefit()
    }));
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.updateDayState();
    }
  }
}
