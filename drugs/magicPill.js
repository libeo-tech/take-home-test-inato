import { Drug } from "../drug";
import drugNames from "../statics/drugNames";

export default class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super(drugNames.MAGIC_PILL, expiresIn, benefit);
  }

  updateBenefitValue() {
    return this;
  }
}
