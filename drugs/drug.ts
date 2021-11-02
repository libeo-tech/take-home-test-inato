import type { DrugBehavior } from "./drugBehavior";
import { getDrugConfig } from "./drugConfig";

const MIN_BENEFIT = 0;
const MAX_BENEFIT = 50;

class Drug {
  private drugBehavior: DrugBehavior;

  constructor(public name: string, expiresIn: number, benefit: number) {
    const config = getDrugConfig(name);
    this.drugBehavior = new config.behavior(expiresIn, benefit, config.options);
  }

  update(): void {
    this.drugBehavior.updateExpirationDate();
    this.drugBehavior.updateBenefit();
    if (this.drugBehavior.benefit < MIN_BENEFIT) {
      this.drugBehavior.benefit = MIN_BENEFIT;
    }
    if (this.drugBehavior.benefit > MAX_BENEFIT) {
      this.drugBehavior.benefit = MAX_BENEFIT;
    }
  }

  get expiresIn() {
    return this.drugBehavior.expiresIn;
  }

  get benefit() {
    return this.drugBehavior.benefit;
  }

  toJSON(): Record<string, string | number> {
    return {
      name: this.name,
      expiresIn: this.drugBehavior.expiresIn,
      benefit: this.drugBehavior.benefit,
    };
  }
}

export { Drug, MIN_BENEFIT, MAX_BENEFIT };
