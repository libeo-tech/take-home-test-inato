export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  isExpired() {
    return this.expiresIn <= 0;
  }

  updateExpiresIn() {
    this.expiresIn -= 1;
  }

  updateBenefit(amount) {
    this.benefit += amount;
    if (this.benefit < 0)
      this.benefit = 0;
    else if (this.benefit > 50)
      this.benefit = 50;
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
        if (!this.drugs[i].isExpired() > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.drugs[i].updateBenefit(-1);
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].updateBenefit(1);
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].updateBenefit(1);
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].updateBenefit(1);
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].updateExpiresIn();
      }
      if (this.drugs[i].isExpired()) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].updateBenefit(-1);
              }
            }
          } else {
            this.drugs[i].benefit = 0;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].updateBenefit(1);
          }
        }
      }
    }

    return this.drugs;
  }
}
