const MAX_DRUG_BENEFIT = 50
const MIN_DRUG_BENEFIT = 0
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case "Herbal Tea":
          this.updateHerbalTeaBenefitValue(drug);
          break;
        case "Fervex":
          this.updateFervexBenefitValue(drug)
          break
        case "Magic Pill":
          return
        default:
          this.updateDrugBenefitValue(drug)
      }
    })
    return this.drugs
  }


  updateHerbalTeaBenefitValue(drug) {
    drug.expiresIn -= 1;
    if (drug.benefit < 50 && drug.expiresIn < 0) {
      drug.benefit = Math.min(drug.benefit + 2, MAX_DRUG_BENEFIT)
    }
    else if (drug.benefit < MAX_DRUG_BENEFIT) {
      drug.benefit += 1
    }
  }



  updateFervexBenefitValue(drug) {
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0) {
      drug.benefit = 0
      return
    }

    if (drug.benefit >= MAX_DRUG_BENEFIT) {
      return
    }

    if (drug.expiresIn < 5) {
      drug.benefit = Math.min(drug.benefit + 3, MAX_DRUG_BENEFIT);
    }
    else if (drug.expiresIn < 10) {
      drug.benefit = Math.min(drug.benefit + 2, MAX_DRUG_BENEFIT);
    } else {
      drug.benefit = Math.min(drug.benefit + 1);
    }
  }

  updateDrugBenefitValue(drug) {
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0) {
      drug.benefit = Math.max(drug.benefit - 2, MIN_DRUG_BENEFIT)
    } else {
      drug.benefit = Math.max(drug.benefit - 1, MIN_DRUG_BENEFIT)
    }
  }
}
