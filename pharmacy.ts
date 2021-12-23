export interface RevaluationData {
  expiresIn: number;
  currentBenefit: number;
  beforeRevaluationBenefit: number;
}

export interface Revaluation {
  calculate(_: RevaluationData): number;
}

interface DrugData {
  readonly name: string;
  expiresIn: number;
  benefit: number;
}

// The Benefit of an item is never negative.
// The Benefit of an item is never more than 50.
export class Limits implements Revaluation {
  calculate({ currentBenefit }: RevaluationData): number {
    if (currentBenefit <= 0) {
      return 0;
    }

    if (currentBenefit >= 50) {
      return 50;
    }

    return currentBenefit;
  }
}

export class Drug implements DrugData {
  private revaluations: Revaluation[] = [];

  constructor(
    public readonly name: string,
    public expiresIn: number,
    public benefit: number,
    revaluations: Revaluation[] = []
  ) {
    for (const revaluation of revaluations) {
      this.revaluations.push(revaluation);
    }

    this.revaluations.push(new Limits());
  }

  public toJSON = (): DrugData => ({
    name: this.name,
    expiresIn: this.expiresIn,
    benefit: this.benefit
  });

  public toObject = (): DrugData => ({
    name: this.name,
    expiresIn: this.expiresIn,
    benefit: this.benefit
  });

  public benefitRevaluate(): void {
    this._benefitRevaluate();
    this.updateExpires();
  }

  protected _benefitRevaluate(): void {
    const beforeRevaluationBenefit = this.benefit;
    this.benefit = this.revaluations.reduce<number>(
      (currentBenefit, revaluation): number =>
        revaluation.calculate({
          beforeRevaluationBenefit,
          currentBenefit,
          expiresIn: this.expiresIn
        }),
      this.benefit
    );
  }

  protected updateExpires(): void {
    if (this.name === "Magic Pill") {
      return;
    }
    
    this.expiresIn = this.expiresIn - 1;
  }
}
export class Pharmacy {
  constructor(private _drugs: Drug[] = []) {}

  public get drugs(): Drug[] {
    return [...this._drugs];
  }

  updateBenefitValue(): Drug[] {
    for (const drug of this._drugs) {
      drug.benefitRevaluate();
    }

    return [...this._drugs];
  }
}
