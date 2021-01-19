import Drug from "./Drug";

export const HERBAL_TEA = "Herbal Tea";
/**
 *
 */
export default class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super(HERBAL_TEA, expiresIn, benefit);
  }

  updateBenefitValue() {
    if (this.benefit < 50) {
      this.benefit++;
    }

    if (this.benefit < 50 && this.expiresIn <= 0) {
      this.benefit++;
    }

    this.expiresIn--;
    return this;
  }
}
