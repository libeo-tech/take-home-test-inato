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

  calculateDafalgan(drug) {
    let { name, expiresIn, benefit } = drug;
    let degradeValue = 2;

    if (expiresIn <= 0) {
      degradeValue = 4;
    }

    benefit = benefit >= degradeValue ? benefit - degradeValue : 0;
    expiresIn--;

    return new Drug(name, expiresIn, benefit);
  }

  calculateFervex(drug) {
    let { name, expiresIn, benefit } = drug;

    if (expiresIn > 10) {
      benefit++;
    } else if (expiresIn > 5 && expiresIn <= 10) {
      benefit = benefit + 2;
    } else if (expiresIn > 0 && expiresIn <= 5) {
      benefit = benefit + 3;
    } else {
      benefit = 0;
    }

    expiresIn--;

    return new Drug(name, expiresIn, benefit);
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name === "Dafalgan") {
        this.drugs[i] = this.calculateDafalgan(this.drugs[i]);
        continue;
      }

      if (this.drugs[i].name === "Fervex") {
        this.drugs[i] = this.calculateFervex(this.drugs[i]);
        continue;
      }

      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
