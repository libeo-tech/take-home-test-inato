export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    if (benefit <= 50 && benefit >= 0) this.benefit = benefit;
    else {
      if (benefit > 50) throw new Error(" Benefit > 50 !");
      if (benefit < 0) throw new Error(" Benefit negative ! ");
    }
  }

  updateBenefit() {
    if (this.expiresIn < 0) {
      this.benefit = this.benefit - 2;
    } else this.benefit = this.benefit - 1;
  }
  updateExpiresIn() {
    this.expiresIn = this.expiresIn - 1;
  }
}

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }
  updateBenefit() {
    if (this.expiresIn <= 0 && this.benefit + 2 <= 50) {
      this.benefit = this.benefit + 2;
    } else this.benefit = this.benefit + 1;
  }
}

export class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }
  updateBenefit() {
    this.benefit = this.benefit;
  }
}

export class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }
  updateBenefit() {
    if (this.expiresIn < 5 && this.expiresIn >= 0 && this.benefit + 3 <= 50) {
      this.benefit = this.benefit + 3;
    } else if (
      this.expiresIn < 10 &&
      this.expiresIn >= 5 &&
      this.benefit + 2 <= 50
    ) {
      this.benefit = this.benefit + 2;
    } else if (this.expiresIn < 0) {
      this.benefit = 0;
    } else this.benefit = this.benefit + 1;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  legacyUpdateBenefitValue() {
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
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name !== "Magic Pill") {
        this.drugs[i].updateExpiresIn();
        if (this.drugs[i].benefit < 50 && this.drugs[i].benefit > 0)
          this.drugs[i].updateBenefit();
      }
    }
    return this.drugs;
  }
}
