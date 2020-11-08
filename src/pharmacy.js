/**
 * @class Drug
 */
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit() {
    switch (this.name) {
      case "Herbal Tea":
        this.benefit =
          this.expiresIn > 0 ? this.benefit++ : (this.benefit += 2);
        break;

      case "Magic Pill":
        break;

      case "Fervex":
        if (this.expiresIn < 0) {
          this.benefit = 0;
        } else if (this.expiresIn <= 5) {
          this.benefit += 3;
        } else if (this.expiresIn <= 10) {
          this.benefit += 2;
        } else {
          this.benefit++;
        }
        break;

      case "Dafalgan":
        this.benefit -= 2;
        break;

      default:
        if (this.expiresIn < 0) {
          this.benefit -= 2;
        } else {
          this.benefit--;
        }
        break;
    }

    this.verifyBenefitValue();
  }

  updateExpiresIn() {
    switch (this.name) {
      case "Magic Pill":
        break;
      default:
        this.expiresIn--;
        break;
    }
  }

  verifyBenefitValue() {
    if (this.benefit < 0) {
      this.benefit = 0;
    }
    if (this.benefit > 50) {
      this.benefit = 50;
    }
  }
}

/**
 * @class Pharmacy
 */
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateDrugs() {
    this.drugs.forEach((drug) => {
      drug.updateExpiresIn();
      drug.updateBenefit();
    });

    return this.drugs;
  }
}
