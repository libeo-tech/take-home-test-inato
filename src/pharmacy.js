export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      drug.updateBenefitFromDayDegradation();
      drug.decreaseExpiresIn();
    });

    return this.drugs;
  }
}
