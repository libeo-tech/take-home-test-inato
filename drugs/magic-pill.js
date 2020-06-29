import {Drug} from "./drug";
import {MagicPill} from "../constants";

export class MagicPillDrug extends Drug {
  constructor(expiresIn, benefit) {
    super(MagicPill, expiresIn, benefit)
  }

  updateBenefitValue() {
    // Nothing to do
  }

  updateExpiresIn() {
    // Nothing to do
  }

  applyExpiredEffect() {
    // Nothing to do
  }
}
