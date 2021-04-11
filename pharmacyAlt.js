export class Drug {

  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;

    switch (name) {
      case "Herbal Tea":
      case "Fervex":
        this.tendency = 1;
        break;
      default:
        this.tendency = -1;
        break;
    }

    switch (name) {
      case "Fervex":
        if (expiresIn < 0) {
          this.step = 0;
        } else if (expiresIn < 6) {
          this.step = 3;
        } else if (expiresIn < 11) {
          this.step = 2;
        } else {
          this.step = 1;
        }
        break;
      case "Dafalgan":
        this.step = 2;
        break;
      default:
        this.step = 1;
        break;
    }
  }

  updateBenefitValue() {

    if (this.name !== "Magic Pill") {
      this.expiresIn = this.expiresIn - 1;
    }

    if (this.name === "Fervex") {
      if (this.expiresIn < 0) {
        this.step = 0;
        this.benefit = 0;
      } else if (this.expiresIn < 6) {
        this.step = 3;
      } else if (this.expiresIn < 11) {
        this.step = 2;
      } else {
        this.step = 1;
      }
    }

    if (this.expiresIn === -1) {
      this.step = this.step * 2;
    }

    if (this.benefit < 50 && this.benefit > 0 && this.name !== "Magic Pill") {
      this.benefit = this.benefit + (this.tendency * this.step);

      if (this.benefit > 50) {
        this.benefit = 50;
      }

      if (this.benefit < 0) {
        this.benefit = 0;
      }
    }
  }

  toJSON() {
    return {name: this.name, expiresIn: this.expiresIn, benefit: this.benefit};
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