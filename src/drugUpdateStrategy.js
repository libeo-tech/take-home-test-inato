import { DRUG_UPDATE_CONFIG } from "./pharmacyConfig";

export class DrugUpdateStrategy {
  constructor(drugNamePattern, updateBenefit, updateExpireIn) {
    this.drugNamePattern = drugNamePattern;
    this._getUpdatedBenefit = updateBenefit;
    if (updateExpireIn) {
      this._getUpdatedExpireIn = updateExpireIn;
    } else {
      this._getUpdatedExpireIn = drug => drug.expiresIn - 1;
    }
  }

  getUpdatedBenefit(drug) {
    let updatedBenefit = this._getUpdatedBenefit(drug);
    // benefit never less than 0
    if (updatedBenefit < 0) {
      updatedBenefit = 0;
    }
    // benefit never exceed 50
    if (updatedBenefit > 50) {
      updatedBenefit = 50;
    }
    return updatedBenefit;
  }

  getUpdatedExpireIn(drug) {
    return this._getUpdatedExpireIn(drug);
  }

  isApplicableTo(drugName) {
    return drugName.toLowerCase().match(this.drugNamePattern);
  }
}

const STRATEGIES = DRUG_UPDATE_CONFIG.map(drugConfig => new DrugUpdateStrategy(drugConfig.drugNamePattern, drugConfig.updateBenefit, drugConfig.updateExpireIn))

export function getUpdateStrategy(drugName) {
  for (let i = 0; i < STRATEGIES.length; i++) {
    const strategy = STRATEGIES[i];
    if (strategy.isApplicableTo(drugName)) {
      return strategy;
    }
  }
  console.error(
    "No suitable update strategy for drug: " +
    drugName +
    " ,please set a default fallback strategy ?"
  );
  return null;
}
