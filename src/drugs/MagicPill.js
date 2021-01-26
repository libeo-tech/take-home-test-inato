import { CommonDrug } from "../CommonDrug";

export const MAGIC_PILL = "Magic Pill";

export class MagicPill extends CommonDrug {
  constructor(benefit) {
    super(MAGIC_PILL, Infinity, benefit);
  }

  /**
   * "Magic Pill" never expires nor decreases in Benefit.
   * @return {number} benefit never changes
   * @private
   */
  _benefitDiff() {
    return 0;
  }
}
