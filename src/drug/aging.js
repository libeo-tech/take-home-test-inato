import { Drug } from "./base";

export class AgingDrug extends Drug {
  /**
   * Aging drugs get better with age
   */

  get _benefitVariation() {
    return -super._benefitVariation;
  }
}
