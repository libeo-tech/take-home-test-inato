const {
  updateCommonBenefit,
  updateFervexBenefit,
  updateDafalganBenefit,
  updateHerbalTeaBenefit
} = require("./src/updateDrugs"); // External modules for better readability and maintenance
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
    const availableDrugsMap = { // Mapping all available drugs to dynamically update them. Static alternative for nested nested if-else hell.
      "Fervex": updateFervexBenefit,
      "Doliprane": updateCommonBenefit,
      "Dafalgan": updateDafalganBenefit,
      "Herbal Tea": updateHerbalTeaBenefit
    }

    for (let i = 0, l = this.drugs.length; i < l; i++) {
      if (this.drugs[i].name === "Magic Pill") continue; // Magic Pill never expires nor decreases in Benefit
      let drugObj = this.drugs[i];
      drugObj.expiresIn -= 1; // Everyday expiresIn decreases by 1 for all drugs
      if (drugObj.benefit < 50) {
        try {
          if (!(drugObj.name in availableDrugsMap)) throw new Error("Drug not found or not available"); // If typo or not available drug, throw error
          availableDrugsMap[drugObj.name](drugObj); // Calling the update module for the especific drug
          drugObj.benefit = drugObj.benefit > 50 ? 50 : drugObj.benefit; // Benefit should never be more than 50
          drugObj.benefit = drugObj.benefit < 0 ? 0 : drugObj.benefit; // Benefit should never be negative
          this.drugs[i] = drugObj;
        } catch (e) {
          console.error(e);
          return e;
        }
      }
    }
    return this.drugs;
  }
}
