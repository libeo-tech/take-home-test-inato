import { CommonDrug } from "../CommonDrug";

export const MAGIC_PILL = "Magic Pill";

export class MagicPill extends CommonDrug {
  constructor(expiresIn, benefit) {
    super(MAGIC_PILL, expiresIn, benefit);
  }

  /**
   * "Magic Pill" never expires nor decreases in Benefit.
   * @return {number} benefit never changes
   * @private
   */
  _benefitDiff() {
    return 0;
  }

  /**
   * "Magic Pill" never expires nor decreases in Benefit.
   * @private
   */
  _updateExpiry() {}
}
