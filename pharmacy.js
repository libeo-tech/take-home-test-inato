export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  increaseBenefit() {
    if (this.benefit < 50) {
      this.benefit++;
    }
  }

  decreaseBenefit() {
    if (this.benefit > 0) {
      this.benefit--;
    }
  }

  increaseBenefitBy(increment) {
    this.benefit = this.benefit + increment;
    if (this.benefit > 50) {
      this.benefit = 50;
    }
  }

  decreaseExpiration() {
    this.expiresIn--;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case "Herbal Tea":
          drug.increaseBenefit();
          drug.decreaseExpiration();
          if (drug.expiresIn < 0) {
            drug.increaseBenefit();
          }
          break;
        case "Magic Pill":
          break;
        case "Fervex":
          drug.decreaseExpiration();
          if (drug.expiresIn < 0) {
            drug.benefit = 0;
            break;
          }
          drug.increaseBenefit();
          if (drug.expiresIn < 10) {
            drug.increaseBenefit();
          }
          if (drug.expiresIn < 5) {
            drug.increaseBenefit();
          }
          break;
        default:
          drug.decreaseBenefit();
          drug.decreaseExpiration();
          if (drug.expiresIn < 0) {
            drug.decreaseBenefit();
          }
      }
    });

    return this.drugs;
  }
}
