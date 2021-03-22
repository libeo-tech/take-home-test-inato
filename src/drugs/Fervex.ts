import { Drug } from "../Drug";

export class Fervex implements Drug {
  private static MAX_BENEFIT = 50;

  constructor(public expiresIn: number, public benefit: number) {}

  public get name(): string {
    return "Fervex";
  }

  public updateBenefitValue(): void {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
    }

    this.benefit = Math.min(
      Fervex.MAX_BENEFIT,
      this.benefit + this.getBenefitChange()
    );
    this.expiresIn--;
  }

  private getBenefitChange() {
    if (this.expiresIn > 10) {
      return 1;
    }

    if (10 >= this.expiresIn && this.expiresIn > 5) {
      return 2;
    }

    if (5 >= this.expiresIn && this.expiresIn > 0) {
      return 3;
    }

    return 0;
  }
}
