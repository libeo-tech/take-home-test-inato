/**
 * @typedef {object} BenefitStageSpeed
 * @property {number} days The number of days from which to apply the benefit speed
 * @property {number} speed The speed at which the benefit increases
 */

/**
 * @typedef {object} DrugBehaviorOptions
 * @property {number} expirationSpeed
 * @property {number} benefitDefaultSpeed
 * @property {BenefitStageSpeed[]} benefitStageSpeeds
 * @property {boolean} dropBenefitAfterExpiration
 */

/**
 * An object describing the drug behavior
 */
export class DrugBehavior {
  /**
   *
   * @param {DrugBehaviorOptions} options
   */
  constructor({
    expirationSpeed,
    benefitDefaultSpeed,
    benefitStageSpeeds,
    dropBenefitAfterExpiration
  }) {
    this.expirationSpeed = expirationSpeed;
    this.benefitDefaultSpeed = benefitDefaultSpeed;
    this.benefitStageSpeeds = benefitStageSpeeds.sort(
      (a, b) => a.days - b.days
    );
    this.dropBenefitAfterExpiration = dropBenefitAfterExpiration;
  }
}
