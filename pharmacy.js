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
    if (this.name != "Herbal Tea" && this.name != "Fervex") {
      if (this.name != "Magic Pill") {
        this.benefit = this.benefit - 1;
      }
    } else {
      this.benefit = this.benefit + 1;
      if (this.name == "Fervex") {
        if (this.expiresIn < 11) {
          this.benefit = this.benefit + 1;
        }
        if (this.expiresIn < 6) {
          this.benefit = this.benefit + 1;
        }
      }
    }
    if (this.name != "Magic Pill") {
      this.expiresIn = this.expiresIn - 1;
    }
    if (this.expiresIn < 0) {
      if (this.name != "Herbal Tea") {
        if (this.name != "Fervex") {
          if (this.name != "Magic Pill") {
            this.benefit = this.benefit - 1;
          }
        } else {
          this.benefit = this.benefit - this.benefit;
        }
      } else {
        this.benefit = this.benefit + 1;
      }
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
