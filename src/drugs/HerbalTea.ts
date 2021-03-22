import { Drug } from "../Drug";

export class HerbalTea implements Drug {
  private static MAX_BENEFIT = 50;

  constructor(public expiresIn: number, public benefit: number) {}

  public get name(): string {
    return "Herbal Tea";
  }

  public updateBenefitValue(): void {
    if (this.benefit === 0) {
      return;
    }

    this.benefit = Math.min(
      HerbalTea.MAX_BENEFIT,
      this.benefit + this.getBenefitChange()
    );

    this.expiresIn--;
  }

  private getBenefitChange() {
    return this.expiresIn > 0 ? 1 : 2;
  }
}
