export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {

      if (drug.benefitCanItBeDecreased()) {
        drug.decreaseBenefit();
      }
      else {
        drug.increaseBenefit();
      }

      drug.decreaseExpiration();
    }

    return this.drugs;
  }
}
