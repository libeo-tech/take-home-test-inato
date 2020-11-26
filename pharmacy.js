export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateDrug() {
    const degradationRate = this.expiresIn > 0 ? 1 : 2;
    this.benefit = Math.max(this.benefit - degradationRate, 0);
    this.expiresIn--;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateDrug();
    }

    return this.drugs;
  }
}
