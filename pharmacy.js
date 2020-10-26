export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseExpiration() {
    this.expiresIn--;
  }

  isExpired() {
    return this.expiresIn < 0;
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

  decreaseBenefitBy(value) {
    this.benefit = this.benefit - value;
    if (this.benefit < 0) {
      this.benefit = 0;
    }
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
          drug.decreaseExpiration();
          drug.increaseBenefit();
          if (drug.isExpired()) {
            drug.increaseBenefit();
          }
          break;
        case "Magic Pill":
          break;
        case "Fervex":
          drug.decreaseExpiration();
          if (drug.isExpired()) {
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
        case "Dafalgan":
          drug.decreaseExpiration();
          drug.decreaseBenefitBy(2);
          if (drug.isExpired()) {
            drug.decreaseBenefitBy(2);
          }
          break;
        default:
          drug.decreaseExpiration();
          drug.decreaseBenefit();
          if (drug.isExpired()) {
            drug.decreaseBenefit();
          }
      }
    });

    return this.drugs;
  }
}
