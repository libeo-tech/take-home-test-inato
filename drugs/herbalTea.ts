import { Drug } from "./drug";

export class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super("Herbal Tea", expiresIn, benefit);
  }
  calculateBenefit(): { name: string; expiresIn: number; benefit: number } {
    let subOrAdd = 1;
    if (this.expiresIn < 0) {
      subOrAdd = 2;
    }
    this.benefit += subOrAdd;
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit,
    };
  }
}
