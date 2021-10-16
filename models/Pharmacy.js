import { MODEL_CONSTANTS, THRESHOLD_CONSTANTS } from "../constants";

export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != MODEL_CONSTANTS.DRUG.HERBAL_TEA &&
        this.drugs[i].name != MODEL_CONSTANTS.DRUG.FERVEX
      ) {
        if (this.drugs[i].benefit > THRESHOLD_CONSTANTS.BENEFIT.MIN_VALUE) {
          if (this.drugs[i].name != MODEL_CONSTANTS.DRUG.MAGIC_PILL) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < THRESHOLD_CONSTANTS.BENEFIT.MAX_VALUE) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == MODEL_CONSTANTS.DRUG.FERVEX) {
            if (this.drugs[i].expiresIn < 11) {
              if (
                this.drugs[i].benefit < THRESHOLD_CONSTANTS.BENEFIT.MAX_VALUE
              ) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (
                this.drugs[i].benefit < THRESHOLD_CONSTANTS.BENEFIT.MAX_VALUE
              ) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != MODEL_CONSTANTS.DRUG.MAGIC_PILL) {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < THRESHOLD_CONSTANTS.EXPIRY_DATE.LIMIT) {
        if (this.drugs[i].name != MODEL_CONSTANTS.DRUG.HERBAL_TEA) {
          if (this.drugs[i].name != MODEL_CONSTANTS.DRUG.FERVEX) {
            if (this.drugs[i].benefit > THRESHOLD_CONSTANTS.BENEFIT.MIN_VALUE) {
              if (this.drugs[i].name != MODEL_CONSTANTS.DRUG.MAGIC_PILL) {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < THRESHOLD_CONSTANTS.BENEFIT.MAX_VALUE) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
