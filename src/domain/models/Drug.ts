import { differenceInDays } from "date-fns";

export class Drug {
  protected readonly name: string;
  protected readonly originalExpiresIn: number; // number of days
  protected readonly originalBenefit: number; // how powerful the drug is
  protected readonly timeBenefitFactor: number;
  protected readonly timeBenefitFactorAfterExpiration: number;
  protected readonly createdAt: Date;

  constructor(params: {
    name: string;
    originalExpiresIn: number;
    originalBenefit: number;
    createdAt: Date;
  }, config?: {
    timeBenefitFactor?: number;
    timeBenefitFactorAfterExpiration?: number;
  }) {
    // throw to avoid invalid model. Guarantee Drug integrity.
    Drug.validate(params);

    this.name = params.name;
    this.originalExpiresIn = params.originalExpiresIn;
    this.originalBenefit = params.originalBenefit;
    this.createdAt = new Date(params.createdAt); // avoid mutability
    this.timeBenefitFactor = config?.timeBenefitFactor ?? -1;
    this.timeBenefitFactorAfterExpiration = config?.timeBenefitFactorAfterExpiration ?? -2;
  }

  getExpiresIn(): number {
    return this.originalExpiresIn;
  }

  getOriginalBenefit(): number {
    return this.originalBenefit;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getName(): string {
    return this.name;
  }

  getExpiresInAt(targetDate: Date): number {
    const expiresIn = this.originalExpiresIn - differenceInDays(targetDate, this.getCreatedAt());
    if (expiresIn < 0) {
      return 0;
    }

    return expiresIn;
  }

  getBenefitAt(targetDate: Date): number {
    if (targetDate < this.getCreatedAt()) {
      return this.originalBenefit; // not alterated in the past. May be discussable.
    }

    const {
      numberOfDaysAfterExpiration,
      numberOfDaysBeforeExpiration
    } = this.getBenefitAtCalculationParams(targetDate);

    const benefitAt = this.originalBenefit +
      (numberOfDaysBeforeExpiration * this.timeBenefitFactor) +
      numberOfDaysAfterExpiration * this.timeBenefitFactorAfterExpiration
    ;

    return this.benefitValueGuard(benefitAt);
  }

  protected getBenefitAtCalculationParams(targetDate: Date): {
    diffInDays: number;
    numberOfDaysAfterExpiration: number;
    numberOfDaysBeforeExpiration: number;
  } {
    const diffInDays = differenceInDays(targetDate, this.getCreatedAt());

    let numberOfDaysAfterExpiration = diffInDays - this.originalExpiresIn || 0;
    if (numberOfDaysAfterExpiration < 0) {
      numberOfDaysAfterExpiration = 0
    }

    const numberOfDaysBeforeExpiration = diffInDays - numberOfDaysAfterExpiration;

    return {
      diffInDays,
      numberOfDaysAfterExpiration,
      numberOfDaysBeforeExpiration
    }
  }

  protected benefitValueGuard (benefit: number): number {
    if (benefit < 0) {
      return 0;
    }

    return benefit > 50 ? 50 : benefit;
  }

  // todo ensure the rest of Model is fully compliant to its business definition
  private static validate(params: {
    name: string;
    originalExpiresIn: number;
    originalBenefit: number;
    createdAt: Date;
  }): void {
    if (Number.isNaN(params.originalExpiresIn)) {
      throw new Error(`originalExpiresIn "${params.originalExpiresIn}" is not a valid number`);
    }

    if (Number(params.originalExpiresIn) <= 0) {
      throw new Error('Expiration cannot be equal / under 0.');
    }

    if (Number.isNaN(params.originalBenefit)) {
      throw new Error(`originalBenefit "${params.originalBenefit}" is not a valid number`);
    }

    if (!(params.createdAt instanceof Date)) {
      throw new Error(`createdAt "${params.createdAt}" must be a Date`);
    }
  }
}

export class Fervex extends Drug {
  constructor(params: {
    originalExpiresIn: number;
    originalBenefit: number;
    createdAt: Date;
  }) {
    super({
      name: 'Fervex',
      originalExpiresIn: params.originalExpiresIn,
      originalBenefit: params.originalBenefit,
      createdAt: params.createdAt,
    }, { timeBenefitFactor: 1 });
  }

  /**
   * override Drug for specific behavior
   * @param targetDate
   */
  getBenefitAt(targetDate: Date): number {
    if (targetDate < this.getCreatedAt()) {
      return this.originalBenefit; // not alterated in the past. May be discussable.
    }

    const { diffInDays } = this.getBenefitAtCalculationParams(targetDate);

    const diffBeforeExpiration = this.getExpiresIn() - diffInDays;

    if (diffInDays > this.getExpiresIn()) {
      return 0;
    }

    if (diffBeforeExpiration > 10) {
      return super.getBenefitAt(targetDate);
    }

    if (this.originalExpiresIn <= 5) {
      return this.benefitValueGuard(this.originalBenefit + diffInDays * 3);
    }

    const lastThreshold = this.originalExpiresIn - 5;
    let numberOfDaysLastThreshold = diffInDays - lastThreshold;
    if (numberOfDaysLastThreshold <= 0) {
      numberOfDaysLastThreshold = 0;
    }

    const secondThreshold = this.originalExpiresIn - 10;
    let numberOfDaysSecondThreshold = diffInDays - secondThreshold - numberOfDaysLastThreshold;
    if (numberOfDaysSecondThreshold <= 0) {
      numberOfDaysSecondThreshold = 0;
    }

    const numberOfDaysFirstThreshold = diffInDays - numberOfDaysSecondThreshold - numberOfDaysLastThreshold;

    const benefit = this.originalBenefit +
      (numberOfDaysLastThreshold * 3) +
      numberOfDaysSecondThreshold * 2 +
      numberOfDaysFirstThreshold
    ;

    return this.benefitValueGuard(benefit);
  }
}
