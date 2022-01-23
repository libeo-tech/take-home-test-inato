export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseExpiresIn() {
    this.expiresIn--;
  }

  decreaseBenefit() {
    if (this.benefit > 0) {
      if (this.expiresIn < 0) {
        this.benefit = this.benefit - 2;
      } else {
        this.benefit--;
      }
    }
  }

  updateBenefitValue() {
     this.decreaseBenefit();
  }
}

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit, maxBenefit = 50) {
    super('Herbal Tea', expiresIn, benefit);
    this.maxBenefit = maxBenefit;
  }

  increaseBenefit(factor = 1) {
    const newBenefit = this.benefit + factor
    if (newBenefit < this.maxBenefit) {
      this.benefit = newBenefit;
    } else {
      this.benefit =this.maxBenefit;
    }
  }

  updateBenefitValue() {
    if (this.expiresIn <= 0) {
      this.increaseBenefit(2);
    } else {
      this.increaseBenefit();
    }
  }
}

export class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super('Magic Pill', expiresIn, benefit);
  }

  decreaseExpiresIn() {
  }

  decreaseBenefit() {
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].decreaseExpiresIn();
      this.drugs[i].updateBenefitValue();
    }
    return this.drugs;
  }

  /*
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
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
  */
}
