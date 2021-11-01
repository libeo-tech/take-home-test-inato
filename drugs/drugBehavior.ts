interface DrugBehavior {
  updateBenefit(): void;
  updateExpirationDate(): void;
  expiresIn: number;
  benefit: number;
}

/**
 * Nothing happens, neither with the expiration date, nor with the benefit.
 */
class FixedDrugBehavior implements DrugBehavior {
  constructor(public expiresIn: number, public benefit: number, _: null) {}

  updateBenefit(): void {
    // empty
  }
  updateExpirationDate(): void {
    // empty
  }
}

abstract class BaseDrugBehavior implements DrugBehavior {
  protected expirationDateIncrement: number;
  protected benefitIncrement: number;

  constructor(
    public expiresIn: number,
    public benefit: number,
    options: { expirationDateIncrement: number; benefitIncrement: number }
  ) {
    this.expirationDateIncrement = options.expirationDateIncrement;
    this.benefitIncrement = options.benefitIncrement;
  }

  updateBenefit(): void {
    // empty
  }
  updateExpirationDate(): void {
    this.expiresIn += this.expirationDateIncrement;
  }
}

/**
 * The expiration date is updated with a fixed increment.
 *
 * The benefit :
 * - is updated with a first fixed increment.
 * - is updated with a different fixed increment after reaching the
 *   expiration date.
 */
class ThresholdDrugBehavior extends BaseDrugBehavior {
  protected benefitAfterThreshold: number;

  constructor(
    expiresIn: number,
    benefit: number,
    options: {
      expirationDateIncrement: number;
      benefitIncrement: number;
      benefitAfterThreshold: number;
    }
  ) {
    super(expiresIn, benefit, options);
    this.benefitAfterThreshold = options.benefitAfterThreshold;
  }

  updateBenefit(): void {
    if (this.expiresIn >= 0) {
      this.benefit += this.benefitIncrement;
    } else {
      this.benefit += this.benefitAfterThreshold;
    }
  }
}

type WithThreshold = {
  threshold: number;
};

/**
 * The expiration date is updated with a fixed increment.
 *
 * The benefit :
 * - is updated with a first fixed increment.
 * - is updated with a different fixed increments after reaching thresholds
 *   on the expiration date.
 * - is fixed to specific values after reaching thresholds on the expiration
 *   date.
 * - the benefit fixed values have priority over the benefit increment values.
 */
function sortBySmallestThresholdFirst(
  element1: WithThreshold,
  element2: WithThreshold
) {
  return element1.threshold > element2.threshold ? 1 : -1;
}

type BenefitValues = readonly {
  benefitAfterThreshold: number;
  threshold: number;
}[];
class MultiThresholdDrugBehavior extends BaseDrugBehavior {
  /**
   * The fixed increments associated to their thresholds.
   */
  protected thresholdBenefitIncrements: BenefitValues;
  /**
   * The fixed values associated to their thresholds.
   */
  protected thresholdBenefitValues: BenefitValues;

  constructor(
    public expiresIn: number,
    public benefit: number,
    options: {
      expirationDateIncrement: number;
      benefitIncrement: number;
      thresholdBenefitIncrements: BenefitValues;
      thresholdBenefitValues: BenefitValues;
    }
  ) {
    super(expiresIn, benefit, options);
    this.thresholdBenefitIncrements = options.thresholdBenefitIncrements
      .slice()
      .sort(sortBySmallestThresholdFirst);
    this.thresholdBenefitValues = options.thresholdBenefitValues
      .slice()
      .sort(sortBySmallestThresholdFirst);
  }

  updateBenefit(): void {
    for (const { threshold, benefitAfterThreshold } of this
      .thresholdBenefitValues) {
      if (this.expiresIn < threshold) {
        this.benefit = benefitAfterThreshold;
        return;
      }
    }
    for (const { threshold, benefitAfterThreshold } of this
      .thresholdBenefitIncrements) {
      if (this.expiresIn <= threshold) {
        this.benefit += benefitAfterThreshold;
        return;
      }
    }
    this.benefit += this.benefitIncrement;
  }
}

export type { DrugBehavior };
export { ThresholdDrugBehavior, FixedDrugBehavior, MultiThresholdDrugBehavior };
