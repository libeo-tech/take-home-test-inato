import { Drug } from "./drugs/drug";

/**
 * Contains all the available drugs.
 */
class Pharmacy {
  constructor(public drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  /**
   * Should be called once a day to update the drugs.
   * @returns the drugs.
   */
  updateBenefitValue(): Drug[] {
    for (let i = 0; i < this.drugs.length; i++) {
      this.drugs[i].update();
    }
    return this.drugs;
  }
}

export { Pharmacy, Drug };
