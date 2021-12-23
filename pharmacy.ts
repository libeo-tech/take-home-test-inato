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
    this.expiresIn = this.expiresIn - 1;
  }
}
export class Pharmacy {
  constructor(public drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
