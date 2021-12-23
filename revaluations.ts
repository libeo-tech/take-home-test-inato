import { Revaluation, RevaluationData } from "./pharmacy";

export class Linear implements Revaluation {
  calculate({ currentBenefit }: RevaluationData): number {
    return currentBenefit - 1;
  }
}

export class Double implements Revaluation {
  calculate({
    currentBenefit,
    beforeRevaluationBenefit
  }: RevaluationData): number {
    if (beforeRevaluationBenefit === currentBenefit) {
      return currentBenefit;
    }

    return currentBenefit - (beforeRevaluationBenefit - currentBenefit);
  }
}

export class DoubleAfterExpires implements Revaluation {
  calculate({
    currentBenefit,
    beforeRevaluationBenefit,
    expiresIn
  }: RevaluationData): number {
    if (expiresIn <= 0) {
      return currentBenefit - (beforeRevaluationBenefit - currentBenefit);
    }

    return currentBenefit;
  }
}

export class ChangeAcrossExpires implements Revaluation {
  calculate({ currentBenefit, expiresIn }: RevaluationData): number {
    let nextBenefits = currentBenefit;
    if (expiresIn < 11) {
      nextBenefits = nextBenefits - 1;
    }
    if (expiresIn < 6) {
      nextBenefits = nextBenefits - 1;
    }

    return nextBenefits;
  }
}

export class ZeroAfterExpires implements Revaluation {
  calculate({ currentBenefit, expiresIn }: RevaluationData): number {
    if (expiresIn < 1) {
      return 0;
    }

    return currentBenefit;
  }
}

export class Reverse implements Revaluation {
  calculate({
    currentBenefit,
    beforeRevaluationBenefit
  }: RevaluationData): number {
    return (
      beforeRevaluationBenefit + (beforeRevaluationBenefit - currentBenefit)
    );
  }
}
