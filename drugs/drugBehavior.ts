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
    // to be overrided by children
  }
  updateExpirationDate(): void {
    this.expiresIn += this.expirationDateIncrement;
  }
}

/**
 * The expiration date is updated with an increment.
 *
 * The benefit :
 * - is updated with a first increment until expiration.
 * - is updated with a different increment after reaching the
 *   expiration date.
 */
class ExpirationDrugBehavior extends BaseDrugBehavior {
  protected benefitAfterExpiration: number;

  constructor(
    expiresIn: number,
    benefit: number,
    options: {
      expirationDateIncrement: number;
      benefitIncrement: number;
      benefitAfterExpiration: number;
    }
  ) {
    super(expiresIn, benefit, options);
    this.benefitAfterExpiration = options.benefitAfterExpiration;
  }

  updateBenefit(): void {
    if (this.expiresIn >= 0) {
      this.benefit += this.benefitIncrement;
    } else {
      this.benefit += this.benefitAfterExpiration;
    }
  }
}

type BenefitValues = readonly {
  benefitAfterThreshold: number;
  threshold: number;
}[];

/**
 * The expiration date is updated with an increment.
 *
 * The benefit :
 * - is updated with a first increment until the first threshold.
 * - is updated with a different increments after reaching thresholds
 *   on the expiration date.
 * - is fixed to specific values after reaching thresholds on the expiration
 *   date.
 * The benefit fixed values have priority over the benefit increments.
 */
class MultiThresholdDrugBehavior extends BaseDrugBehavior {
  /**
   * The increments associated to their thresholds.
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

type WithThreshold = {
  threshold: number;
  [otherAttrs: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

function sortBySmallestThresholdFirst(
  element1: WithThreshold,
  element2: WithThreshold
) {
  return element1.threshold > element2.threshold ? 1 : -1;
}

export type { DrugBehavior };
export {
  ExpirationDrugBehavior,
  FixedDrugBehavior,
  MultiThresholdDrugBehavior,
};
