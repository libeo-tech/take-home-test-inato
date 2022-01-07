import {
  drogsRules,
  defaultDrogRule
} from "./drogsRules"

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
  
  /*
  * Check if benefit is in limit of max and min benefit
  * params: benefit (Int)
  * return: benefit (Int)
  * */
  checkBenefitLimits(benefit, maxBenefit, minBenefit) {
    if (benefit > maxBenefit) benefit = maxBenefit;
    if (benefit < minBenefit) benefit = minBenefit;
    
    return benefit
  }
  
  /*
  * Check if expirationDate match with specific rule condition
  * params: expirationDate (Int), condition (String), conditionValue (Int)
  * return: boolean (bool)
  * */
  isConditionMatch(expirationDate, condition, conditionValue) {
    switch (condition) {
      case "gte":
        return expirationDate >= conditionValue;
      case "gt":
        return expirationDate > conditionValue;
      case "lte":
        return expirationDate <= conditionValue;
      case "lt":
        return expirationDate < conditionValue;
      default:
        return false
    }
  }
  
  /*
  * Check if expirationDate match with rule condition
  * params: expirationDate (Int), conditions (Array of Object {condition (String), valueCondition (Int)})
  * return: success (bool)
  * */
  tryConditions(expirationDate, conditions) {
    let success = true;
    
    for (const condition of conditions){
      if (!this.isConditionMatch(expirationDate, condition.condition, condition.valueCondition)){
        success = false;
      }
    }
    
    return success;
  }
  
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
          this.drugs[i].name != "Herbal Tea" &&
          this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
                this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }
    
    return this.drugs;
  }
  
  /*
  * Iterate on drugs array to update benefit and expiresIn values of each one
  * params:
  * return: drogs (Array of Object {name (String), expiresIn: (Int), benefit (Int)})
  * */
  newUpdateBenefitValue() {
    for (const drug of this.drugs){
      const currentRule = drogsRules && drogsRules.rules.length > 0 ? drogsRules.rules.find(el => el.name === drug.name) || defaultDrogRule.rules[0] : defaultDrogRule.rules[0];
      const maxBenefit = drogsRules && drogsRules.maxBenefit ? drogsRules.maxBenefit : defaultDrogRule.maxBenefit
      const minBenefit = drogsRules && drogsRules.minBenefit ? drogsRules.minBenefit : defaultDrogRule.minBenefit
      
      if (currentRule){
        
        drug.expiresIn -= Math.abs(currentRule.expirationDate);
        
        for (const benefit of currentRule.benefits){
          if (this.tryConditions(drug.expiresIn, benefit.conditions)){
            if (benefit.benefit !== null && benefit.benefit !== "undefined"){
              let newBenefit = drug.benefit + benefit.benefit;
              
              /* Check if need to apply default benefit value */
              if (currentRule.defaultBenefit){
                if (this.tryConditions(drug.expiresIn, currentRule.defaultBenefit.conditions)){
                  newBenefit = currentRule.defaultBenefit.defaultValue;
                }
              }
              
              /* Check if benefit match in limit */
              newBenefit = this.checkBenefitLimits(newBenefit, maxBenefit, minBenefit);
              
              drug.benefit = newBenefit;
            }
          }
        }
      }
    }
    
    return this.drugs;
  }
}
