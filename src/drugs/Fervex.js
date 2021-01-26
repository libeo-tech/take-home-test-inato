import { CommonDrug } from "../CommonDrug";

export const FERVEX = "Fervex";

export class Fervex extends CommonDrug {
  constructor(expiresIn, benefit) {
    super(FERVEX, expiresIn, benefit);
  }

  /**
   * "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches.
   * Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less
   * but Benefit drops to 0 after the expiration date.
   * @return {number} benefit to add
   * @private
   */
  _benefitDiff() {
    if (this.expiresIn > 10) return 1;
    if (this.expiresIn > 5) return 2;
    if (this.expiresIn > 0) return 3;
    else return -this.benefit;
  }
}
