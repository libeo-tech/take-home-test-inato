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

  // Deacreases the benefit of a drug
  ruleDecreaseBenefit(position) {
    this.drugs[position].benefit -= 1;
  }
  
  // Decreases the expiration date of a drug
  ruleDecreaseExpDate(position) {
    this.drugs[position].expiresIn -= 1;
  }
  
  // Decreases the benefit if expiration date has passed
  ruleDecreaseBenefitExpired(position) {
    if (this.drugs[position].expiresIn < 0)
      this.ruleDecreaseBenefit(position);
  }

  // The benefit of an drug is never negative
  ruleBenefitLower(position) {
    this.drugs[position].benefit = (this.drugs[position].benefit < 0) ? 0 : this.drugs[position].benefit;
  }

  // The benefit of an drug is never more than 50
  ruleBenefitUpper(position) {
    this.drugs[position].benefit = (this.drugs[position].benefit > 50) ? 50 : this.drugs[position].benefit;
  }

  // Increases the benefit of a drug
  ruleIncreaseBenefit(position) {
    this.drugs[position].benefit += 1;
  }

  // Increases the benefit of a drug if expiration date has passed
  ruleIncreaseBenefitExpired(position) {
    if (this.drugs[position].expiresIn < 0)
      this.ruleIncreaseBenefit(position);
  }

  // Increases benefit when there are 10 days or less and again when there are 5 days or less
  // Benefit drops to 0 after the expiration date
  ruleBenefitFervex(position) {
    if (this.drugs[position].expiresIn < 0) {
      this.drugs[position].benefit = 0;
      return ;
    }

    if (this.drugs[position].expiresIn <= 10) {
      this.ruleIncreaseBenefit(position);
      if (this.drugs[position].expiresIn <= 5)
        this.ruleIncreaseBenefit(position);      
    }
  }
}
