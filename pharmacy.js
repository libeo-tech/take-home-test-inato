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

    // Default rules
    this.defaultRules = [
      this.ruleDecreaseExpDate,
      this.ruleDecreaseBenefit,
      this.ruleDecreaseBenefitExpired,
      this.ruleBenefitLower,
    ];

    // Declare custom rules for new drugs here
    this.drugRules = {
      "Dafalgan": [
        this.ruleDecreaseBenefit,
        this.ruleDecreaseBenefit,
        this.ruleBenefitLower,
        this.ruleBenefitUpper,
        this.ruleDecreaseExpDate
      ],
      "Fervex": [
        this.ruleIncreaseBenefit,
        this.ruleDecreaseExpDate,
        this.ruleBenefitFervex,
        this.ruleBenefitUpper,
      ],
      "Herbal Tea": [
        this.ruleDecreaseExpDate,
        this.ruleIncreaseBenefit,
        this.ruleIncreaseBenefitExpired,
        this.ruleBenefitUpper,
      ],
      "Magic Pill": [
        this.ruleFixExpDate
      ]
    };
  }

  updateBenefitValue() {
    let drugRulesNames = Object.keys(this.drugRules);
    for (var i = 0; i < this.drugs.length; i++) {
      let index = drugRulesNames.indexOf(this.drugs[i].name);

      // Executes the default rules
      if (index === -1) {
        for (var j = 0; j < this.defaultRules.length; j++) {
          this.defaultRules[j](i, this.drugs);
        }
      }
      else {
        // Execute the custom rules
        for (var k = 0; k < this.drugRules[drugRulesNames[index]].length; k++) {
          this.drugRules[drugRulesNames[index]][k](i, this.drugs);
        }
      }
    }

    return this.drugs;
  }

  // Deacreases the benefit of a drug
  ruleDecreaseBenefit(position, drugs) {
    drugs[position].benefit -= 1;
  }

  // Decreases the expiration date of a drug
  ruleDecreaseExpDate(position, drugs) {
    drugs[position].expiresIn -= 1;
  }

  // Decreases the benefit if expiration date has passed
  ruleDecreaseBenefitExpired(position, drugs) {
    if (drugs[position].expiresIn < 0)
      drugs[position].benefit -= 1;
  }

  // The benefit of an drug is never negative
  ruleBenefitLower(position, drugs) {
    drugs[position].benefit = (drugs[position].benefit < 0) ? 0 : drugs[position].benefit;
  }

  // The benefit of an drug is never more than 50
  ruleBenefitUpper(position, drugs) {
    drugs[position].benefit = (drugs[position].benefit > 50) ? 50 : drugs[position].benefit;
  }

  // Increases the benefit of a drug
  ruleIncreaseBenefit(position, drugs) {
    drugs[position].benefit += 1;
  }

  // Increases the benefit of a drug if expiration date has passed
  ruleIncreaseBenefitExpired(position, drugs) {
    if (drugs[position].expiresIn < 0)
      drugs[position].benefit += 1;
  }

  // Increases benefit when there are 10 days or less and again when there are 5 days or less
  // Benefit drops to 0 after the expiration date
  ruleBenefitFervex(position, drugs) {
    if (drugs[position].expiresIn < 0) {
      drugs[position].benefit = 0;
      return;
    }

    if (drugs[position].expiresIn <= 10) {
      drugs[position].benefit += 1;
      if (drugs[position].expiresIn <= 5)
        drugs[position].benefit += 1;
    }
  }

  // Fixes expiration date for an item that never expires
  ruleFixExpDate(position, drugs) {
    if (drugs[position].expiresIn < 0)
      drugs[position].expiresIn = 0;
  }
}
