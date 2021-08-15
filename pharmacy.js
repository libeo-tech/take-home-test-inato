import drugsDefinitions from "./drugsDefinitions.json";

const defaultRules = {
  expireCycle: -1,
  beforeExpire: -1,
  afterExpire: -2
};

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = [], rules = drugsDefinitions) {
    this.drugs = drugs;
    this.rules = rules;
  }

  static updateExpire(expiresIn, rules = defaultRules) {
    const { expireCycle } = rules;
    return expiresIn + expireCycle;
  }

  static updateBenefit(expiresIn, rules = defaultRules, value) {
    const {
      beforeExpire: ruleBeforeExpire,
      afterExpire: ruleAfterExpire,
      afterExpireInitialValue
    } = rules || defaultRules;
    const rule = expiresIn >= 0 ? ruleBeforeExpire : ruleAfterExpire;
    const initialValue =
      expiresIn < 0 && !isNaN(afterExpireInitialValue)
        ? afterExpireInitialValue
        : value;

    const ruleValue = !Array.isArray(rule)
      ? rule
      : rule.find(([until]) => expiresIn >= until)[1];
    return Math.max(0, Math.min(initialValue + ruleValue, 50));
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].expiresIn = Pharmacy.updateExpire(
        this.drugs[i].expiresIn,
        this.rules[this.drugs[i].name]
      );
      this.drugs[i].benefit = Pharmacy.updateBenefit(
        this.drugs[i].expiresIn,
        this.rules[this.drugs[i].name],
        this.drugs[i].benefit
      );
    }

    return this.drugs;
  }
}
