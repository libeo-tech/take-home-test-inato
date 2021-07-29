import { PHARMA_TYPE } from "./constants";
export class Drug {
  /**
   * Create a drug
   * @param {string} name - drug's name
   * @param {number} expiresIn - drug's expiration
   * @param {number} benefit - drug's benefit
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  /**
   * Create a pharmacy
   * @param {Drug[]} drugs
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != PHARMA_TYPE.HERBAL &&
        this.drugs[i].name != PHARMA_TYPE.FERVEX
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != PHARMA_TYPE.MAGIC) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
          if (this.drugs[i].name === PHARMA_TYPE.DAFALGAN) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == PHARMA_TYPE.FERVEX) {
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
      if (this.drugs[i].name != PHARMA_TYPE.MAGIC) {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != PHARMA_TYPE.HERBAL) {
          if (this.drugs[i].name != PHARMA_TYPE.FERVEX) {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != PHARMA_TYPE.MAGIC) {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
              if (this.drugs[i].name === PHARMA_TYPE.DAFALGAN) {
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
