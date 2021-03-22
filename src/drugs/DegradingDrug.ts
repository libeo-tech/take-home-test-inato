import { Drug } from "../Drug";

export class DegradingDrug implements Drug {
  private static MIN_BENEFIT = 0;

  constructor(
    public name: string,
    public expiresIn: number,
    public benefit: number
  ) {}

  public updateBenefitValue(): void {
    this.benefit = Math.max(
      DegradingDrug.MIN_BENEFIT,
      this.benefit + this.getBenefitChange()
    );

    this.expiresIn--;
  }

  protected getBenefitChange(): number {
    return this.expiresIn > 0 ? -1 : -2;
  }
}
