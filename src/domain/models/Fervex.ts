import { Drug } from './Drug';

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

    const numberOfDaysFirstThreshold = diffInDays
      - numberOfDaysSecondThreshold
      - numberOfDaysLastThreshold;

    const benefit = this.originalBenefit
      + (numberOfDaysLastThreshold * 3)
      + numberOfDaysSecondThreshold * 2
      + numberOfDaysFirstThreshold;
    return this.benefitValueGuard(benefit);
  }
}
