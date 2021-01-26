export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export const DRUGS = {
  DAFALGAN: "Dafalgan",
  FERVEX: "Fervex",
  HERBAL_TEA: "Herbal Tea",
  MAGIC_PILL: "Magic Pill",
};

const { DAFALGAN, FERVEX, HERBAL_TEA, MAGIC_PILL } = DRUGS;
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name !== HERBAL_TEA && this.drugs[i].name !== FERVEX) {
        if (this.drugs[i].benefit > 0) {
          if (
            this.drugs[i].name !== MAGIC_PILL &&
            this.drugs[i].name !== DAFALGAN
          ) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }

          if (this.drugs[i].name === DAFALGAN) {
            this.drugs[i].benefit = this.drugs[i].benefit - 2;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name === FERVEX) {
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
      if (this.drugs[i].name !== MAGIC_PILL) {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name !== HERBAL_TEA) {
          if (this.drugs[i].name !== FERVEX) {
            if (this.drugs[i].benefit > 0) {
              if (
                this.drugs[i].name !== MAGIC_PILL &&
                this.drugs[i].name !== DAFALGAN
              ) {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }

              if (this.drugs[i].name === DAFALGAN) {
                this.drugs[i].benefit = this.drugs[i].benefit - 2;
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
