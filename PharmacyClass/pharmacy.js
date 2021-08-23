export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name !== "Magic Pill") {
        this.drugs[i].updateExpiresIn();
        if (this.drugs[i].benefit < 50 && this.drugs[i].benefit > 0)
          this.drugs[i].updateBenefit();
      }
    }
    return this.drugs;
  }
}
