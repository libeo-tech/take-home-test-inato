import Drug from "./Drug";
export const FERVEX = "Fervex";
/**
 *
 */
export default class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super(FERVEX, expiresIn, benefit);
  }

  updateBenefitValue() {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
      this.expiresIn--;
      return this;
    }

    if (this.benefit < 50) {
      this.benefit++;
    }

    if (this.benefit < 50 && this.expiresIn < 11) {
      this.benefit++;
    }

    if (this.benefit < 50 && this.expiresIn < 6) {
      this.benefit++;
    }

    this.expiresIn--;
    return this;
  }
}
