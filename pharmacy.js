export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateDrug(degradationFactor = -1) {
    const degradationRate = this.expiresIn > 0 ? 1 : 2;

    if (degradationFactor < 0) {
      this.benefit = Math.max(
        this.benefit + degradationFactor * degradationRate,
        0
      );
    } else {
      this.benefit = Math.min(
        this.benefit + degradationFactor * degradationRate,
        50
      );
    }
    this.expiresIn--;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          this.drugs[i].updateDrug(1);
          break;
        case "Magic Pill":
          break;
        default:
          this.drugs[i].updateDrug();
          break;
      }
    }

    return this.drugs;
  }
}
