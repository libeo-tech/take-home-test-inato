const benefitUpperLimit = 50;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    const expired = this.expiresIn <= 0;

    const updateExpiration = () => {
      this.expiresIn = this.expiresIn - 1;
    };

    const updateBenefit = step => {
      const newBenefit = this.benefit + step;
      this.benefit = Math.max(Math.min(newBenefit, benefitUpperLimit), 0);
    };

    switch (this.name) {
      case "Magic Pill":
        break;

      case "Herbal Tea":
        if (this.benefit < benefitUpperLimit) {
          let step = expired ? 2 : 1;
          updateBenefit(step);
        }
        updateExpiration();
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
          updateBenefit(step);
        }
        updateExpiration();
        break;

      case "Dafalgan":
        if (this.benefit > 0) {
          const step = expired ? -4 : -2;
          updateBenefit(step);
        }
        updateExpiration();
        break;

      default:
        if (this.benefit > 0) {
          const step = expired ? -2 : -1;
          updateBenefit(step);
        }
        updateExpiration();
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
