import Drug from "./Drug";
import { MODEL_CONSTANTS } from "../constants";

/**
 * Type of drug.
 * This drug has a specific behaviour, and increases benefit as it expires.
 * @class
 * @extends Drug
 * @property {import("./AbstractDrugStrategy").AbstractDrugStrategy} strategy The DrugStrategy used by the drug
 */
export default class HerbalTea extends Drug {
  /**
   * Represents a drug.
   * Uses its parent constructor with custom parameter(s), and an extra strategy property.
   * @constructor
   * @param {number} expiresIn Number of days left until the drug is considered as expired
   * @param {number} benefit Benefit value of the drug
   * @param {import("./AbstractDrugStrategy").AbstractDrugStrategy} strategy The DrugStrategy used by the drug
   */
  constructor(expiresIn, benefit, strategy) {
    super(MODEL_CONSTANTS.DRUG.HERBAL_TEA, expiresIn, benefit);
    this.strategy = strategy;
  }

  /**
   * Update the drug's benefit value, using its given strategy.
   * @method
   */
  updateBenefit() {
    this.strategy.updateBenefit(this);
  }

  /**
   * Update the drug's expiry date, using its given strategy.
   * @method
   */
  updateExpiryDate() {
    this.strategy.updateExpiryDate(this);
  }
}
