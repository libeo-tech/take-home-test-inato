const drugRules = require("./drugRules");

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
    for (var i = 0; i < this.drugs.length; i++) {
      let drug = this.drugs[i];
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          drug = drugRules.rulesForHerbalTea(drug);
          break;
        case "Magic Pill":
          drug = drugRules.rulesForMagicPill(drug);
          break;
        case "Fervex":
          drug = drugRules.rulesForFervex(drug);
          break;
        case "Dafalgan":
          drug = drugRules.rulesForDafalgan(drug);
          break;
        default:
          drug = drugRules.defaultRules(drug);
          break;
      }
      drug = drugRules.applyConstraints(drug);
      this.drugs[i].benefit = drug.benefit;
      this.drugs[i].expiresIn = drug.expiresIn;
    }
    return this.drugs;
  }
}
