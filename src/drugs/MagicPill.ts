import { Drug } from "../Drug";

export class MagicPill implements Drug {
  constructor(public expiresIn: number, public benefit: number) {}

  public get name(): string {
    return "Magic Pill";
  }

  public updateBenefitValue(): void {
    this.expiresIn--;
  }
}
