const benefitUpperLimit = 50;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    const expired = this.expiresIn <= 0;

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

      case "Fervex":
        if (expired) {
          this.benefit = 0;
        } else if (this.benefit < benefitUpperLimit) {
          let step = 1;
          if (this.expiresIn < 6) {
            step = 3;
          } else if (this.expiresIn < 11) {
            step = 2;
          }
          const newBenefit = this.benefit + step;
          this.benefit = Math.min(newBenefit, benefitUpperLimit);
        }
        updateExpirationValue();
        break;
      default:
        // benefit decrease for normal drugs
        if (this.benefit > 0) {
          this.benefit = this.benefit - 1;
        }

        // expiresIn update
        this.expiresIn = this.expiresIn - 1;

        if (this.expiresIn < 0) {
          // benefit decrease for normal drugs after expiration
          if (this.benefit > 0) {
            this.benefit = this.benefit - 1;
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
