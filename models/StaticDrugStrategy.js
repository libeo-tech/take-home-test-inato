import AbstractDrugStrategy from "./AbstractDrugStrategy";

/**
 * Static drug strategy.
 * Any drug using this strategy will never update its benefit nor expiry date value.
 * @class
 * @extends AbstractDrugStrategy
 */
export default class StaticDrugStrategy extends AbstractDrugStrategy {
  /**
   * @method
   */
  updateBenefit() {}
  /**
   * @method
   */
  updateExpiryDate() {}
}
