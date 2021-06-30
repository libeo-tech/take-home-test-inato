import { Drug } from "./drug";

export class Dafalgan extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Dafalgan", expiresIn, benefit);
  }

  calculateBenefit(): void {
    super.calculateBenefit();
    super.calculateBenefit();
  }
}
