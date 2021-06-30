import { Drug } from "./drug";

export class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Magic Pill", expiresIn, benefit);
  }
  calculateBenefit(): void {
    // do nothing
  }

  subExpire(): void {
    // do nothing
  }
}
