import Drug from "./Drug";

export const MAGIC_PILL = "Magic Pill";
/**
 *
 */
export default class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super(MAGIC_PILL, expiresIn, benefit);
  }

  updateBenefitValue() {
    return this;
  }
}
