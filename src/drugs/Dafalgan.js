import { CommonDrug } from "../CommonDrug";

export const DAFALGAN = "Dafalgan";

export class Dafalgan extends CommonDrug {
  constructor(expiresIn, benefit) {
    super(DAFALGAN, expiresIn, benefit);
  }

  /**
   * Dafalgan degrades in Benefit twice as fast as normal drugs
   * @return {number} benefit to add
   * @private
   */
  _benefitDiff() {
    return CommonDrug.prototype._benefitDiff.call(this) * 2;
  }
}
