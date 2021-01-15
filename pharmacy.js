import {
  BENEFIT_MAX,
  BENEFIT_MIN,
  BENEFIT_SPECIFICS_RULES,
  DEFAULT_BENEFIT_RULES
} from "./constants";

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
      const expiresIn = this.drugs[i].expiresIn;
      const rule = getCurrentDrugRule(this.drugs[i].name, expiresIn)
      
      let newBenefit = this.drugs[i].benefit;
      if (rule) {
        this.drugs[i].expiresIn -= 1;

        if(typeof rule.value === 'number') {
          newBenefit = rule.value;
        } else if(rule.variation) {
          newBenefit += rule.variation;
        }
      }
      newBenefit = newBenefit < BENEFIT_MIN ? BENEFIT_MIN : newBenefit;
      newBenefit = newBenefit > BENEFIT_MAX ? BENEFIT_MAX : newBenefit;
      this.drugs[i].benefit = newBenefit;
    }
    return this.drugs;
  }
}

const getCurrentDrugRule = (name, expiresIn) => {
  const rules = BENEFIT_SPECIFICS_RULES[name] || DEFAULT_BENEFIT_RULES;
  return rules
    .sort((a, b) => a.expiresIn - b.expiresIn)
    .find(rule =>
      expiresIn <= rule.expiresIn
    );
}