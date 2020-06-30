const BENEFIT_UPDATE_STEP = 1;
const BENEFIT_MAX_VALUE = 50;
const BENEFIT_MIN_VALUE = 0;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateExpiresIn() {
    if (this.name != "Magic Pill") {
      this.expiresIn = this.expiresIn - 1;
    }
  }

  checkBenefitMinMax() {
    if (this.benefit > BENEFIT_MAX_VALUE) {
      this.benefit = BENEFIT_MAX_VALUE;
    } else if (this.benefit < BENEFIT_MIN_VALUE) {
      this.benefit = BENEFIT_MIN_VALUE;
    }
  }

  updateBenefitValue() {
    switch (this.name) {
      case "Herbal Tea":
        this.expiresIn < 0
          ? (this.benefit = this.benefit + BENEFIT_UPDATE_STEP * 2)
          : (this.benefit = this.benefit + BENEFIT_UPDATE_STEP);
        break;

      case "Magic Pill":
        break;

      case "Fervex":
        if (this.expiresIn > 10) {
          this.benefit = this.benefit + BENEFIT_UPDATE_STEP;
        } else if (this.expiresIn > 5) {
          this.benefit = this.benefit + BENEFIT_UPDATE_STEP * 2;
        } else if (this.expiresIn > 0) {
          this.benefit = this.benefit + BENEFIT_UPDATE_STEP * 3;
        } else if (this.expiresIn <= 0) {
          this.benefit = 0;
        }
        break;

      case "Dafalgan":
        this.benefit = this.benefit - BENEFIT_UPDATE_STEP * 2;
        break;

      default:
        this.expiresIn < 0
          ? (this.benefit = this.benefit - BENEFIT_UPDATE_STEP * 2)
          : (this.benefit = this.benefit - BENEFIT_UPDATE_STEP);
        break;
    }
    this.checkBenefitMinMax();
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateDrugs() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateExpiresIn();
      this.drugs[i].updateBenefitValue();
    }
    return this.drugs;
  }
}
