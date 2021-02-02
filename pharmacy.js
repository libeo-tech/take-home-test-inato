const benefitUpperLimit = 50;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    const expired = this.expiresIn < 0;

    const updateExpirationValue = () => {
      this.expiresIn = this.expiresIn - 1;
    };

    switch (this.name) {
      case "Magic Pill":
        break;
      case "Herbal Tea":
        if (this.benefit < benefitUpperLimit) {
          const newBenefit = this.benefit + (expired ? 2 : 1);
          this.benefit = Math.min(newBenefit, benefitUpperLimit);
        }
        updateExpirationValue();
        break;
      default:
        if (this.name != "Fervex") {
          // benefit decrease for normal drugs
          if (this.benefit > 0) {
            this.benefit = this.benefit - 1;
          }
        } else {
          if (this.benefit < 50) {
            // benefit increase for "Fervex"
            this.benefit = this.benefit + 1;
            // benefit increase special cases for "Fervex"
            if (this.name == "Fervex") {
              if (this.expiresIn < 11) {
                if (this.benefit < 50) {
                  this.benefit = this.benefit + 1;
                }
              }
              if (this.expiresIn < 6) {
                if (this.benefit < 50) {
                  this.benefit = this.benefit + 1;
                }
              }
            }
          }
        }
        // expiresIn update
        this.expiresIn = this.expiresIn - 1;

        if (this.expiresIn < 0) {
          if (this.name != "Fervex") {
            // benefit decrease for normal drugs after expiration
            if (this.benefit > 0) {
              this.benefit = this.benefit - 1;
            }
          } else {
            // benefit set to 0 for "Fervex" after expiration
            this.benefit = this.benefit - this.benefit;
          }
        }
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefitValue();
    }

    return this.drugs;
  }
}
