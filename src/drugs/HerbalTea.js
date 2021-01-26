import { CommonDrug } from "../CommonDrug";

export const HERBAL_TEA = "Herbal Tea";

export class HerbalTea extends CommonDrug {
  constructor(expiresIn, benefit) {
    super(HERBAL_TEA, expiresIn, benefit);
  }

  /**
   * "Herbal Tea" actually increases in Benefit the older it gets.
   * Benefit increases twice as fast after the expiration date.
   * @return {number} benefit to add
   * @private
   */
  _benefitDiff() {
    return this.expiresIn > 0 ? 1 : 2;
  }
}
