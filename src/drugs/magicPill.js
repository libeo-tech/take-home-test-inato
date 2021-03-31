import { MAGIC_PILL } from "./constants";
import { Drug } from "./drug";

export class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super(MAGIC_PILL, expiresIn, benefit);
  }

  updateDrugValues() {
    return;
  }
}
