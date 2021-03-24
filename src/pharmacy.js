export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateNormalDrugBenefitValue(drug, value) {
    if (drug.expiresIn >= 0) {
      drug.decreaseBenefit(value);
    } else {
      drug.decreaseBenefit(value * 2);
    }
  }
  updateHerbalTeaBenefitValue(drug) {
    if (drug.expiresIn >= 0) {
      drug.increaseBenefit(1)
    } else {
      drug.increaseBenefit(2)
    }  
  }
  updateFervexBenefitValue(drug) {
    if (drug.expiresIn > 10) {
      drug.increaseBenefit(1) 
    } else if (drug.expiresIn <= 10 && drug.expiresIn > 5) {
      drug.increaseBenefit(2)
    } else if (drug.expiresIn <= 5 && drug.expiresIn >= 0) {
      drug.increaseBenefit(3)
    } else {
      drug.benefit = 0
    }
  }

  updateBenefitValueAndExpirationDate() {
    this.drugs.map(drug => {
      switch(drug.name) {
        case "Doliprane": 
          this.updateNormalDrugBenefitValue(drug, 1);
          break;
        case "Herbal Tea":
          this.updateHerbalTeaBenefitValue(drug);
          break;
        case "Fervex":
          this.updateFervexBenefitValue(drug);
          break;
        case "Dafalgan":
          this.updateNormalDrugBenefitValue(drug, 2);
          break;       
      }
      if (drug.name !== "Magic Pill") {
        drug.expiresIn -= 1;
      }
    });
    return this.drugs;
  }
}