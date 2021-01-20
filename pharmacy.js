import drugNames from "./statics/drugNames";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != drugNames.HERBAL_TEA &&
        this.drugs[i].name != drugNames.FERVEX
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != drugNames.MAGIC_PILL) {
            this.drugs[i].benefit--;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit++;
          if (this.drugs[i].name == drugNames.FERVEX) {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit++;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit++;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != drugNames.MAGIC_PILL) {
        this.drugs[i].expiresIn--;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != drugNames.HERBAL_TEA) {
          if (this.drugs[i].name != drugNames.FERVEX) {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != drugNames.MAGIC_PILL) {
                this.drugs[i].benefit--;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit++;
          }
        }
      }
    }

    return this.drugs;
  }
}
