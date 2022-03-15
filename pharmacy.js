import { RULES, DRUGS_MAPPING, INCREASE, DECREASE, SET } from './helper';
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateDrug() {
    const rule = this.getRule();
    switch (rule.rule) {
      case INCREASE:
        this.expiresIn--;
        if(this.benefit+rule.amount < 51)
          this.benefit+=rule.amount;
        else this.benefit=50;
        break;
      case DECREASE:
        this.expiresIn--;
        if(this.benefit-rule.amount > -1)
          this.benefit-=rule.amount;
        else this.benefit=0;
        break;
      case SET:
        this.expiresIn--;
        if(rule.amount < 51 && rule.amount > -1)
          this.benefit=rule.amount;
        break;
    }
  }

  getCategory() {
    return DRUGS_MAPPING.find(item => item.drug === this.name)?.category || RULES.DEFAULT.name;
  }

  getRule() {
    const category = this.getCategory();
    return RULES[category].rules.sort((itemA, itemB) => itemB.daysToExpire - itemA.daysToExpire)
            .filter(rule => this.expiresIn <= rule.daysToExpire).pop();
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  addDrug(name, expiresIn, benefit) {
    if(benefit < 0 || benefit > 50) throw 'Benefit should be > -1 and < 51';
    this.drugs.push(new Drug(name, expiresIn, benefit));
  }

  getDrugs() {
    return this.drugs;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateDrug();
    }
    return this.drugs;
  }
}
