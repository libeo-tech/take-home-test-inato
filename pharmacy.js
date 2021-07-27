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
  updateBenefitValue() {
    const MAX = 50;
    const magicPill = "Magic Pill";
    const fervex = "Fervex";
    const herbalTea = "Herbal Tea";
    const dafalgan = "Dafalgan";
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name !== magicPill) {
        if (this.drugs[i].name === fervex) {
          if (this.drugs[i].benefit < MAX) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
            if (this.drugs[i].benefit < MAX) {
              if (this.drugs[i].expiresIn < 11) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
              if (this.drugs[i].expiresIn < 6) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        } else if (this.drugs[i].name === herbalTea) {
          if (this.drugs[i].benefit < MAX) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        } else {
          if (this.drugs[i].benefit > 0) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
        if (this.drugs[i].name === dafalgan) {
          this.drugs[i].benefit = this.drugs[i].benefit - 1;
        }
        if (this.drugs[i].expiresIn < 0) {
          if (this.drugs[i].name === herbalTea) {
            if (this.drugs[i].benefit < MAX) {
              this.drugs[i].benefit = this.drugs[i].benefit + 1;
            }
          } else if (this.drugs[i].name === fervex) {
            this.drugs[i].benefit = 0;
          } else {
            if (this.drugs[i].benefit > 0) {
              this.drugs[i].benefit = this.drugs[i].benefit - 1;
            }
          }
        }
      }
    }

    return this.drugs;
  }
}
