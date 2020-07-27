export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    if (!this.drugs.length) return this.drugs;
    for (var i = 0; i < this.drugs.length; i++) {
      var drug = this.drugs[i];

      if (drug.name === "Magic Pill") continue;

      if (drug.name === "Fervex") {
        if (drug.expiresIn <= 5) {
          drug.benefit = Math.min(50, drug.benefit + 3);
        } else if (drug.expiresIn <= 10) {
          drug.benefit = Math.min(50, drug.benefit + 2);
        } else {
          drug.benefit = Math.min(50, drug.benefit + 1);
        }
      } else if (drug.name == "Herbal Tea") {
        drug.benefit = Math.min(50, drug.benefit + 1);
      } else {
        drug.benefit = Math.max(0, drug.benefit - 1);
      }

      drug.expiresIn -= 1;

      if (drug.expiresIn < 0) {
        if (drug.name === "Fervex") {
          drug.benefit = 0;
        } else if (drug.name === "Herbal Tea") {
          drug.benefit = Math.min(50, drug.benefit + 1);
        } else {
          drug.benefit = Math.max(0, drug.benefit - 1);
        }
      }
    }
    return this.drugs;
  }
}
