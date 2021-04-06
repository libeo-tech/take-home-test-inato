export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValueOfFervex(i) {
    if (this.drugs[i].expiresIn < 0) {
      this.drugs[i].benefit =
        this.drugs[i].benefit - this.drugs[i].benefit;
    } else {
      if (this.drugs[i].benefit < 50) {
        this.drugs[i].benefit = this.drugs[i].benefit + 1;
        if (this.drugs[i].expiresIn < 11 && this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
        }
        if (this.drugs[i].expiresIn < 6 && this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
        }
      }
    }
  }

  updateDefaultValue(i) {
    if (this.drugs[i].benefit > 0) {
      if (this.drugs[i].expiresIn >= 0) {
        this.drugs[i].benefit = this.drugs[i].benefit - 1;
      } else {
        this.drugs[i].benefit = this.drugs[i].benefit - 2;
        // make it null if benefit negatif after -2
        if (this.drugs[i].benefit < 0) {
          this.drugs[i].benefit = 0;
        }

      }
    }
  }

  updateHerbalTea(i) {
    if (this.drugs[i].benefit < 50) {
      this.drugs[i].benefit = this.drugs[i].benefit + 1;
      if (this.drugs[i].expiresIn < 0 && this.drugs[i].benefit < 50) {
        this.drugs[i].benefit = this.drugs[i].benefit + 1;
      }
    }
  }

  updateDafalgan(i) {
    if (this.drugs[i].benefit >= 0) {
      this.drugs[i].benefit = this.drugs[i].benefit - 2;
    }
    if (this.drugs[i].benefit < 0) {
      this.drugs[i].benefit = 0;
    }

  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {

      switch (this.drugs[i].name) {
        case "Herbal Tea":
          this.updateHerbalTea(i);
          this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
          break;

        case "Fervex":
          this.updateBenefitValueOfFervex(i);
          this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
          break;

        case "Magic Pill":
          break;

        case "Dafalgan":
          this.updateDafalgan(i);
          this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
          break;

        default:
          this.updateDefaultValue(i);
          this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
          break;
      }
    }

    return this.drugs;
  }
}