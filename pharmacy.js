export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this._benefit = benefit;
  }

  get benefit() {
    return this._benefit;
  }

  set benefit(value) {
    if (value < 0) {
      this._benefit = 0;
    } else if (value > 50) {
      this._benefit = 50;
    } else {
      this._benefit = value;
    }
  }

  updateDrugProperties() {
    switch (this.name) {
      case "Herbal Tea":
        this.benefit += this.expiresIn < 0 ? 2 : 1;
        this.expiresIn--;
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
        this.expiresIn--;
        break;
      case "Dafalgan":
        this.benefit -= this.expiresIn < 0 ? 4 : 2;
        this.expiresIn--;
        break;
      default:
        this.benefit -= this.expiresIn < 0 ? 2 : 1;
        this.expiresIn--;
        break;
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => drug.updateDrugProperties());
    return this.drugs;
  }
}
