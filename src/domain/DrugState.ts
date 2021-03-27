export class DrugState {
  private static readonly MAX_BENEFIT = 50;
  private static readonly MIN_BENEFIT = 0;

  constructor(
    private expiresIn: number,
    private benefit: number,
    private readonly expires = true
  ) {}

  public getExpiresIn(): number {
    return this.expiresIn;
  }

  public getBenefit(): number {
    return this.benefit;
  }

  public applyDayBenefitChange(change: number): void {
    this.benefit = DrugState.ensureMinMaxBenefit(this.benefit + change);
    if (this.expires === true) {
      this.expiresIn--;
    }
  }

  private static ensureMinMaxBenefit(benefit: number) {
    if (benefit > DrugState.MAX_BENEFIT) {
      return DrugState.MAX_BENEFIT;
    }

    if (benefit < DrugState.MIN_BENEFIT) {
      return DrugState.MIN_BENEFIT;
    }

    return benefit;
  }
}
